import React, { useState } from "react";
import { motion } from "framer-motion";
import FloatingShapes from "../components/FloatingShapes";
import { useTheme } from "../context/ThemeContext";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // YOUR FORMSPREE ENDPOINT
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjqwnjw";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const { isDarkMode } = useTheme();

  if (!isDarkMode) {
    return (
      <section id="contact" className="py-12 lg:py-20 px-4 md:px-10 bg-[#FCFCFA] relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD1DC]/20 border border-[#FFD1DC] mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4A4E69]">Contact</span>
            </div>
            <h2 className="font-quicksand text-3xl md:text-5xl lg:text-6xl font-bold text-[#4A4E69] leading-tight">
              Let's <span className="italic underline decoration-[#BDE0FE] decoration-[3px]">connect.</span>
            </h2>
            <p className="text-[#4A4E69]/70 text-lg mt-6 max-w-2xl mx-auto">I'm always interested in hearing about new projects and ideas. Feel free to reach out!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <motion.a href="https://github.com/FauzieA" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl text-center border border-[#4A4E69]/10 hover:shadow-md transition-all group">
              <FaGithub size={32} className="text-[#4A4E69] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-[#4A4E69] mb-1">GitHub</h3>
              <p className="text-sm text-[#4A4E69]/60">@FauzieA</p>
            </motion.a>
            
            <motion.a href="https://www.linkedin.com/in/fauziyya-ahmed/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl text-center border border-[#4A4E69]/10 hover:shadow-md transition-all group">
              <FaLinkedin size={32} className="text-blue-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-[#4A4E69] mb-1">LinkedIn</h3>
              <p className="text-sm text-[#4A4E69]/60">Connect with me</p>
            </motion.a>

            <motion.a href="mailto:fauxieahmed22@gmail.com" className="bg-white p-6 rounded-2xl text-center border border-[#4A4E69]/10 hover:shadow-md transition-all group">
              <FaEnvelope size={32} className="text-[#FFB7C5] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-[#4A4E69] mb-1">Email</h3>
              <p className="text-sm text-[#4A4E69]/60">Say hello</p>
            </motion.a>
          </div>

          <motion.form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 border border-[#4A4E69]/10">
            <div className="mb-6">
              <label className="block text-sm font-bold text-[#4A4E69] mb-2">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-[#4A4E69]/20 rounded-lg focus:outline-none focus:border-[#FFB7C5]" />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-[#4A4E69] mb-2">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-[#4A4E69]/20 rounded-lg focus:outline-none focus:border-[#FFB7C5]" />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold text-[#4A4E69] mb-2">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full px-4 py-3 border border-[#4A4E69]/20 rounded-lg focus:outline-none focus:border-[#FFB7C5]"></textarea>
            </div>

            <button type="submit" disabled={status === "submitting"} className="w-full bg-[#4A4E69] text-white font-bold py-3 rounded-lg hover:bg-[#4A4E69]/90 transition-all flex items-center justify-center gap-2">
              {status === "idle" && <><FaPaperPlane /> Send Message</>}
              {status === "submitting" && "Sending..."}
              {status === "success" && <><FaCheckCircle /> Sent!</>}
              {status === "error" && "Error - Try again"}
            </button>
          </motion.form>
        </div>
      </section>
    );
  }

  /* DARK MODE CONTACT */
  return (
    <section id="contact" className="w-full py-24 bg-[#07131d] relative overflow-hidden px-6">
      
      {/* --- BACKGROUND GRID --- */}
      <div className="absolute inset-0 flex justify-between pointer-events-none opacity-5">
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white hidden md:block"></div>
        <div className="w-[1px] h-full bg-white hidden lg:block"></div>
        <div className="w-[1px] h-full bg-white"></div>
      </div>

      <FloatingShapes />

      {/* --- HEADER --- */}
      <div className="relative z-10 text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="h-[1px] w-8 bg-[#C2A878]"></span>
          <span className="text-[#C2A878] font-mono text-sm tracking-widest uppercase">
            // Connect
          </span>
          <span className="h-[1px] w-8 bg-[#C2A878]"></span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#E8EAEF] tracking-tight">
          Get in Touch<span className="text-[#C2A878]">.</span>
        </h2>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* === LEFT COLUMN: INFO === */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <div className="mb-10">
             <h3 className="text-2xl font-bold text-[#E8EAEF] mb-6">
               Let's build something scalable.
             </h3>
             <p className="text-[#C9CCD3] text-lg leading-relaxed border-l-2 border-[#C2A878] pl-6">
               I am currently open to <strong className="text-white">internships</strong> and <strong className="text-white">collaborations</strong>. 
               Whether you have a question about my research, a project proposal, or just want to connect, feel free to reach out.
             </p>
          </div>

          <div className="space-y-8">
            {/* Email */}
            <div className="group">
              <label className="block text-xs font-mono text-[#C2A878] uppercase tracking-widest mb-2 opacity-80">
                // Email
              </label>
              <a href="mailto:fauxieahmed22@gmail.com" className="flex items-center gap-4 text-xl text-[#E8EAEF] hover:text-[#C2A878] transition-colors">
                <FaEnvelope /> fauxieahmed22@gmail.com
              </a>
            </div>

            {/* Location */}
           {/* Location - Updated for Mobility */}
<div className="group">
  <label className="block text-xs font-mono text-[#C2A878] uppercase tracking-widest mb-2 opacity-80">
    // Mobility
  </label>
  <div className="flex items-center gap-4 text-xl text-[#E8EAEF]">
    <FaMapMarkerAlt className="text-[#C2A878]" /> 
    <span>Open to Relocation / Remote</span>
  </div>
</div>

            {/* Socials */}
            <div>
              <label className="block text-xs font-mono text-[#C2A878] uppercase tracking-widest mb-4 opacity-80">
                // Socials
              </label>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/fauziyya-ahmed" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 bg-[#0d1b27] flex items-center justify-center text-[#C9CCD3] hover:bg-[#C2A878] hover:text-[#07131d] hover:border-[#C2A878] transition-all">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://github.com/FauzieA" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 bg-[#0d1b27] flex items-center justify-center text-[#C9CCD3] hover:bg-[#C2A878] hover:text-[#07131d] hover:border-[#C2A878] transition-all">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>


        {/* === RIGHT COLUMN: FORM === */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           viewport={{ once: true }}
        >
          <div className="relative bg-[#0d1b27] p-8 md:p-10 border border-white/10 shadow-2xl h-full min-h-[450px] flex items-center justify-center group">
            
            {/* Corner Brackets (Kept these for the "Tech" feel, but subtle) */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C2A878]/50"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C2A878]/50"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C2A878]/50"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C2A878]/50"></div>

            {/* --- SUCCESS STATE --- */}
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center w-full"
              >
                <div className="w-16 h-16 border-2 border-[#C2A878] text-[#C2A878] rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheckCircle size={30} />
                </div>
                <h3 className="text-xl font-bold text-[#E8EAEF] mb-4">
                  Message Sent
                </h3>
                <p className="text-[#C9CCD3] mb-8">
                  Thank you for reaching out. I'll get back to you shortly.
                </p>
                <button 
                  onClick={() => setStatus("idle")} 
                  className="text-sm text-[#C2A878] hover:text-white border-b border-[#C2A878] pb-1"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              
              /* --- FORM STATE --- */
              <form onSubmit={handleSubmit} className="w-full space-y-8 relative z-10">
                
                {/* Name Input */}
                <div className="relative group">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-[#E8EAEF] font-mono focus:outline-none focus:border-[#C2A878] transition-all placeholder-transparent peer disabled:opacity-50"
                    placeholder="Name"
                    id="name"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 -top-3.5 text-[#C2A878] text-xs font-mono uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#C9CCD3]/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#C2A878] peer-focus:text-xs"
                  >
                    Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-[#E8EAEF] font-mono focus:outline-none focus:border-[#C2A878] transition-all placeholder-transparent peer disabled:opacity-50"
                    placeholder="Email"
                    id="email"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 -top-3.5 text-[#C2A878] text-xs font-mono uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#C9CCD3]/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#C2A878] peer-focus:text-xs"
                  >
                    Email
                  </label>
                </div>

                {/* Message Input */}
                <div className="relative group">
                  <textarea 
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-[#E8EAEF] font-mono focus:outline-none focus:border-[#C2A878] transition-all placeholder-transparent peer resize-none disabled:opacity-50"
                    placeholder="Message"
                    id="message"
                  />
                  <label 
                    htmlFor="message" 
                    className="absolute left-0 -top-3.5 text-[#C2A878] text-xs font-mono uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#C9CCD3]/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#C2A878] peer-focus:text-xs"
                  >
                    Message
                  </label>
                </div>

                {/* Error Message */}
                {status === "error" && (
                  <p className="text-red-400 text-xs font-mono text-center">
                    Error sending message. Please try again.
                  </p>
                )}

                <button 
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-[#C2A878] text-[#07131d] font-bold font-mono text-sm uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {status === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message 
                      <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
    );
}