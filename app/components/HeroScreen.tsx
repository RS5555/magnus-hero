"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function HeroScreen() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover grayscale-[0.2]"
        >
          {/* Ensure your video is in public/hero-video.mp4 */}
          <source src="/magnus 1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dynamic Overlay: Darker on mobile for better text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/10 z-10" />
      </div>

      {/* 2. Central Narrative Container */}
      {/* <div className="relative z-20 h-full w-full flex flex-col items-center justify-center px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-[1200px] w-full"
        >

          <span className="text-[9px] md:text-xs uppercase tracking-[0.5em] md:tracking-[0.8em] text-[#8b735b] font-bold block mb-4 md:mb-6">
            Establishing Legacies Since 2001
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[1.1] uppercase tracking-tighter mb-6 md:mb-10">
            Bigger. Brighter. <br />
            <span className="italic font-extralight text-[#8b735b]">
              Better.
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3 md:gap-6">
            <span className="h-[1px] w-8 md:w-16 bg-white/20" />
            <p className="text-[10px] md:text-sm lg:text-base text-zinc-300 font-light tracking-[0.2em] md:tracking-[0.4em] uppercase">
              Pimpri-Chinchwad's Premier Developers
            </p>
            <span className="h-[1px] w-8 md:w-16 bg-white/20" />
          </div>
        </motion.div>
      </div> */}

      {/* 3. Bottom UI: Responsive Socials & Navigation */}
      <div className="absolute bottom-6 md:bottom-12 left-0 w-full z-30 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-0">
          {/* Social Icon Tray: Centered on mobile, Left-aligned on desktop */}
          <div className="flex items-center gap-8 md:gap-10 order-2 md:order-1">
            <SocialIcon Icon={FaInstagram} href="#" />
            <SocialIcon Icon={FaFacebookF} href="#" />
            <SocialIcon Icon={FaLinkedinIn} href="#" />
            <SocialIcon Icon={FaYoutube} href="#" />
          </div>

          {/* Location Identity: Hidden on smallest mobile for clean look */}
          <div className="text-center md:text-right text-white/40 order-1 md:order-2">
            <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-[#8b735b] mb-1">
              Magnus Headquarters
            </p>
            <p className="text-[8px] md:text-[10px] tracking-tighter">
              411019 • PUNE, MAHARASHTRA
            </p>
          </div>

          {/* Scroll Indicator: Only visible on larger screens to avoid clutter */}
          {/* <div className="hidden lg:flex flex-col items-center gap-4 absolute left-1/2 -translate-x-1/2 bottom-0">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] h-20 bg-gradient-to-b from-[#8b735b] to-transparent"
            />
            <span className="text-[8px] uppercase tracking-widest text-white/30 rotate-90 origin-left translate-x-1">
              Scroll
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ Icon, href }: { Icon: any; href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, color: "#8b735b" }}
      className="text-zinc-900 hover:text-[#8b735b] transition-colors duration-300"
    >
      <Icon className="text-lg md:text-xl" />
    </motion.a>
  );
}
