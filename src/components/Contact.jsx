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
    <section id="contact" className="w-full py-32 bg-white px-8 md:px-24 lg:px-40 font-sans border-t border-[#f0f0f0]">
      <div className="max-w-5xl mx-auto">
        
        {/* --- YOUR PREVIOUS HEADING STYLE (Retained) --- */}
        <div className="text-center mb-24">
          <h2 className="text-[#001F3F] text-4xl md:text-5xl font-serif mb-4 tracking-tight uppercase">Get In Touch</h2>
          <div className="h-[1px] w-12 bg-[#FFB6C1] mx-auto mb-6"></div>
          <p className="text-[#001F3F] text-[15px] font-light max-w-xl mx-auto italic">
            Currently available for technical collaborations and professional opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT SIDE: Tightened Scale --- */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-[#001F3F] text-[11px] font-black tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#FFB6C1] rounded-full"></span>
                Direct
              </h3>
              <a href="mailto:fauxieahmed22@gmail.com" className="group flex items-center gap-4">
                <span className="text-[13px] font-bold text-[#001F3F] border-b border-[#FFB6C1] pb-1 group-hover:text-[#FFB6C1] transition-all">
                  fauxieahmed22@gmail.com
                </span>
              </a>
            </div>

            <div>
              <h3 className="text-[#001F3F] text-[11px] font-black tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#001F3F] rounded-full"></span>
                Digital
              </h3>
              <div className="flex gap-6">
                <a href="https://linkedin.com/in/fauziyya-ahmed" target="_blank" rel="noreferrer" 
                   className="text-[#001F3F] hover:text-[#FFB6C1] transition-all">
                  <FaLinkedin size={18} />
                </a>
                <a href="https://github.com/FauzieA" target="_blank" rel="noreferrer" 
                   className="text-[#001F3F] hover:text-[#FFB6C1] transition-all">
                  <FaGithub size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: Tightened Inquiry Form --- */}
          <div className="lg:col-span-7">
            {status === "success" ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10">
                <FaCheckCircle className="text-[#FFB6C1] mb-4" size={30} />
                <h3 className="text-[#001F3F] font-serif text-2xl italic">Inquiry Received.</h3>
                <p className="text-[#001F3F] text-xs mt-2 uppercase tracking-widest font-bold">Talk soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {['name', 'email', 'message'].map((field) => (
                  <div key={field} className="relative group">
                    <label className="text-[9px] text-[#FFB6C1] uppercase tracking-[0.4em] font-black mb-2 block">
                      {field}
                    </label>
                    {field === 'message' ? (
                      <textarea 
                        name={field} 
                        onChange={handleChange} 
                        required 
                        rows={3}
                        className="w-full bg-transparent border-b border-[#f0f0f0] py-2 text-[14px] text-[#001F3F] font-light focus:outline-none focus:border-[#001F3F] transition-all resize-none placeholder:text-[#001F3F]/10" 
                        placeholder={`...`}
                      />
                    ) : (
                      <input 
                        name={field} 
                        type={field === 'email' ? 'email' : 'text'} 
                        onChange={handleChange} 
                        required 
                        className="w-full bg-transparent border-b border-[#f0f0f0] py-2 text-[14px] text-[#001F3F] font-light focus:outline-none focus:border-[#001F3F] transition-all placeholder:text-[#001F3F]/10" 
                        placeholder={`...`}
                      />
                    )}
                  </div>
                ))}
                
                <button 
                  type="submit" 
                  disabled={status === "submitting"} 
                  className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-[#001F3F] border-b-2 border-[#001F3F] pb-1 hover:text-[#FFB6C1] hover:border-[#FFB6C1] transition-all group"
                >
                  {status === "submitting" ? "Processing..." : (
                    <>Submit Inquiry <FaPaperPlane size={10} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
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