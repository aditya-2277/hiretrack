import ApplicationsTable from "../components/ApplicationsTable";
import AppPageHeader from "../components/AppPageHeader";

function Applications() {
  let noOfAppln = 4;
  return (
    <section className="p-4 ">
      <AppPageHeader
        title="Active Applications"
        desc={`You have ${noOfAppln} active job applications this month`}
      />
      <ApplicationsTable />
    </section>
  );
}

export default Applications;
