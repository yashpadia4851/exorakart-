import { motion } from "framer-motion";
import Header from "../components/Header.jsx";

const monthlyPlans = [
  {
    name: "Basic Plan",
    oldPrice: "₹2,500",
    newPrice: "₹2,000",
    features: ["Account setup support", "Basic catalog upload", "Monthly reporting"],
  },
  {
    name: "Gold Plan",
    oldPrice: "₹5,000",
    newPrice: "₹3,600",
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
    oldPrice: "₹7,500",
    newPrice: "₹5,400",
    features: [
      "End‑to‑end account management",
      "Advanced reporting & strategy",
      "Inventory & pricing planning",
    ],
  },
];

const addOnPlans = [
  { name: "Campaign setup", oldPrice: "₹50", newPrice: "₹30" },
  { name: "Creative banner design", oldPrice: "₹100", newPrice: "₹10" },
  { name: "Store makeover", oldPrice: "₹1,000", newPrice: "₹300" },
];

const alaCartePlans = [
  { name: "Single listing optimisation", oldPrice: "₹150", newPrice: "₹50" },
  { name: "Catalogue audit", oldPrice: "₹1,000", newPrice: "₹300" },
  { name: "Price benchmarking", oldPrice: "₹59", newPrice: "₹15" },
];

function ServicesPage() {
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
              Choose a monthly package or mix‑and‑match add‑ons and à la carte services. Pay
              only for the level of support you need while keeping your account fully
              optimised.
            </motion.p>
          </div>
        </section>

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
                Transparent plans that cover everything from essential account care to
                complete marketplace management.
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
                    {plan.highlighted ? "growing brands who want aggressive scaling." : "brands at this stage."}
                  </p>
                  <div className="mb-4">
                    <p className="text-xs text-slate-400 line-through">{plan.oldPrice}</p>
                    <p className="text-2xl font-bold text-emerald-600">{plan.newPrice}</p>
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
                    <p className="text-xs text-slate-400 line-through">{plan.oldPrice}</p>
                    <p className="text-xl font-bold text-emerald-600">{plan.newPrice}</p>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600">
                    Task‑based engagement for quick wins without changing your main plan.
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
                Pick individual services to test us out or fill gaps in your current
                strategy.
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
                    <p className="text-xs text-slate-400 line-through">{plan.oldPrice}</p>
                    <p className="text-xl font-bold text-emerald-600">{plan.newPrice}</p>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600">
                    Ideal when you need focused help on one part of your Flipkart account.
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
    </div>
  );
}

export default ServicesPage;

