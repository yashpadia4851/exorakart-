import { motion } from "framer-motion";
import Header from "../components/Header.jsx";

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fffdf5] flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-[#272a31] text-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-5"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-amber-300 font-semibold">
                Contact
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Exorakart | Contact Us
              </h1>
              <p className="text-lg italic text-slate-200">
                We are just a click away
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm">
                <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 border border-white/20">
                  <span className="text-rose-300">☎</span>
                  +91-7300072421
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 border border-white/20">
                  <span className="text-rose-300">✉</span>
                  info@exorakart.in
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-5 bg-rose-500/20 blur-3xl rounded-full" />
              <div className="relative rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                  alt="Contact support"
                  className="w-full h-72 md:h-80 object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact form + information */}
        <section className="py-12 md:py-16 bg-[#fffdf5]">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-10"
            >
              <p className="text-rose-500 text-sm font-semibold uppercase tracking-[0.15em]">
                Let&apos;s Talk
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-2">
                We will be happy to answer your questions
              </h2>
              <p className="text-sm md:text-base text-slate-600 mt-4 max-w-4xl mx-auto">
                We specialize in eCommerce account management services, helping
                businesses grow and succeed on platforms like Amazon, Flipkart,
                and more. Share your requirements and our team will get in
                touch.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-[1.25fr_0.95fr] gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="rounded-3xl bg-white border border-slate-200 shadow-sm p-5 md:p-7"
              >
                <h3 className="text-2xl font-semibold text-slate-900 mb-5">
                  Get in touch
                </h3>

                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1.5">
                      Your full name
                    </label>
                    <input
                      type="text"
                      placeholder="Type name"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1.5">
                      Your email address
                    </label>
                    <input
                      type="email"
                      placeholder="Type email"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-1.5">
                        Your phone number
                      </label>
                      <input
                        type="text"
                        placeholder="Type phone no"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-1.5">
                        Your city
                      </label>
                      <input
                        type="text"
                        placeholder="Type your city"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1.5">
                      Your requirements
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Please brief your requirements in detail. This helps our team to better serve you."
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full bg-rose-500 px-7 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors cursor-pointer"
                  >
                    Submit
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="space-y-5"
              >
                <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                    alt="Office location map"
                    className="w-full h-56 object-cover"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-rose-500 font-semibold">
                      Email Enquiries
                    </p>
                    <p className="text-lg font-semibold text-slate-900 mt-3">
                      info@exorakart.in
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      For all inquiries
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-rose-500 font-semibold">
                      Call Enquiries
                    </p>
                    <p className="text-lg font-semibold text-slate-900 mt-3">
                      +91-8209644311
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      Mon-Sat, 9:30AM - 6:30PM
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactPage;
