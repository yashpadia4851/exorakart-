import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Service", path: "/services" },
  { label: "Contact us", path: "/contact" },
];

function HamburgerIcon({ open, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-6 w-6 shrink-0 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {open ? (
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {/* Centered X: diagonals meet at (12,12) */}
          <path d="M7 7l10 10" />
          <path d="M17 7L7 17" />
        </g>
      ) : (
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M5 7h14M5 12h14M5 17h14" />
        </g>
      )}
    </svg>
  );
}

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return undefined;
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const go = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    setMenuOpen(false);
    window.location.href = "/auth";
  };

  return (
    <>
      <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 sm:py-4 px-4 md:px-6 gap-3">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer border-0 bg-transparent p-0 min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded-md"
            aria-label="Exorakart home"
          >
            <img
              src={logo}
              alt="Exorakart"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[200px] sm:max-w-[280px] md:max-w-[380px] object-contain object-left"
            />
          </button>

          {/* Desktop: nav + logout */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 min-w-0">
            <nav
              aria-label="Primary"
              className="flex flex-wrap items-center justify-end gap-2 lg:gap-3 text-sm font-medium text-slate-700"
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

            <span className="hidden lg:block h-7 w-px shrink-0 bg-slate-200" aria-hidden />

            <button
              type="button"
              onClick={logout}
              className="shrink-0 px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold shadow-sm hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-colors cursor-pointer"
            >
              Log out
            </button>
          </div>

          {/* Mobile: hamburger */}
          <button
            type="button"
            className="md:hidden shrink-0 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-amber-50 hover:border-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors cursor-pointer"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-50 md:hidden flex flex-col bg-[#fffdf5] transition-[visibility,opacity] duration-200 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
        style={{ minHeight: "100dvh", height: "100dvh", width: "100vw" }}
      >
        {/* Top: logo + close hamburger */}
        <div className="shrink-0 flex items-center justify-between gap-3 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-3 border-b border-amber-100/90 bg-white/90 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => go("/")}
            className="flex items-center min-w-0 border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md"
            aria-label="Exorakart home"
          >
            <img
              src={logo}
              alt=""
              className="h-11 w-auto max-w-[220px] object-contain object-left"
            />
          </button>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <HamburgerIcon open />
          </button>
        </div>

        {/* Nav links */}
        <nav
          aria-label="Mobile primary"
          className="flex-1 flex flex-col justify-center px-5 py-6 gap-2 overflow-y-auto"
        >
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== "/" && location.pathname.startsWith(item.path));

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => go(item.path)}
                className={`w-full text-left px-5 py-4 rounded-2xl text-base font-semibold border transition-colors cursor-pointer ${
                  isActive
                    ? "bg-amber-50 text-amber-800 border-amber-300 shadow-sm"
                    : "bg-white text-slate-800 border-slate-200 hover:border-amber-300 hover:bg-amber-50/50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="shrink-0 px-5 pb-3">
          <button
            type="button"
            onClick={logout}
            className="w-full py-3.5 rounded-2xl bg-indigo-600 text-white text-base font-semibold shadow-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-colors cursor-pointer"
          >
            Log out
          </button>
        </div>

        {/* Bottom: hamburger (close) */}
        <div className="shrink-0 flex justify-center px-5 pt-2 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <HamburgerIcon open />
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
