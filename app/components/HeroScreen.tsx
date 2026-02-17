"use client";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const scrollSteps = [
  {
    src: "/HomeImage1.png",
    scaleTarget: 3,
    zoomPoint: "40% 55%",
    heading: "Kiraye ka Ghar vs Apna Ghar",
    subHeading: "Dono mein farak sirf 'Deewaron' ka nahi, 'Haq' ka hota hai.",
  },
  {
    src: "/HomeImage9.png",
    scaleTarget: 3.0,
    zoomPoint: "50% 30%",
    heading: "Yaadon ki Seedhi",
    subHeading:
      "Har photo frame ek kahani kehti hai, jo sirf 'Apne Ghar' mein sajti hai.",
  },
  {
    src: "/HomeImage10.png",
    scaleTarget: 2.5,
    zoomPoint: "90% 10%",
    heading: "Ek Khwaab, Jo Ab Haqeeqat Banega",
    subHeading:
      "Bahar baith kar dekh raha hoon, mera parivar Magnus ki unchaiyon mein shaan se jee raha hai.",
  },
  {
    src: "/HomeImage7.png",
    scaleTarget: 2.5,
    zoomPoint: "90% 50%",
    heading: "Meri Jeet, Unki Muskurahat",
    subHeading:
      "Pimpri-Chinchwad mein ghar lena koi mazaak nahi, par 'Zidd' ho aur 'Magnus Corps' ka Sath ho toh har namumkin sapna, mumkin hai.",
  },
  {
    src: "/HomeImage5.png",
    scaleTarget: 1.0,
    zoomPoint: "50% 50%",
    heading: "Welcome to Magnus Family",
    subHeading: "Ye sirf ghar nahi, aapki 'Kamyabi' ki nishani hai.",
  },
];

export default function HeroScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      let index = latest >= 0.8 ? 4 : Math.floor(latest / 0.2);
      if (index !== activeIndex) setActiveIndex(index);
    });
  }, [scrollYProgress, activeIndex]);

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-[500vh] bg-white"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/bg1.png"
            alt="Magnus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/60 z-10" />
        </div>

        {/* Content Container */}
        <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 w-full flex flex-col h-full pt-24 md:pt-32 pb-8 md:pb-12">
          {/* Responsive Layout Wrapper */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full flex-grow gap-10 lg:gap-0">
            {/* 1. Text Content - Scales font size per device */}
            <div className="w-full lg:w-[45%] text-center lg:text-left order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="space-y-4 md:space-y-8"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2a2a2a] leading-[1.1] uppercase tracking-tighter drop-shadow-sm flex flex-col items-center lg:items-start">
                    {activeIndex === 0 ? (
                      <>
                        <span>Kiraye ka Ghar</span>
                        <span className="lg:ml-30 text-2xl md:text-3xl lg:text-4xl italic font-light text-[#8b735b] my-1 md:my-2 lowercase tracking-widest">
                          vs
                        </span>
                        <span>Apna Ghar</span>
                      </>
                    ) : activeIndex === 4 ? (
                      <>
                        <span className="text-2xl md:text-3xl lg:text-4xl italic font-light text-[#8b735b] my-1 md:my-2 lowercase tracking-widest flex items-center gap-4">
                          Welcome To
                          <span className="hidden md:block h-[1px] w-8 bg-[#8b735b]/30" />
                        </span>
                        <span>The Magnus Family</span>
                      </>
                    ) : (
                      scrollSteps[activeIndex].heading
                    )}
                  </h1>

                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center justify-center lg:justify-start gap-4">
                      <span className="h-[2px] w-8 md:w-12 bg-[#8b735b]" />
                      <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-[#8b735b] font-bold">
                        The Magnus Narrative
                      </span>
                    </div>
                    <p className="text-lg md:text-xl lg:text-2xl text-zinc-700 font-sans italic border-none lg:border-l-4 border-zinc-900 lg:pl-8 leading-relaxed px-4 lg:px-0">
                      "{scrollSteps[activeIndex].subHeading}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 2. Visual Stage - Dynamic Height for Mobile */}
            <div className="relative h-[35vh] md:h-[45vh] lg:h-[65vh] w-full lg:w-[50%] flex items-center justify-center order-1 lg:order-2">
              {scrollSteps.map((step, index) => (
                <ZoomLayer
                  key={step.src}
                  step={step}
                  index={index}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>

          {/* Footer UI - Responsive Stacking */}
          <div className="w-full mt-auto">
            <div className="w-full h-[1px] bg-zinc-200/50 relative mb-6 md:mb-8">
              <motion.div
                style={{ width: progressWidth }}
                className="absolute top-0 left-0 h-full bg-[#8b735b] shadow-[0_0_15px_rgba(139,115,91,0.5)]"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-400">
              <div className="flex gap-8 order-2 md:order-1">
                <SocialIcon Icon={FaInstagram} />
                <SocialIcon Icon={FaFacebookF} />
                <SocialIcon Icon={FaLinkedinIn} />
                <SocialIcon Icon={FaYoutube} />
              </div>
              <div className="text-center md:text-right order-1 md:order-2">
                <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold">
                  Pimpri-Chinchwad, Pune
                </p>
                <p className="text-[10px] md:text-xs font-medium text-zinc-600 mt-1">
                  Magnus Life • 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ Icon }: { Icon: any }) {
  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.2, color: "#8b735b" }}
      className="hover:text-[#8b735b] transition-colors"
    >
      <Icon className="text-lg md:text-xl" />
    </motion.a>
  );
}

