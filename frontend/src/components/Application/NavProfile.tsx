import type { AppUser } from "../../auth/session";

type NavProfileProps = {
  user: AppUser;
};

function NavProfile({ user }: NavProfileProps) {
  const initials = user.name
    .split(" ")
    .map((segment) => segment[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center gap-3">
      <div className="text-right">
        <p className="text-sm font-medium text-foreground">{user.name}</p>
        <p className="text-xs text-muted-foreground">{user.role}</p>
      </div>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
        {initials}
      </div>
    </div>
  );
}

export default NavProfile;
