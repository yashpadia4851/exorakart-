import { motion } from "framer-motion";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const stats = [
  { number: "5+", label: "Years Experience", desc: "Deep expertise in marketplace operations" },
  { number: "50+", label: "Brands Managed", desc: "Successfully growing across categories" },
  { number: "100%", label: "Client Focus", desc: "Dedicated support for every partner" },
];

const team = [
  { name: "Strategic Planning", role: "Expert Guidance", desc: "Data-driven strategies tailored to your brand" },
  { name: "Account Management", role: "Dedicated Support", desc: "End-to-end seller account operations" },
  { name: "Marketing & Ads", role: "Performance Campaigns", desc: "ROI-focused advertising solutions" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fffdf5] flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-white py-12 md:py-16 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500 mb-2">
                About Us
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
                Empowering Brands to Succeed on Marketplace
              </h1>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              Exorakart Business Solutions is a leading Flipkart account management company dedicated to helping brands achieve their e-commerce potential. We combine strategic expertise with operational excellence to drive measurable growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats section */}
        <section className="bg-[#fffdf5] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-10"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                Our Impact in Numbers
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.12)" }}
                  className="rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-slate-200 px-6 py-6 text-center shadow-sm cursor-pointer"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1, type: "spring" }}
                    className="block text-4xl md:text-5xl font-bold text-indigo-600 mb-2"
                  >
                    {stat.number}
                  </motion.span>
                  <p className="text-sm md:text-base font-semibold text-slate-900 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-xs md:text-sm text-slate-600">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What we do section */}
        <section className="bg-white py-12 md:py-16 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-10"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                What We Do
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
                We provide comprehensive marketplace solutions to help brands grow their online presence and drive sales.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {team.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.12)" }}
                  className="rounded-2xl bg-[#fffdf5] border border-slate-200 px-6 py-6 shadow-sm cursor-pointer"
                >
                  <div className="h-12 w-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <p className="text-xs font-semibold tracking-[0.16em] uppercase text-amber-500 mb-1">
                    {item.role}
                  </p>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        {/* <section className="bg-slate-900 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-6 md:px-10 md:py-8 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex-1 space-y-3">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Ready to grow your marketplace business?
                </h3>
                <p className="text-sm md:text-base text-slate-300">
                  Let's discuss how we can help scale your brand on Flipkart and beyond.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-md hover:bg-amber-400 transition-colors cursor-pointer whitespace-nowrap"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;
