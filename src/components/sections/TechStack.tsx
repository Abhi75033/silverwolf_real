import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  Atom, Type, RectangleHorizontal, Wind, Bolt, RefreshCw, Move3d, Palette, BringToFront,
  Server, ServerCog, Database, DatabaseZap, Network,
  GitBranch, Container, Cloud, Triangle, AppWindow, Rocket, Settings, TestTube, CheckCheck,
  Figma, PenTool, MonitorPlay, SquarePen, Box, Sparkles, Film,
  Cpu, Terminal, Activity
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import { callGeminiAPI } from "@/lib/gemini";
import { GeminiModal } from "../ui/gemini-modal";

const TechStack = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [projectPrompt, setProjectPrompt] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Futuristic "Typing" effect for header
  const [headerText, setHeaderText] = useState("SYSTEM_OP_MODE: ACTIVE");

  const technologies = [
    {
      category: "Frontend//Unit",
      id: "frontend",
      icon: MonitorPlay,
      description: "Visual Interface & Interaction Protocols",
      techs: [
        { name: "React.js", icon: Atom, color: "text-cyan-400", level: "98%" },
        { name: "TypeScript", icon: Type, color: "text-blue-400", level: "95%" },
        { name: "Next.js", icon: RectangleHorizontal, color: "text-white", level: "92%" },
        { name: "Tailwind", icon: Wind, color: "text-cyan-300", level: "99%" },
        { name: "Vite", icon: Bolt, color: "text-yellow-400", level: "96%" },
        { name: "Framer", icon: Move3d, color: "text-pink-500", level: "90%" },
      ]
    },
    {
      category: "Backend//Core",
      id: "backend",
      icon: Server,
      description: "Server-Side Logic & Data Systems",
      techs: [
        { name: "Node.js", icon: Server, color: "text-green-500", level: "94%" },
        { name: "Express", icon: ServerCog, color: "text-white", level: "91%" },
        { name: "Postgres", icon: Database, color: "text-blue-300", level: "89%" },
        { name: "Firebase", icon: DatabaseZap, color: "text-yellow-500", level: "88%" },
        { name: "REST API", icon: Network, color: "text-purple-400", level: "95%" },
      ]
    },
    {
      category: "DevOps//Ops",
      id: "devops",
      icon: Cloud,
      description: "Deployment & Infrastructure Pipelines",
      techs: [
        { name: "Docker", icon: Container, color: "text-blue-500", level: "85%" },
        { name: "AWS", icon: Cloud, color: "text-yellow-600", level: "80%" },
        { name: "Vercel", icon: Triangle, color: "text-white", level: "97%" },
        { name: "Git", icon: GitBranch, color: "text-orange-500", level: "98%" },
      ]
    },
    {
      category: "Design//X",
      id: "design",
      icon: Figma,
      description: "User Experience & Creative Direction",
      techs: [
        { name: "Figma", icon: Figma, color: "text-purple-500", level: "96%" },
        { name: "Spline", icon: Box, color: "text-pink-400", level: "85%" },
        { name: "Adobe A.E.", icon: Film, color: "text-indigo-400", level: "88%" },
      ]
    }
  ];

  const handleStackRecommendation = () => {
    if (!projectPrompt.trim()) {
      setModalContent("ERROR: INPUT_MISSING. PLEASE DEFINITE PROJECT PARAMETERS.");
      setIsModalOpen(true);
      return;
    }
    const techList = technologies.map(cat => `\n[${cat.category}]\n${cat.techs.map(t => t.name).join(', ')}`).join('');
    const prompt = `ACT AS "CYBER-ARCHITECT". ANALYZE REQUEST: "${projectPrompt}". RECC: STACK FROM LIST: ${techList}. MODE: BRIEF, TECHNICAL, FUTURISTIC.`;

    setIsModalOpen(true);
    callGeminiAPI(prompt, setModalContent, setIsLoading);
  };

  const skillsKeywords = ["CYBERNETICS", "QUANTUM_UI", "NEURAL_NETS", "REACT_CORE", "NEXT_GEN", "FULL_STACK", "SYSTEMS"];
  const skillsKeywords2 = ["OPTIMIZATION", "LATENCY_NULL", "SECURITY_PRIME", "DESIGN_OPS", "DEPLOY_AUTO", "SCALE_INF"];

  return (
    <section className="relative bg-black overflow-hidden pt-24 md:pt-32 pb-6 md:pb-8 flex flex-col" id="stack">

      {/* --- CYBER BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Floor */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(1000px)_rotateX(60deg)_translateY(-100px)_scale(1.5)] opacity-20" />

        {/* Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] pointer-events-none z-50 opacity-20 mix-blend-overlay" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.9)_100%)] z-40" />
      </div>

      <div className="container mx-auto px-4 relative z-30">

        {/* --- HEADER: COMMAND LINE --- */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-accent/80 font-mono text-xs tracking-[0.3em] uppercase">
              <div className="w-2 h-2 bg-accent animate-pulse" />
              {headerText}
            </div>
            <h2 className="text-5xl md:text-7xl font-black font-outfit text-white uppercase italic tracking-tighter mix-blend-difference">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent animate-gradient-x">Command.</span>
            </h2>
          </div>

          {/* AI INPUT TERMINAL */}
          <div className="w-full lg:max-w-md relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-lg blur opacity-20 animate-pulse" />
            <div className="relative bg-black/80 border border-accent/30 rounded-lg p-1 flex items-center backdrop-blur-md">
              <div className="h-10 w-10 bg-accent/10 flex items-center justify-center rounded border border-accent/10 mr-2">
                <Terminal className="text-accent h-4 w-4" />
              </div>
              <input
                type="text"
                value={projectPrompt}
                onChange={(e) => setProjectPrompt(e.target.value)}
                placeholder="ENTER_MISSION_PARAMETERS..."
                className="flex-1 bg-transparent border-none outline-none ring-0 text-accent font-mono text-xs placeholder:text-accent/30 focus:ring-0 focus:outline-none uppercase tracking-wider"
              />
              <Button
                onClick={handleStackRecommendation}
                disabled={isLoading}
                size="sm"
                className="bg-accent text-black hover:bg-white border text-[10px] font-black tracking-widest px-4 h-8"
              >
                EXECUTE
              </Button>
            </div>
            {/* Decorative decorative lines */}
            <div className="absolute top-0 -left-2 w-1 h-3 bg-accent" />
            <div className="absolute bottom-0 -right-2 w-1 h-3 bg-accent" />
          </div>
        </div>


        {/* --- MAIN HUD INTERFACE --- */}
        <LayoutGroup>
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8 min-h-[600px] relative">

            {/* LEFT: CONTROL PANEL (Sidebar) */}
            <div className="w-full md:w-20 lg:w-80 flex-shrink-0 flex flex-row md:flex-col gap-2 relative z-20">
              {technologies.map((cat, idx) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(idx)}
                  className={cn(
                    "flex-1 md:flex-none relative group overflow-hidden border transition-all duration-300",
                    activeTab === idx
                      ? "h-auto md:h-32 bg-accent/5 border-accent shadow-[0_0_20px_rgba(212,255,51,0.1)]"
                      : "h-auto md:h-20 bg-black/40 border-white/10 hover:border-white/30"
                  )}
                >
                  {/* Active Corner Accent */}
                  {activeTab === idx && (
                    <>
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent" />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent" />
                    </>
                  )}

                  <div className="flex flex-col items-center md:items-start justify-center p-2 md:p-6 h-full gap-2 relative z-10">
                    <span className={cn(
                      "text-[8px] md:text-[10px] font-mono tracking-widest transition-colors",
                      activeTab === idx ? "text-accent" : "text-white/30"
                    )}>
                      0{idx + 1}
                    </span>
                    <div className="flex items-center gap-3">
                      <cat.icon className={cn(
                        "w-6 h-6 md:w-8 md:h-8 transition-all duration-300",
                        activeTab === idx ? "text-accent scale-110" : "text-white/50 group-hover:text-white"
                      )} />
                      <span className={cn(
                        "hidden lg:block text-xl font-black italic uppercase tracking-tighter transition-colors",
                        activeTab === idx ? "text-white" : "text-white/50 group-hover:text-white"
                      )}>
                        {cat.category.split("//")[0]}
                      </span>
                    </div>
                    {activeTab === idx && (
                      <motion.div
                        layoutId="sidebar-scan"
                        className="hidden lg:block text-[9px] text-accent/80 font-mono mt-1"
                      >
                        &gt; {cat.description}
                      </motion.div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* RIGHT: DATA TERMINAL (Content) */}
            <div className="flex-1 relative bg-black/60 border border-white/10 backdrop-blur-sm p-6 md:p-12 overflow-hidden flex flex-col clip-path-polygon">
              {/* Decorative "HUD" Overlay on the Content Box */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-20" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-20" />
              <div className="absolute top-4 right-4 flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>

              {/* Background Grid inside Terminal */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="relative h-full flex flex-col"
                >
                  <div className="mb-10 flex items-end justify-between border-b border-white/5 pb-4">
                    <div>
                      <p className="text-accent font-mono text-[10px] mb-1 typing-demo">
                        &gt; LOADING MODULE... {technologies[activeTab].id.toUpperCase()}_
                      </p>
                      <h3 className="text-4xl md:text-6xl font-black font-outfit text-white uppercase italic tracking-tighter">
                        {technologies[activeTab].category.split("//")[0]}
                      </h3>
                    </div>
                    <div className="text-right hidden sm:block">
                      <div className="text-2xl font-mono font-bold text-accent/50">
                        {technologies[activeTab].techs.length}<span className="text-xs align-top">UNIT</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 flex-1 content-start">
                    {technologies[activeTab].techs.map((tech, i) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 + 0.2 }}
                        onMouseEnter={() => setHoveredTech(tech.name)}
                        onMouseLeave={() => setHoveredTech(null)}
                        className={cn(
                          "relative group bg-white/5 border border-white/5 p-4 md:p-6 flex flex-col items-start justify-between min-h-[140px] md:min-h-[160px] cursor-crosshair transition-all duration-300 hover:bg-white/10 hover:border-accent/50",
                          tech.color.replace('text-', 'hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)]').replace('400', '400/20') // Mock dynamic shadow
                        )}
                      >
                        {/* Tech Icon */}
                        <div className="mb-4 p-2 bg-black border border-white/10 rounded-sm group-hover:border-accent transition-colors">
                          <tech.icon className={cn("w-6 h-6", tech.color)} />
                        </div>

                        {/* Tech Name */}
                        <div className="mt-auto">
                          <span className="text-[10px] font-mono text-white/40 block mb-1">
                            {i < 9 ? `0${i + 1}` : i + 1} // {tech.name.substring(0, 3).toUpperCase()}
                          </span>
                          <span className="text-sm md:text-lg font-bold text-white uppercase tracking-wider group-hover:text-accent transition-colors">
                            {tech.name}
                          </span>
                        </div>

                        {/* Hover Overlay Stats */}
                        <div className={cn(
                          "absolute top-2 right-2 flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        )}>
                          <span className="text-[9px] font-mono text-accent">{tech.level}</span>
                          <div className="w-12 h-0.5 bg-white/10 mt-1">
                            <div className="h-full bg-accent" style={{ width: tech.level }} />
                          </div>
                        </div>

                        {/* Corner Brackets */}
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-accent transition-colors" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-accent transition-colors" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </LayoutGroup>

        {/* --- MARQUEE AS 'DATA STREAM' --- */}
        <div className="mt-6 md:mt-10 border-y border-white/10 py-6 bg-black relative overflow-hidden group">
          {/* Border Tracers (Light streaks) */}
          <div className="absolute top-0 left-[-50%] w-[50%] h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent animate-border-tracer opacity-50" />
          <div className="absolute bottom-0 left-[-50%] w-[50%] h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent animate-border-tracer opacity-50" style={{ animationDelay: '1.5s' }} />

          {/* Decorative Background Metrics */}
          <div className="absolute inset-0 opacity-[0.03] font-mono text-[8px] flex flex-wrap gap-4 p-2 pointer-events-none select-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i}>0x{Math.random().toString(16).slice(2, 6).toUpperCase()}</span>
            ))}
          </div>

          <div className="flex items-center gap-4 px-6 mb-4 relative z-10">
            <div className="flex items-center gap-3 group/label cursor-default">
              <div className="relative">
                <Activity className="w-4 h-4 text-accent animate-pulse" />
                <div className="absolute inset-0 bg-accent blur-md opacity-20 animate-pulse" />
              </div>
              <span className="text-[10px] md:text-[11px] font-mono text-accent font-black tracking-[0.3em] md:tracking-[0.5em] uppercase italic hover-cyber-glitch">
                Live Data Stream
              </span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-accent/20 to-transparent" />
            <div className="hidden sm:flex items-center gap-3 font-mono text-[8px] md:text-[9px] text-white/20">
              <span>LATENCY: 4ms</span>
              <div className="w-1 h-1 bg-accent/40 rounded-full" />
              <span>SEC: PRIME</span>
            </div>
          </div>

          <Marquee
            keywords={[...skillsKeywords, ...skillsKeywords2]}
            direction="left"
            className="opacity-100 text-glow"
          >
            {[...skillsKeywords, ...skillsKeywords2].map((word, i) => (
              <div key={i} className="flex items-center mx-3 md:mx-6">
                <span className="text-accent/30 font-mono text-[10px] md:text-xs mr-1 md:mr-2">[</span>
                <span className="text-white text-[10px] md:text-xs font-mono font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase hover:text-accent transition-colors duration-300">
                  {word}
                </span>
                <span className="text-accent/30 font-mono text-[10px] md:text-xs ml-1 md:mr-2">]</span>
              </div>
            ))}
          </Marquee>
        </div>

      </div>

      <GeminiModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={modalContent}
        isLoading={isLoading}
      />
    </section>
  );
};

export default TechStack;
