import { Link } from "react-router-dom";
interface NavProps {
  isLandingPage: boolean;
}
function NavProfile({ isLandingPage }: NavProps) {
  return (
    <div className="login-button">
      <Link
        to={"/auth"}
        className={`${isLandingPage ? "inline-block" : "hidden"} px-4 py-2 rounded-full bg-primary text-foreground mx-2 shadow-lg shadow-primary/30 transition-all hover:scale-105`}
      >
        Start Tracking!
      </Link>

      <Link
        to={"/"}
        className={`${isLandingPage ? "hidden" : "inline-block"} px-4 py-2 rounded-full bg-primary text-foreground mx-2 shadow-lg shadow-primary/30 hover:bg-blue-500/60`}
      >
        Go Home
      </Link>
    </div>
  );
}

export default NavProfile;
