import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, TrendingUp, DollarSign, Globe, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const STORIES = [
    {
        metric: "50% increase",
        subtitle: "in website traffic",
        description: "Redesigned the landing page with clearer user flow and optimized CTAs, resulting in a 50% traffic growth within three months.",
        image: "/assets/success-stories/traffic.png",
        icon: Globe,
        category: "Web Engineering"
    },
    {
        metric: "30% reduction",
        subtitle: "in advertising costs",
        description: "Improved website design and optimized user journey led to a 30% decrease in ad spend without affecting conversions.",
        image: "/assets/success-stories/ads.png",
        icon: TrendingUp,
        category: "Ads Strategy"
    },
    {
        metric: "20% growth",
        subtitle: "in online sales",
        description: "Enhanced UX and streamlined checkout process resulted in a 20% increase in online sales, improving both user experience and revenue.",
        image: "/assets/success-stories/sales.png",
        icon: DollarSign,
        category: "E-commerce"
    },
    {
        metric: "45% boost",
        subtitle: "in app engagement",
        description: "Implemented personalized notification system and revamped the onboarding flow to drive higher user retention.",
        image: "/assets/success-stories/traffic.png",
        icon: Sparkles,
        category: "Mobile Architecture"
    },
    {
        metric: "60% faster",
        subtitle: "deployment cycles",
        description: "Automated CI/CD pipelines and containerized microservices to drastically reduce time-to-market.",
        image: "/assets/success-stories/ads.png",
        icon: Globe,
        category: "DevOps Tier"
    }
];

const SuccessStories = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleCards(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, STORIES.length - visibleCards);

    const next = () => {
        setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prev = () => {
        setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Adjust transform based on current visible cards
    const gapRem = 1.5; // matching gap-6 (1.5rem)
    const totalSlides = STORIES.length;

    return (
        <section className="pt-0 pb-24 md:pb-32 bg-black relative overflow-hidden" id="success-stories">
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent opacity-5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 md:gap-12 mb-16 md:mb-20 px-4 md:px-0">
                    <div className="max-w-2xl space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent font-extrabold text-[9px] uppercase tracking-widest"
                        >
                            <Sparkles className="h-3 w-3" />
                            Impact Validation
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="fluid-h2 font-outfit font-black text-white leading-none uppercase italic tracking-tighter"
                        >
                            Our <span className="text-accent underline decoration-white/10 underline-offset-8">Success Stories</span>
                        </motion.h2>
                        <p className="text-white/40 text-base md:text-lg font-medium leading-relaxed max-w-lg italic">
                            Measurable results across diverse engineering domains.
                            Each case study drives digital transformation.
                        </p>
                    </div>

                    <div className="hidden md:flex gap-4 pt-4 lg:pt-0">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prev}
                            className="rounded-2xl border-white/10 text-white hover:bg-accent hover:text-black hover:border-accent h-12 w-12 md:h-14 md:w-14 transition-all shadow-xl"
                        >
                            <ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={next}
                            className="rounded-2xl border-white/10 text-white hover:bg-accent hover:text-black hover:border-accent h-12 w-12 md:h-14 md:w-14 transition-all shadow-xl"
                        >
                            <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
                        </Button>
                    </div>
                </div>

                {/* Stories Grid/Carousel - Mobile: Native Scroll, Desktop: Framer Motion */}
                <div className="relative overflow-x-auto md:overflow-hidden snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-8 md:pb-0">
                    <motion.div
                        className="flex gap-4 md:gap-6"
                        animate={window.innerWidth >= 768 ? {
                            x: visibleCards === 1
                                ? `calc(-${activeIndex * 100}% - ${activeIndex * gapRem}rem)`
                                : `calc(-${activeIndex * (100 / visibleCards)}% - ${activeIndex * (gapRem * (visibleCards - 1) / visibleCards)}rem)`
                        } : { x: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        style={{ width: window.innerWidth >= 768 ? `${(totalSlides / visibleCards) * 100}%` : 'auto' }}
                    >
                        {STORIES.map((story, index) => (
                            <div
                                key={index}
                                style={{
                                    width: window.innerWidth >= 768 ? (visibleCards === 1
                                        ? "100%"
                                        : `calc(${100 / visibleCards}% - ${(gapRem * (visibleCards - 1)) / visibleCards}rem)`) : undefined
                                }}
                                className="snap-center shrink-0 group relative w-[85vw] md:w-auto"
                            >
                                <div className="bg-white/5 border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-8 space-y-3 md:space-y-6 hover:border-accent/40 hover:bg-white/10 transition-all duration-500 shadow-xl overflow-hidden h-full flex flex-col">
                                    <div className="space-y-1">
                                        <Badge variant="outline" className="border-accent/20 text-accent font-extrabold text-[7px] md:text-[8px] uppercase tracking-widest bg-accent/5 mb-1.5 md:mb-3">
                                            {story.category}
                                        </Badge>
                                        <h3 className="text-lg md:text-3xl font-outfit font-extrabold text-white leading-tight italic tracking-tighter">
                                            "{story.metric} <br />
                                            <span className="text-accent">{story.subtitle}</span>"
                                        </h3>
                                    </div>

                                    <div className="relative h-32 md:h-auto md:aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-white/5 group-hover:border-accent/20 transition-all bg-black/40">
                                        <img
                                            src={story.image}
                                            alt={story.metric}
                                            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                    </div>

                                    <p className="text-white/40 text-[11px] md:text-sm font-medium leading-relaxed italic flex-grow line-clamp-2 md:line-clamp-3">
                                        {story.description}
                                    </p>

                                    <div className="pt-3 md:pt-6 border-t border-white/5 flex items-center justify-between">
                                        <button className="text-[8px] md:text-[9px] font-extrabold text-white uppercase tracking-[0.2em] hover:text-accent transition-colors">
                                            More Details
                                        </button>
                                        <div className="flex items-center gap-2 text-white/20 group-hover:text-accent transition-colors">
                                            <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest">Case ID: {index + 1042}</span>
                                            <ExternalLink className="h-3 w-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Footer Navigation (Mobile/Alternative) */}
                <div className="mt-10 md:mt-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                    <div className="flex gap-2">
                        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={cn(
                                    "h-1 rounded-full transition-all duration-500",
                                    i === activeIndex ? "w-8 bg-accent" : "w-2 bg-white/10 hover:bg-white/20"
                                )}
                            />
                        ))}
                    </div>
                    <Button
                        className="w-full md:w-auto bg-white/5 border border-white/10 text-white hover:bg-accent hover:text-black rounded-xl px-8 h-12 font-extrabold uppercase tracking-tighter italic group transition-all text-sm"
                    >
                        Explore All
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
