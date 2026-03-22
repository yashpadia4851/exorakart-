import { motion } from "framer-motion";
import Header from "../components/Header.jsx";

/** Update these for production — values are easy to find and replace */
const CONTACT = {
  company: "Exorakart Business Solutions",
  tagline: "Flipkart & marketplace account management",
  email: "hello@exorakart.com",
  /** E.164 without + for wa.me (e.g. India 91 + 10 digits) */
  whatsappPhone: "919876543210",
  addressLine1: "Business District, Metro City",
  addressLine2: "India",
  hours: "Mon–Sat · 10:00 AM – 7:00 PM IST",
  gst: "GSTIN: Available on invoice",
};

const waHref = `https://wa.me/${CONTACT.whatsappPhone}?text=${encodeURIComponent(
  `Hi ${CONTACT.company}, I'd like to discuss Flipkart account management.`
)}`;
const mailHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
  "Enquiry — Exorakart Business Solutions"
)}`;

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconBuilding(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
      <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
    </svg>
  );
}

function IconMapPin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const highlights = [
  "Dedicated account managers for Flipkart & marketplaces",
  "Transparent reporting and clear SLAs",
  "Fast response during business hours",
];

function ContactPage() {
  return (
    <div className="min-h-dvh w-full flex flex-col bg-[#fffdf5]">
      <Header />

      <main className="flex-1 w-full min-h-0 flex flex-col lg:flex-row">
        {/* Left — narrative */}
        <section className="relative w-full lg:w-1/2 flex flex-col justify-center px-5 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-0 border-b lg:border-b-0 lg:border-r border-amber-100/80">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(ellipse 80% 50% at 20% 20%, rgba(251, 191, 36, 0.2), transparent), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(99, 102, 241, 0.12), transparent)",
            }}
          />
          <div className="relative max-w-xl mx-auto lg:mx-0 w-full space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600"
            >
              Contact us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-slate-900 leading-tight"
            >
              Let&apos;s grow your marketplace presence together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed"
            >
              Whether you need listing optimisation, ads, or full account management, our team
              is ready to help. Reach out by email or WhatsApp—we typically respond within one
              business day.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-3 text-sm text-slate-700"
            >
              {highlights.map((line) => (
                <li key={line} className="flex gap-3 items-start">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold">
                    ✓
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* Right — contact card */}
        <section className="w-full lg:w-1/2 flex flex-col justify-center px-5 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-16 bg-gradient-to-b from-white/90 to-[#fffdf5] lg:from-white lg:to-amber-50/30">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0"
          >
            <div className="rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-amber-400 via-rose-400 to-indigo-500" />
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Get in touch</h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Choose the channel that works best for you.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#20bd5a] transition-colors"
                  >
                    <IconWhatsApp className="h-5 w-5 shrink-0" />
                    WhatsApp
                  </a>
                  <a
                    href={mailHref}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition-colors"
                  >
                    <IconMail className="h-5 w-5 shrink-0" />
                    Email
                  </a>
                </div>

                <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 sm:p-5 space-y-4">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 text-indigo-600">
                      <IconBuilding className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Company
                      </p>
                      <p className="text-sm font-semibold text-slate-900">{CONTACT.company}</p>
                      <p className="text-xs text-slate-600 mt-0.5">{CONTACT.tagline}</p>
                    </div>
                  </div>

                  <div className="h-px bg-slate-200/80" />

                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3 items-start">
                      <IconMail className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-slate-500">Email</p>
                        <a
                          href={mailHref}
                          className="font-medium text-slate-900 hover:text-indigo-600 break-all"
                        >
                          {CONTACT.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <IconWhatsApp className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-slate-500">WhatsApp</p>
                        <a
                          href={waHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-slate-900 hover:text-[#25D366]"
                        >
                          Message us on WhatsApp
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <IconMapPin className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-slate-500">Registered address</p>
                        <p className="text-slate-800">
                          {CONTACT.addressLine1}
                          <br />
                          {CONTACT.addressLine2}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80 text-xs text-slate-500 space-y-1">
                    <p>{CONTACT.hours}</p>
                    <p>{CONTACT.gst}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default ContactPage;