function ZoomLayer({
  step,
  index,
  progress,
}: {
  step: any;
  index: number;
  progress: any;
}) {
  const totalSteps = 5;
  const start = index / totalSteps;
  const end = (index + 1) / totalSteps;

  const scale = useTransform(progress, [start, end], [1.1, step.scaleTarget]);

  const isLast = index === totalSteps - 1;
  const opacity = useTransform(
    progress,
    isLast ? [start - 0.05, start] : [start - 0.05, start, end - 0.05, end],
    isLast ? [0, 1] : [0, 1, 1, 0],
  );

  return (
    <motion.div
      style={{
        scale,
        opacity,
        transformOrigin: step.zoomPoint,
      }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <img
        src={step.src}
        alt={step.heading}
        className="w-full h-full object-contain filter drop-shadow-2xl px-4 md:px-0"
      />
    </motion.div>
  );
}

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";

// export default function HeroScreen() {
//   return (
//     <section
//       id="home"
//       className="relative h-screen w-full overflow-hidden bg-black"
//     >
//       {/* 1. Background Video Layer */}
//       <div className="absolute inset-0 z-0">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="h-full w-full object-cover grayscale-[0.2]"
//         >
//           {/* Ensure your video is in public/hero-video.mp4 */}
//           <source src="/magnus 1.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         {/* Dynamic Overlay: Darker on mobile for better text legibility */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/50 z-10" />
//       </div>

//       {/* 2. Central Narrative Container */}
//       {/* <div className="relative z-20 h-full w-full flex flex-col items-center justify-center px-6 md:px-12 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="max-w-[1200px] w-full"
//         >

//           <span className="text-[9px] md:text-xs uppercase tracking-[0.5em] md:tracking-[0.8em] text-[#8b735b] font-bold block mb-4 md:mb-6">
//             Establishing Legacies Since 2001
//           </span>

//           <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[1.1] uppercase tracking-tighter mb-6 md:mb-10">
//             Bigger. Brighter. <br />
//             <span className="italic font-extralight text-[#8b735b]">
//               Better.
//             </span>
//           </h1>

//           <div className="flex items-center justify-center gap-3 md:gap-6">
//             <span className="h-[1px] w-8 md:w-16 bg-white/20" />
//             <p className="text-[10px] md:text-sm lg:text-base text-zinc-300 font-light tracking-[0.2em] md:tracking-[0.4em] uppercase">
//               Pimpri-Chinchwad's Premier Developers
//             </p>
//             <span className="h-[1px] w-8 md:w-16 bg-white/20" />
//           </div>
//         </motion.div>
//       </div> */}

//       {/* 3. Bottom UI: Responsive Socials & Navigation */}
//       <div className="absolute bottom-6 md:bottom-12 left-0 w-full z-30 px-6 md:px-12">
//         <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-0">
//           {/* Social Icon Tray: Centered on mobile, Left-aligned on desktop */}
//           <div className="flex items-center gap-8 md:gap-10 order-2 md:order-1">
//             <SocialIcon Icon={FaInstagram} href="#" />
//             <SocialIcon Icon={FaFacebookF} href="#" />
//             <SocialIcon Icon={FaLinkedinIn} href="#" />
//             <SocialIcon Icon={FaYoutube} href="#" />
//           </div>

//           {/* Location Identity: Hidden on smallest mobile for clean look */}
//           <div className="text-center md:text-right text-white/40 order-1 md:order-2">
//             <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-[#8b735b] mb-1">
//               Magnus Headquarters
//             </p>
//             <p className="text-[8px] md:text-[10px] tracking-tighter">
//               411019 • PUNE, MAHARASHTRA
//             </p>
//           </div>

//           {/* Scroll Indicator: Only visible on larger screens to avoid clutter */}
//           {/* <div className="hidden lg:flex flex-col items-center gap-4 absolute left-1/2 -translate-x-1/2 bottom-0">
//             <motion.div
//               animate={{ y: [0, 15, 0] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//               className="w-[1px] h-20 bg-gradient-to-b from-[#8b735b] to-transparent"
//             />
//             <span className="text-[8px] uppercase tracking-widest text-white/30 rotate-90 origin-left translate-x-1">
//               Scroll
//             </span>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }

// function SocialIcon({ Icon, href }: { Icon: any; href: string }) {
//   return (
//     <motion.a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       whileHover={{ y: -5, color: "#8b735b" }}
//       className="text-white/50 hover:text-[#8b735b] transition-colors duration-300"
//     >
//       <Icon className="text-lg md:text-xl" />
//     </motion.a>
//   );
// }
