"use client";

import { motion } from "framer-motion";
import { easeOutQuint } from "@/lib/animations";

export default function FeaturesSection() {
  return (
    <>
      <section id="features" className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-24 max-w-7xl mx-auto">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <div className="absolute top-0 right-10 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-3/5">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: easeOutQuint }}
            >
              When the sky falls,<br />
              <span className="relative inline-block text-teal-600 mt-2" style={{ fontFamily: '"Permanent Marker", "Comic Sans MS", cursive', letterSpacing: "0.04em", fontWeight: "normal" }}>
                your income doesn&apos;t.
                <svg className="absolute -bottom-4 left-0 w-full" height="12" viewBox="0 0 120 12" preserveAspectRatio="none">
                  <motion.path
                    d="M2 10 Q30 2, 60 6 T118 8"
                    stroke="#DC2626"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3, ease: easeOutQuint }}
            >
              Myrva monitors the environment and pays you out the moment conditions become unworkable. Zero claims forms.
            </motion.p>
          </div>

          <div className="w-full md:w-2/5 relative ">
            <motion.div
              className="relative z-20 bg-white p-12 shadow-2xl transform rotate-3 origin-bottom-right"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 95%, 95% 100%, 90% 95%, 85% 100%, 80% 95%, 75% 100%, 70% 95%, 65% 100%, 60% 95%, 55% 100%, 50% 95%, 45% 100%, 40% 95%, 35% 100%, 30% 95%, 25% 100%, 20% 95%, 15% 100%, 10% 95%, 5% 100%, 0 95%)",
                backgroundImage: 'url("/wrinked.jpeg")',
                backgroundSize: "cover",
                backgroundBlendMode: "luminosity",
              }}
              initial={{ opacity: 0, rotate: 15, x: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 3, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, type: "spring", damping: 20 }}
              whileHover={{ rotate: 1, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-white/90 z-0"></div>
              <div className="relative z-10">
                <div className="text-red-500 font-mono text-xs uppercase font-bold tracking-widest mb-6 border-b-2 border-dashed border-red-200 pb-2">Proof of Payout</div>
                <div className="text-5xl font-black text-gray-900 mb-2">₹1,250</div>
                <div className="text-gray-500 font-medium mb-6">Rain trigger • Zone 4</div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Status</span>
                    <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Settled</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Time to clear</span>
                    <span className="font-bold text-gray-900">0.4 seconds</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Human review</span>
                    <span className="font-bold text-gray-900 line-through decoration-red-500 decoration-2">Required</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-25 -left-15 w-48 h-48 p-6 -rotate-30 shadow-lg z-10"
              style={{
                background: "#f8e89b",
                backgroundImage: "linear-gradient(135deg, rgba(252, 243, 186, 0.78) 0%, rgba(247, 227, 141, 0.72) 100%), url('/wrinked.jpeg')",
                backgroundSize: "cover",
                transform: "rotate(-8deg)",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: easeOutQuint }}
            >
              {/* <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-10 w-3 h-3 bg-black/30 rounded-full blur-[2px]" />
                <svg width="24" height="32" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-20">
                  <line x1="17" y1="22" x2="17" y2="45" stroke="#9CA3AF" strokeWidth="2" />
                  <circle cx="17" cy="11" r="10" fill="#B91C1C" />
                  <circle cx="17" cy="11" r="8.8" fill="#DC2626" />
                  <ellipse cx="13.5" cy="8.5" rx="3" ry="3.5" fill="#F87171" opacity="0.5" />
                </svg>
              </div> */}
              <div className="h-full flex items-center justify-center pt-2">
                <p className="text-gray-900 text-center text-xl font-bold leading-tight" style={{ fontFamily: '"Permanent Marker", "Comic Sans MS", cursive' }}>
                  It just <br /> works.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-teal-50 py-24 lg:py-30">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.2),transparent_45%)]" />
          <div className="absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(circle_at_75%_90%,rgba(16,185,129,0.16),transparent_45%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOutQuint }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-teal-900 tracking-tighter leading-[0.95]">
              No forms.
              <br />
              No calls.
              <br />
              <span
                className="inline-block text-emerald-600"
                style={{ fontFamily: '"Permanent Marker", "Comic Sans MS", cursive', fontWeight: "normal", letterSpacing: "0.03em" }}
              >
                Just payout.
              </span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-teal-800/80 font-semibold">Trigger hits. Rules match. Money lands.</p>
          </motion.div>

          <div className="mx-auto mt-14 max-w-6xl">
            <div className="grid gap-4 rounded-[2rem] border border-white/80 bg-white/60 p-4 shadow-[0_20px_50px_rgba(13,148,136,0.14)] backdrop-blur-sm md:grid-cols-2 md:p-6">
              <motion.div
                className="rounded-3xl border border-red-100 bg-red-50/75 p-5 md:p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: easeOutQuint }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">Old Claim System</p>
                <h3 className="mt-3 text-2xl font-black text-gray-900">Wait. Explain. Prove.</h3>
                <div className="mt-5 space-y-2">
                  {["Forms and screenshots", "Support calls and back-and-forth", "Payout arrives late"].map((item) => (
                    <div key={item} className="rounded-xl bg-white/80 px-4 py-3 text-sm font-semibold text-gray-600">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-50/75 p-5 md:p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: easeOutQuint }}
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-200/50 blur-2xl" />
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Myrva Way</p>
                <h3 className="mt-3 text-2xl font-black text-gray-900">Detect. Validate. Settle.</h3>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Live Trigger", value: "AQI 412" },
                    { label: "Policy", value: "Standard" },
                    { label: "Payout", value: "+ ₹850" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-emerald-100 bg-white/85 px-3 py-3 text-center">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-emerald-700">{item.label}</p>
                      <p className="mt-1 text-xl font-black text-gray-900">{item.value}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-sm font-semibold text-emerald-800">No claim submission. No waiting room.</p>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: easeOutQuint }}
          >
            <p
              className="text-xl text-teal-700"
              style={{ fontFamily: '"Permanent Marker", "Comic Sans MS", cursive', transform: "rotate(-1.8deg)" }}
            >
              Clear trigger. Clear payout.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}