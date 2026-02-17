// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const historyData = [
//   {
//     year: "1998",
//     title: "The First Step",
//     desc: "First Residential & Commercial Project: Kamala Corner Phase I & II, Prathmesh Heights.",
//   },
//   {
//     year: "2001",
//     title: "Commercial Landmarks",
//     desc: "Siddhi Park, Mangal Dham, Mangal Vihar. A landmark project of shops in Chinchwad.",
//   },
//   {
//     year: "2007",
//     title: "Row Houses & Flats",
//     desc: "Built Row Houses and Flats in 3 Projects: Mangal Chhaya & Mangal Tirth.",
//   },
//   {
//     year: "2011",
//     title: "Residential Success",
//     desc: "Completed Mangal Prabha & Vedant Puram.",
//   },
//   {
//     year: "2012",
//     title: "Large-Scale Horizons",
//     desc: "A large-scale Residential & Commercial project: Mangal Dhara & Mangal Shilp.",
//   },
//   {
//     year: "2014",
//     title: "Urban Ecosystems",
//     desc: "Developed Mangal Savera, Mangal Upwan & Dharmaganga with a full society.",
//   },
//   {
//     year: "2017",
//     title: "City Expansion",
//     desc: "Anushree - many more Residential projects in the City.",
//   },
//   {
//     year: "2019",
//     title: "New Communities",
//     desc: "Mangal Vishwa & Savita Calysta. New Residential project with happy families.",
//   },
//   {
//     year: "2021",
//     title: "The Mega Township",
//     desc: "Mangal Kalash & Vedant Pride. A 2.25L sq.ft. township for happy families.",
//   },
//   {
//     year: "2022",
//     title: "Local Presence",
//     desc: "Mangal Lakshmi and various new Residential and commercial projects.",
//   },
//   {
//     year: "2023",
//     title: "Future Ready",
//     desc: "Parkway. The journey continues to get Bigger and Brighter.",
//   },
// ];

// const philosophy = [
//   {
//     title: "THE MAGNUS TRUST",
//     img: "/card1.png", // Paths updated to your social folder
//     desc: "Trust starts with you and ends with us. We believe in delivering what we commit, with complete transparency and honesty.",
//   },
//   {
//     title: "THE MAGNUS EXPERTISE",
//     img: "/card2.png",
//     desc: "Backed by 25 years of building excellence, we share our expertise with the world to make a lasting impact.",
//   },
//   {
//     title: "THE MAGNUS QUALITY",
//     img: "/card3.png",
//     desc: "We only build the highest quality structures that stand the test of time and instill quality in all our creations.",
//   },
//   {
//     title: "THE MAGNUS FOCUS",
//     img: "/card4.png",
//     desc: "We're always looking ahead to embrace innovations and ideations that will make a difference in every life.",
//   },
// ];

// export default function AboutScreen() {
//   const [activeIdx, setActiveIdx] = useState(0);

//   return (
//     <section className="relative z-10 bg-[#fdfdfd] py-40 px-10 border-t border-zinc-100">

//       <div className="max-w-[1400px] mx-auto">

//         <div className="absolute inset-0 z-0">
//           <img
//             src="/bg4.png"
//             alt="Magnus Background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-white/40 z-10" />
//         </div>
//         {/* Header Section */}
//         <div className="relative flex flex-col lg:flex-row gap-20 items-start mb-20">
//           <div className="lg:w-3/5">
//             <h2 className="text-7xl font-serif text-[#2a2a2a] leading-[1.1] tracking-tight">
//               Building & Maintaining <br />
//               <span className="italic font-extralight text-[#8b735b]">
//                 Relationships for 25 Years.
//               </span>
//             </h2>
//           </div>
//           <div className="lg:w-2/5 pt-6 text-right">
//             <p className="text-sm text-zinc-400 font-bold uppercase tracking-[0.5em] leading-loose">
//               Rooted in the legacy of Mangal
//               <br />
//               Evolving into the vision of Magnus.
//             </p>
//           </div>
//         </div>

