import { Outlet } from "react-router-dom";
import AuthNavbar from "../components/Auth/AuthNavbar";

function AuthLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AuthNavbar />
      <main className="container mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
