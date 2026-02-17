// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// const projects = [
//   {
//     id: "01",
//     name: "Mai Residency",
//     location: "PCMC, Pune",
//     type: "Premium Residential",
//     sqft: "1.5L+ sq.ft",
//     image: "/Mai Residency night.jpg",
//     tagline: "A Statement of Living",
//     desc: "Redefining luxury living in Pimpri-Chinchwad with architectural brilliance.",
//   },
//   {
//     id: "02",
//     name: "Mangal Dhara",
//     location: "Chinchwad",
//     type: "Business Hub",
//     sqft: "80K+ sq.ft",
//     image: "/Mangal Dhara.jpg",
//     tagline: "Sky is the Limit",
//     desc: "A modern commercial landmark designed for the next generation of entrepreneurs.",
//   },
//   {
//     id: "03",
//     name: "Mangal Kalash",
//     location: "PCMC",
//     type: "Mega Township",
//     sqft: "2.25L sq.ft",
//     image: "/Mangal Kalash Night.jpg",
//     tagline: "225,000 Sq.Ft of Trust",
//     desc: "One of the largest residential developments delivered with 25 years of expertise.",
//   },
//   {
//     id: "04",
//     name: "Mangal Upvan 3d night",
//     location: "PCMC",
//     type: "Mega Township",
//     sqft: "2.25L sq.ft",
//     image: "/Mangal Upvan 3d night.jpg",
//     tagline: "225,000 Sq.Ft of Trust",
//     desc: "One of the largest residential developments delivered with 25 years of expertise.",
//   },
//    {
//     id: "05",
//     name: "Mangal Vishwa",
//     location: "PCMC",
//     type: "Mega Township",
//     sqft: "2.25L sq.ft",
//     image: "/Mangal Upvan 3d night.jpg",
//     tagline: "225,000 Sq.Ft of Trust",
//     desc: "One of the largest residential developments delivered with 25 years of expertise.",
//   },
//    {
//     id: "06",
//     name: "Parkway",
//     location: "PCMC",
//     type: "Mega Township",
//     sqft: "2.25L sq.ft",
//     image: "/Parkway 2.jpg",
//     tagline: "225,000 Sq.Ft of Trust",
//     desc: "One of the largest residential developments delivered with 25 years of expertise.",
//   },

// ];

// export default function ProjectPortal() {
//   const [activeIdx, setActiveIdx] = useState(0);

//   useEffect(() => {
//     projects.forEach((project) => {
//       const img = new window.Image();
//       img.src = project.image;
//     });
//   }, []);

//   return (
//     <section className="bg-[#fdfdfd] min-h-screen flex items-center py-20 px-10 border-t border-zinc-100">
//       <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row gap-12 h-[80vh]">
//         {/* 1. The Main Stage (Enhanced for White Theme) */}
//         <div className="lg:w-[70%] relative overflow-hidden rounded-sm group bg-zinc-100 shadow-2xl shadow-zinc-200/50">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeIdx}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }}
//               className="absolute inset-0"
//             >
//               <Image
//                 src={projects[activeIdx].image}
//                 alt={projects[activeIdx].name}
//                 fill
//                 priority
//                 sizes="70vw"
//                 className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
//               />
//               {/* Lighter Gradient for White Background integration */}
//               <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
//             </motion.div>
//           </AnimatePresence>

//           {/* Project Details Overlay */}
//           <div className="absolute inset-0 p-16 flex flex-col justify-end">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIdx}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 10 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <span className="text-[#8b735b] font-mono text-sm tracking-widest font-bold">
//                     {projects[activeIdx].id}
//                   </span>
//                   <div className="h-[1px] w-12 bg-[#8b735b]" />
//                   <span className="text-zinc-200 uppercase text-[10px] tracking-[0.4em] font-bold">
//                     {projects[activeIdx].type}
//                   </span>
//                 </div>
//                 <h2 className="text-7xl font-serif text-white mb-4 drop-shadow-lg">
//                   {projects[activeIdx].name}
//                 </h2>
//                 <p className="text-[#fdfdfd] italic text-2xl mb-6 drop-shadow-md">
//                   "{projects[activeIdx].tagline}"
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* 2. Vertical Navigator (Clean & Minimal) */}
//         <div className="lg:w-[30%] flex flex-col justify-between py-8 border-l border-zinc-200 pl-12">
//           <div className="space-y-3">
//             <span className="text-[10px] uppercase tracking-[0.6em] text-[#8b735b] font-bold">
//               The Magnus Portfolio
//             </span>
//             <h3 className="text-[#2a2a2a] text-4xl font-serif">
//               Explore Our <br />
//               Legacies
//             </h3>
//           </div>