//         {/* Philosophy Cards: Using actual Images from your office branding */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10 bg-[#fdfdfd]">
//           {philosophy.map((item, idx) => (
//             <motion.div
//               key={item.title}
//               whileHover={{ y: -12, scale: 1.02 }}
//               className="relative group bg-white border border-zinc-200 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-500"
//             >
//               {/* Subtle Marble Texture Overlay (Reflecting office wall) */}
//               <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/marble-texture.jpg')] bg-cover" />

//               {/* Signage Screws */}
//               <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-zinc-200 shadow-inner" />
//               <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-zinc-200 shadow-inner" />
//               <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-zinc-200 shadow-inner" />
//               <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-zinc-200 shadow-inner" />

//               <div className="relative z-10 p-12 flex flex-col items-start h-full">
//                 {/* Icon - High Contrast Gold/Black */}
//                 <div className="w-40 h-40 flex items-center justify-center">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700"
//                   />
//                 </div>

//                 {/* Typography - Precision Hierarchy */}
//                 <div className="space-y-1 mb-8">
//                   <span className="text-[15px] font-bold tracking-[0.2em] text-[#2a2a2a] uppercase">
//                     The
//                   </span>
//                   <h3 className="text-2xl font-serif text-[#8b735b] leading-none tracking-tight">
//                     {item.title.split("THE ")[1].split(" ")[0]}
//                   </h3>
//                   <h3 className="text-3xl font-black text-[#2a2a2a] leading-none tracking-tighter">
//                     {item.title.split(" ").pop()}
//                   </h3>
//                 </div>

//                 {/* Content Divider */}
//                 <div className="w-10 h-[2px] bg-[#8b735b] mb-8 group-hover:w-20 transition-all duration-500" />

//                 {/* Body Text - Editorial Style */}
//                 <p className="text-[15px] text-zinc-500 font-light leading-relaxed tracking-wide">
//                   {item.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* <div className="flex flex-col lg:flex-row min-h-[500px] gap-20 border-t border-zinc-200 pt-24">
//           <div className="lg:w-1/3 flex flex-col space-y-4">
//             <span className="text-[10px] uppercase tracking-[0.8em] text-[#8b735b] font-bold mb-8">
//               Timeline of Legacy
//             </span>
//             <div className="flex flex-wrap lg:flex-col gap-4">
//               {historyData.map((item, idx) => (
//                 <button
//                   key={item.year}
//                   onMouseEnter={() => setActiveIdx(idx)}
//                   className={`text-left transition-all duration-300 flex items-center gap-4 group ${
//                     activeIdx === idx
//                       ? "translate-x-4"
//                       : "opacity-20 hover:opacity-100"
//                   }`}
//                 >
//                   <span
//                     className={`text-4xl font-serif ${activeIdx === idx ? "text-[#8b735b]" : "text-zinc-900"}`}
//                   >
//                     {item.year}
//                   </span>
//                   {activeIdx === idx && (
//                     <motion.div
//                       layoutId="activeLine"
//                       className="h-[1px] w-12 bg-[#8b735b]"
//                     />
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="lg:w-2/3 flex items-center bg-zinc-50 rounded-[40px] p-20 relative overflow-hidden">
//             <div className="absolute -right-20 -bottom-20 text-[20rem] font-serif text-zinc-200/40 select-none pointer-events-none">
//               {historyData[activeIdx].year}
//             </div>

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIdx}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.4 }}
//                 className="relative z-10"
//               >
//                 <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#8b735b] mb-6">
//                   {historyData[activeIdx].title}
//                 </h4>
//                 <p className="text-4xl lg:text-5xl font-serif text-zinc-800 leading-[1.2] italic mb-10">
//                   "{historyData[activeIdx].desc}"
//                 </p>

