import { Link } from "react-router-dom";
import { type NavbarProps } from "../layout/Navbar";
import react from "../assets/react.svg";

function NavProfile({ variant }: NavbarProps) {
  return (
    <>
      <div
        className={`login-button ${variant == "app" ? "hidden" : "inline-block"}`}
      >
        <Link
          to={"/auth"}
          className={`${variant == "landing" ? "inline-block" : "hidden"} px-4 py-2 rounded-full bg-primary text-foreground mx-2 shadow-lg shadow-primary/30 transition-all hover:scale-105`}
        >
          Start Tracking!
        </Link>

        <Link
          to={"/"}
          className={`${variant == "landing" ? "hidden" : "inline-block"} px-4 py-2 rounded-full bg-primary text-foreground mx-2 shadow-lg shadow-primary/30 hover:bg-blue-500/60`}
        >
          Go Home
        </Link>
      </div>
      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
        <img src={react} className="w-6" />
      </div>
    </>
  );
}

export default NavProfile;
