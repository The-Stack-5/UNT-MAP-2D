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
    <nav className="sticky top-0 z-50 border-b border-emerald-900/30 bg-emerald-800/85 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-4 sm:flex-row sm:px-6">
        <Link to="/" className="text-xl font-bold tracking-tight">
          UNT Navigator
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {links.map((link) => {
            const active = location.pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
                  active
                    ? "bg-white text-emerald-800 shadow-sm"
                    : "text-white/90 hover:bg-white/15 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}