import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Code2,
  Smartphone,
  TrendingUp,
  FileText,
  Video,
  Palette,
  Database,
  Layers,
  ShieldCheck,
  Command,
  Cpu,
  ArrowRight,
  Globe,
  Zap,
  Server
} from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";
import { useMobileMenu } from "@/components/ui/mobile-menu-context";

const silverWolfLogo = "/lovable-uploads/3e894869-f929-465a-a9e3-b4d19a94be22.png";

// Categorized Services Data
const serviceCategories = [
  {
    id: "engineering",
    label: "Core Engineering",
    icon: Server,
    color: "text-blue-400",
    items: [
      { title: "Web Ops", href: "/services/website-development", icon: Code2, desc: "Scalable Architectures" },
      { title: "Mobile Grid", href: "/services/mobile-app-development", icon: Smartphone, desc: "iOS/Android Neural Nets" },
      { title: "Data Core", href: "/services/database-solutions", icon: Database, desc: "Storage Matrices" },
      { title: "Cyber-Sec", href: "/services/website-bug-fixing", icon: ShieldCheck, desc: "System Hardening" },
    ]
  },
  {
    id: "strategic",
    label: "Strategic Ops",
    icon: Globe,
    color: "text-emerald-400",
    items: [
      { title: "Fin-Tech", href: "/services/finance-services", icon: TrendingUp, desc: "Strategic Auditing" },
      { title: "Compliance", href: "/services/gst-registration", icon: FileText, desc: "Regulatory Protocols" },
      { title: "CRM Nexus", href: "/services/crm-solutions", icon: Layers, desc: "Workflow Automation" },
    ]
  },
  {
    id: "creative",
    label: "Visual Synthesis",
    icon: Zap,
    color: "text-purple-400",
    items: [
      { title: "Visual Core", href: "/services/graphic-design", icon: Palette, desc: "Brand Identity Synthesis" },
      { title: "Motion VFX", href: "/services/video-editing", icon: Video, desc: "Cinematic Rendering" },
    ]
  }
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen: mobileMenuOpen, setIsOpen: setMobileMenuOpen } = useMobileMenu();
  const [activeTab, setActiveTab] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Modules", dropdown: true },
    { href: "/team", label: "Operatives" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 pointer-events-none"
    >
      {/* --- COMMAND DECK CAPSULE --- */}
      <div className={cn(
        "pointer-events-auto relative flex items-center gap-2 p-2 rounded-full border transition-all duration-500 mx-auto",
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] py-2 px-3 w-auto"
          : "bg-black/40 backdrop-blur-md border-white/5 py-3 px-4 w-auto md:min-w-[600px] justify-between"
      )}>

        {/* LEFT: Identity Chip */}
        <Magnetic>
          <Link to="/" className="flex items-center gap-3 px-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={silverWolfLogo}
                alt="SW"
                className="h-8 w-8 relative z-10 brightness-200 contrast-125 transition-transform group-hover:rotate-12"
              />
            </div>
            {!scrolled && (
              <div className="hidden md:flex flex-col leading-none">
                <span className="font-outfit text-sm font-black tracking-tighter text-white uppercase italic">
                  Silver Wolf
                </span>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
                  <span className="text-[8px] font-bold tracking-[0.2em] text-white/40 uppercase">
                    Sys_Online
                  </span>
                </div>
              </div>
            )}
          </Link>
        </Magnetic>

        {/* MOBILE: Holographic Badge */}
        <div className="md:hidden flex items-center gap-3 pr-1 border-l border-white/10 pl-3 ml-1">
          <div className="relative overflow-hidden rounded-full bg-white/5 border border-white/10 backdrop-blur-md px-3 py-1.5 min-w-[80px] flex justify-center shadow-[0_0_15px_rgba(212,255,51,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(212,255,51,0.6)]"></div>
              <div className="h-4 overflow-hidden relative w-12">
                <div className="absolute top-0 left-0 w-full animate-text-slide">
                  <div className="h-4 flex items-center text-[9px] font-black uppercase tracking-wider text-white">BUILD</div>
                  <div className="h-4 flex items-center text-[9px] font-black uppercase tracking-wider text-white">SCALE</div>
                  <div className="h-4 flex items-center text-[9px] font-black uppercase tracking-wider text-white">EVOLVE</div>
                  <div className="h-4 flex items-center text-[9px] font-black uppercase tracking-wider text-white">BUILD</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER: Navigation Array */}
        <nav className="hidden md:flex items-center gap-1 px-4">
          <LayoutGroup>
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none">
                      <Magnetic>
                        <div
                          className={cn(
                            "relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1 cursor-pointer",
                            location.pathname.startsWith("/services") ? "text-black" : "text-white/70 hover:text-white"
                          )}
                        >
                          {location.pathname.startsWith("/services") && (
                            <motion.div
                              layoutId="nav-bg"
                              className="absolute inset-0 bg-accent rounded-full z-[-1]"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          {item.label}
                          <ChevronDown className="w-3 h-3 opacity-50" />
                        </div>
                      </Magnetic>
                    </DropdownMenuTrigger>
                    {/* --- MEGA PANEL DROPDOWN --- */}
                    <DropdownMenuContent
                      align="center"
                      sideOffset={20}
                      className="w-[900px] p-0 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
                    >
                      <div className="flex h-full">
                        {/* Sidebar: System Status */}
                        <div className="w-64 bg-white/[0.02] border-r border-white/5 p-8 flex flex-col justify-between relative overflow-hidden">
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:10px_10px] opacity-20" />

                          <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-6 text-accent">
                              <Cpu className="w-4 h-4 animate-pulse" />
                              <span className="text-[10px] font-black uppercase tracking-[0.3em]">System_Ready</span>
                            </div>
                            <h3 className="text-2xl font-black text-white italic tracking-tighter mb-2">MODULES</h3>
                            <p className="text-xs text-white/40 leading-relaxed font-mono">
                              Select an operational protocol to initialize specific service vectors.
                            </p>
                          </div>

                          <div className="space-y-4 relative z-10">
                            <div className="p-4 bg-black/50 border border-white/10 rounded-xl">
                              <div className="flex justify-between items-center text-[10px] text-white/50 uppercase tracking-widest mb-2">
                                <span>Network Load</span>
                                <span className="text-accent">Stable</span>
                              </div>
                              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="w-3/4 h-full bg-accent/50 animate-pulse" />
                              </div>
                            </div>
                            <Link to="/services" className="flex items-center justify-between text-[10px] uppercase tracking-widest text-white/50 hover:text-accent transition-colors group">
                              <span>Full Matrix Access</span>
                              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>

                        {/* Main Grid: Categories */}
                        <div className="flex-1 p-8 grid grid-cols-2 gap-x-8 gap-y-8">
                          {serviceCategories.map((cat) => (
                            <div key={cat.id} className={cn("space-y-4", cat.id === "engineering" ? "col-span-2 grid grid-cols-2 gap-x-8" : "")}>
                              {cat.id === "engineering" ? (
                                <>
                                  <div className="col-span-2 flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
                                    <cat.icon className={cn("w-4 h-4", cat.color)} />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">{cat.label}</span>
                                  </div>
                                  {cat.items.map((item) => (
                                    <Link key={item.href} to={item.href} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                      <div className="mt-1 w-6 h-6 rounded-md bg-white/5 flex items-center justify-center text-white/40 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                                        <item.icon className="w-3 h-3" />
                                      </div>
                                      <div>
                                        <div className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-accent transition-colors">{item.title}</div>
                                        <div className="text-[10px] text-white/30">{item.desc}</div>
                                      </div>
                                    </Link>
                                  ))}
                                </>
                              ) : (
                                <div className="space-y-3">
                                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
                                    <cat.icon className={cn("w-4 h-4", cat.color)} />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">{cat.label}</span>
                                  </div>
                                  {cat.items.map((item) => (
                                    <Link key={item.href} to={item.href} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                      <div className="mt-1 w-6 h-6 rounded-md bg-white/5 flex items-center justify-center text-white/40 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                                        <item.icon className="w-3 h-3" />
                                      </div>
                                      <div>
                                        <div className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-accent transition-colors">{item.title}</div>
                                        <div className="text-[10px] text-white/30">{item.desc}</div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link to={item.href}>
                    <Magnetic>
                      <div
                        className={cn(
                          "relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors z-10",
                          activeTab === item.href ? "text-black" : "text-white/70 hover:text-white"
                        )}
                      >
                        {activeTab === item.href && (
                          <motion.div
                            layoutId="nav-bg"
                            className="absolute inset-0 bg-accent rounded-full z-[-1]"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        {item.label}
                      </div>
                    </Magnetic>
                  </Link>
                )}
              </div>
            ))}
          </LayoutGroup>
        </nav>

        {/* RIGHT: Action & Mobile */}
        <div className="flex items-center gap-2">
          <Magnetic>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-10 h-10 bg-white/5 hover:bg-white/10 hover:text-accent text-white/60 md:hidden hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </Magnetic>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
            <Button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-white/10 hover:bg-white/20 border border-white/5 text-white font-bold text-[10px] uppercase tracking-widest px-6 h-10 backdrop-blur-md"
            >
              <span className="mr-2 h-2 w-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]" />
              Inquire
            </Button>
          </motion.div>

        </div>

      </div>

      {/* --- MOBILE DATAPAD MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="fixed inset-4 z-[100] bg-[#050505] border border-white/10 rounded-[2rem] overflow-hidden flex flex-col pointer-events-auto shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 flex items-center justify-between border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <Command className="w-5 h-5 text-accent" />
                <span className="text-xs font-black tracking-widest text-white uppercase">Mobile_Interface</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="rounded-full hover:bg-white/10">
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
              <div className="space-y-8">
                {serviceCategories.map((cat, i) => (
                  <div key={cat.id} className="space-y-4">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 pb-2 border-b border-white/10 relative">
                      <div className="absolute -left-6 top-0 bottom-0 w-1 bg-accent/20" />
                      <cat.icon className="w-4 h-4 text-accent" />
                      <span className="text-xs font-black uppercase tracking-[0.3em] text-white/80">
                        {cat.label}
                      </span>
                      <div className="ml-auto text-[10px] text-white/20 font-mono">0{i + 1}//</div>
                    </div>

                    {/* Items Grid */}
                    <div className="grid grid-cols-1 gap-1">
                      {cat.items.map((item, idx) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="group relative flex items-center gap-4 p-4 overflow-hidden"
                        >
                          {/* Hover Highlight Background */}
                          <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />

                          {/* Left Active Marker */}
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

                          {/* Icon Box */}
                          <div className="relative z-10 w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-accent group-hover:border-accent/50 transition-colors">
                            <item.icon className="w-5 h-5" />
                          </div>

                          {/* Text Content */}
                          <div className="relative z-10 flex flex-col">
                            <div className="flex items-baseline gap-2">
                              <span className="text-sm font-black text-white uppercase tracking-wider leading-none mb-1 group-hover:text-accent transition-colors">
                                {item.title}
                              </span>
                            </div>
                            <span className="text-[10px] text-white/30 tracking-wide font-mono group-hover:text-white/60 transition-colors">
                              {item.desc}
                            </span>
                          </div>

                          {/* Right Arrow (Only on Hover) */}
                          <ArrowRight className="ml-auto w-4 h-4 text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 relative z-10" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Links (Home, About, etc) */}
              <div className="space-y-1 pt-4 border-t border-white/10">
                <p className="text-[10px] text-white/20 font-mono uppercase tracking-widest pl-4 mb-2">Navigation Override</p>
                {navItems.filter(item => !item.dropdown).map((item, i) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between p-4 hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-accent"
                  >
                    <span className="text-xl font-black text-white uppercase tracking-tighter group-hover:text-accent transition-colors">
                      {item.label}
                    </span>
                    <span className="text-[10px] font-mono text-white/20 group-hover:text-accent">
                      :0{i + 1}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/5 bg-black relative overflow-hidden">
              <div className="absolute inset-0 bg-accent/5" />
              <Button
                className="relative w-full bg-accent hover:bg-white text-black font-black uppercase tracking-widest h-14 rounded-none skew-x-[-10deg] hover:skew-x-0 transition-all duration-300 group overflow-hidden"
                onClick={() => { navigate('/contact'); setMobileMenuOpen(false); }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Initialize Contact <ArrowRight className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-white/50 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
              <div className="flex justify-between items-center mt-4">
                <span className="text-[9px] text-white/20 font-mono">SYS_ID: SW-MOBILE-V2</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
                  <div className="w-1 h-1 bg-accent/50 rounded-full" />
                  <div className="w-1 h-1 bg-accent/20 rounded-full" />
                </div>
              </div>
            </div>

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-[-1]" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
