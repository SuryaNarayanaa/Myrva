"use client";

import { motion } from "framer-motion";
import { easeOutQuint } from "@/lib/animations";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-teal-50/50 blur-[120px]" />
        <div className="absolute bottom-[0%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-50/50 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-20 md:mb-32">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeOutQuint }}
          >
            How it{" "}
            <span 
              className="relative inline-block text-emerald-600"
              style={{
                fontFamily: '"Permanent Marker", "Comic Sans MS", cursive',
                fontWeight: 'normal',
                letterSpacing: '0.04em',
                transform: 'rotate(-2deg)'
              }}
            >
              works
              <svg 
                className="absolute -bottom-1 left-0 w-full" 
                height="8" 
                viewBox="0 0 120 8"
                preserveAspectRatio="none"
              >
                <motion.path 
                  d="M2 5 Q30 2, 60 4 T118 5" 
                  stroke="#10B981" 
                  strokeWidth="3" 
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                />
              </svg>
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOutQuint }}
          >
            Zero paperwork. Zero claim forms. Just pure algorithmic protection that pays out instantly when you need it.
          </motion.p>
        </div>

        <div className="relative">
          {/* Main Hand-drawn connecting line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-[10%] bottom-[10%] -translate-x-1/2 z-0">
            <svg width="40" height="100%" viewBox="0 0 40 800" fill="none" preserveAspectRatio="none">
              <motion.path 
                d="M20,0 Q35,200 15,400 T25,800" 
                stroke="#E5E7EB" 
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="8 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2, ease: "linear" }}
              />
            </svg>
          </div>

          <div className="space-y-24 md:space-y-32 lg:space-y-40">
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 lg:text-right order-2 lg:order-1 flex flex-col lg:items-end">
                <motion.div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 font-bold text-xl mb-6 shadow-inner border border-teal-200"
                  initial={{ scale: 0, rotate: -15 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: easeOutQuint }}
                >
                  1
                </motion.div>
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: easeOutQuint }}
                >
                  Select your zone & tier
                </motion.h3>
                <motion.p 
                  className="text-gray-600 text-lg leading-relaxed max-w-md"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: easeOutQuint }}
                >
                  Tell us where you work and pick a coverage plan that fits your risk level. Your premium dynamically adjusts based on historical local data.
                </motion.p>
              </div>

              <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-start">
                <motion.div 
                  className="relative w-72 md:w-80 h-64 bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 transform rotate-2"
                  initial={{ opacity: 0, x: 40, rotate: 10 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: easeOutQuint }}
                  whileHover={{ rotate: 0, scale: 1.02 }}
                >
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shadow-lg border-2 border-white z-20 transform rotate-12">
                    <span className="text-xl" style={{ fontFamily: '"Permanent Marker"' }}>📍</span>
                  </div>
                  <div className="w-full h-32 bg-slate-100 rounded-2xl mb-4 overflow-hidden relative">
                    {/* Mock Map Background */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:12px_12px]" />
                    <svg className="absolute inset-0 w-full h-full text-slate-300" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M10,50 Q40,10 70,40 T120,60" />
                      <path d="M0,80 Q30,90 60,60 T100,20" />
                    </svg>
                    {/* Active Zone Blob */}
                    <motion.div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-teal-500/20 border-2 border-teal-500 rounded-full blur-[1px]"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                    <div className="h-4 bg-gray-100 rounded-full w-1/2"></div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                 <motion.div 
                  className="relative w-72 md:w-80 bg-gray-900 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-6 transform -rotate-2"
                  initial={{ opacity: 0, x: -40, rotate: -10 }}
                  whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: easeOutQuint }}
                  whileHover={{ rotate: 0, scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Live Oracle</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Rainfall</span>
                        <span className="text-sm font-bold text-white">45mm/h</span>
                      </div>
                      <div className="w-full bg-gray-900 rounded-full h-1.5">
                        <motion.div 
                          className="bg-blue-500 h-1.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "85%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5, ease: easeOutQuint }}
                        />
                      </div>
                    </div>

                    <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">AQI</span>
                        <span className="text-sm font-bold text-red-400">412</span>
                      </div>
                      <div className="w-full bg-gray-900 rounded-full h-1.5">
                        <motion.div 
                          className="bg-red-500 h-1.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "95%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.7, ease: easeOutQuint }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Hand-drawn "Monitoring" note */}
                  <motion.div 
                    className="absolute -right-12 -bottom-6 w-32"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                  >
                    <svg viewBox="0 0 100 40" fill="none" className="w-full text-teal-500 drop-shadow-sm">
                      <path d="M10,30 Q40,10 90,20 L80,10 M90,20 L80,30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                      <text x="20" y="15" fill="currentColor" fontSize="12" fontFamily='"Permanent Marker", cursive' transform="rotate(-5)">always on!</text>
                    </svg>
                  </motion.div>
                </motion.div>
              </div>

              <div className="w-full lg:w-1/2">
                <motion.div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-900 text-white font-bold text-xl mb-6 shadow-lg"
                  initial={{ scale: 0, rotate: 15 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: easeOutQuint }}
                >
                  2
                </motion.div>
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: easeOutQuint }}
                >
                  We monitor continuously
                </motion.h3>
                <motion.p 
                  className="text-gray-600 text-lg leading-relaxed max-w-md"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: easeOutQuint }}
                >
                  Our smart contracts are plugged into live meteorological and government APIs. They track weather severities, air quality indexes, and official curfews every minute.
                </motion.p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 lg:text-right order-2 lg:order-1 flex flex-col lg:items-end">
                <motion.div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 font-bold text-xl mb-6 shadow-inner border border-emerald-200"
                  initial={{ scale: 0, rotate: -15 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: easeOutQuint }}
                >
                  3
                </motion.div>
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: easeOutQuint }}
                >
                  Automatic Payouts
                </motion.h3>
                <motion.p 
                  className="text-gray-600 text-lg leading-relaxed max-w-md"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: easeOutQuint }}
                >
                  If a threshold is crossed (e.g., Heavy Rain &gt; 30mm/hr), the policy triggers immediately. The payout goes straight to your UPI or bank account. No claims to file, no waiting.
                </motion.p>
              </div>

              <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-start">
                <motion.div 
                  className="relative w-72 md:w-80 bg-white rounded-3xl shadow-[0_25px_50px_-12px_rgba(16,185,129,0.25)] border-2 border-emerald-100 p-6 transform rotate-3"
                  initial={{ opacity: 0, x: 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: easeOutQuint }}
                  whileHover={{ rotate: 0, scale: 1.02, y: -5 }}
                >
                  {/* Confetti / Success Background */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-400 rounded-full blur-[40px] opacity-40" />

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <motion.svg 
                        className="w-8 h-8 text-emerald-600" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </motion.svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-0.5">Payment Sent</p>
                      <p className="text-xs text-gray-500">Just now via UPI</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4 mb-4 border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Trigger Event</p>
                    <p className="text-gray-900 font-bold">Severe Waterlogging</p>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Amount</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">₹450</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-xl">💸</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
