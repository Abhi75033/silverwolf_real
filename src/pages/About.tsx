
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Team from "@/components/sections/Team"; // Keeping the customized Team section
import {
  Award,
  Users,
  Coffee,
  Target,
  Rocket,
  ShieldCheck,
  Lightbulb,
  CheckCircle2
} from "lucide-react";

const stats = [
  { label: "High-Impact Projects", value: "100+", icon: Award },
  { label: "Global Partners", value: "50+", icon: Users },
  { label: "Engaged Hours", value: "5k+", icon: Coffee },
  { label: "Support Available", value: "24/7", icon: ShieldCheck },
];

const values = [
  { title: "Strategic Excellence", description: "Precision-engineered solutions tailored for corporate growth.", icon: Rocket },
  { title: "Unwavering Integrity", description: "Transparency and security at the core of every deployment.", icon: ShieldCheck },
  { title: "Iterative Innovation", description: "Pioneering the next wave of AI and web standards.", icon: Lightbulb },
  { title: "Client Success", description: "Dedicated partnership focused on long-term value creation.", icon: Target },
];

const milestones = [
  { year: "2022", title: "Inception", description: "Silverwolf established as a specialized technology consultancy." },
  { year: "2023", title: "Expansion", description: "Broadened expertise into specialized fintech and AI automation." },
  { year: "2024", title: "Enterprise Growth", description: "Scaled to support high-growth startups and established corporations." },
  { year: "2026", title: "Future Ready", description: "Leading the transition into autonomous digital ecosystem." },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us | Silver Wolf Technologies"
        description="Discover the engineering philosophy and strategic vision behind Silver Wolf Technologies. Dedicated to digital excellence since 2022."
        canonical="/about-us"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-hero-glow opacity-30 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-wolf-purple/10 border border-wolf-purple/20 rounded-full text-wolf-neon font-bold text-xs uppercase tracking-widest"
            >
              <Target className="h-3 w-3" />
              Our Mission
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-bold font-heading text-white leading-tight"
            >
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-wolf-purple to-wolf-neon">Digital Excellence.</span>
            </motion.h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Silver Wolf is a multidisciplinary technology firm dedicated to building
              high-performance digital assets that command authority and drive
              unparalleled business growth.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 md:p-8 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm text-center transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto bg-wolf-purple/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-wolf-purple/40 transition-colors">
                  <stat.icon className="h-6 w-6 text-wolf-neon" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black/50 border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-wolf-purple to-wolf-neon">Values</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We bridge the gap between creative storytelling and technical architecture, ensuring every line of code serves a larger strategic purpose.
              </p>
            </div>

            <div className="lg:col-span-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-wolf-purple/50 transition-all group">
                  <v.icon className="h-10 w-10 text-wolf-purple mb-6 group-hover:text-wolf-neon transition-colors" />
                  <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white text-center mb-20">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-wolf-purple to-wolf-neon">Journey</span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  <div className="w-full md:w-1/2 p-4 md:text-right">
                    {i % 2 === 0 && (
                      <div className="md:pr-12 md:text-right">
                        <span className="inline-block px-3 py-1 bg-wolf-purple/20 text-wolf-neon text-sm font-bold rounded-full mb-2">{m.year}</span>
                        <h3 className="text-xl font-bold text-white">{m.title}</h3>
                        <p className="text-gray-400 mt-2">{m.description}</p>
                      </div>
                    )}
                    {i % 2 !== 0 && (
                      <div className="md:hidden pl-12 text-left">
                        <span className="inline-block px-3 py-1 bg-wolf-purple/20 text-wolf-neon text-sm font-bold rounded-full mb-2">{m.year}</span>
                        <h3 className="text-xl font-bold text-white">{m.title}</h3>
                        <p className="text-gray-400 mt-2">{m.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-wolf-purple rounded-full border-4 border-black box-content z-10 shadow-[0_0_10px_rgba(108,43,217,0.5)]" />

                  <div className="w-full md:w-1/2 p-4">
                    {i % 2 !== 0 && (
                      <div className="md:pl-12 text-left">
                        <span className="inline-block px-3 py-1 bg-wolf-purple/20 text-wolf-neon text-sm font-bold rounded-full mb-2">{m.year}</span>
                        <h3 className="text-xl font-bold text-white">{m.title}</h3>
                        <p className="text-gray-400 mt-2">{m.description}</p>
                      </div>
                    )}
                    {i % 2 === 0 && (
                      <div className="md:hidden pl-12 text-left">
                        <span className="inline-block px-3 py-1 bg-wolf-purple/20 text-wolf-neon text-sm font-bold rounded-full mb-2">{m.year}</span>
                        <h3 className="text-xl font-bold text-white">{m.title}</h3>
                        <p className="text-gray-400 mt-2">{m.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Integration */}
      <Team />

    </Layout>
  );
};

export default About;
