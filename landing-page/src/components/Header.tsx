"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { easeOutQuint } from "@/lib/animations";

const navItems = ['Features', 'Coverage', 'How it Works', 'Pricing'] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="relative z-10 bg-white backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOutQuint }}
    >
      <nav className="mx-auto px-4 sm:px-6 lg:px-24 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a href="/">
            <motion.div
              className="h-10 flex items-center justify-center"
              whileHover={{ scale: 1.03, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span
                className="text-3xl text-gray-900 leading-none"
                style={{
                  fontFamily: '"Permanent Marker", "Comic Sans MS", cursive',
                  letterSpacing: '0.02em',
                  textShadow: '1px 1px 0px rgba(0,0,0,0.08)',
                }}
              >
                M<span className="text-teal-600">Y</span>RVA
              </span>
            </motion.div>
          </a>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={item === 'Features' ? '/features' : `/#${item.toLowerCase().replace(/ /g, '-')}`}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: easeOutQuint }}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            className="hidden md:inline-flex px-6 py-2.5 bg-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg font-medium"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            View Architecture
          </motion.button>

          <motion.button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden w-11 h-11 rounded-xl border border-gray-200 bg-white shadow-sm flex items-center justify-center"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span className="sr-only">Open menu</span>
            <div className="relative w-5 h-4">
              <motion.span
                className="absolute left-0 top-0 w-5 h-0.5 bg-gray-800 rounded"
                animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 top-[7px] w-5 h-0.5 bg-gray-800 rounded"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 top-[14px] w-5 h-0.5 bg-gray-800 rounded"
                animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>
        </div>
      </nav>

      {isMenuOpen && (
        <motion.div
          className="md:hidden px-4 pb-4"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: easeOutQuint }}
        >
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm py-2">
            {navItems.map((item) => (
              <a
                key={`mobile-${item}`}
                href={item === 'Features' ? '/features' : `/#${item.toLowerCase().replace(/ /g, '-')}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
