import { Outlet } from "react-router-dom";
import Navbar from "../components/Application/ApplicationNavbar";
import Sidebar from "../components/Application/Sidebar";
import { currentUser } from "../auth/session";
import { appNavigation } from "../constants/navigation";

function AppLayout() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background text-foreground">
      <Navbar user={currentUser} />
      <div className="flex flex-1 min-h-0">
        <Sidebar items={appNavigation} user={currentUser} />
        <main className="flex-1 min-h-0 overflow-y-auto no-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
