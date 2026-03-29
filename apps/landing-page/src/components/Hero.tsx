"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, fadeInUp, slideInLeft, slideInRight, easeOutQuint } from "@/lib/animations";

const platformIcons = [
  { src: '/swiggy.jpeg', alt: 'Swiggy', delay: 0.5 },
  { src: '/zomato.jpeg', alt: 'Zomato', delay: 0.6 },
  { src: '/d.jpeg', alt: 'Platform D', delay: 0.7 }
] as const;

export default function Hero() {
  return (
    <section className="relative mb-10 mx-4 lg:mx-5 border border-gray-200 rounded-3xl max-h-none lg:max-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"
        {...fadeIn}
        transition={{ duration: 0.4 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-11 sm:py-9 lg:pb-16 lg:pt-0 min-h-0 lg:min-h-[calc(100vh-88px)]">

        <motion.div
          className="absolute -left-20 top-8 hidden lg:block"
          {...slideInLeft}
          transition={{ duration: 1.2, delay: 0.3, ease: easeOutQuint }}
        >
          {/* Sticky Note with Tissue Paper Texture */}
          <motion.div
            className="relative w-64 h-56 transform -rotate-6"
            whileHover={{ rotate: -3, scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            {/* Realistic Push Pin */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 rotate-45">
              <svg width="34" height="46" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Pin needle */}
                <motion.line
                  x1="17" y1="22" x2="17" y2="45"
                  stroke="#9CA3AF"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                />
                {/* Pin head - metallic rim */}
                <circle cx="17" cy="11" r="10" fill="#B91C1C" />
                <circle cx="17" cy="11" r="8.8" fill="#DC2626" />
                {/* Subtle shine effect - only on top left */}
                <ellipse cx="13.5" cy="8.5" rx="3" ry="3.5" fill="#F87171" opacity="0.5" />
              </svg>
            </div>

            {/* Note Paper */}
            <div 
              className="w-full h-full rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-6 relative overflow-hidden"
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
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/15 via-transparent to-black/5" />
              
              {/* Handwritten Text */}
              <div className="relative z-10 flex items-center justify-center h-full pt-4">
                <p 
                  className="text-gray-800 text-lg leading-relaxed text-center"
                  style={{
                    fontFamily: '"Permanent Marker", "Comic Sans MS", cursive',
                    textShadow: '0.5px 0.5px 0px rgba(0,0,0,0.1)',
                    letterSpacing: '0.02em',
                  }}
                >
                  Income protection that triggers{' '}
                  <span 
                    className="relative inline-block"
                    style={{ fontWeight: 700 }}
                  >
                    automatically
                    {/* Hand-drawn underline */}
                    <svg 
                      className="absolute -bottom-1 left-0 w-full" 
                      height="6" 
                      viewBox="0 0 120 6"
                      preserveAspectRatio="none"
                    >
                      <path 
                        d="M2 4 Q30 2, 60 3 T118 4" 
                        stroke="#DC2626" 
                        strokeWidth="2.5" 
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  {' '}when you can&apos;t work
                </p>
              </div>

              {/* Subtle paper edge tear effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-yellow-100/50 to-transparent" />
            </div>
          </motion.div>

          {/* Checkmark Card */}
          {/* <motion.div
            className="ml-16 mt-6 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center transform rotate-6"
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{ duration: 0.8, delay: 0.6, ease: easeOutQuint }}
            whileHover={{ scale: 1.1, rotate: 12 }}
          >
            <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <motion.svg
                className="w-9 h-9 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </motion.svg>
            </div>
          </motion.div> */}
        </motion.div>


        <motion.div
          className="absolute -right-25 top-0 hidden lg:block"
          {...slideInRight}
          transition={{ duration: 1.2, delay: 0.3, ease: easeOutQuint }}
        >

          {/* <motion.div
            className="w-72 bg-white rounded-2xl shadow-2xl p-6 transform rotate-3"
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl shadow-sm flex items-center justify-center border border-gray-100">
                <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Coverage Active</h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide font-semibold">Premium Tier</p>
              <p className="text-lg font-bold text-gray-900">Standard Plan</p>
            </div>

            <motion.div
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border-2 border-emerald-200"
              whileHover={{ borderColor: "rgb(16, 185, 129)" }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-xs text-gray-600 mb-1 uppercase tracking-wide font-semibold">Weekly Premium</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">₹39</p>
            </motion.div>
          </motion.div> */}

          {/* Dice Image */}
          <motion.div
            className="mt-10 ml-auto mr-20 w-28 h-28 bg-white rounded-3xl shadow-2xl flex items-center justify-center transform -rotate-6"
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easeOutQuint }}
            whileHover={{
              rotate: 0,
              scale: 1.1,
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
            }}
          >
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 grid grid-cols-2 gap-2">
                <motion.div
                  className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg shadow-md"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="bg-gray-900 rounded-lg shadow-md" />
                <div className="bg-gray-900 rounded-lg shadow-md" />
                <div className="bg-gray-900 rounded-lg shadow-md" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile - Floating Dice */}
        <motion.div
          className="absolute left-[-12px] top-4 z-10 lg:hidden"
          initial={{ opacity: 0, scale: 0.9, rotate: -16 }}
          animate={{ opacity: 1, scale: 1, rotate: -7 }}
          transition={{ duration: 0.5, delay: 0.08, ease: easeOutQuint }}
          whileTap={{ scale: 0.96 }}
        >
          <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
            <div className="relative w-11 h-11">
              <div className="absolute inset-0 grid grid-cols-2 gap-1.5">
                <motion.div
                  className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-md shadow-sm"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: easeOutQuint }}
                />
                <div className="bg-gray-900 rounded-md shadow-sm" />
                <div className="bg-gray-900 rounded-md shadow-sm" />
                <div className="bg-gray-900 rounded-md shadow-sm" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-0 lg:min-h-[calc(100vh-200px)] text-center px-4 sm:px-4 pt-15 sm:pt-5 lg:pt-0">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-5 sm:mb-6 leading-[1.1]"
            style={{
              fontFamily: '"Permanent Marker", "Comic Sans MS", cursive',
              textShadow: '1px 1px 0px rgba(0,0,0,0.08)',
              letterSpacing: '0.02em',
            }}
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOutQuint }}
          >
            Protect your income
            <br />
            <span className="relative inline-block text-gray-500">
              work with peace
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 180 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 6 Q45 2, 92 4 T177 6"
                  stroke="#DC2626"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-7 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOutQuint }}
          >
            AI-powered parametric insurance for delivery partners. Automatic payouts when weather, AQI, or disruptions stop you from working.
          </motion.p>

          {/* Mobile - Works with Platform */}
          <motion.div
            className="relative z-10 mt-3 mb-12 lg:hidden"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: easeOutQuint }}
          >
            <p className="text-xs font-bold text-gray-800 mb-3 text-center uppercase tracking-wide">Works with your platform</p>
            <div className="flex items-center justify-center gap-3">
              {platformIcons.map((platform, index) => (
                <motion.div
                  key={`mobile-${platform.src}`}
                  className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center"
                  initial={{ opacity: 0, y: 14, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotate: index === 0 ? 4 : index === 1 ? -4 : 2,
                  }}
                  transition={{ duration: 0.45, delay: platform.delay, ease: easeOutQuint }}
                  whileHover={{ rotate: 0, scale: 1.06 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-11 h-11 rounded-xl overflow-hidden shadow-sm bg-white p-1">
                    <Image
                      src={platform.src}
                      alt={platform.alt}
                      width={44}
                      height={44}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="/docs"
            className="w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 bg-teal-600 text-white text-sm sm:text-base font-bold rounded-2xl cursor-pointer hover:bg-teal-700 transition-all shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: easeOutQuint }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Architecture
          </motion.a>
        </div>

        <motion.div
          className="absolute -left-20 bottom-6 hidden lg:block"
          {...slideInLeft}
          transition={{ duration: 0.6, delay: 0.4, ease: easeOutQuint }}
        >
          <motion.div
            className="relative w-80 rounded-2xl shadow-lg px-4 py-6 transform -rotate-1 border border-slate-200 bg-white"
            whileHover={{ rotate: 0, scale: 1.01 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -top-2 left-5 h-3 w-40 rounded-t-md border border-slate-200 border-b-0 bg-slate-100" />
            <h3 className="text-sm font-semibold text-teal-600 mb-4 tracking-wide">Active Protections</h3>

            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-200">
                  <svg className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3C9.5 7 7 9.8 7 13a5 5 0 0010 0c0-3.2-2.5-6-5-10z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Heavy Rain</p>
                  {/* <p className="text-xs text-gray-500">Coverage Active</p> */}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-slate-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-slate-500 rounded-full h-2"
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ duration: 0.8, delay: 0.6, ease: easeOutQuint }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-600">60%</span>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-200">
                  <svg className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12h11" />
                    <path d="M3 16h8" />
                    <path d="M4 8h13" />
                    <path d="M17 10a2 2 0 100-4" />
                    <path d="M14 18a2 2 0 104 0" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">AQI Protection</p>
                  {/* <p className="text-xs text-gray-500">Zone Monitored</p> */}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-slate-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-slate-600 rounded-full h-2"
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 0.8, delay: 0.7, ease: easeOutQuint }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-600">132</span>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-200">
                  <svg className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 14h18" />
                    <path d="M6 14V9a6 6 0 0112 0v5" />
                    <path d="M8.5 18a3.5 3.5 0 007 0" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Flood</p>
                  {/* <p className="text-xs text-gray-500">Threshold Watch</p> */}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-slate-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-slate-500 rounded-full h-2"
                      initial={{ width: 0 }}
                      animate={{ width: "45%" }}
                      transition={{ duration: 0.8, delay: 0.75, ease: easeOutQuint }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-600">45%</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Bottom Corner */}
        <motion.div
          className="absolute -right-8 bottom-20 pb-10 hidden lg:block"
          {...slideInRight}
          transition={{ duration: 0.6, delay: 0.4, ease: easeOutQuint }}
        >
          <div className="transform -rotate-2">
            <p className="text-sm font-bold text-gray-900 mb-4 text-center uppercase tracking-wide">Works with your platform</p>
            <div className="flex items-center justify-center gap-3">
              {platformIcons.map((platform, index) => (
                <motion.div
                  key={platform.src}
                  className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                  initial={{ opacity: 0, y: 20, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotate: index === 0 ? 6 : index === 1 ? -6 : 3
                  }}
                  transition={{ duration: 0.5, delay: platform.delay, ease: easeOutQuint }}
                  whileHover={{ rotate: 0, scale: 1.1 }}
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden shadow-md bg-white p-1">
                    <Image
                      src={platform.src}
                      alt={platform.alt}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
