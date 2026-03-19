"use client";

import { motion } from "framer-motion";
import { easeOutQuint, fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-24 max-w-7xl mx-auto">
        {/* Abstract Background Texture */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
           <div className="absolute top-0 right-10 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
           <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-3/5">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutQuint }}
            >
              When the sky falls,<br />
              <span className="relative inline-block text-teal-600 mt-2" style={{ fontFamily: '"Permanent Marker", "Comic Sans MS", cursive', letterSpacing: '0.04em', fontWeight: 'normal' }}>
                your income doesn&apos;t.
                <svg className="absolute -bottom-4 left-0 w-full" height="12" viewBox="0 0 120 12" preserveAspectRatio="none">
                  <motion.path 
                    d="M2 10 Q30 2, 60 6 T118 8" 
                    stroke="#DC2626" 
                    strokeWidth="4" 
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: easeOutQuint }}
            >
              Myrva monitors the environment and pays you out the moment conditions become unworkable. Zero claims forms.
            </motion.p>
          </div>

          <div className="w-full md:w-2/5 relative">
             {/* Torn Paper Feature Concept */}
             <motion.div 
               className="relative z-20 bg-white p-8 shadow-2xl transform rotate-3 origin-bottom-right"
               style={{ 
                 clipPath: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 90% 95%, 85% 100%, 80% 95%, 75% 100%, 70% 95%, 65% 100%, 60% 95%, 55% 100%, 50% 95%, 45% 100%, 40% 95%, 35% 100%, 30% 95%, 25% 100%, 20% 95%, 15% 100%, 10% 95%, 5% 100%, 0 95%)',
                 backgroundImage: 'url("/wrinked.jpeg")',
                 backgroundSize: 'cover',
                 backgroundBlendMode: 'luminosity'
               }}
               initial={{ opacity: 0, rotate: 15, x: 50, scale: 0.8 }}
               animate={{ opacity: 1, rotate: 3, x: 0, scale: 1 }}
               transition={{ duration: 1, delay: 0.4, type: 'spring', damping: 20 }}
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
             
             {/* Sticky Note Behind */}
             <motion.div
               className="absolute -bottom-10 -left-10 w-48 h-48 p-6 shadow-lg z-10"
               style={{
                background: '#f8e89b',
                backgroundImage: `linear-gradient(135deg, rgba(252, 243, 186, 0.78) 0%, rgba(247, 227, 141, 0.72) 100%), url('/wrinked.jpeg')`,
                backgroundSize: 'cover',
                transform: 'rotate(-8deg)'
               }}
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6, ease: easeOutQuint }}
             >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-10 w-3 h-3 bg-black/30 rounded-full blur-[2px]" />
                  <svg width="24" height="32" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-20">
                    <line x1="17" y1="22" x2="17" y2="45" stroke="#9CA3AF" strokeWidth="2" />
                    <circle cx="17" cy="11" r="10" fill="#B91C1C" />
                    <circle cx="17" cy="11" r="8.8" fill="#DC2626" />
                    <ellipse cx="13.5" cy="8.5" rx="3" ry="3.5" fill="#F87171" opacity="0.5" />
                  </svg>
                </div>
                <div className="h-full flex items-center justify-center pt-2">
                  <p className="text-gray-900 text-center text-xl font-bold leading-tight" style={{ fontFamily: '"Permanent Marker", "Comic Sans MS", cursive' }}>
                    It just <br/> works.
                  </p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURE 1: EXTREME WEATHER - Asymmetric right */}
      <section className="py-24 relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            
            <div className="w-full md:w-1/2 order-2 md:order-1 relative">
              <motion.div 
                className="w-full aspect-[4/5] bg-gray-800 rounded-3xl overflow-hidden shadow-2xl relative"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: easeOutQuint }}
              >
                 {/* Rain Simulation Background */}
                 <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                 <div className="absolute top-10 left-10 right-10 bottom-10 border border-gray-700/50 rounded-xl p-6 bg-gray-900/40 backdrop-blur-sm flex flex-col justify-end">
                    
                    <div className="mb-auto mt-4">
                      <div className="text-5xl mb-2">⛈️</div>
                      <div className="text-red-400 font-mono text-sm tracking-widest font-bold uppercase mb-1">Precipitation Alert</div>
                      <div className="text-3xl font-bold text-white tracking-tight">65mm / hr</div>
                      <div className="text-gray-400 mt-2">Condition: Unsafe for two-wheelers</div>
                    </div>

                    <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl backdrop-blur-md">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                        <span className="text-emerald-300 font-bold uppercase tracking-wider text-sm">Payout Triggered</span>
                      </div>
                    </div>

                 </div>
              </motion.div>

              {/* Decorative element overlapping */}
              <motion.div
                className="absolute -right-12 top-20 bg-emerald-500 text-gray-900 font-black p-4 rounded-full shadow-2xl transform rotate-12 hidden lg:block"
                style={{ fontFamily: '"Permanent Marker", "Comic Sans MS", cursive', fontSize: '1.2rem' }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, type: 'spring' }}
                whileHover={{ rotate: -5, scale: 1.1 }}
              >
                AUTOMATIC!
              </motion.div>
            </div>

            <div className="w-full md:w-1/2 order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: easeOutQuint }}
              >
                <div className="inline-block px-3 py-1 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 text-xs font-bold uppercase tracking-widest mb-6">01 — The Elements</div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
                  Rain, heat, and everything in between.
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  We ingest hyper-local IMD and proprietary weather data in real-time. If it pours hard enough to stop you from working safely, we cover the lost hours. 
                </p>

                <ul className="space-y-6">
                  <li className="flex gap-4 items-start">
                    <div className="bg-gray-800 p-2 rounded-lg text-teal-400 shrink-0">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v18m9-9H3" strokeLinecap="round"/></svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Hyper-local precision</h4>
                      <p className="text-gray-400">Not just city-wide averages. We track weather at a 2km² resolution to know exactly what you&apos;re facing.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="bg-gray-800 p-2 rounded-lg text-teal-400 shrink-0">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v18m9-9H3" strokeLinecap="round"/></svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Extreme Heat Index</h4>
                      <p className="text-gray-400">When the wet-bulb temperature hits hazardous levels, we trigger payouts so you can take shelter.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: AQI - Brutalist/Grid style */}
      <section className="py-24 relative bg-white border-b-4 border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            <div className="md:col-span-5 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: easeOutQuint }}
              >
                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold uppercase tracking-widest mb-6">02 — The Air</div>
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-[1.1] uppercase">
                  Breathe<br/>
                  <span className="text-red-600">Easy.</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  When air quality indices (AQI) spike to hazardous levels, riding is dangerous. Myrva detects toxic air and activates your safety net.
                </p>
              </motion.div>
            </div>

            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              {/* Data Cards */}
              <motion.div 
                className="bg-gray-50 border-2 border-gray-900 p-6 flex flex-col justify-between"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5, boxShadow: '8px 8px 0px 0px rgba(17,24,39,1)' }}
              >
                <div className="text-gray-500 font-mono text-sm uppercase font-bold mb-8">Delhi NCR</div>
                <div>
                  <div className="text-6xl font-black text-red-600 mb-2">452</div>
                  <div className="font-bold text-gray-900 uppercase tracking-wide">Severe Plus</div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-teal-600 text-white border-2 border-gray-900 p-6 flex flex-col justify-between"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5, boxShadow: '8px 8px 0px 0px rgba(17,24,39,1)' }}
              >
                <div className="text-teal-200 font-mono text-sm uppercase font-bold mb-8">Action Taken</div>
                <div>
                  <div className="text-4xl font-black mb-2 leading-none uppercase">Coverage<br/>Active</div>
                  <div className="font-bold text-teal-100">Payouts pending</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="col-span-2 bg-gray-900 text-white p-6 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="relative z-10 flex justify-between items-center">
                   <div>
                     <div className="text-gray-400 font-mono text-sm uppercase font-bold mb-2">System Status</div>
                     <div className="text-2xl font-bold">Continuous API polling from CPCB</div>
                   </div>
                   <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center animate-pulse">
                     <span className="font-bold font-mono text-sm">LIVE</span>
                   </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURE 3: ZERO CLAIMS - Minimal, expansive */}
      <section className="py-32 relative bg-teal-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: easeOutQuint }}
           >
             <h2 className="text-5xl md:text-7xl font-black text-teal-900 mb-8 tracking-tighter">
               No forms.<br/>
               No calls.<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-400">Just payouts.</span>
             </h2>
             <p className="text-2xl text-teal-800/80 leading-relaxed font-medium max-w-2xl mx-auto">
               We don&apos;t wait for you to claim. When the data says you can&apos;t work, the money moves to your wallet instantly.
             </p>
           </motion.div>
        </div>

        {/* Abstract floating UI elements representing money moving */}
        <motion.div 
          className="absolute left-[10%] bottom-[10%] bg-white p-4 rounded-2xl shadow-xl border border-teal-100"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            </div>
            <div>
              <div className="text-sm text-gray-500 font-bold">UPI Transfer</div>
              <div className="text-xl font-black text-gray-900">+ ₹850.00</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="absolute right-[15%] top-[20%] bg-white p-4 rounded-2xl shadow-xl border border-teal-100 hidden md:block"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <div className="bg-teal-100 text-teal-600 p-3 rounded-full">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <div className="text-sm text-gray-500 font-bold">Trigger Hit</div>
              <div className="text-xl font-black text-gray-900">Processing</div>
            </div>
          </div>
        </motion.div>

      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready for a fairer day?
          </motion.h2>
          <motion.button
            className="px-10 py-5 bg-teal-600 text-white text-lg font-black rounded-2xl hover:bg-teal-700 transition-all shadow-[0_20px_40px_-10px_rgba(13,148,136,0.6)]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            See How Pricing Works
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
