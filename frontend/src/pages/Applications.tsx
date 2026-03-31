import ApplicationsTable from "../components/Application/ApplicationsTable";
import AppPageHeader from "../components/Application/AppPageHeader";
import { Ring2 } from "ldrs/react";
import "ldrs/react/Ring2.css";
import AddTestApplication from "../components/Application/AddTestApplication";
import { useJobApplications } from "../hooks/useJobApplications";

function Applications() {
  const {
    applications,
    isLoading,
    isSubmitting,
    deletingId,
    error,
    addApplication,
    removeApplication,
  } = useJobApplications();

  const noOfApplications = applications.length;

  return (
    <section className="p-4">
      <AppPageHeader
        title="Active Applications"
        desc={`You have ${noOfApplications} active job applications this month`}
      />

      {isLoading && (
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
      {!isLoading && !error && (
        <ApplicationsTable
          applications={applications}
          deletingId={deletingId}
          onDelete={removeApplication}
        />
      )}
    </section>
  );
}

export default Applications;
