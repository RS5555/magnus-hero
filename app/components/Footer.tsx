"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] pt-24 pb-12 px-10 overflow-hidden">
      {/* Architectural Watermark */}
      <div className="absolute top-0 right-0 text-[18rem] font-serif text-white/[0.02] select-none pointer-events-none translate-y-[-20%]">
        MAGNUS
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Column 1: Brand Identity */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif text-white tracking-tighter">
                MAGNUS<span className="text-[#8b735b]">.</span>
              </h2>
              <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mt-2 font-bold">
                Magnificent World
              </p>
            </div>
            <p className="text-sm text-zinc-400 font-extrabold leading-relaxed">
              25 Years. One Location. Infinite Trust.
            </p>

            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Evolving from Pankaj Construction (est. 1998) to a
              Pimpri-Chinchwad landmark, we continue to build the foundations of
              your future.
            </p>
            <div className="flex gap-5">
              <SocialLink Icon={FaInstagram} href="#" />
              <SocialLink Icon={FaFacebookF} href="#" />
              <SocialLink Icon={FaLinkedinIn} href="#" />
              <SocialLink Icon={FaYoutube} href="#" />
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-white font-serif text-xl mb-8 italic">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <FooterLink label="Home" href="/" />
              <FooterLink label="About Us" href="#about" />
              <FooterLink label="Current Projects" href="#projects" />
              {/* <FooterLink label="Legacy Timeline" href="/about#timeline" /> */}
              <FooterLink label="Contact" href="#contact" />
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="text-white font-serif text-xl mb-8 italic">
              Connect
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <FaMapMarkerAlt className="text-[#8b735b] mt-1 shrink-0" />
                <span className="text-sm text-zinc-400 font-light group-hover:text-white transition-colors leading-relaxed">
                  Pankaj Construction, <br /> Pimpri-Chinchwad, Pune -
                  411019
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <FaPhoneAlt className="text-[#8b735b] shrink-0" />
                <span className="text-sm text-zinc-400 font-light group-hover:text-white transition-colors">
                  +91 7420030081
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <FaEnvelope className="text-[#8b735b] shrink-0" />
                <span className="text-sm text-zinc-400 font-light group-hover:text-white transition-colors">
                  info@magnuscorp.in
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div>
            <h3 className="text-white font-serif text-xl mb-8 italic">
              Bigger & Brighter
            </h3>
            <p className="text-sm text-zinc-500 font-light mb-6">
              Subscribe to stay updated with our upcoming landmarks.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-zinc-900 border-b border-zinc-800 py-3 px-0 text-white text-sm focus:outline-none focus:border-[#8b735b] transition-colors placeholder:text-zinc-700"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#8b735b] text-xs uppercase font-bold tracking-widest hover:text-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
              © {currentYear} Magnus Corp. All Rights Reserved.
            </p>
            {/* <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
              RERA Reg: P521000XXXXX
            </p> */}
          </div>
          {/* <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-600 uppercase tracking-widest">
              Designed by
            </span>
            <span className="text-[10px] text-[#8b735b] font-bold tracking-widest uppercase">
              Developer Savant
            </span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <a
        href={href}
        className="text-sm text-zinc-500 font-light hover:text-[#8b735b] hover:pl-2 transition-all duration-300"
      >
        {label}
      </a>
    </li>
  );
}

function SocialLink({ Icon, href }: { Icon: any; href: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3, color: "#8b735b" }}
      className="text-zinc-600 transition-colors"
    >
      <Icon size={18} />
    </motion.a>
  );
}
