
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Play, Star, Zap, Code2, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const Hero = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 900], [1, 0]);

  // Mouse interaction for the liquid orb
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = ({ clientX, clientY }: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) * 100); // Percentage
    mouseY.set((clientY / innerHeight) * 100);
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen md:min-h-[110vh] flex items-start pt-32 md:pt-0 md:items-center justify-center overflow-hidden bg-[#050505]"
      onMouseMove={handleMouseMove}
    >
      {/* --- 1. LIQUID NOISE ENGINE (SVG FILTER) --- */}
      <svg className="hidden">
        <defs>
          <filter id="liquid-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="2" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="50" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* --- 2. THE FLUID BACKGROUND --- */}
      <div className="absolute inset-0 z-0 opacity-40">
        {/* Animated Orbs that get distorted by the filter */}
        <div
          className="absolute inset-0 filter-[url(#liquid-noise)] bg-black"
        >
          {/* Main Blob */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-accent/30 via-purple-500/20 to-blue-500/20 blur-[100px]"
            style={{ x: springX, y: springY }}
            animate={{
              scale: [1, 1.2, 0.9, 1],
              rotate: [0, 45, -45, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Secondary Blobs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        </div>

        {/* Film Grain Mesh */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      {/* --- 3. TYPOGRAPHY LAYER --- */}
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Left: Text Content */}
        <div className="lg:col-span-8 flex flex-col items-start text-left space-y-8">

          {/* Tagline Pill */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 pl-1"
          >
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full border border-black bg-white/10 backdrop-blur-md flex items-center justify-center text-accent">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <div className="w-8 h-8 rounded-full border border-black bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div className="w-8 h-8 rounded-full border border-black bg-white/10 backdrop-blur-md flex items-center justify-center text-blue-400">
                <Globe className="w-3.5 h-3.5" />
              </div>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent">Defining The Next Web</span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-0">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-black font-outfit text-white tracking-tighter leading-[0.9] mix-blend-screen"
            >
              DIGITAL
            </motion.h1>
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 100 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-2 bg-accent hidden md:block"
              />
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-6xl md:text-8xl lg:text-9xl font-serif italic font-thin text-white/50 tracking-tighter leading-[0.9]"
              >
                Alchemy
              </motion.h1>
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-white/60 max-w-xl font-light leading-relaxed border-l border-accent/30 pl-6"
          >
            We transmute complex code into liquid experiences. <br />
            <span className="text-white font-medium">No templates. No limits. Just pure engineering.</span>
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center gap-6 pt-4"
          >
            <Button
              size="lg"
              className="h-16 pl-8 pr-2 rounded-full bg-white text-black hover:bg-accent hover:text-black transition-colors duration-500 font-black text-sm uppercase tracking-widest group"
              onClick={() => navigate('/contact')}
            >
              Start Project
              <div className="ml-4 w-12 h-12 rounded-full bg-black text-white group-hover:bg-black/10 group-hover:text-black flex items-center justify-center transition-all">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
            </Button>

            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => navigate('/services')}>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:border-accent group-hover:text-accent transition-all">
                <Play className="w-4 h-4 fill-current ml-1" />
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-widest group-hover:text-accent transition-colors">Showreel</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Glass Card Cluster */}
        <div className="lg:col-span-4 hidden lg:flex flex-col gap-6 relative">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl skew-y-6 hover:skew-y-0 transition-transform duration-500 hover:bg-white/10 cursor-alias"
          >
            <div className="flex justify-between items-start mb-8">
              <Star className="w-8 h-8 text-accent fill-accent" />
              <span className="text-xs font-mono text-white/40">AWARDS_24</span>
            </div>
            <h3 className="text-3xl font-black text-white mb-2">Awwwards</h3>
            <p className="text-sm text-white/50">Site of the day — Nov 2024</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="p-8 rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl -ml-12 skew-y-6 hover:skew-y-0 transition-transform duration-500 hover:bg-black/60 cursor-alias"
          >
            <div className="flex justify-between items-start mb-8 text-white/40">
              <span className="text-xs font-mono text-accent">EFFICENCY</span>
              <div className="flex gap-1">
                <div className="w-1 h-3 bg-accent" />
                <div className="w-1 h-2 bg-accent/50" />
                <div className="w-1 h-4 bg-accent/20" />
              </div>
            </div>
            <h3 className="text-4xl font-mono text-white mb-1 tracking-tighter">98<span className="text-lg text-accent">%</span></h3>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50">Performance Score</p>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;

