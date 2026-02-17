// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaClock,
// } from "react-icons/fa";

// export default function ContactPage() {
//   return (
//     <section className="relative bg-[#fdfdfd] min-h-screen pt-32 pb-20 px-10">
//       <div className="max-w-[1400px] mx-auto">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="/bg8.png"
//             alt="Magnus Background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-white/60" />
//         </div>
//         {/* Header Section */}
//         <div className="relative mb-20">
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-[10px] uppercase tracking-[0.6em] text-[#8b735b] font-bold block mb-4"
//           >
//             Get In Touch
//           </motion.span>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-7xl font-serif text-[#2a2a2a]"
//           >
//             Let's build your <br /> legacy together.
//           </motion.h1>
//         </div>

//         <div className="relative bg-[#fdfdfd] drop-shadow-2xl py-20 px-10 grid lg:grid-cols-2 gap-20 items-start">
//           {/* Left: Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             className="space-y-12"
//           >
//             <form className="space-y-8">
//               <div className="grid md:grid-cols-2 gap-8">
//                 <div className="relative border-b border-zinc-200 py-2 focus-within:border-[#8b735b] transition-colors">
//                   <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full bg-transparent outline-none text-[#2a2a2a] py-1"
//                   />
//                 </div>
//                 <div className="relative border-b border-zinc-200 py-2 focus-within:border-[#8b735b] transition-colors">
//                   <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     className="w-full bg-transparent outline-none text-[#2a2a2a] py-1"
//                   />
//                 </div>
//               </div>
//               <div className="relative border-b border-zinc-200 py-2 focus-within:border-[#8b735b] transition-colors">
//                 <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">
//                   Subject
//                 </label>
//                 <select className="w-full bg-transparent outline-none text-[#2a2a2a] py-1 appearance-none">
//                   <option>Residential Inquiry</option>
//                   <option>Commercial Spaces</option>
//                   <option>Career Opportunities</option>
//                   <option>General Feedback</option>
//                 </select>
//               </div>
//               <div className="relative border-b border-zinc-200 py-2 focus-within:border-[#8b735b] transition-colors">
//                 <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">
//                   Message
//                 </label>
//                 <textarea
//                   rows={4}
//                   className="w-full bg-transparent outline-none text-[#2a2a2a] py-1 resize-none"
//                 />
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="bg-[#2a2a2a] text-[#fdfdfd] px-12 py-4 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#8b735b] transition-colors"
//               >
//                 Send Message
//               </motion.button>
//             </form>

//             {/* Office Locations Info */}
//             <div className="pt-12 border-t border-zinc-100 grid sm:grid-cols-2 gap-10">
//               <div className="space-y-4">
//                 <h4 className="text-[#2a2a2a] font-serif text-xl">
//                   Headquarters
//                 </h4>
//                 <div className="space-y-2">
//                   <p className="flex items-start gap-3 text-sm text-zinc-500 font-light">
//                     <FaMapMarkerAlt className="text-[#8b735b] mt-1" />
//                     Pankaj Developers, Chinchwad, <br /> Pimpri-Chinchwad, Pune
//                     - 411019
//                   </p>
//                   <p className="flex items-center gap-3 text-sm text-zinc-500 font-light">
//                     <FaPhoneAlt className="text-[#8b735b]" />
//                     +91 98905 11276
//                   </p>
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <h4 className="text-[#2a2a2a] font-serif text-xl">
//                   Operating Hours
//                 </h4>
//                 <p className="flex items-start gap-3 text-sm text-zinc-500 font-light">
//                   <FaClock className="text-[#8b735b] mt-1" />
//                   Mon - Sat: 09:30 AM - 06:30 PM <br />
//                   Sunday: By Appointment Only
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right: Map Placeholder */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3 }}
//             className="h-[70vh] bg-zinc-100 relative group overflow-hidden shadow-2xl shadow-zinc-200/50"
//           >
//             {/* Replace this with your Google Maps Embed or API component */}
//             <div className="absolute inset-0 grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.4431713444853!2d73.72268841121516!3d18.6553535652591!2m3!1f0!2f0!3f0!3m2!1i1024!2i744!4f13.1!3m3!1m2!1s0x3ae334d06a87e147%3A0x4f8785a867081fb2!2sMagnus%20EVOQ!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
//                 className="w-full h-full border-0"
//                 allowFullScreen
//                 loading="lazy"
//               ></iframe>
//             </div>
//             <div className="absolute top-10 right-10 bg-white p-6 shadow-xl border-l-4 border-[#8b735b]">
//               <p className="text-[10px] uppercase tracking-widest text-[#8b735b] font-bold mb-1">
//                 Current Site
//               </p>
//               <p className="text-zinc-800 font-serif text-lg">
//                 Magnus EVOQ, Ravet
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

