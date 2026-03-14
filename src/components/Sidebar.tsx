import {
  MdOutlineDashboard,
  MdNewspaper,
  MdCalendarMonth,
  MdOutlineAnalytics,
  MdSettings,
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const sideLinks = [
  { to: "/dashboard", label: "Dashboard", icon: <MdOutlineDashboard /> },
  { to: "/applications", label: "Applications", icon: <MdNewspaper /> },
  { to: "/interviews", label: "Interviews", icon: <MdCalendarMonth /> },
  { to: "/insights", label: "Insights", icon: <MdOutlineAnalytics /> },
  { to: "/settings", label: "Settings", icon: <MdSettings /> },
];

const userObj = {
  name: "John Smith",
  role: "Senior Software Developer",
};

function Sidebar() {
  const location = useLocation();
  const currentPage = location.pathname;
  return (
    <div className="w-64 border-r-2 border-gray-800 ">
      <div className="px-4">
        <div className="text-white flex flex-col ml-2 mt-4">
          <span className="text-lg">{userObj.name}</span>
          <span className="text-sm text-gray-400">{userObj.role}</span>
        </div>
        {sideLinks.map((link) => (
          <Link
            to={link.to}
            key={link.label}
            className={`mt-4 p-3 text-white text-lg font-bold flex items-center cursor-pointer ${currentPage == link.to ? "bg-primary rounded-xl" : "hover:scale-105"}`}
          >
            <span className="text-white mr-4">{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
