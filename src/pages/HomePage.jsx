import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header.jsx";
import listImage from "../assets/listImage.jpeg";
// Hero image (top section)
// Brands / services section image (bottom section)
// import brandsImage from "../../assets/c__Users_yashp_AppData_Roaming_Cursor_User_workspaceStorage_b489b3c3cd0439162e0d795c5a0dd829_images_Screenshot_2026-03-16_231046-168ccf87-aba2-4ee3-bdd9-e3a444885562.png";

const brands = [
  {
    title: "Lenskart",
    body: "End‑to‑end catalog and campaign management to keep your eyewear collection always in front of the right audience.",
  },
  {
    title: "Renée",
    body: "Premium beauty brand support with listing optimization, ad strategy, and review management for higher conversions.",
  },
  {
    title: "Skin Elements",
    body: "Full‑funnel account management focused on brand consistency, pricing control, and data‑driven growth.",
  },
  {
    title: "Pee Safe",
    body: "Scale your hygiene brand with content upgrades, offer management, and performance marketing on marketplaces.",
  },
  {
    title: "Ustraa",
    body: "Men’s grooming specialists benefit from our always‑on merchandising strategy and inventory planning.",
  },
];

const faqs = [
  {
    question: "What documents are required for Flipkart seller registration?",
    answer:
      "Typically you need GST details, PAN, bank account, brand authorisation (if applicable), and basic business KYC documents. We guide you through every step of the process.",
  },
  {
    question: "Are there any fees related to selling on Flipkart?",
    answer:
      "Flipkart charges commissions, shipping fees, and other marketplace charges depending on category and fulfilment model. We help you understand and optimise these costs.",
  },
  {
    question: "Can I manage several platforms with a single service?",
    answer:
      "Yes. Along with Flipkart, we can help you coordinate catalog, inventory, and campaigns across multiple marketplaces with a unified strategy.",
  },
  {
    question: "Do you work with international markets?",
    answer:
      "We primarily focus on Indian marketplaces but can advise on cross‑border opportunities and expansion planning where relevant.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most brands begin to see clearer performance and operational improvements within the first few weeks, with stronger growth compounding over 3–6 months.",
  },
];

