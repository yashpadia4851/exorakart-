import { useLocation, useNavigate } from "react-router-dom";

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
        {/* Left logo / icon */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white font-bold text-lg">
            E
          </div>
          <span className="hidden sm:inline text-sm font-semibold tracking-wide text-slate-800">
            Exorakart Business Solutions
          </span>
        </div>

        {/* Right nav links */}
        <nav className="flex items-center gap-3 md:gap-4 text-xs md:text-sm font-medium text-slate-700">
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
      </div>
    </header>
  );
}

export default Header;

