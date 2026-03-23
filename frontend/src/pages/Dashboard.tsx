import DashboardCards from "../components/Application/DashboardCards";
import Chart from "../components/Application/Chart";
import AppDashTable from "../components/Application/AppDashTable";
import AppPageHeader from "../components/Application/AppPageHeader";

function Dashboard() {
  return (
    <section className="p-4">
      <AppPageHeader
        title="Recruitment Dashboard"
        desc="Your career progress and interview pipeline at a glance"
      />
      <DashboardCards />
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mx-4 py-4">
        <div className="xl:col-span-2">
          <Chart />
        </div>
        <div className="xl:col-span-2">
          <AppDashTable />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
