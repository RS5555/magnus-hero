"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Optimized Scroll Function for Mobile
  const handleScrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();

    // 1. Close the mobile menu first
    setIsOpen(false);

    // 2. Extract ID
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    // 3. Execute Scroll
    if (elem) {
      // Small delay ensures the menu closing doesn't 'jerk' the scroll animation
      setTimeout(() => {
        window.scrollTo({
          top: elem.offsetTop - 80, // Offset for navbar height
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled || isOpen
          ? "bg-neutral-900 shadow-md py-4"
          : "bg-neutral-900 backdrop-blur-md py-6"
      } border-b border-white/10`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10">
        {/* 1. LEFT: Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="pointer-events-auto">
            <img
              src="/Magnus Corp_Logo_White.png"
              alt="Magnus Logo"
              className="h-10 md:h-14 w-auto object-contain transition-all duration-500"
            />
          </Link>
        </div>

        {/* 2. CENTER: Navigation Tabs (Desktop Only) */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-300 text-white hover:text-[#8b735b]"
                >
                  {link.name}
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#8b735b] transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </div>

        {/* 3. RIGHT: Enquire Button & Burger */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <button
            onClick={() => {
              const elem = document.getElementById("contact");
              if (elem)
                window.scrollTo({
                  top: elem.offsetTop - 80,
                  behavior: "smooth",
                });
            }}
            className="hidden sm:block text-[9px] font-black uppercase tracking-[0.3em] px-8 py-3 rounded-sm transition-all duration-500 active:scale-95 bg-white text-[#2a2a2a] hover:bg-[#8b735b] hover:text-white"
          >
            Enquire Now
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white transition-colors"
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Fixed Height and Z-Index */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[70px] left-0 w-full bg-neutral-900 lg:hidden overflow-hidden z-[99]"
          >
            <ul className="flex flex-col items-center justify-start pt-20 gap-10">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-2xl font-serif uppercase tracking-[0.2em] text-white hover:text-[#8b735b] transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}

              {/* Mobile Only Enquire Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => {
                  setIsOpen(false);
                  const elem = document.getElementById("contact");
                  if (elem)
                    window.scrollTo({
                      top: elem.offsetTop - 80,
                      behavior: "smooth",
                    });
                }}
                className="mt-10 text-[10px] font-black uppercase tracking-[0.3em] px-10 py-4 bg-[#8b735b] text-white rounded-sm"
              >
                Enquire Now
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
