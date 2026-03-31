import { Outlet } from "react-router-dom";
import Navbar from "../components/Application/ApplicationNavbar";
import Sidebar from "../components/Application/Sidebar";
import { getGuestUser, useAuth } from "../auth/session";
import { appNavigation } from "../constants/navigation";

function AppLayout() {
  const { currentUser } = useAuth();
  const user = currentUser ?? getGuestUser();

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background text-foreground">
      <Navbar user={user} />
      <div className="flex flex-1 min-h-0">
        <Sidebar items={appNavigation} user={user} />
        <main className="flex-1 min-h-0 overflow-y-auto no-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
