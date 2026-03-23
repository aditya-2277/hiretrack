import { Outlet, useLocation } from "react-router-dom";
import { type NavbarProps } from "../types/props";
import Navbar from "../components/Landing/LandingNavbar";
import Footer from "../components/Landing/Footer";

function LandingLayout() {
  const location = useLocation();
  const pathname = location.pathname;
  let path: NavbarProps["variant"];
  if (pathname == "/") {
    path = "landing";
  } else {
    path = "auth";
  }
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar variant={path} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default LandingLayout;
