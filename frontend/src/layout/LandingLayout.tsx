import { Outlet } from "react-router-dom";
import LandingNavbar from "../components/Landing/LandingNavbar";
import Footer from "../components/Landing/Footer";

function LandingLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <LandingNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default LandingLayout;
