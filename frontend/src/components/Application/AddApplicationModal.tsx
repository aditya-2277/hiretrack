import { useState } from "react";
import type { JobApplicationInput } from "../../types/jobApplication";

type Props = {
  onClose: () => void;
  onSubmit: (payload: JobApplicationInput) => Promise<void>;
  isSubmitting: boolean;
};

const initialForm: JobApplicationInput = {
  companyName: "",
  position: "",
  type: "",
  status: "",
  dateApplied: "",
};

function AddApplicationModal({ onClose, onSubmit, isSubmitting }: Props) {
  const [formData, setFormData] = useState<JobApplicationInput>(initialForm);
  const [error, setError] = useState("");

  const resetForm = () => {
    setFormData(initialForm);
    setError("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      await onSubmit(formData);
      resetForm();
      onClose();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to create application",
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-card p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Add New Application
            </h2>
            <p className="text-sm text-muted-foreground">
              Fill in the details below to save a job application.
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
          >
            Close
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <div>
            <label
              htmlFor="companyName"
              className="mb-2 block text-sm font-medium"
            >
              Company Name
            </label>
            <input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none"
              placeholder="Google"
              required
            />
          </div>

          <div>
            <label
              htmlFor="position"
              className="mb-2 block text-sm font-medium"
            >
              Position
            </label>
            <input
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none"
              placeholder="Software Engineer"
              required
            />
          </div>

          <div>
            <label htmlFor="type" className="mb-2 block text-sm font-medium">
              Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none"
              required
            >
              <option value="">Select type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          <div>
            <label htmlFor="status" className="mb-2 block text-sm font-medium">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none"
              required
            >
              <option value="">Select status</option>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="dateApplied"
              className="mb-2 block text-sm font-medium"
            >
              Date Applied
            </label>
            <input
              id="dateApplied"
              name="dateApplied"
              type="date"
              value={formData.dateApplied}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none"
              required
            />
          </div>

          {error && (
            <p className="md:col-span-2 text-sm text-red-400">{error}</p>
          )}

          <div className="md:col-span-2 flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="rounded-xl border border-white/10 px-4 py-3 hover:bg-white/5"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-xl bg-primary px-4 py-3 font-medium text-white hover:bg-blue-800 disabled:opacity-50"
            >
              {isSubmitting ? "Saving..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddApplicationModal;
