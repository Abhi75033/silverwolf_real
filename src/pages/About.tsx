import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import Team from "@/components/sections/Team";
import SEO from "@/components/ui/SEO";
import {
  Award,
  Users,
  Coffee,
  Code,
  Target,
  Heart,
  Lightbulb,
  ChevronRight,
  ShieldCheck,
  Rocket
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "High-Impact Projects", value: "100+", icon: Award },
  { label: "Global Partners", value: "50+", icon: Users },
  { label: "Engaged Hours", value: "5,000+", icon: Coffee },
  { label: "Optimized Services", value: "24/7", icon: ShieldCheck },
];

const values = [
  { title: "Strategic Excellence", description: "Precision-engineered solutions tailored for corporate growth.", icon: Rocket },
  { title: "Unwavering Integrity", description: "Transparency and security at the core of every deployment.", icon: ShieldCheck },
  { title: "Iterative Innovation", description: "Pioneering the next wave of AI and web standards.", icon: Lightbulb },
  { title: "Client Success", description: "Dedicated partnership focused on long-term value creation.", icon: Target },
];

const milestones = [
  { year: "2022", title: "Foundational Vision", description: "Silverwolf was established as a boutique technology consultancy." },
  { year: "2023", title: "Strategic Expansion", description: "Broadened expertise into specialized fintech and AI automation." },
  { year: "2024", title: "Enterprise Excellence", description: "Scaled to support high-growth startups and established corporations." },
  { year: "2026", title: "Future-Ready Systems", description: "Leading the transition into autonomous digital ecosystems." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Our Story | Silverwolf"
        description="Discover the engineering philosophy and strategic vision behind Silverwolf Technologies. Dedicated to digital excellence since 2022."
        canonical="/about"
      />
      <Navigation />

      <main className="pt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

        {/* Editorial Hero */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent font-extrabold text-[9px] uppercase tracking-widest"
              >
                <Target className="h-3 w-3" />
                Strategic Protocol Alpha
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="fluid-h1 font-outfit font-black text-white uppercase italic"
              >
                Engineering <br />
                <span className="text-accent underline decoration-white/10 underline-offset-[12px] md:underline-offset-[20px]">Prestige.</span>
              </motion.h1>
              <p className="text-lg md:text-2xl text-white/40 leading-relaxed font-medium max-w-2xl italic">
                Silver Wolf is a multidisciplinary technology firm dedicated to building
                high-performance digital assets that command authority and drive
                unparalleled business growth.
              </p>
            </div>

            {/* Dynamic Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-32">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 border border-white/5 rounded-[3rem] bg-white/5 shadow-2xl transition-all hover:border-accent/40 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-100 transition-all group-hover:scale-125">
                    <stat.icon className="h-10 w-10 text-accent" />
                  </div>
                  <stat.icon className="h-6 w-6 text-accent mb-6 group-hover:scale-110 transition-transform relative z-10" />
                  <h3 className="text-5xl font-outfit font-black text-white mb-2 relative z-10">{stat.value}</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/20 relative z-10">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Narrative Section */}
        <section className="section-padding bg-white/5 border-y border-white/5 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-px bg-white/5" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 md:gap-20 items-start">
              <div className="lg:col-span-12 mb-10 md:mb-16">
                <div className="flex items-center gap-4 px-4 md:px-0">
                  <div className="h-[2px] bg-accent w-16" />
                  <p className="text-accent font-black uppercase tracking-[0.4em] text-[10px]">The Silverwolf Protocol</p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-10 px-4 md:px-0">
                <h3 className="fluid-h2 font-outfit font-black text-white leading-none uppercase italic tracking-tighter">
                  Redefining the Standard of <span className="text-accent underline decoration-white/10 underline-offset-8 md:underline-offset-[12px]">Digital Craft.</span>
                </h3>
                <div className="space-y-6 text-lg md:text-xl text-white/30 leading-relaxed font-medium italic">
                  <p>
                    Established in 2022, Silver Wolf emerged from a clear necessity: enterprises needed a partner that understood both high-end engineering and the strategic demands of corporate growth.
                  </p>
                  <p>
                    Our approach is uniquely holistic. We bridge the gap between creative storytelling and technical architecture, ensuring every line of code serves a larger strategic purpose.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 grid gap-6 px-4 md:px-0">
                {values.map((v, i) => (
                  <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[2.5rem] shadow-2xl group hover:border-accent/30 transition-all">
                    <div className="flex items-center gap-5 mb-6">
                      <div className="p-4 rounded-2xl bg-white/5 text-accent border border-white/10 group-hover:bg-accent group-hover:text-black transition-all">
                        <v.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-outfit font-black text-white uppercase tracking-tight italic">{v.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-white/40 leading-relaxed font-medium italic">{v.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Evolution */}
        <section className="section-padding relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center gap-6 mb-20">
              <div className="h-[2px] w-16 bg-accent/30" />
              <h2 className="fluid-h2 font-outfit font-black text-white uppercase italic tracking-tighter text-center">Strategic <span className="text-accent underline decoration-white/10 underline-offset-8 md:underline-offset-[12px]">Evolution.</span></h2>
              <p className="text-white/40 text-sm font-medium uppercase tracking-[0.2em] italic">Charting our trajectory from a boutique agency to a global tech consultancy.</p>
            </div>

            <div className="relative max-w-5xl mx-auto px-4 md:px-0 flex flex-col gap-8 md:gap-0">
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 hidden md:block" />

              <div className="space-y-10 md:space-y-24">
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={cn(
                      "relative flex flex-col md:flex-row items-center justify-between md:gap-16",
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    )}
                  >
                    <div className="hidden md:block w-1/2" />

                    {/* Circle on line */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black border-[3px] border-accent shadow-glow z-10 hidden md:block" />

                    <div className="w-full md:w-1/2">
                      <div className="p-8 md:p-12 bg-white/5 border border-white/5 rounded-[3rem] shadow-2xl transition-all hover:border-accent/40 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:opacity-10 transition-opacity" />
                        <span className="inline-block px-5 py-2 bg-accent text-black text-[10px] font-black rounded-full mb-8 uppercase tracking-widest">{m.year}</span>
                        <h3 className="text-2xl md:text-4xl font-outfit font-black text-white mb-4 uppercase tracking-tighter italic group-hover:text-accent transition-colors leading-none">{m.title}</h3>
                        <p className="text-base md:text-lg text-white/30 leading-relaxed font-medium italic">"{m.description}"</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <Team />

        {/* Final CTA */}
        <section className="mission-padding bg-white/5 border-t border-white/5 relative overflow-hidden">
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blob opacity-10" />
          <div className="container mx-auto px-6 text-center relative z-10 space-y-10">
            <h2 className="fluid-h2 font-outfit font-black text-white uppercase italic tracking-tighter">
              Engage the <span className="text-accent underline decoration-4 underline-offset-[12px]">Elite.</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-xl font-medium italic">
              Ready to elevate your digital presence to a world-class standard?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
              <Button className="bg-accent text-black font-extrabold h-16 px-12 rounded-2xl hover:bg-white shadow-glow text-lg uppercase tracking-tighter">
                Consult Our Strategists
              </Button>
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 h-16 px-12 rounded-2xl text-lg uppercase tracking-tighter">
                Browse Repository
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};


export default About;