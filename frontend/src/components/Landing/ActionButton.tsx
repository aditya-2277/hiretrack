import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../constants/routes";

function ActionButton() {
  return (
    <div className="hover:scale-105">
      <Link
        to={PUBLIC_ROUTES.auth}
        className="mx-2 rounded-full bg-primary px-4 py-2 text-foreground shadow-lg shadow-primary/30 transition-all"
      >
        Start Tracking
      </Link>
    </div>
  );
}

export default ActionButton;
