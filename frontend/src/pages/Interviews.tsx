import AppPageHeader from "../components/Application/AppPageHeader";
import InterviewsTable from "../components/Application/InterviewsTable";

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
