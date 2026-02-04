import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { ArrowRight, Plus, MoveUpRight, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "GST & Tax Registration",
    slug: "gst-registration",
    description: "Expert handling of GST registration, ITR filing, and regulatory compliance. Ensuring your business stays legal and efficient in the complex financial landscape.",
    id: "01"
  },
  {
    title: "Video Editing",
    slug: "video-editing",
    description: "High-end video editing and motion graphics for social media and advertising. Cinematic storytelling designed for the modern digital age.",
    id: "02"
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Native and cross-platform mobile solutions for iOS and Android. Specialized in fintech and enterprise-grade ERP systems with robust security.",
    id: "03"
  },
  {
    title: "Graphic Design",
    slug: "graphic-design",
    description: "Complete brand design, from futuristic logos to enterprise UI design systems. Creating visual stories that command authority.",
    id: "04"
  },
  {
    title: "CRM Solutions",
    slug: "crm-solutions",
    description: "Custom database & CRM workflows tailored to your business operations. Focused on streamlining internal processes and lead management.",
    id: "05"
  },
  {
    title: "Full Stack Websites",
    slug: "website-development",
    description: "Enterprise-grade web applications built with React, Next.js, and Node.js. Focused on performance, high-speed SSR, and global scalability.",
    id: "06"
  },
  {
    title: "Bug Fixing & Maintenance",
    slug: "website-bug-fixing",
    description: "Dedicated support for bug fixing, security patches, and performance optimization. Keeping your digital assets 24/7 stable and secure.",
    id: "07"
  },
  {
    title: "Database Solutions",
    slug: "database-solutions",
    description: "Relational and NoSQL database architecture. Optimized for high-throughput, data integrity, and enterprise-level security protocols.",
    id: "08"
  },
  {
    title: "Finance Services",
    slug: "finance-services",
    description: "Professional consulting, tax audits, and wealth management. Strategic financial planning for modern businesses aiming for digital prestige.",
    id: "09"
  }
];

