import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Service", path: "/services" },
  { label: "Contact us", path: "/contact" },
];

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        {/* Logo — click goes home */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center cursor-pointer border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded-md"
          aria-label="Exorakart home"
        >
          <img
            src={logo}
            alt="Exorakart"
            className="h-12 sm:h-14 md:h-16 lg:h-17 w-auto max-w-[280px] sm:max-w-[320px] md:max-w-[380px] object-contain object-left"
          />
        </button>

        <div className="flex items-center gap-4 md:gap-6 min-w-0">
          <nav
            aria-label="Primary"
            className="flex flex-wrap items-center justify-end gap-2 md:gap-3 text-xs md:text-sm font-medium text-slate-700"
          >
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                (item.path !== "/" && location.pathname.startsWith(item.path));

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => navigate(item.path)}
                  className={`px-3 py-1.5 rounded-full border border-slate-200 transition-colors cursor-pointer ${
                    isActive
                      ? "bg-amber-50 text-amber-700 border-amber-400"
                      : "hover:border-amber-400 hover:text-amber-600"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <span
            className="hidden sm:block h-7 w-px shrink-0 bg-slate-200"
            aria-hidden
          />

          <button
            type="button"
            onClick={() => {
              localStorage.removeItem("isAuthenticated");
              window.location.href = "/auth";
            }}
            className="shrink-0 px-4 py-2 rounded-full bg-indigo-600 text-white text-xs md:text-sm font-semibold shadow-sm hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-colors cursor-pointer"
          >
            Log out
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

