import { motion } from "framer-motion";
import { ArrowLeft, ShieldAlert, Cpu, Terminal } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Visual Glitch Elements */}
      <div className="absolute top-20 left-20 w-px h-64 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-20 right-20 w-px h-64 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="container max-w-4xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">

          {/* Main Error Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full animate-pulse" />
            <div className="relative bg-white/5 border border-white/10 p-10 rounded-[3rem] glass">
              <ShieldAlert className="h-24 w-24 text-accent animate-pulse" />
            </div>

            {/* Floating Technical Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-12 bg-black border border-white/10 rounded-xl px-4 py-2 flex items-center gap-3 shadow-2xl"
            >
              <Cpu className="h-4 w-4 text-accent" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">Status: 404_VOID</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-12 bg-black border border-white/10 rounded-xl px-4 py-2 flex items-center gap-3 shadow-2xl"
            >
              <Terminal className="h-4 w-4 text-accent" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">Error: PROTOCOL_LOCKED</span>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="fluid-h1 font-outfit font-black text-white leading-none tracking-tighter uppercase italic"
            >
              Lost <br />
              <span className="text-accent underline decoration-white/10 underline-offset-[12px] md:underline-offset-[20px]">Signal.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl text-white/40 font-medium italic max-w-2xl mx-auto leading-relaxed"
            >
              The requested operational node does not exist within the current digital infrastructure.
              Mission parameters have been recalibrated.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 pt-8 w-full sm:w-auto"
          >
            <Button
              asChild
              className="bg-accent hover:bg-white text-black font-black h-16 px-12 rounded-2xl shadow-glow transition-all active:scale-95 uppercase tracking-widest text-sm"
            >
              <Link to="/">
                <ArrowLeft className="mr-3 h-5 w-5" />
                Return to Command
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-white/10 text-white hover:bg-white/5 h-16 px-12 rounded-2xl transition-all uppercase tracking-widest text-sm"
            >
              <Link to="/contact">Report Anomaly</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between opacity-10 hidden md:flex">
        <div className="flex gap-12 font-black text-[10px] text-white tracking-[0.4em] uppercase">
          <span>ID: 404-X</span>
          <span>NODE: EDGE_SERVER_01</span>
        </div>
        <div className="font-black text-[10px] text-white tracking-[0.4em] uppercase">
          © SILVER WOLF TECHNOLOGIES // SYS_REV_2.4
        </div>
      </div>
    </div>
  );
};

export default NotFound;

