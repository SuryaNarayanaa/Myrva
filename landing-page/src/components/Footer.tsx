"use client";

import { motion } from "framer-motion";
import { easeOutQuint } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="relative bg-white pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gray-50 rounded-[3rem] p-10 md:p-16 relative overflow-hidden border border-gray-200 shadow-sm">
          
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

          {/* DELIGHTFUL TACTILE DECORATIONS */}
          
          {/* 1. Torn Receipt (Top Right/Center) */}
          <motion.div 
            className="absolute top-12 right-[10%] lg:right-[35%] transform rotate-12 bg-white p-4 shadow-xl w-36 border border-gray-100 hidden md:block z-0"
            style={{ 
              clipPath: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 90% 95%, 85% 100%, 80% 95%, 75% 100%, 70% 95%, 65% 100%, 60% 95%, 55% 100%, 50% 95%, 45% 100%, 40% 95%, 35% 100%, 30% 95%, 25% 100%, 20% 95%, 15% 100%, 10% 95%, 5% 100%, 0 95%)'
            }}
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 12 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOutQuint }}
            whileHover={{ y: -5, rotate: 15, scale: 1.05 }}
          >
            <div className="border-b-2 border-dashed border-gray-200 pb-2 mb-2 text-center">
              <p className="text-[9px] text-gray-400 font-mono font-bold tracking-widest">CLAIM APPROVED</p>
            </div>
            <p className="text-2xl font-black text-emerald-600 text-center tracking-tight">₹450</p>
            <p className="text-[10px] text-gray-400 text-center mt-1 font-medium">Paid automatically</p>
          </motion.div>

          {/* 2. Yellow Sticky Note (Middle/Top Right) */}
          <motion.div 
            className="absolute top-20 lg:top-1/4 right-10 lg:right-32 w-40 h-40 shadow-lg p-5 hidden sm:block z-0"
            style={{
              background: '#f8e89b',
              backgroundImage: `linear-gradient(135deg, rgba(252, 243, 186, 0.78) 0%, rgba(247, 227, 141, 0.72) 100%), url('/wrinked.jpeg')`,
              backgroundSize: 'cover',
            }}
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: easeOutQuint }}
            whileHover={{ rotate: -2, scale: 1.05 }}
          >
            {/* Push Pin */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-10 w-3 h-3 bg-black/30 rounded-full blur-[2px]" />
              <svg width="24" height="32" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-20">
                <line x1="17" y1="22" x2="17" y2="45" stroke="#9CA3AF" strokeWidth="2" />
                <circle cx="17" cy="11" r="10" fill="#B91C1C" />
                <circle cx="17" cy="11" r="8.8" fill="#DC2626" />
                <ellipse cx="13.5" cy="8.5" rx="3" ry="3.5" fill="#F87171" opacity="0.5" />
              </svg>
            </div>
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-900 text-center text-[15px] leading-relaxed" style={{ fontFamily: '"Permanent Marker", "Comic Sans MS", cursive', transform: 'rotate(-2deg)' }}>
                Ride safe <br/> out there!
              </p>
            </div>
          </motion.div>

          {/* 3. Coverage Active Stamp (Center Left Background) */}
          <motion.div
            className="absolute top-1/2 left-[45%] w-32 h-32 border-4 border-teal-500/10 rounded-full items-center justify-center pointer-events-none hidden lg:flex z-0"
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
          >
            <div className="transform -rotate-12 text-teal-600/20 font-black tracking-widest uppercase text-lg text-center border-y-2 border-teal-500/20 py-1">
              PROTECTED
            </div>
          </motion.div>

          {/* FOREGROUND CONTENT */}
          <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-16 lg:gap-32 mb-16 lg:mb-24">
            
            {/* Left Side - Branding */}
            <motion.div
              className="max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOutQuint }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                  <span className="text-white font-bold text-2xl" style={{ fontFamily: '"Permanent Marker", "Comic Sans MS", cursive' }}>M</span>
                </div>
                <span className="text-3xl font-extrabold text-gray-900 tracking-tight">Myrva</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-[1.2]">
                Protect your income and work with{" "}
                <span className="relative inline-block text-teal-600" style={{ fontFamily: '"Permanent Marker", "Comic Sans MS", cursive' }}>
                  confidence
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
                      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    />
                  </svg>
                </span>
              </h3>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                AI-powered parametric insurance designed specifically for India&apos;s gig economy workers.
              </p>
            </motion.div>

            {/* Right Side - Empty space for decorations */}
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="pt-8 border-t border-gray-200/80 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOutQuint }}
          >
            <p className="text-gray-500 text-sm font-medium text-center md:text-left">© 2026 Myrva. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub
              </a>
              <a href="/docs" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Docs
              </a>
              <span className="w-1 h-1 rounded-full bg-gray-300 hidden md:block"></span>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">Terms</a>
            </div>
          </motion.div>

        </div>
      </div>
    </footer>
  );
}