//           <div className="flex flex-col gap-8">
//             {projects.map((project, idx) => (
//               <button
//                 key={project.id}
//                 onMouseEnter={() => setActiveIdx(idx)}
//                 className={`group text-left transition-all duration-300 relative ${
//                   activeIdx === idx ? "pl-8" : "opacity-30 hover:opacity-100"
//                 }`}
//               >
//                 <div className="flex items-baseline gap-5">
//                   <span
//                     className={`text-xs font-mono font-bold ${
//                       activeIdx === idx ? "text-[#8b735b]" : "text-zinc-400"
//                     }`}
//                   >
//                     {project.id}
//                   </span>
//                   <h4
//                     className={`text-3xl font-serif transition-colors ${
//                       activeIdx === idx ? "text-[#2a2a2a]" : "text-zinc-500"
//                     }`}
//                   >
//                     {project.name}
//                   </h4>
//                 </div>
//                 {activeIdx === idx && (
//                   <motion.div
//                     layoutId="activePointer"
//                     className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-[#8b735b]"
//                   />
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* Stats Footer (Boxed for structure) */}
//           <div className="pt-10 border-t border-zinc-100 grid grid-cols-2 gap-10">
//             <div className="space-y-1">
//               <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
//                 Scale
//               </p>
//               <p className="text-[#2a2a2a] font-serif text-xl">
//                 {projects[activeIdx].sqft}
//               </p>
//             </div>
//             <div className="space-y-1">
//               <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
//                 Location
//               </p>
//               <p className="text-[#2a2a2a] font-serif text-xl">
//                 {projects[activeIdx].location}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: "01",
    name: "Mai Residency",
    location: "PCMC",
    type: "Premium Residential",
    sqft: "1.5L+",
    image: "/Mai Residency night.jpg",
    ratio: "aspect-[16/9]",
  },
  {
    id: "02",
    name: "Mangal Dhara",
    location: "Chinchwad",
    type: "Business Hub",
    sqft: "80K+",
    image: "/Mangal Dhara.jpg",
    ratio: "aspect-[4/3]",
  },
  {
    id: "03",
    name: "Mangal Kalash",
    location: "PCMC",
    type: "Mega Township",
    sqft: "2.25L",
    image: "/Mangal Kalash.jpg",
    ratio: "aspect-square",
  },
  {
    id: "04",
    name: "Mangal Upvan",
    location: "PCMC",
    type: "Residential",
    sqft: "2.25L",
    image: "/Mangal Upvan 3d night.jpg",
    ratio: "aspect-[16/10]",
  },
  {
    id: "05",
    name: "Mangal Vishwa",
    location: "PCMC",
    type: "Residential",
    sqft: "1.8L",
    image: "/Mangal Vishwa 1.jpg",
    ratio: "aspect-[3/2]",
  },
  {
    id: "06",
    name: "Parkway",
    location: "PCMC",
    type: "Commercial",
    sqft: "1.2L",
    image: "/Parkway 2.jpg",
    ratio: "aspect-[21/9]",
  },
];

// export default function ProjectScreen() {
//   const [activeIdx, setActiveIdx] = useState(0);

//   return (
//     <section
//       id="projects"
//       className="relative bg-white min-h-screen py-32 px-10 border-t border-zinc-100"
//     >
//       <div className="absolute inset-0 z-0">
//           <img src="/bg10.png" alt="Magnus Background" className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-white/60" />
//         </div>
//       <div className="relative max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16">
//         {/* 1. THE ARCHIVE INDEX (Left Side) */}
//         <div className="lg:w-[30%] flex flex-col">
//           <div className="mb-12">
//             <span className="text-[10px] uppercase tracking-[0.8em] text-[#8b735b] font-bold block mb-2">
//               The Magnus Archive
//             </span>
//             <h2 className="text-5xl font-serif text-[#2a2a2a]">
//               25 Years of <br />
//               Delivery
//             </h2>
//           </div>

//           <div className="space-y-2 overflow-y-auto max-h-[60vh] pr-4 no-scrollbar">
//             {projects.map((project, idx) => (
//               <button
//                 key={project.id}
//                 onMouseEnter={() => setActiveIdx(idx)}
//                 className={`w-full text-left py-6 px-8 transition-all duration-500 rounded-sm flex items-center justify-between group ${
//                   activeIdx === idx
//                     ? "bg-zinc-50 border-l-4 border-[#8b735b]"
//                     : "hover:bg-zinc-50/50 border-l-4 border-transparent"
//                 }`}
//               >
//                 <div className="space-y-1">
//                   <h4
//                     className={`text-xl font-serif transition-colors ${activeIdx === idx ? "text-[#2a2a2a]" : "text-zinc-300"}`}
//                   >
//                     {project.name}
//                   </h4>
//                   <p className="text-[9px] uppercase tracking-widest text-zinc-400">
//                     {project.location} • {project.type}
//                   </p>
//                 </div>
//                 <span
//                   className={`font-mono text-[10px] ${activeIdx === idx ? "text-[#8b735b]" : "text-zinc-200"}`}
//                 >
//                   {project.id}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* 2. THE DYNAMIC STAGE (Right Side) */}
//         <div className="lg:w-[70%] flex flex-col justify-center">
//           <div className="relative w-full min-h-[500px] flex items-center justify-center">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIdx}
//                 initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
//                 animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
//                 exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
//                 transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
//                 className={`relative w-full shadow-2xl shadow-zinc-200/50 overflow-hidden ${projects[activeIdx].ratio}`}
//               >
//                 <Image
//                   src={projects[activeIdx].image}
//                   alt={projects[activeIdx].name}
//                   fill
//                   priority
//                   className="object-cover transition-all duration-1000 grayscale-[0.2] hover:grayscale-0"
//                 />

