"use client";

import { motion } from "framer-motion";
import { easeOutQuint } from "@/lib/animations";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 border-y border-gray-200">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeOutQuint }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Pricing that makes{" "}
              <span 
                className="relative inline-block text-teal-600"
                style={{
                  fontFamily: '"Permanent Marker", "Comic Sans MS", cursive',
                  fontWeight: 'normal',
                  letterSpacing: '0.04em',
                }}
              >
                sense
                {/* Hand-drawn underline from Hero */}
                <svg 
                  className="absolute -bottom-2 left-0 w-full" 
                  height="8" 
                  viewBox="0 0 120 8"
                  preserveAspectRatio="none"
                >
                  <motion.path 
                    d="M2 6 Q30 2, 60 4 T118 6" 
                    stroke="#DC2626" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  />
                </svg>
              </span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Dynamic weekly deductions based on your risk profile. No hidden fees. Automatic payouts when things go wrong.
            </p>
          </motion.div>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0 max-w-6xl mx-auto">
          
          {/* Basic Plan (Left) */}
          <motion.div
            className="w-full max-w-md lg:max-w-none lg:w-[320px] bg-white rounded-3xl p-6 lg:p-8 border border-gray-200 shadow-xl lg:-rotate-2 lg:translate-x-4 z-10 relative flex flex-col order-2 lg:order-1"
            initial={{ opacity: 0, x: -30, rotate: -6 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOutQuint }}
          >
            <div className="mb-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Basic</h3>
                <p className="text-sm text-gray-500 font-medium">Perfect for new riders.</p>
              </div>
              <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.204 11h17.592c-.37-5.06-4.6-9-9.796-9s-9.426 3.94-9.796 9zm0 0v1a2 2 0 002 2h14a2 2 0 002-2v-1m-9 0v8m0 0a2 2 0 002-2" />
                </svg>
              </div>
            </div>
            
            <div className="mb-8 pb-6 border-b border-gray-100 flex-grow">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg border border-gray-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-500"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider">Custom Weekly Premium</span>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                'Heavy Rain coverage',
                'Flood protection',
                'Extreme Heat coverage',
                'Automatic payouts'
              ].map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-200">
                    <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Standard Plan (Center) */}
          <motion.div
            className="w-full max-w-md lg:max-w-none lg:w-[400px] bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 lg:p-10 shadow-[0_30px_60px_-15px_rgba(16,185,129,0.4)] z-20 relative transform lg:scale-105 flex flex-col order-1 lg:order-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOutQuint }}
          >
            {/* Playful star background accents */}
            <svg className="absolute top-6 right-6 w-4 h-4 text-emerald-300 opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg className="absolute bottom-16 left-6 w-3 h-3 text-emerald-300 opacity-40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>

            {/* Centered Integrated Badge */}
            <div className="absolute -top-4 inset-x-0 flex justify-center">
              <motion.div 
                className="bg-white text-emerald-600 px-5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-[0_10px_20px_rgba(0,0,0,0.1)] border border-emerald-100 flex items-center gap-1.5"
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              >
                <span>⭐</span> Most Popular
              </motion.div>
            </div>

            <div className="mt-2 mb-6 flex justify-between items-start">
              <div>
                <h3 className="text-3xl font-bold text-white mb-1">Standard</h3>
                <p className="text-emerald-100 text-sm font-medium">Ideal for full-time riders.</p>
              </div>
              <div className="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-inner">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            
            <div className="mb-8 pb-6 border-b border-white/20 flex-grow">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-100"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider">Optimized per zone</span>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                'All Basic features',
                'AQI Protection (Hazardous)',
                'Priority claim processing',
                'Real-time monitoring',
              ].map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20">
                    <motion.svg 
                      className="w-4 h-4 text-white" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </motion.svg>
                  </div>
                  <span className="text-sm font-medium text-white">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Premium Plan (Right - Sticky Note) */}
          <motion.div
            className="w-full max-w-md lg:max-w-none lg:w-[320px] transform lg:rotate-3 lg:-translate-x-4 z-30 relative order-3 lg:order-3"
            initial={{ opacity: 0, x: 30, rotate: 12 }}
            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOutQuint }}
          >
            {/* Realistic Push Pin Shadow */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10 w-4 h-4 bg-black/30 rounded-full blur-[3px]" />
            
            {/* Realistic Push Pin */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 rotate-6">
              <svg width="34" height="46" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="17" y1="22" x2="17" y2="45" stroke="#9CA3AF" strokeWidth="2" />
                <circle cx="17" cy="11" r="10" fill="#B91C1C" />
                <circle cx="17" cy="11" r="8.8" fill="#DC2626" />
                <ellipse cx="13.5" cy="8.5" rx="3" ry="3.5" fill="#F87171" opacity="0.5" />
              </svg>
            </div>

            {/* Note Paper */}
            <div 
              className="w-full h-full rounded-sm shadow-[0_15px_35px_rgba(0,0,0,0.15)] p-6 lg:p-8 relative overflow-hidden flex flex-col"
              style={{
                background: '#f8e89b',
                backgroundImage: `
                  linear-gradient(135deg, rgba(252, 243, 186, 0.78) 0%, rgba(247, 227, 141, 0.72) 100%),
                  url('/wrinked.jpeg')
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: `
                  0 10px 30px rgba(0,0,0,0.14),
                  inset 0 0 0 1px rgba(0,0,0,0.05),
                  inset 0 10px 14px rgba(255,255,255,0.18)
                `,
                filter: 'saturate(0.98)',
              }}
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/20 via-transparent to-black/5" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-yellow-100/60 to-transparent" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex justify-between items-start">
                  <div>
                    <h3 
                      className="text-3xl text-gray-900 mb-1"
                      style={{ fontFamily: '"Permanent Marker", "Comic Sans MS", cursive', letterSpacing: '0.04em', transform: 'rotate(-2deg)' }}
                    >
                      PREMIUM
                    </h3>
                    <p className="text-gray-800 text-sm font-bold">Best for high-risk zones.</p>
                  </div>
                  {/* Hand-drawn doodle */}
                  <div className="opacity-70 transform rotate-12 -mt-2">
                    <svg width="36" height="36" viewBox="0 0 100 100">
                      <path d="M20,80 L80,80 L90,30 L65,55 L50,20 L35,55 L10,30 Z" fill="rgba(0,0,0,0.05)" stroke="#1f2937" strokeWidth="6" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                
                <div className="mb-8 pb-6 border-b border-gray-900/10 flex-grow">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/5 text-gray-800 rounded-lg border border-black/5" style={{ transform: 'rotate(-1deg)' }}>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    <span className="text-sm font-bold tracking-tight" style={{ fontFamily: '"Permanent Marker", "Comic Sans MS", cursive' }}>Real-time Quote</span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    'All Standard features',
                    'Government curfew',
                    'NDMA disaster cover',
                    'Local strike coverage',
                    '24/7 priority support'
                  ].map((feature, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="w-8 h-8 bg-black/5 rounded-lg flex items-center justify-center flex-shrink-0 border border-black/10">
                        <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-bold text-gray-800">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
