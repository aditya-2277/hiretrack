import { Link } from "react-router-dom";
import { type NavbarProps } from "../layout/Navbar";

function Logo({ variant }: NavbarProps) {
  return (
    <Link
      to={variant == "app" ? "/app/dashboard" : "/"}
      className="text-xl font-bold tracking-tight hover:text-primary"
    >
      Hire
      <span className="text-xl text-pretty text-primary">Track</span>
    </Link>
  );
}

export default Logo;