const Services = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  return (
    <section className="bg-black pt-12 md:pt-16 pb-0 relative overflow-hidden" id="services">
      {/* Structural Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Side Legends - Fixed and Subtle */}
      <div className="absolute left-10 bottom-40 hidden 2xl:block">
        <p className="text-[10px] font-black uppercase tracking-[0.8em] text-white/10 -rotate-90 origin-left">
          SERVICES
        </p>
      </div>
      <div className="absolute right-12 bottom-40 hidden 2xl:block flex flex-col items-center gap-12">
        <ArrowUp className="h-4 w-4 text-white/10" />
        <p className="text-[10px] font-black uppercase tracking-[0.8em] text-white/10 -rotate-90 origin-right whitespace-nowrap">
          SCROLL TO EXPLORE
        </p>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Refined "Marketify" Header */}
        <div className="relative mb-16 md:mb-24 max-w-[1400px]">
          <div className="flex flex-col items-start gap-3 mb-8 px-4 md:px-0">
            <div className="h-[2px] w-12 bg-accent/40" />
            <p className="text-white/30 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em]">
              Engineering Excellence & Strategic Growth
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 md:gap-12 px-4 md:px-0">
            <h2 className="fluid-h2 font-outfit font-black text-white leading-[1.1] md:leading-[0.9] tracking-tighter uppercase relative z-10">
              <span className="flex items-center gap-3 md:gap-6 flex-wrap align-middle">
                We
                <div className="hidden sm:inline-block h-[50px] w-[120px] lg:h-[80px] lg:w-[180px] rounded-full overflow-hidden border border-white/10 bg-zinc-900 group shadow-lg transition-transform hover:scale-105 duration-500 align-middle">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                    className="w-full h-full object-cover grayscale opacity-60 transition-opacity group-hover:opacity-100"
                    alt="Team Collaboration"
                  />
                </div>
                Understand <span className="text-white/20 italic">What</span>
              </span>
              <span className="block italic mt-1 md:mt-2">
                Your Business <span className="text-accent underline decoration-accent/30 underline-offset-[6px] md:underline-offset-[12px]">Needs</span>
              </span>
            </h2>

            <div className="flex items-center pt-4 lg:pt-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/contact')}
                className="group w-full sm:w-auto flex items-center justify-center gap-4 bg-transparent border border-accent/20 hover:border-accent hover:bg-accent text-accent hover:text-black px-8 py-4 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_20px_rgba(212,255,51,0.1)] hover:shadow-[0_0_30px_rgba(212,255,51,0.4)] whitespace-nowrap backdrop-blur-sm"
              >
                Get a Call Back
                <div className="bg-accent/10 group-hover:bg-black/10 rounded-full p-2 transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Improved Horizontal Scroll Layout */}
        <div
          ref={scrollRef}
          className="relative overflow-x-auto no-scrollbar -mx-8 px-8 snap-x snap-mandatory pt-10"
        >
          <div className="flex border-t border-white/5 min-h-[500px] w-max">
            {services.map((service, idx) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={cn(
                  "group relative flex flex-col justify-between py-10 md:py-12 px-8 md:px-12 border-r border-white/5 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer overflow-hidden bg-black snap-start shrink-0",
                  hoveredIdx === idx ? "w-[75vw] md:w-[550px] bg-zinc-950" : "w-[65vw] md:w-[300px] lg:w-[400px]"
                )}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setHoveredIdx(hoveredIdx === idx ? null : idx);
                  } else {
                    navigate(`/services/${service.slug}`);
                  }
                }}
              >
                {/* ID Label */}
                <div className="relative z-10 flex flex-col gap-8 md:gap-10">
                  <div className="flex items-center justify-between">
                    <span className="text-accent text-[10px] md:text-[11px] font-black tracking-[0.3em] opacity-30 group-hover:opacity-100 transition-opacity uppercase italic">
                      ITEM_{service.id}
                    </span>
                    <div className={cn(
                      "h-1.5 w-1.5 rounded-full bg-accent transition-all duration-700",
                      hoveredIdx === idx ? "opacity-100 scale-125 shadow-glow" : "opacity-0 scale-0"
                    )} />
                  </div>

                  <h3 className={cn(
                    "text-3xl md:text-3xl font-outfit font-black uppercase tracking-tighter transition-all duration-700 leading-[0.9] italic",
                    hoveredIdx === idx ? "text-white text-4xl md:text-5xl" : "text-white/40 group-hover:text-white"
                  )}>
                    {service.title.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h3>
                </div>

                {/* Mobile Tap prompt */}
                <div className="md:hidden mt-4">
                  <div className={cn(
                    "text-[9px] font-black text-accent uppercase tracking-widest transition-opacity duration-500",
                    hoveredIdx === idx ? "opacity-0" : "opacity-40 animate-pulse"
                  )}>
                    Tap to Inspect
                  </div>
                </div>

                {/* Hover Content */}
                <div className="relative z-10 flex flex-col justify-end mt-8 md:mt-0">
                  <div className={cn(
                    "transition-all duration-700 space-y-8 md:space-y-12",
                    hoveredIdx === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none h-0 md:h-auto overflow-hidden md:overflow-visible"
                  )}>
                    <p className="text-white/40 text-sm md:text-lg leading-relaxed max-w-[320px] font-medium italic">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-6 md:gap-8">
                      <motion.div
                        initial={false}
                        animate={hoveredIdx === idx ? { scale: 1, rotate: 0 } : { scale: 0.8, rotate: -45 }}
                        className="bg-accent h-16 w-16 md:h-24 md:w-24 rounded-full flex items-center justify-center shadow-glow group-hover:shadow-[0_0_50px_rgba(212,255,51,0.3)] transition-all duration-500"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/services/${service.slug}`);
                        }}
                      >
                        <MoveUpRight className="h-6 w-6 md:h-10 md:w-10 text-black" />
                      </motion.div>
                      <div className="flex flex-col gap-1">
                        <span className="text-white font-black text-[10px] md:text-xs uppercase tracking-[0.3em] leading-tight italic">Initiate</span>
                        <span className="text-white/30 text-[8px] md:text-[10px] uppercase tracking-widest italic leading-none">Capability Matrix</span>
                      </div>
                    </div>
                  </div>

                  {/* Corner Plus Icon */}
                  <div className={cn(
                    "absolute bottom-0 right-0 transition-all duration-500",
                    hoveredIdx === idx ? "opacity-0 translate-x-8" : "opacity-100 translate-x-0"
                  )}>
                    <Plus className="h-5 w-5 md:h-6 md:w-6 text-white/10" />
                  </div>
                </div>

                {/* Animated Accent Bar */}
                <motion.div
                  initial={false}
                  animate={hoveredIdx === idx ? { scaleX: 1 } : { scaleX: 0 }}
                  style={{ originX: 0 }}
                  className="absolute top-0 left-0 w-full h-[4px] bg-accent z-20"
                />

                {/* Background Watermark (Refined) */}
                <div className={cn(
                  "absolute -bottom-10 -left-10 text-[18rem] leading-none font-black text-white/[0.02] select-none transition-all duration-1000",
                  hoveredIdx === idx ? "opacity-100 blur-[2px] translate-y-0" : "opacity-0 translate-y-40"
                )}>
                  {service.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
