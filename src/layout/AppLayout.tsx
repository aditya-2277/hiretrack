import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "../components/Sidebar";
function AppLayout() {
  return (
    <div className="h-screen flex flex-col bg-background text-foreground">
      <Navbar variant="app" />
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
