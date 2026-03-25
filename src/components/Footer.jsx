import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-auto bg-slate-950 text-slate-400 border-t border-slate-800/80">
      <div
        className="h-1 bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 opacity-90"
        aria-hidden
      />
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-10 pb-8 md:pt-12 md:pb-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-900/20 ring-2 ring-white/10">
                E
              </div>
              <div className="text-left">
                <span className="block text-sm font-semibold tracking-wide text-slate-100 group-hover:text-amber-200 transition-colors">
                  Exorakart Business Solutions
                </span>
                <span className="text-xs text-slate-500">
                  Flipkart & marketplace growth partners
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 max-w-md">
              Helping brands grow on Flipkart and other marketplaces with structured,
              data‑driven account management, listings, and campaigns.
            </p>
          </div>

          <div className="lg:col-span-3 sm:pl-4 lg:pl-0">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About us" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-amber-500/80 text-[10px]">▸</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 sm:pl-4 lg:pl-0">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
            <p className="mt-6 text-xs text-slate-600 leading-relaxed max-w-xs">
              Business enquiries welcome. Response times are typically within one
              business day during working hours.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <span>
            © {new Date().getFullYear()} Exorakart Business Solutions. All rights
            reserved.
          </span>
          <span className="text-slate-600">
            Built for Indian marketplaces · GST-compliant invoicing on request
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