//                 <div className="flex items-center gap-6 text-zinc-400">
//                   <span className="text-[10px] uppercase tracking-widest font-bold">
//                     Magnus Archive
//                   </span>
//                   <div className="h-[1px] w-16 bg-zinc-300" />
//                   <span className="text-[10px] font-mono tracking-tighter uppercase">
//                     25 Years of Building Trust
//                   </span>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// }

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const philosophy = [
//   {
//     title: "THE MAGNUS TRUST",
//     img: "/card1.png",
//     desc: "Trust starts with you and ends with us. We believe in delivering what we commit, with complete transparency and honesty.",
//   },
//   {
//     title: "THE MAGNUS EXPERTISE",
//     img: "/card2.png",
//     desc: "Backed by 25 years of building excellence, we share our expertise with the world to make a lasting impact.",
//   },
//   {
//     title: "THE MAGNUS QUALITY",
//     img: "/card3.png",
//     desc: "We only build the highest quality structures that stand the test of time and instill quality in all our creations.",
//   },
//   {
//     title: "THE MAGNUS FOCUS",
//     img: "/card4.png",
//     desc: "We're always looking ahead to embrace innovations and ideations that will make a difference in every life.",
//   },
// ];

// export default function AboutScreen() {
//   return (
//     <section className="relative z-10 bg-[#FFFFFF] py-40 px-10 border-t border-zinc-100">
//       <div className="max-w-[1400px] mx-auto">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="/Big Balcony.png"
//             alt="Magnus Background"
//             className="absolute w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-white/80" />
//         </div>

//         <div className="relative flex flex-col lg:flex-row gap-20 items-start mb-24">
//           <div className="lg:w-3/5">
//             <h2 className="text-7xl font-serif text-[#2a2a2a] leading-[1.1] tracking-tight">
//               Building & Maintaining <br />
//               <span className="italic font-extralight text-[#8b735b]">
//                 Relationships for 25 Years.
//               </span>
//             </h2>
//           </div>
//           <div className="lg:w-2/5 pt-6 text-right">
//             <p className="text-sm text-zinc-400 font-bold uppercase tracking-[0.5em] leading-loose">
//               Rooted in the legacy of Mangal
//               <br />
//               Evolving into the vision of Magnus.
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {philosophy.map((item, idx) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1, duration: 0.8 }}
//               viewport={{ once: true }}
//               whileHover={{
//                 y: -20,
//                 scale: 1.03,
//                 boxShadow:
//                   "0 30px 60px -12px rgba(0, 0, 0, 0.15), 0 18px 36px -18px rgba(0, 0, 0, 0.2)",
//               }}
//               className="relative group bg-white border border-zinc-200 rounded-sm overflow-hidden transition-all duration-500 ease-out shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)]"
//             >
//               <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent z-20 pointer-events-none" />

//               <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/marble-texture.jpg')] bg-cover" />

//               <div className="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-300 shadow-inner z-30" />
//               <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-300 shadow-inner z-30" />
//               <div className="absolute bottom-4 left-4 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-300 shadow-inner z-30" />
//               <div className="absolute bottom-4 right-4 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-300 shadow-inner z-30" />

//               <div className="relative z-10 p-12 flex flex-col items-center text-center h-full">
//                 <div className="w-40 h-40 mb-6 flex items-center justify-center filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)] group-hover:drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] transition-all duration-500">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700"
//                   />
//                 </div>

//                 <div className="space-y-1 mb-8">
//                   <span className="text-[12px] font-bold tracking-[0.4em] text-zinc-300 uppercase group-hover:text-[#8b735b] transition-colors">
//                     The
//                   </span>
//                   <h3 className="text-2xl font-serif text-[#8b735b] leading-none tracking-tight">
//                     {item.title.split("THE ")[1].split(" ")[0]}
//                   </h3>
//                   <h3 className="text-4xl font-black text-[#2a2a2a] leading-none tracking-tighter mt-1">
//                     {item.title.split(" ").pop()}
//                   </h3>
//                 </div>

//                 <div className="w-12 h-[1px] bg-zinc-200 group-hover:bg-[#8b735b] group-hover:w-24 mb-8 transition-all duration-500" />

//                 <p className="text-[14px] text-zinc-400 font-light leading-relaxed tracking-wide group-hover:text-zinc-600 transition-colors">
//                   {item.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";
import { motion } from "framer-motion";

const philosophy = [
  {
    title: "THE MAGNUS TRUST",
    img: "/card1.png",
    desc: "Trust starts with you and ends with us. We believe in delivering what we commit, with complete transparency and honesty.",
  },
  {
    title: "THE MAGNUS EXPERTISE",
    img: "/card2.png",
    desc: "Backed by 25 years of building excellence, we share our expertise with the world to make a lasting impact.",
  },
  {
    title: "THE MAGNUS QUALITY",
    img: "/card3.png",
    desc: "We only build the highest quality structures that stand the test of time and instill quality in all our creations.",
  },
  {
    title: "THE MAGNUS FOCUS",
    img: "/card4.png",
    desc: "We're always looking ahead to embrace innovations and ideations that will make a difference in every life.",
  },
];

export default function AboutScreen() {
  return (
    <section className="relative z-10 bg-[#FFFFFF] py-20 md:py-32 lg:py-40 px-6 md:px-10 border-t border-zinc-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Background Layer - Optimized for all screens */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Big Balcony.png"
            alt="Magnus Background"
            className="absolute w-full h-full object-cover opacity-40 lg:opacity-100"
          />
          <div className="absolute inset-0 bg-white/80 md:bg-white/70" />
        </div>

        {/* Header Section: Stacked on Mobile, Row on Desktop */}
        <div className="relative flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-20 items-start mb-16 md:mb-24">
          <div className="w-full lg:w-3/5">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#2a2a2a] leading-[1.1] tracking-tight">
              Building & Maintaining <br className="hidden md:block" />
              <span className="italic font-extralight text-[#8b735b]">
                Relationships for 25 Years.
              </span>
            </h2>
          </div>
          <div className="w-full lg:w-2/5 lg:pt-6 text-left lg:text-right">
            <p className="text-[10px] md:text-sm text-zinc-400 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] leading-loose">
              Rooted in the legacy of Mangal
              <br />
              Evolving into the vision of Magnus.
            </p>
          </div>
        </div>

        {/* Philosophy Cards Grid: 1 col (Mobile) -> 2 cols (Tablet) -> 4 cols (Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {philosophy.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                scale: 1.02,
                boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.12)",
              }}
              className="relative group bg-white border border-zinc-200 rounded-sm overflow-hidden transition-all duration-500 ease-out shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)]"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent z-20 pointer-events-none" />

              {/* Texture */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/marble-texture.jpg')] bg-cover" />

              {/* Architectural Hardware (Screws) */}
              <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-zinc-200 z-30" />
              <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-zinc-200 z-30" />
              <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-zinc-200 z-30" />
              <div className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-zinc-200 z-30" />

              <div className="relative z-10 p-8 md:p-12 flex flex-col items-center text-center h-full">
                {/* Icon Container */}
                <div className="w-32 h-32 md:w-40 md:h-40 mb-6 flex items-center justify-center filter drop-shadow-md group-hover:drop-shadow-xl transition-all duration-500">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                <div className="space-y-1 mb-6 md:mb-8">
                  <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-zinc-300 uppercase group-hover:text-[#8b735b] transition-colors">
                    The
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif text-[#8b735b] leading-none tracking-tight">
                    {item.title.split("THE ")[1].split(" ")[0]}
                  </h3>
                  <h3 className="text-2xl md:text-4xl font-black text-[#2a2a2a] leading-none tracking-tighter mt-1">
                    {item.title.split(" ").pop()}
                  </h3>
                </div>

                <div className="w-10 md:w-12 h-[1px] bg-zinc-200 group-hover:bg-[#8b735b] group-hover:w-20 mb-6 md:mb-8 transition-all duration-500" />

                <p className="text-[13px] md:text-[14px] text-zinc-400 font-light leading-relaxed tracking-wide group-hover:text-zinc-600 transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}