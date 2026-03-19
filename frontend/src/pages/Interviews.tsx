import AppPageHeader from "../components/AppPageHeader";
import InterviewsTable from "../components/InterviewsTable";

function Interviews() {
  return (
    <section className="p-4 ">
      <AppPageHeader
        title="Active Interviews"
        desc="List of all your upcoming interviews"
      />
      <InterviewsTable />
    </section>
  );
}

export default Interviews;
