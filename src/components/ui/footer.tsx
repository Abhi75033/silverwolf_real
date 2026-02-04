import { motion, AnimatePresence } from "framer-motion";
import {
  Github, Linkedin, Twitter, Code2, Send,
  Smartphone, LineChart, FileText, Video,
  Palette, Database, Layers, ArrowRight
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "#", color: "hover:text-white" },
    { icon: Linkedin, label: "LinkedIn", url: "#", color: "hover:text-wolf-blue" },
    { icon: Twitter, label: "Twitter", url: "#", color: "hover:text-wolf-blue" }
  ];

  const footerNav = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Team", url: "/team" },
    { label: "Contact", url: "/contact" }
  ];

  const services = [
    { icon: Code2, title: "Web Development", desc: "Premium websites & UI/UX" },
    { icon: Smartphone, title: "Mobile Apps", desc: "Enterprise Android & Java" },
    { icon: LineChart, title: "Finance Services", desc: "Consulting & management" },
    { icon: FileText, title: "GST & Tax", desc: "Registration & compliance" },
    { icon: Video, title: "Video Editing", desc: "Creative motion graphics" },
    { icon: Palette, title: "Graphic Design", desc: "Brand identity & social" },
    { icon: Database, title: "CRM Solutions", desc: "Custom business workflows" },
    { icon: Layers, title: "Full Stack Websites", desc: "Complex scalable apps" }
  ];

  const taglines = ["Code.", "Create.", "Innovate."];
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for newsletter subscription would go here
  };

  const handleServiceClick = (title: string) => {
    // Navigate to services page with the slug or query
    const slug = title.toLowerCase().replace(/ & /g, "-and-").replace(/ /g, "-");
    navigate(`/services/${slug}`);
  };

  return (
    <footer className="section-padding bg-background relative overflow-hidden border-t border-white/5">

      {/* --- Ambient Background Glow --- */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-wolf-blue/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-wolf-purple/5 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* --- Top Section: Brand & Quick Links --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center mb-6">
              <Code2 className="h-8 w-8 text-accent mr-3" />
              <span className="text-2xl font-outfit font-black tracking-tighter text-white uppercase italic">
                Silver Wolf
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-sm mb-8 font-medium italic">
              Empowering the next generation of digital infrastructure with mission-critical engineering and elite design strategy.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-accent hover:border-accent/50 transition-all"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-8 px-1 border-l-2 border-accent/20">Operations</h3>
            <ul className="grid grid-cols-1 gap-4">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.url}
                    className="text-sm font-black text-white/40 hover:text-accent uppercase tracking-widest transition-all"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="sm:col-span-2 lg:col-span-2"
          >
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-8 px-1 border-l-2 border-accent">Newsletter Protocol</h3>
            <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-[2rem] p-6 md:p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full" />
              <p className="text-sm text-white/60 mb-6 font-medium leading-relaxed italic">Receive mission-critical updates and strategic technical insights directly.</p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="IDENT@COMM.PROTOCOL"
                  className="flex-1 bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-xs text-white placeholder:text-white/10 focus:outline-none focus:border-accent/40 uppercase tracking-widest"
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-white text-black font-black uppercase tracking-widest px-8 h-12 rounded-2xl transition-all shadow-glow active:scale-95 whitespace-nowrap italic"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* --- Middle Section: Services Grid --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/5 pt-12 mb-12"
        >
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-8 px-1 border-l-2 border-accent">Mission Capabilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (index * 0.05) }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleServiceClick(service.title)}
                className="group flex items-start space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-wolf-blue/20 transition-all cursor-pointer"
              >
                <div className={`p-3 rounded-lg bg-background/50 text-wolf-blue group-hover:text-wolf-purple transition-colors shadow-inner`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground group-hover:text-wolf-blue transition-colors mb-1">
                    {service.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Bottom Section: Copyright --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-8 relative border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} SilverWolf Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
