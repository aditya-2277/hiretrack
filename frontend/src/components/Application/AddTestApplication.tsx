import { useState } from "react";
import type { JobApplicationInput } from "../../types/jobApplication";

type Props = {
  onSubmit: (payload: JobApplicationInput) => Promise<void>;
  isSubmitting: boolean;
};

const initialFormState: JobApplicationInput = {
  companyName: "",
  position: "",
  type: "",
  status: "",
  dateApplied: "",
};

function AddTestApplication({ onSubmit, isSubmitting }: Props) {
  const [formData, setFormData] = useState<JobApplicationInput>(initialFormState);
  const [formError, setFormError] = useState("");

  const updateField = <K extends keyof JobApplicationInput>(
    field: K,
    value: JobApplicationInput[K],
  ) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async () => {
    const hasEmptyField = Object.values(formData).some((value) => !value.trim());
    if (hasEmptyField) {
      setFormError("All fields are required");
      return;
    }

    setFormError("");

    try {
      await onSubmit(formData);
      setFormData(initialFormState);
    } catch {
      // Request failures are surfaced by the page-level hook.
    }
  };
  return (
    <div className="my-4">
      <h3 className="text-2xl">Test Application form</h3>
      {formError ? <p className="mt-2 text-sm text-red-400">{formError}</p> : null}
      <div className="flex">
        <input
          placeholder="Company"
          value={formData.companyName}
          onChange={(e) => updateField("companyName", e.target.value)}
          className="mx-2 border"
        ></input>
        <input
          placeholder="Position"
          value={formData.position}
          onChange={(e) => updateField("position", e.target.value)}
          className="mx-2 border"
        ></input>
        <label htmlFor="status">Status: </label>

        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={(e) => updateField("status", e.target.value)}
          className="mx-2 border"
        >
          <option value="">-Select status-</option>
          <option value="Applied">Applied</option>
          <option value="Rejected">Rejected</option>
          <option value="Offer">Offer</option>
          <option value="Interview">Interview</option>
        </select>
        <label htmlFor="type">Type: </label>

        <select
          name="type"
          id="type"
          value={formData.type}
          onChange={(e) => updateField("type", e.target.value)}
          className="mx-2 border"
        >
          <option value="">-Select type-</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Full-Time">Full-Time</option>
        </select>
        <input
          placeholder="yyyy-mm-dd"
          value={formData.dateApplied}
          onChange={(e) => updateField("dateApplied", e.target.value)}
          className="mx-2 border"
        ></input>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="border rounded-2xl border-amber-50 p-2 bg-surface mx-6"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default AddTestApplication;
