import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="text-xl font-bold tracking-tight hover:text-primary"
    >
      Hire
      <span className="text-xl text-pretty text-primary">Track</span>
    </Link>
  );
}

export default Logo;
