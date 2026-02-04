import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  Loader2,
  CalendarDays,
  ArrowRight,
  X,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const contactDetails = [
  { icon: Mail, label: "Direct Email", value: "info@silverwolftechnologies.in ", color: "text-blue-500" },
  { icon: Phone, label: "Strategic Support", value: "+91 63947 53801", color: "text-emerald-500" },
  { icon: MapPin, label: "Global Presence", value: "Remote / Worldwide", color: "text-purple-500" },
];

const faqs = [
  {
    question: "What is your typical project engagement process?",
    answer: "Our process begins with a deep discovery phase to align on strategic goals, followed by iterative design, agile development, and a rigorous quality assurance cycle before final deployment."
  },
  {
    question: "How do you handle ongoing maintenance and support?",
    answer: "We offer tailored Service Level Agreements (SLAs) including 24/7 monitoring, security audits, and dedicated engineering support to ensure your digital assets remain high-performance."
  },
  {
    question: "Can you assist with financial and regulatory compliance for tech startups?",
    answer: "Yes, our unique bridge between finance and engineering allows us to implement GST-ready systems, tax-compliant architectures, and robust auditing tools alongside your core product."
  }
];

const ExecutiveCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("bg-white dark:bg-zinc-900 border border-border rounded-2xl shadow-sm hover:shadow-executive transition-all duration-500 p-8", className)}>
    {children}
  </div>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<'standard' | 'priority'>('standard');
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <section className="section-padding bg-black relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blob opacity-5" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-left space-y-8 mb-20 md:mb-24 px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent font-extrabold text-[9px] uppercase tracking-widest"
          >
            <Send className="h-3 w-3" />
            Engagement Phase Alpha
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="fluid-h2 font-outfit font-black text-white leading-[0.9] tracking-tighter uppercase italic"
          >
            Bridge the <br />
            <span className="text-accent underline decoration-white/10 underline-offset-8 md:underline-offset-[12px]">& Collaborate.</span>
          </motion.h2>
          <p className="text-base md:text-lg text-white/40 leading-relaxed font-medium italic max-w-2xl">
            Whether scaling or launching, we provide the technical firepower
            and strategic depth to command your industry prestige.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 max-w-7xl mx-auto px-4 md:px-0">
          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Send className="h-24 w-24 text-accent" />
              </div>

              <h3 className="text-2xl md:text-3xl font-outfit font-black text-white mb-10 italic uppercase tracking-tighter">Mission Brief</h3>
              <form className="space-y-8 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Ident Name</label>
                    <Input placeholder="FIRSTNAME" className="rounded-xl border-white/10 bg-black/40 h-14 text-xs text-white placeholder:text-white/10 focus:border-accent/40 uppercase tracking-widest transition-all" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Serial Surname</label>
                    <Input placeholder="LASTNAME" className="rounded-xl border-white/10 bg-black/40 h-14 text-xs text-white placeholder:text-white/10 focus:border-accent/40 uppercase tracking-widest transition-all" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Comm Channel</label>
                  <Input type="email" placeholder="SUBJECT@DOMAIN.PROTOCOL" className="rounded-xl border-white/10 bg-black/40 h-14 text-xs text-white placeholder:text-white/10 focus:border-accent/40 uppercase tracking-widest transition-all" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Objective Brief</label>
                    <div className="inline-flex items-center gap-2 text-[8px] font-black text-accent uppercase tracking-widest px-3 py-1 rounded-full bg-accent/5 border border-accent/20">
                      <Sparkles className="h-3 w-3" />
                      AI Analysis Active
                    </div>
                  </div>
                  <Textarea
                    placeholder="DESCRIBE THE CORE TECHNICAL REQUIREMENTS OR VISIONARY OBJECTIVES..."
                    className="rounded-xl border-white/10 bg-black/40 min-h-[180px] resize-none text-[10px] md:text-xs text-white placeholder:text-white/10 focus:border-accent/40 uppercase tracking-widest leading-relaxed p-6 transition-all"
                  />
                </div>

                <Button className="w-full h-16 bg-accent hover:bg-white text-black font-black rounded-xl shadow-glow group transition-all active:scale-[0.98] uppercase tracking-widest">
                  EXECUTE INQUIRY
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid gap-4">
              {contactDetails.map((detail) => {
                // Determine the href based on the icon type
                let href = '';
                let onClick: (() => void) | undefined = undefined;

                if (detail.icon === Mail) {
                  href = `mailto:${detail.value.trim()}`;
                } else if (detail.icon === Phone) {
                  // For phone, open modal instead of direct link
                  onClick = () => {
                    setPhoneNumber(detail.value.replace(/\s/g, ''));
                    setIsPhoneModalOpen(true);
                  };
                }

                const content = (
                  <>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-accent/20 group-hover:text-accent transition-all">
                      <detail.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-white/30 mb-1">{detail.label}</p>
                      <p className="font-outfit font-bold text-white tracking-tight">{detail.value}</p>
                    </div>
                  </>
                );

                return onClick ? (
                  <button
                    key={detail.label}
                    onClick={onClick}
                    className="p-6 bg-white/5 border border-white/5 rounded-3xl flex items-center gap-6 transition-all hover:border-accent/40 group cursor-pointer w-full text-left"
                  >
                    {content}
                  </button>
                ) : href ? (
                  <a
                    key={detail.label}
                    href={href}
                    className="p-6 bg-white/5 border border-white/5 rounded-3xl flex items-center gap-6 transition-all hover:border-accent/40 group cursor-pointer"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={detail.label}
                    className="p-6 bg-white/5 border border-white/5 rounded-3xl flex items-center gap-6 transition-all hover:border-accent/40 group"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-black/20 border border-white/10 relative overflow-hidden group cursor-pointer shadow-2xl hover:shadow-[0_0_40px_rgba(212,255,51,0.15)] hover:border-accent/30 transition-all duration-500 hover:scale-[1.01]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-accent/30 transition-all" />

              <div className="relative z-10 space-y-8">
                <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:scale-110 transition-all duration-500">
                  <CalendarDays className="h-6 w-6 text-accent" />
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-outfit font-black text-white uppercase italic tracking-tighter mb-4 leading-none">
                    Schedule <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Briefing.</span>
                  </h3>
                  <p className="text-white/40 text-sm font-medium leading-relaxed max-w-[280px]">
                    Secure a private 20-minute operational sync with our senior architects.
                  </p>
                </div>

                <Button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full bg-accent hover:bg-white text-black font-black h-14 rounded-xl shadow-[0_0_20px_rgba(212,255,51,0.2)] hover:shadow-glow transition-all uppercase tracking-widest text-xs"
                >
                  Reserve Slot
                </Button>
              </div>
            </div>

            <div className="p-8 border border-white/5 rounded-3xl bg-white/5 flex items-center justify-between group cursor-pointer hover:border-accent/20 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
                <div>
                  <p className="text-[10px] font-extrabold text-accent uppercase tracking-widest">Live Status</p>
                  <p className="text-white font-bold tracking-tight">Q1 2026 Engagement Open</p>
                </div>
              </div>
              <ChevronDown className="h-5 w-5 text-white/20 group-hover:text-accent transition-all" />
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mt-40 max-w-4xl mx-auto px-4 md:px-0">
          <div className="flex flex-col items-center gap-6 mb-20">
            <div className="h-[2px] w-16 bg-accent/30" />
            <h2 className="text-4xl md:text-6xl font-outfit font-black text-white uppercase italic tracking-tighter text-center">Protocol <span className="text-accent underline decoration-white/10 underline-offset-8">Intelligence.</span></h2>
            <p className="text-white/40 text-sm font-medium uppercase tracking-[0.2em] italic">Frequently Encountered Operational Queries</p>
          </div>

          <div className="space-y-6">
            <Accordion type="single" collapsible className="space-y-5">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="border border-white/5 bg-white/5 rounded-[2rem] px-8 transition-all hover:border-accent/30 group"
                >
                  <AccordionTrigger className="hover:no-underline font-outfit font-black text-white py-8 text-lg sm:text-xl tracking-tighter text-left uppercase italic group-hover:text-accent transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/40 leading-relaxed pb-8 text-sm sm:text-base font-medium italic">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

      </div>

      {/* Phone Action Modal */}
      <AnimatePresence>
        {isPhoneModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-zinc-950 w-full max-w-md rounded-[3rem] p-12 shadow-shadow-glow relative border border-white/10"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-8 right-8 text-white/20 hover:text-white"
                onClick={() => setIsPhoneModalOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-outfit font-extrabold text-white uppercase italic tracking-tighter">
                    Contact <span className="text-accent">Method.</span>
                  </h3>
                  <p className="text-white/30 text-xs mt-2 font-bold uppercase tracking-widest leading-loose">
                    Choose your preferred communication channel.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* WhatsApp Option */}
                  <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onClick={() => setIsPhoneModalOpen(false)}
                  >
                    <Button className="w-full h-16 bg-[#25D366] hover:bg-[#20BD5A] text-white font-black rounded-xl shadow-glow group transition-all active:scale-[0.98] uppercase tracking-widest">
                      <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Chat on WhatsApp
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>

                  {/* Call Option */}
                  <a
                    href={`tel:${phoneNumber}`}
                    className="block"
                    onClick={() => setIsPhoneModalOpen(false)}
                  >
                    <Button className="w-full h-16 bg-accent hover:bg-white text-black font-black rounded-xl shadow-glow group transition-all active:scale-[0.98] uppercase tracking-widest">
                      <Phone className="mr-3 h-5 w-5" />
                      Make a Call
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-zinc-950 w-full max-w-lg rounded-[3rem] p-12 shadow-shadow-glow relative border border-white/10"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-8 right-8 text-white/20 hover:text-white"
                onClick={() => setIsBookingOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-outfit font-extrabold text-white uppercase italic tracking-tighter">Consultation <span className="text-accent">Request.</span></h3>
                  <p className="text-white/30 text-xs mt-2 font-bold uppercase tracking-widest leading-loose">Enter your identity and mission timeline.</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-white/30">Subject Name</label>
                    <Input placeholder="Full Name" className="rounded-2xl h-12 bg-white/5 border-white/10 text-white" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-white/30">Target Cycle</label>
                      <Input type="date" className="rounded-2xl h-12 bg-white/5 border-white/10 text-white [color-scheme:dark]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-white/30">Tier Selection</label>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          onClick={() => setSelectedTier('standard')}
                          variant="outline"
                          className={cn(
                            "rounded-xl h-10 border-white/10 text-[9px] font-bold uppercase transition-all",
                            selectedTier === 'standard' ? "bg-accent text-black border-accent" : "hover:bg-accent hover:text-black text-white"
                          )}
                        >
                          Standard
                        </Button>
                        <Button
                          onClick={() => setSelectedTier('priority')}
                          variant="outline"
                          className={cn(
                            "rounded-xl h-10 border-white/10 text-[9px] font-bold uppercase transition-all",
                            selectedTier === 'priority' ? "bg-accent text-black border-accent" : "hover:bg-accent hover:text-black text-white"
                          )}
                        >
                          Priority
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full h-14 bg-accent text-black font-bold shadow-glow rounded-2xl transition-all hover:bg-white uppercase tracking-tighter text-lg">
                    Confirm Registration
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Contact;

