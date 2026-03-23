import { useState, useEffect } from "react";
import ApplicationsTable from "../components/Application/ApplicationsTable";
import AppPageHeader from "../components/Application/AppPageHeader";
import type { JobApplication } from "../types/jobApplication";
import { Ring2 } from "ldrs/react";
import "ldrs/react/Ring2.css";
import AddTestApplication from "../components/Application/AddTestApplication";

function Applications() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchApplications = async () => {
    try {
      const response = await fetch(
        "https://localhost:7057/api/jobapplications",
      );

      if (!response.ok) {
        throw new Error("Failed to get");
      }

      const data: JobApplication[] = await response.json();
      setApplications(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchApplications();
    }, 100);
  }, []);

  let noOfAppln = applications.length;
  return (
    <section className="p-4">
      <AppPageHeader
        title="Active Applications"
        desc={`You have ${noOfAppln} active job applications this month`}
      />
      <AddTestApplication onSuccess={fetchApplications} />
      {loading && ( // Default values shown
        <div className="flex items-center justify-center mt-6">
          <Ring2
            size="40"
            stroke="5"
            strokeLength="0.25"
            bgOpacity="0.1"
            speed="0.8"
            color="#137fec"
          />
        </div>
      )}
      {error && <p className="mt-6 text-red">{error}</p>}
      {!loading && !error && (
        <ApplicationsTable
          applications={applications}
          onSuccess={fetchApplications}
        />
      )}
    </section>
  );
}

export default Applications;
