import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-32 bg-[#07131d] relative overflow-hidden"
    >
      {/* Soft background gold glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] blur-[160px] opacity-20"
        style={{ background: "#C2A878" }}
      />

      {/* Header */}
      <div className="text-center mb-16">
        <p className="tracking-[0.25em] text-sm mb-4" style={{ color: "#C2A878" }}>
          CONTACT
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "#E8EAEF" }}>
          Let’s Work Together
        </h2>
      </div>

      {/* Contact Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-3xl mx-auto bg-[#0c1824] border border-[#C2A87833]
                   p-10 rounded-2xl shadow-xl shadow-black/40"
      >
        {/* Email icon */}
        <div className="flex justify-center mb-8 text-[#C2A878]">
          <Mail size={40} />
        </div>

        {/* Form */}
        <form
          className="grid grid-cols-1 gap-6 text-[#E8EAEF]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block mb-2 text-sm text-[#C9CCD3]">Name</label>
            <input
              type="text"
              className="w-full p-4 rounded-lg bg-[#0e1a28] border border-[#C2A87833] 
                         text-white outline-none focus:border-[#C2A878]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-[#C9CCD3]">Email</label>
            <input
              type="email"
              className="w-full p-4 rounded-lg bg-[#0e1a28] border border-[#C2A87833] 
                         text-white outline-none focus:border-[#C2A878]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-[#C9CCD3]">Message</label>
            <textarea
              rows="5"
              className="w-full p-4 rounded-lg bg-[#0e1a28] border border-[#C2A87833] 
                         text-white outline-none focus:border-[#C2A878]"
            ></textarea>
          </div>

          {/* Button */}
          <button
            className="mt-4 bg-[#C2A878] text-[#0a1a28] py-3 px-8 rounded-lg font-medium 
                       hover:bg-[#d3bb90] transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
