import { useState } from "react";

type Props = {
  onSuccess: () => Promise<void>;
};

function AddTestApplication({ onSuccess }: Props) {
  const [companyName, setCompanyName] = useState("");
  const [position, setPostion] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [dateApplied, setDateApplied] = useState("");

  const data = {
    companyName,
    position,
    type,
    status,
    dateApplied,
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://localhost:7057/api/jobapplications",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to create application");
      }

      const result = await response.json();

      await onSuccess();
      setCompanyName("");
      setPostion("");
      setType("");
      setStatus("");
      setDateApplied("");
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="my-4">
      <h3 className="text-2xl">Test Application form</h3>
      <div className="flex">
        <input
          placeholder="Company"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="mx-2 border"
        ></input>
        <input
          placeholder="Position"
          value={position}
          onChange={(e) => setPostion(e.target.value)}
          className="mx-2 border"
        ></input>
        <label htmlFor="status">Status: </label>

        <select
          name="status"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
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
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mx-2 border"
        >
          <option value="">-Select type-</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Full-Time">Full-Time</option>
        </select>
        <input
          placeholder="yyyy-mm-dd"
          value={dateApplied}
          onChange={(e) => setDateApplied(e.target.value)}
          className="mx-2 border"
        ></input>
        <button
          onClick={handleSubmit}
          className="border rounded-2xl border-amber-50 p-2 bg-surface mx-6"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddTestApplication;