//                 {/* Minimalist Data Overlay */}
//                 <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/60 to-transparent text-white">
//                   <div className="flex justify-between items-end">
//                     <div>
//                       <p className="text-[10px] uppercase tracking-[0.4em] text-[#8b735b] font-bold mb-2">
//                         Technical Scale
//                       </p>
//                       <h3 className="text-3xl font-serif leading-none italic">
//                         {projects[activeIdx].sqft} Delivered
//                       </h3>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold mb-2">
//                         Identity
//                       </p>
//                       <p className="text-sm font-mono tracking-tighter uppercase">
//                         {projects[activeIdx].name} • Magnus Archive
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             {/* Background Floating Year Watermark */}
//             <motion.div
//               key={`year-${activeIdx}`}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 0.03, x: 0 }}
//               className="absolute -top-20 -right-10 text-[20rem] font-serif text-[#2a2a2a] select-none pointer-events-none"
//             >
//               {projects[activeIdx].id}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function ProjectScreen() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="projects"
      className="relative bg-white min-h-screen py-20 lg:py-32 px-6 md:px-10 border-t border-zinc-100 overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg10.png"
          alt="Magnus Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* 1. THE ARCHIVE INDEX (Sidebar) */}
        <div className="w-full lg:w-[30%] flex flex-col order-2 lg:order-1">
          <div className="mb-8 lg:mb-12 text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-[0.8em] text-[#8b735b] font-bold block mb-2">
              The Magnus Archive
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#2a2a2a] leading-tight">
              25 Years of <br className="hidden lg:block" />
              Delivery
            </h2>
          </div>

          {/* Horizontal Scroll on Mobile, Vertical on Desktop */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:max-h-[60vh] pb-4 lg:pb-0 pr-0 lg:pr-4 no-scrollbar snap-x">
            {projects.map((project, idx) => (
              <button
                key={project.id}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)} // Crucial for mobile
                className={`flex-shrink-0 w-[80%] sm:w-[60%] lg:w-full text-left py-4 lg:py-6 px-6 lg:px-8 transition-all duration-500 rounded-sm flex items-center justify-between group snap-center ${
                  activeIdx === idx
                    ? "bg-white lg:bg-zinc-50 border-l-4 border-[#8b735b] shadow-lg lg:shadow-none"
                    : "bg-white/50 lg:bg-transparent border-l-4 border-transparent"
                }`}
              >
                <div className="space-y-1">
                  <h4
                    className={`text-lg lg:text-xl font-serif transition-colors ${
                      activeIdx === idx
                        ? "text-[#2a2a2a]"
                        : "text-zinc-400 lg:text-zinc-300"
                    }`}
                  >
                    {project.name}
                  </h4>
                  <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-zinc-400">
                    {project.location} • {project.type}
                  </p>
                </div>
                <span
                  className={`font-mono text-[10px] ${
                    activeIdx === idx ? "text-[#8b735b]" : "text-zinc-200"
                  }`}
                >
                  {project.id}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. THE DYNAMIC STAGE (Visual Display) */}
        <div className="w-full lg:w-[70%] flex flex-col justify-center order-1 lg:order-2">
          <div className="relative w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -10 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className={`relative w-full shadow-2xl shadow-zinc-200/50 overflow-hidden rounded-sm ${projects[activeIdx].ratio} min-h-[300px] md:min-h-[500px]`}
              >
                <Image
                  src={projects[activeIdx].image}
                  alt={projects[activeIdx].name}
                  fill
                  priority
                  className="object-cover transition-all duration-1000 grayscale-[0.2] lg:grayscale-[0.5] hover:grayscale-0"
                />

                {/* Minimalist Data Overlay - Adjusted padding for mobile */}
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent text-white">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0">
                    <div>
                      <p className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-[#8b735b] font-bold mb-1 md:mb-2">
                        Technical Scale
                      </p>
                      <h3 className="text-xl md:text-3xl font-serif leading-none italic">
                        {projects[activeIdx].sqft} Delivered
                      </h3>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold mb-1 md:mb-2">
                        Identity
                      </p>
                      <p className="text-[10px] md:text-sm font-mono tracking-tighter uppercase">
                        {projects[activeIdx].name} • Magnus Archive
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Background Floating Year Watermark - Scaled for mobile */}
            <motion.div
              key={`year-${activeIdx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.03 }}
              className="absolute -top-10 lg:-top-20 -right-5 lg:-right-10 text-[8rem] md:text-[15rem] lg:text-[20rem] font-serif text-[#2a2a2a] select-none pointer-events-none"
            >
              {projects[activeIdx].id}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
