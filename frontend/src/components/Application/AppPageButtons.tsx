import { MdDownload } from "react-icons/md";
import { useLocation } from "react-router-dom";

function AppPageButtons() {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div
      className={`items-end ${pathName == "/app/settings" ? "hidden" : "flex"}`}
    >
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
        className={`bg-primary h-10  rounded-xl p-2 shadow-md shadow-primary/50 hover:bg-blue-800 items-center ${pathName == "/app/insights" ? "hidden" : "flex"}`}
      >
        <span className="">+</span>
        <p className="mx-2">
          {pathName == "/app/interviews" ? "New Interview" : "New Application"}
        </p>
      </button>
    </div>
  );
}

export default AppPageButtons;
