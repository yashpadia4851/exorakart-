import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

/** Raster images in `src/assets` (png/jpg/webp only) become slides; captions cycle. */
const SERVICE_SHOWCASE_CAPTIONS = [
  {
    title: "Catalog & listing optimisation",
    description:
      "Polished listings, compliant content, and structured catalog updates that keep your Flipkart storefront competitive.",
  },
  {
    title: "Campaigns & visibility",
    description:
      "Planned ad spend, creative refreshes, and performance reviews so your brand stays visible to the right buyers.",
  },
  {
    title: "Account health & operations",
    description:
      "Day‑to‑day monitoring of metrics, inventory signals, and marketplace policies—so issues are caught early.",
  },
  {
    title: "Growth on your terms",
    description:
      "Monthly packages and add‑ons that scale with you—from essentials to full account management.",
  },
];

const showcaseAssetUrls = Object.values(
  import.meta.glob("../assets/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  }),
);

const serviceShowcaseSlides = showcaseAssetUrls.map((src, i) => {
  const c = SERVICE_SHOWCASE_CAPTIONS[i % SERVICE_SHOWCASE_CAPTIONS.length];
  return { src, title: c.title, description: c.description };
});

const SHOWCASE_INTERVAL_MS = 4500;

const monthlyPlans = [
  {
    name: "Basic Plan",
    oldPrice: "₹5,999",
    newPrice: "₹3,999",
    features: [
      "Account setup support",
      "Basic catalog upload",
      "Monthly reporting",
    ],
  },
  {
    name: "Advanced Plan",
    oldPrice: "₹9,999",
    newPrice: "₹7,999",
    highlighted: true,
    features: [
      "Dedicated account manager",
      "Catalog & content optimisation",
      "Ad campaign management",
      "Weekly performance review",
    ],
  },
  {
    name: "Premium Plan",
    oldPrice: "₹17,999",
    newPrice: "₹14,999",
    features: [
      "End‑to‑end account management",
      "Advanced reporting & strategy",
      "Inventory & pricing planning",
    ],
  },
];

const addOnPlans = [
  { name: "Campaign setup", oldPrice: "₹399", newPrice: "₹199" },
  { name: "Store makeover", oldPrice: "₹4,000", newPrice: "₹2000" },
];

const alaCartePlans = [
  { name: "Single listing optimisation", oldPrice: "₹199", newPrice: "₹99" },
  { name: "Catalogue audit", oldPrice: "₹3,999", newPrice: "₹1,999" },
  { name: "Price benchmarking", oldPrice: "₹79", newPrice: "₹49" },
];

function ServicesPage() {
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const slideCount = serviceShowcaseSlides.length;

  const activeSlide = useMemo(() => {
    if (slideCount === 0) return null;
    return serviceShowcaseSlides[showcaseIndex % slideCount];
  }, [showcaseIndex, slideCount]);

  useEffect(() => {
    if (slideCount <= 1) return undefined;
    const id = window.setInterval(() => {
      setShowcaseIndex((i) => (i + 1) % slideCount);
    }, SHOWCASE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [slideCount]);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero summary */}
        <section className="bg-white py-10 md:py-14 border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 md:px-6 text-center space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-500"
            >
              E‑commerce Account Management Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold text-slate-900"
            >
              Flexible packages designed around your Flipkart growth journey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-sm md:text-base text-slate-600 max-w-3xl mx-auto"
            >
              Choose a monthly package or mix‑and‑match add‑ons and à la carte
              services. Pay only for the level of support you need while keeping
              your account fully optimised.
            </motion.p>
          </div>
        </section>

        {/* Auto-rotating service visuals — raster images only from src/assets */}
        {slideCount > 0 && activeSlide && (
          <section className="relative overflow-hidden bg-gradient-to-b from-[#ecfdf5]/40 via-[#f8fafc] to-[#f1f5f9] py-12 md:py-16 border-b border-slate-100">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              aria-hidden
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.12), transparent 45%), radial-gradient(circle at 80% 60%, rgba(148, 163, 184, 0.15), transparent 40%)",
              }}
            />
            <div className="relative max-w-6xl mx-auto px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55 }}
                className="text-center mb-8 md:mb-10"
              >
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-600 mb-2">
                  What we deliver
                </p>
                <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                  See how we support your Flipkart account
                </h2>
                <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                  Visuals rotate automatically. Add PNG, JPG, or WebP files to{" "}
                  {/* <code className="text-xs bg-white/80 px-1.5 py-0.5 rounded border border-slate-200">
                  src/assets
                </code>{" "} */}
                  to show them here.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="relative mx-auto max-w-4xl"
              >
                <div className="absolute -inset-3 md:-inset-5 rounded-[2rem] bg-emerald-200/25 blur-2xl" />
                <div className="relative rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/60 overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500" />
                  <div className="relative aspect-[16/10] md:aspect-[21/9] bg-gradient-to-br from-slate-50 to-emerald-50/30">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.img
                        key={`${showcaseIndex}-${activeSlide.src}`}
                        src={activeSlide.src}
                        alt={activeSlide.title}
                        initial={{ opacity: 0, x: 72 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -72 }}
                        transition={{
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute inset-0 w-full h-full object-contain p-6 md:p-10 select-none"
                        draggable={false}
                      />
                    </AnimatePresence>
                  </div>
                  <div className="border-t border-slate-100 bg-slate-50/90 backdrop-blur-sm px-5 py-4 md:px-7 md:py-5">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={showcaseIndex}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                      >
                        <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1">
                          {activeSlide.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                          {activeSlide.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                    {slideCount > 1 && (
                      <div className="flex items-center justify-center gap-2 mt-4">
                        {serviceShowcaseSlides.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            aria-label={`Show slide ${i + 1}`}
                            onClick={() => setShowcaseIndex(i)}
                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                              i === showcaseIndex
                                ? "w-8 bg-emerald-500"
                                : "w-2 bg-slate-300 hover:bg-slate-400"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Monthly packages */}
        <section className="bg-[#f1f5f9] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                Our Monthly Packages
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
                Transparent plans that cover everything from essential account
                care to complete marketplace management.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {monthlyPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  className={`rounded-3xl border px-5 py-6 md:px-6 md:py-7 bg-white shadow-sm flex flex-col ${
                    plan.highlighted
                      ? "border-emerald-500 shadow-lg scale-[1.02]"
                      : "border-slate-200"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Best for{" "}
                    {plan.highlighted
                      ? "growing brands who want aggressive scaling."
                      : "brands at this stage."}
                  </p>
                  <div className="mb-4">
                    <p className="text-xs text-slate-400 line-through">
                      {plan.oldPrice}
                    </p>
                    <p className="text-2xl font-bold text-emerald-600">
                      {plan.newPrice}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700 mb-5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-0.5 text-emerald-500">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-auto inline-flex justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors cursor-pointer">
                    Get started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on packages */}
        <section className="bg-white py-10 md:py-14 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">
                Add‑on Packages
              </h2>
              <p className="text-sm md:text-base text-slate-600">
                Extra boosts you can plug into any plan when you need them.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {addOnPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 shadow-sm flex flex-col"
                >
                  <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-3">
                    <p className="text-xs text-slate-400 line-through">
                      {plan.oldPrice}
                    </p>
                    <p className="text-xl font-bold text-emerald-600">
                      {plan.newPrice}
                    </p>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600">
                    Task‑based engagement for quick wins without changing your
                    main plan.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* A la carte */}
        <section className="bg-[#f8fafc] py-10 md:py-14 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">
                À La Carte
              </h2>
              <p className="text-sm md:text-base text-slate-600">
                Pick individual services to test us out or fill gaps in your
                current strategy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {alaCartePlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm flex flex-col"
                >
                  <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-3">
                    <p className="text-xs text-slate-400 line-through">
                      {plan.oldPrice}
                    </p>
                    <p className="text-xl font-bold text-emerald-600">
                      {plan.newPrice}
                    </p>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600">
                    Ideal when you need focused help on one part of your
                    Flipkart account.
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-4">
              <button className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-emerald-700 transition-colors cursor-pointer">
                Get custom proposal
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ServicesPage;