export default function ContactPage() {
  // 1. Form State Management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Residential Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // 2. Handle Input Changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Submit Logic to Node.js API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // xiie hxys obcx pdgj

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        // Reset form after success
        setFormData({
          name: "",
          email: "",
          subject: "Residential Inquiry",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#fdfdfd] min-h-screen pt-32 pb-20 px-10"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Background remains same */}
        <div className="absolute inset-0 z-0">
          <img
            src="/bg8.png"
            alt="Magnus Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/60" />
        </div>

        {/* Header Section */}
        <div className="relative mb-20">
          <motion.span className="text-[10px] uppercase tracking-[0.6em] text-[#8b735b] font-bold block mb-4">
            Get In Touch
          </motion.span>
          <motion.h1 className="text-7xl font-serif text-[#2a2a2a]">
            Let's build your <br /> legacy together.
          </motion.h1>
        </div>

        <div className="relative bg-[#fdfdfd] drop-shadow-2xl py-20 px-10 grid lg:grid-cols-2 gap-20 items-start">
          <motion.div className="space-y-12">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center space-y-4"
                >
                  <FaCheckCircle className="text-[#8b735b] text-6xl" />
                  <h3 className="text-3xl font-serif text-[#2a2a2a]">
                    Message Received
                  </h3>
                  <p className="text-zinc-500">
                    Our team at Magnus will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-[#8b735b] uppercase text-[10px] tracking-widest font-bold border-b border-[#8b735b]"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative border-b border-zinc-200 py-2 focus-within:border-[#8b735b] transition-colors">
                      <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">
                        Full Name
                      </label>
                      <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        className="w-full bg-transparent outline-none text-[#2a2a2a] py-1"
                      />
                    </div>
                    <div className="relative border-b border-zinc-200 py-2 focus-within:border-[#8b735b] transition-colors">
                      <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">
                        Email Address
                      </label>
                      <input
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        className="w-full bg-transparent outline-none text-[#2a2a2a] py-1"
                      />
                    </div>
                  </div>

                  <div className="relative border-b border-zinc-200 py-2 focus-within:border-[#8b735b] transition-colors">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent outline-none text-[#2a2a2a] py-1 appearance-none"
                    >
                      <option>Residential Inquiry</option>
                      <option>Commercial Spaces</option>
                      <option>Career Opportunities</option>
                      <option>General Feedback</option>
                    </select>
                  </div>

                  <div className="relative border-b border-zinc-200 py-2 focus-within:border-[#8b735b] transition-colors">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-transparent outline-none text-[#2a2a2a] py-1 resize-none"
                    />
                  </div>

                  <motion.button
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#2a2a2a] text-[#fdfdfd] w-full md:w-auto px-12 py-4 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#8b735b] transition-colors disabled:opacity-50"
                  >
                    {status === "loading" ? "Processing..." : "Send Message"}
                  </motion.button>

                  {status === "error" && (
                    <p className="text-red-500 text-xs mt-2">
                      Error sending message. Please try again.
                    </p>
                  )}
                </form>
              )}
            </AnimatePresence>

            {/* Office Info remains same */}
            <div className="pt-12 border-t border-zinc-100 grid sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="text-[#2a2a2a] font-serif text-xl">
                  Headquarters
                </h4>
                <div className="space-y-2">
                  <p className="flex items-start gap-3 text-sm text-zinc-500 font-light">
                    <FaMapMarkerAlt className="text-[#8b735b] mt-1" />
                    Pankaj Construction, Chinchwad, <br /> Pimpri-Chinchwad,
                    Pune - 411019
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-[#2a2a2a] font-serif text-xl">
                  Operating Hours
                </h4>
                <p className="flex items-start gap-3 text-sm text-zinc-500 font-light">
                  <FaClock className="text-[#8b735b] mt-1" />
                  Mon - Sat: 09:30 AM - 06:30 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side Map remains same */}
          <motion.div className="h-[70vh] bg-zinc-100 relative group overflow-hidden shadow-2xl shadow-zinc-200/50">
            <div className="absolute inset-0 grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.4431713444853!2d73.72268841121516!3d18.6553535652591!2m3!1f0!2f0!3f0!3m2!1i1024!2i744!4f13.1!3m3!1m2!1s0x3ae334d06a87e147%3A0x4f8785a867081fb2!2sMagnus%20EVOQ!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
