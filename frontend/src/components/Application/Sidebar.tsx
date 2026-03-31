import type { IconType } from "react-icons";
import { NavLink } from "react-router-dom";
import type { AppUser } from "../../auth/session";

type SidebarItem = {
  to: string;
  label: string;
  icon: IconType;
  end?: boolean;
};

type SidebarProps = {
  user: AppUser;
  items: readonly SidebarItem[];
};

function Sidebar({ user, items }: SidebarProps) {
  return (
    <aside className="w-64 border-r-2 border-gray-800 sticky top-16 self-start h-[calc(100vh-4rem)] overflow-hidden">
      <div className="px-4">
        <div className="text-white flex flex-col ml-2 mt-4">
          <span className="text-lg">{user.name}</span>
          <span className="text-sm text-gray-400">{user.role}</span>
        </div>
        {items.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            end={end}
            to={to}
            key={label}
            className={({ isActive }) =>
              `mt-4 flex items-center p-3 text-lg font-bold text-white transition-transform ${
                isActive ? "rounded-xl bg-primary" : "hover:scale-105"
              }`
            }
          >
            <span className="text-white mr-4">
              <Icon />
            </span>
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
