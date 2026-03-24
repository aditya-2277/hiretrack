import { type NavbarProps } from "../../types/props";
import { Link } from "react-router-dom";

function ActionButton({ variant }: NavbarProps) {
  return (
    <>
      <div className="hover:scale-105">
        <Link
          to={variant == "landing" ? "/auth" : "/"}
          className="px-4 py-2 rounded-full bg-primary text-foreground mx-2 shadow-lg shadow-primary/30 transition-all"
        >
          {variant == "landing" ? "Start Tracking" : "Go Home"}
        </Link>
      </div>
    </>
  );
}

export default ActionButton;
