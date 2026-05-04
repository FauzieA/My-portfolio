import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane, FaCheckCircle 
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjqwnjw";
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); 
      } else { setStatus("error"); }
    } catch (error) { setStatus("error"); }
  };

  return (
    <section id="contact" className="w-full py-32 bg-white px-6 font-sans border-t border-[#f0f0f0]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER: Consistent with the rest of the site --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 border-b-2 border-[#001F3F] pb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#FFB6C1] text-[10px] tracking-[0.5em] font-bold uppercase">Open.Channels</span>
              <div className="h-px w-12 bg-[#FFB6C1]" />
            </div>
            <h2 className="text-[#001F3F] font-serif text-5xl md:text-7xl italic leading-tight">
              Let’s Build <br /> Something.
            </h2>
          </div>
          <p className="max-w-xs text-[11px] text-[#001F3F] leading-relaxed uppercase tracking-[0.2em] font-black italic">
            Currently available for technical collaborations and professional opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* --- LEFT SIDE: Direct Contact --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="space-y-12">
              <div>
                <h3 className="text-[#001F3F] text-2xl font-serif italic mb-6 italic">Direct Correspondence</h3>
                <a href="mailto:fauxieahmed22@gmail.com" className="group flex items-center gap-4">
                  <div className="p-4 bg-[#fcfcfc] border border-[#f0f0f0] group-hover:border-[#FFB6C1] transition-all">
                    <FaEnvelope className="text-[#001F3F] group-hover:text-[#FFB6C1]" />
                  </div>
                  <span className="text-sm font-bold text-[#001F3F] underline decoration-[#FFB6C1] decoration-2 underline-offset-8">
                    fauxieahmed22@gmail.com
                  </span>
                </a>
              </div>

              <div>
                <h3 className="text-[#001F3F] text-2xl font-serif italic mb-6 italic">Digital Footprint</h3>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/fauziyya-ahmed" target="_blank" rel="noreferrer" 
                     className="w-14 h-14 border-2 border-[#001F3F] flex items-center justify-center text-[#001F3F] hover:bg-[#001F3F] hover:text-white transition-all">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://github.com/FauzieA" target="_blank" rel="noreferrer" 
                     className="w-14 h-14 border-2 border-[#001F3F] flex items-center justify-center text-[#001F3F] hover:bg-[#001F3F] hover:text-white transition-all">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: Formal Inquiry Form --- */}
          <div className="lg:col-span-7 bg-[#fcfcfc] p-10 md:p-16 border border-[#f0f0f0]">
            {status === "success" ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                <FaCheckCircle className="text-[#FFB6C1] mx-auto mb-6" size={60} />
                <h3 className="text-[#001F3F] font-serif text-3xl italic">Inquiry Received.</h3>
                <p className="text-[#001F3F]/60 text-xs mt-4 uppercase tracking-widest font-bold">I will respond shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                {['name', 'email', 'message'].map((field) => (
                  <div key={field} className="relative group">
                    <label className="text-[10px] text-[#001F3F] uppercase tracking-[0.3em] font-black mb-4 block">
                      {field}
                    </label>
                    {field === 'message' ? (
                      <textarea 
                        name={field} 
                        onChange={handleChange} 
                        required 
                        rows={4}
                        className="w-full bg-transparent border-b-2 border-[#001F3F]/10 py-3 text-[#001F3F] font-bold focus:outline-none focus:border-[#FFB6C1] transition-all resize-none placeholder:text-[#001F3F]/20" 
                        placeholder={`Enter your ${field}...`}
                      />
                    ) : (
                      <input 
                        name={field} 
                        type={field === 'email' ? 'email' : 'text'} 
                        onChange={handleChange} 
                        required 
                        className="w-full bg-transparent border-b-2 border-[#001F3F]/10 py-3 text-[#001F3F] font-bold focus:outline-none focus:border-[#FFB6C1] transition-all placeholder:text-[#001F3F]/20" 
                        placeholder={`Enter your ${field}...`}
                      />
                    )}
                  </div>
                ))}
                
                <button 
                  type="submit" 
                  disabled={status === "submitting"} 
                  className="w-full py-6 bg-[#001F3F] text-white font-black text-xs uppercase tracking-[0.4em] hover:bg-[#FFB6C1] transition-all flex items-center justify-center gap-4 group"
                >
                  {status === "submitting" ? "Processing..." : (
                    <>Submit Inquiry <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}