function HomePage() {
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveBrandIndex((prev) => (prev + 1) % brands.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const activeBrand = brands[activeBrandIndex];
  const nextBrand = brands[(activeBrandIndex + 1) % brands.length];

  return (
    <div className="min-h-screen bg-[#fffdf5] flex flex-col">
      <Header />

      {/* Hero section */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Left text with animation */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
              Flipkart Account Management Services
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Flipkart Account
              <br />
              Management Services
            </h1>
            <p className="text-sm md:text-base text-slate-600 max-w-md">
              Our Flipkart account management services include expert product
              listing optimization, inventory management, ad campaigns, product
              SEO, and much more to help your business grow on marketplace
              platforms.
            </p>
            <button className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition-colors cursor-pointer">
              Book now
            </button>
          </motion.div>

          {/* Right image with animation */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-4 bg-amber-100 rounded-3xl blur-2xl opacity-60" />
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white">
                <img
                  src={listImage}
                  alt="Flipkart Seller Hub — All Listings dashboard"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brands / services carousel section */}
        <section className="bg-white py-12 md:py-16 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900 mb-8">
              We Provide Services For These Leading Brands
            </h2>

            <div className="grid md:grid-cols-[1.2fr,0.9fr] gap-8 items-stretch">
              {/* Left: sliding cards */}
              <div className="space-y-4">
                <motion.div
                  key={activeBrand.title}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 shadow-sm"
                >
                  <p className="text-xs font-semibold tracking-[0.16em] uppercase text-slate-500 mb-1">
                    Featured brand
                  </p>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {activeBrand.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {activeBrand.body}
                  </p>
                </motion.div>

                <div className="flex gap-3 overflow-x-auto pb-1">
                  {brands.map((brand, index) => (
                    <button
                      key={brand.title}
                      type="button"
                      onClick={() => setActiveBrandIndex(index)}
                      className={`min-w-30 flex-1 rounded-xl border px-4 py-3 text-xs font-medium text-slate-700 cursor-pointer transition-all ${
                        index === activeBrandIndex
                          ? "border-amber-400 bg-amber-50 shadow-sm"
                          : "border-slate-200 hover:border-amber-300 hover:bg-amber-50/60"
                      }`}
                    >
                      {brand.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: upcoming / secondary brand text */}
              <motion.div
                key={nextBrand.title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="rounded-2xl border border-slate-200 bg-[#fffdf5] px-6 py-5 shadow-sm"
              >
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-amber-500 mb-1">
                  Next up
                </p>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {nextBrand.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {nextBrand.body}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detailed image + text section */}
        <section className="bg-[#fffdf5] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
            {/* Image on left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-1 md:order-0"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white transition-transform transition-shadow duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
                <img
                  src="https://arvian.in/flipkart-account/banner02.png"
                  alt="Services for leading brands"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text on right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-4"
            >
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Struggling with the complexities of managing a seller account on
                marketplaces like Flipkart? Our dedicated team helps you
                navigate competition, policies, and fast‑moving trends so you
                can focus on your core business.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <span className="font-semibold">
                  Exorakart Business Solutions
                </span>{" "}
                offers complete account management including product listing
                optimization, advertising campaigns, pricing strategy, order
                processing, and customer service.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Whether you are an emerging brand or an established name, we
                structure your storefront and campaigns to deliver consistent,
                measurable growth across marketplaces.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Flipkart account management services grid */}
        <section className="bg-[#fff7d9] py-12 md:py-16 border-t border-amber-100">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-3xl mx-auto text-center mb-10"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                What Are Flipkart Account Management Services?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Flipkart account management service is a professional solution
                that helps sellers handle day‑to‑day operations on the
                marketplace. From listings and ads to order flow and support, a
                dedicated team keeps your store optimised and ready for growth.
              </p>
            </motion.div>

            <div className="grid gap-4 md:gap-5 md:grid-cols-3">
              {[
                "Product listing optimisation",
                "Performance monitoring",
                "Customer support",
                "Inventory management",
                "Account health",
                "Order management",
                "Advertising campaigns",
                "Competitor analysis",
                "Compliance and policy management",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.05 * (index % 3),
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 18px 35px rgba(15, 23, 42, 0.12)",
                  }}
                  className="rounded-2xl bg-white border border-amber-50 px-4 py-4 md:px-5 md:py-5 flex items-center text-sm md:text-base font-medium text-slate-800 cursor-pointer shadow-sm"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-50 text-xs font-semibold text-indigo-600 mr-3">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose section */}
        <section className="bg-white py-12 md:py-16 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-8"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Why Choose Exorakart for Flipkart Account Management?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-3xl mx-auto">
                Exorakart Business Solutions is a trusted partner for brands
                that want to grow their presence on Flipkart. We combine
                experience, processes, and local insight to deliver reliable
                marketplace growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-3xl border border-dashed border-indigo-300 bg-indigo-50/40 px-6 py-6 md:px-10 md:py-8"
            >
              <ul className="space-y-3 text-sm md:text-base text-slate-800 text-left">
                <li>
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="font-semibold">
                    Expertise and experience:
                  </span>{" "}
                  A team of seasoned professionals dedicated to delivering on
                  time and to your expectations.
                </li>
                <li>
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="font-semibold">
                    Comprehensive services:
                  </span>{" "}
                  One‑stop solutions covering listings, ads, creatives, and
                  customer operations so you can focus on your core business.
                </li>
                <li>
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="font-semibold">
                    Proven track record:
                  </span>{" "}
                  Years of execution with brands across categories, delivering
                  consistent marketplace performance.
                </li>
                <li>
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="font-semibold">Local expertise:</span> Deep
                  understanding of regional market nuances to tailor the right
                  e‑commerce management strategy for you.
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* FAQ accordion */}
        <section className="bg-[#f5f7ff] py-12 md:py-16 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-8"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-3xl bg-white shadow-sm border border-slate-200 overflow-hidden"
            >
              {faqs.map((item, index) => (
                <FAQItem
                  key={item.question}
                  item={item}
                  isOpen={openFaqIndex === index}
                  onToggle={() =>
                    setOpenFaqIndex((current) =>
                      current === index ? null : index
                    )
                  }
                />
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-slate-950 text-slate-400 border-t border-slate-800/80">
        <div className="h-1 bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 opacity-90" aria-hidden />
        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-10 pb-8 md:pt-12 md:pb-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Brand */}
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

            {/* Quick links */}
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

            {/* Legal */}
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
    </div>
  );
}

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`group w-full flex items-center justify-between gap-4 px-4 md:px-6 py-3.5 md:py-4 text-left text-sm md:text-base font-medium text-slate-900 transition-colors duration-200 cursor-pointer ${
          isOpen
            ? "bg-amber-50/90 text-slate-900"
            : "bg-white hover:bg-amber-50/50"
        }`}
      >
        <span className="pr-2">{item.question}</span>
        <motion.span
          className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full ${
            isOpen
              ? "bg-indigo-600 text-white"
              : "bg-slate-100 text-indigo-600 group-hover:bg-indigo-100"
          }`}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          aria-hidden
        >
          <motion.svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          >
            <path d="M6 9l6 6 6-6" />
          </motion.svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.32, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.22 },
            }}
            className="overflow-hidden"
          >
            <motion.div
              className="px-4 md:px-6 pb-4 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed bg-[#fffdf5] border-t border-amber-100/90"
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25, ease: "easeOut", delay: 0.05 }}
            >
              {item.answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HomePage;
