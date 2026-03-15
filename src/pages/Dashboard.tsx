import { MdDownload } from "react-icons/md";
import DashboardCards from "../components/DashboardCards";

function Dashboard() {
  return (
    <section className="flex-1 p-4">
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-2xl font-bold">Recruitment Dashboard</h1>
          <p className="text-md text-gray-400">
            Your career progress and interview pipeline at a glance
          </p>
        </div>
        <div className="flex items-end">
          <button
            type="button"
            className="bg-gray-800 h-10 shadow-sm shadow-gray-600/50 border-white rounded-xl p-2 mx-4 hover:bg-gray-900 flex items-center"
          >
            <span className="">
              <MdDownload />
            </span>
            <p className="mx-2">Export</p>
          </button>
          <button
            type="button"
            className="bg-primary h-10  rounded-xl p-2 shadow-md shadow-primary/50 hover:bg-blue-800 flex items-center"
          >
            <span className="">+</span>
            <p className="mx-2">New Application</p>
          </button>
        </div>
      </div>
      <DashboardCards />
    </section>
  );
}

export default Dashboard;
