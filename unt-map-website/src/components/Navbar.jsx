import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/directions", label: "Directions" },
    { to: "/map", label: "Map" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-emerald-800 bg-emerald-700 text-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold tracking-tight">
          UNT Navigator
        </Link>

        <div className="flex flex-wrap items-center gap-5 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition hover:text-emerald-100 ${
                location.pathname === link.to ? "underline underline-offset-4" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}