import { marketingLinks } from "../../constants/navigation";

function NavbarLinks() {
  return (
    <div className="items-center">
      <div className="flex glass rounded-full gap-2 items-center">
        {marketingLinks.map((link) => (
          <a
            href={link.href}
            key={link.label}
            className="px-4 py-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavbarLinks;
