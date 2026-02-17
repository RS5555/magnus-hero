"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({
  finishLoading,
}: {
  finishLoading: () => void;
}) {
  useEffect(() => {
    const timeout = setTimeout(() => finishLoading(), 2500); // Adjust duration as needed
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#fdfdfd]"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <img
            src="/Magnus Corp_Logo.png"
            alt="Magnus Logo"
            className="h-20 w-auto object-contain"
          />
          {/* Shimmer Effect over Logo */}
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent w-full h-full"
          />
        </motion.div>

        {/* Brand Philosophy Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 flex flex-col items-center space-y-2"
        >
          <span className="text-[10px] uppercase tracking-[0.8em] text-[#8b735b] font-bold">
            Magnus Corp
          </span>
          <div className="h-[1px] w-12 bg-zinc-200" />
          <span className="text-[9px] uppercase tracking-widest text-zinc-400">
            Bigger. Brighter. Better.
          </span>
        </motion.div>

        {/* Progress Bar */}
        <div className="absolute -bottom-24 w-48 h-[1px] bg-zinc-100 overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full w-full bg-[#8b735b]"
          />
        </div>
      </div>
    </motion.div>
  );
}
