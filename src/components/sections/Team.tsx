import { motion } from "framer-motion";
import { Quote, Star, MousePointer2, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const team = [
  {
    name: "Rushabh Pandey",
    role: "Strategic Finance Lead",
    image: "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1770262434/WhatsApp_Image_2026-02-05_at_08.08.58_1_cxf5xf.jpg",
    pos: "left-[5%]",
    y: "top-[15%]",
    arrow: "M10 0 C 10 30, 40 40, 40 100", // Custom SVG path
    labelPos: "left-[2%] top-[0%]"
  },
  {
    name: "Divakar Prajapati",
    role: "Lead Creative Director",
    image: "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1770262435/WhatsApp_Image_2026-02-05_at_08.08.57_rlqpo8.jpg",
    pos: "left-[20%]",
    y: "top-[28%]",
    arrow: "M80 0 C 80 50, 20 60, 20 120",
    labelPos: "left-[28%] top-[15%]"
  },
  {
    name: "Sharad Yadav",
    role: "Chief Technology Officer",
    image: "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762188813/Screenshot_2025-11-03_at_10.17.39_PM_f4ycpx.png",
    pos: "left-[35%]",
    y: "top-[8%]",
    arrow: "M10 0 C 10 60, 40 80, 40 150",
    labelPos: "left-[42%] top-[-5%]"
  },
  {
    name: "Swapnali More",
    role: "Lead Systems Engineer",
    image: "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1770262434/WhatsApp_Image_2026-02-05_at_08.08.58_ntkmv6.jpg",
    pos: "left-[50%]",
    y: "top-[25%]",
    arrow: "M100 0 C 100 50, 40 60, 40 130",
    labelPos: "left-[68%] top-[5%]"
  },
  {
    name: "Aditya Raj",
    role: "Python & AI Developer",
    image: "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1770264795/ChatGPT_Image_Feb_5_2026_09_41_03_AM_wkhakb.png",
    pos: "left-[65%]",
    y: "top-[12%]",
    arrow: "M0 0 C 0 40, -40 60, -40 120",
    labelPos: "left-[78%] top-[12%]"
  },
  {
    name: "Abhishek Kumar",
    role: "Lead Web Developer",
    image: "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1769005111/WhatsApp_Image_2025-04-26_at_13.14.21_zpu6tv.jpg",
    pos: "left-[80%]",
    y: "top-[22%]",
    arrow: "M0 0 C 0 40, -40 60, -40 120",
    labelPos: "left-[94%] top-[2%]"
  }

];

const testimonials = [
  {
    quote: "Silver Wolf Technologies transformed our legacy systems into a modern, high-performance platform. Their engineering depth is unmatched.",
    author: "James Chen",
    position: "CTO, Fintech Solutions",
    rating: 5
  },
  {
    quote: "The financial consultation provided by Rushabh was instrumental in our Series B compliance audit. Truly professional and meticulous.",
    author: "Sarah Thompson",
    position: "Founder, GreenScale Inc.",
    rating: 5
  },
  {
    quote: "Their creative team delivered a visual identity that perfectly captured our brand's essence. The motion graphics were world-class.",
    author: "David Miller",
    position: "Marketing Director, Aria Global",
    rating: 5
  }
];

const CurvedArrow = ({ path, className }: { path: string, className?: string }) => (
  <svg
    className={cn("absolute w-24 h-32 pointer-events-none opacity-30 px-4 py-4 overflow-visible", className)}
    viewBox="0 0 100 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d={path}
      stroke="white"
      strokeWidth="1.5"
      strokeDasharray="4 4"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.path
      d="M1 1L5 5L1 9" // Primitive arrow head relative to path end
      className="hidden" // Head logic is complex with pure SVG path, simplified for now
    />
    <circle cx="10" cy="0" r="2" fill="white" className="opacity-50" />
  </svg>
);

const Team = () => {
  return (
    <section className="pt-0 pb-24 md:pb-32 lg:pb-40 bg-black relative overflow-hidden" id="team">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-6 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent font-extrabold text-[9px] uppercase tracking-widest mb-4"
          >
            <MousePointer2 className="h-3 w-3" />
            Selection Protocol Active
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="fluid-h2 font-outfit font-black text-white leading-none tracking-tighter uppercase italic"
          >
            Our <span className="text-accent underline decoration-white/10 underline-offset-8">Troops</span>
          </motion.h2>
          <p className="text-lg text-white/40 leading-relaxed font-medium max-w-2xl mx-auto italic">
            A multidisciplinary collective of architects, strategists, and creators
            dedicated to the pursuit of digital prestige and technical dominance.
          </p>
        </div>

        {/* Unified Team Layout (Scrollable on Mobile) */}
        <div className="relative w-full overflow-x-auto no-scrollbar pb-10 -mx-6 px-6 md:mx-0 md:px-0">

          {/* Mobile Scroll Hint */}
          <div className="md:hidden absolute left-6 top-0 z-30 animate-pulse pointer-events-none">
            <div className="flex items-center gap-2 text-accent/60 text-[10px] font-bold uppercase tracking-widest">
              <ArrowRight className="h-4 w-4" />
              <span>Scroll to Explore</span>
            </div>
          </div>

          <div className="relative h-[600px] md:h-[700px] min-w-[1240px] xl:min-w-full mt-20 md:mt-8">
            {team.map((member, idx) => (
              <div key={member.name} className={cn("absolute", member.pos, member.y)}>
                {/* Member Identity Layer (Labels & Arrows) */}
                <div className={cn("absolute whitespace-nowrap", idx % 2 === 0 ? "-top-20 -left-10" : "-top-24 -left-12")}>
                  {/* Visual Arrow Layer (Background) */}
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <CurvedArrow
                      path={member.arrow}
                      className={cn(
                        "top-full mt-2 opacity-20",
                        idx === 0 && "rotate-[10deg]",
                        idx === 1 && "rotate-[-20deg] scale-x-[-1]",
                        idx === 3 && "rotate-[15deg] h-40",
                        idx === 4 && "rotate-[-10deg] scale-x-[-1]",
                        idx === 5 && "rotate-[5deg]"
                      )}
                    />
                  </div>

                  {/* Label Layer (Foreground) */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="relative z-20"
                  >
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl hover:border-accent/30 transition-all group">
                      <p className="text-accent font-black text-xs uppercase tracking-widest mb-1 group-hover:scale-105 transition-transform">{member.name}</p>
                      <p className="text-white/40 text-[9px] font-bold uppercase tracking-wider">{member.role}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Member Figure */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                  className="relative z-10 group"
                >
                  {/* Figure Image */}
                  <div className="relative w-[210px] md:w-[260px] aspect-[3/4] overflow-hidden rounded-b-[4rem] group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
                    />
                  </div>

                  {/* Stool/Platform Base */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-12 bg-white/5 rounded-[50%] blur-xl opacity-50 group-hover:bg-accent/20 transition-all" />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-30" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto py-20 border-t border-white/5">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative px-6 md:px-0"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i}>
                  <div className="text-center space-y-6 md:space-y-10 p-6 md:p-12 bg-white/5 rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl glass">
                    <Quote className="h-10 w-10 md:h-16 md:w-16 text-accent opacity-20 mx-auto" />
                    <h3 className="text-xl md:text-5xl font-outfit font-bold text-white leading-tight italic tracking-tighter">
                      "{t.quote}"
                    </h3>
                    <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col items-center gap-3 md:gap-4">
                      <div className="flex gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-accent text-accent shadow-glow" />
                        ))}
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-base md:text-xl text-white uppercase tracking-tighter">{t.author}</p>
                        <p className="text-[9px] md:text-[10px] text-accent font-extrabold uppercase tracking-[0.2em] mt-1">{t.position}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-16 bg-white/5 border-white/10 text-white hover:bg-accent hover:text-black hover:border-accent transition-all h-12 w-12 rounded-full hidden lg:flex" />
            <CarouselNext className="absolute -right-16 bg-white/5 border-white/10 text-white hover:bg-accent hover:text-black hover:border-accent transition-all h-12 w-12 rounded-full hidden lg:flex" />
          </Carousel>
        </div>

      </div>
    </section>
  );
};

export default Team;
