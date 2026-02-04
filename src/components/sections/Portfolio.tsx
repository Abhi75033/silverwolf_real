import { motion, useMotionValue, useMotionTemplate, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Sparkles,
  Loader2,
  X,
  GalleryHorizontal,
  ChevronLeft,
  ChevronRight,
  Rocket
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Tryme E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
      images: [ // Changed from 'image' to 'images'
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762273039/Screenshot_2025-11-04_at_9.43.33_PM_q4on4a.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762273147/Screenshot_2025-11-04_at_9.43.42_PM_tswr3b.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762273171/Screenshot_2025-11-04_at_9.43.49_PM_iqfjqk.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762273197/Screenshot_2025-11-04_at_9.44.00_PM_gnrnzt.png",


      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
      type: "Full Stack",
      status: "Deployed",
      liveUrl: "https://spoofy-frontend.vercel.app/",
      githubUrl: "#",
      features: ["Payment Processing", "Admin Dashboard", "Real-time Updates"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with team features, time tracking, and progress analytics.",
      images: [
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762277173/Screenshot_2025-11-04_at_10.50.05_PM_dg3t4v.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762277217/Screenshot_2025-11-04_at_10.50.09_PM_mmatoi.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762277283/Screenshot_2025-11-04_at_10.50.14_PM_ffts7c.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762277310/Screenshot_2025-11-04_at_10.50.19_PM_nhoe5w.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762277351/Screenshot_2025-11-04_at_10.50.23_PM_c8whu5.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762277866/Screenshot_2025-11-04_at_11.07.13_PM_aacq1o.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762277397/Screenshot_2025-11-04_at_10.50.30_PM_pxqdeh.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762277650/Screenshot_2025-11-04_at_10.50.43_PM_wirrm8.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762277720/Screenshot_2025-11-04_at_10.50.53_PM_fijyar.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762278131/Screenshot_2025-11-04_at_11.11.22_PM_vertt4.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762278181/Screenshot_2025-11-04_at_11.10.56_PM_bidyts.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762278238/Screenshot_2025-11-04_at_11.10.37_PM_dcdwbt.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762278264/Screenshot_2025-11-04_at_11.10.44_PM_apitsh.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762278301/Screenshot_2025-11-04_at_11.10.24_PM_z4wu9m.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762278348/Screenshot_2025-11-04_at_11.10.17_PM_x7a3ng.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762278392/Screenshot_2025-11-04_at_11.10.07_PM_z8myam.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762278437/Screenshot_2025-11-04_at_11.10.04_PM_y9exxa.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762278480/Screenshot_2025-11-04_at_11.09.57_PM_rrobdz.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762278524/Screenshot_2025-11-04_at_11.09.50_PM_pu6f4g.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762278573/Screenshot_2025-11-04_at_11.09.47_PM_wgvzwy.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762278605/Screenshot_2025-11-04_at_11.09.44_PM_d0ctb0.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762278646/Screenshot_2025-11-04_at_11.09.38_PM_aoifl6.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762278693/Screenshot_2025-11-04_at_11.09.14_PM_czoxcr.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762278736/Screenshot_2025-11-04_at_11.09.22_PM_x4lusg.png",
        "https://res.cloudinary.com/abhisek-aur-backend/image/upload/v1762278776/Screenshot_2025-11-04_at_11.09.36_PM_dlb1lw.png"

      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      type: "Web App",
      status: "In Development",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Team Collaboration", "Time Tracking", "Analytics Dashboard"]
    },
    {
      id: 3,
      title: "Restaurant Website",
      description: "Modern restaurant website with online reservations, menu management, and customer reviews system.",
      images: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
      ],
      technologies: ["React", "Express", "Material-UI", "Node.js"],
      type: "Client Project",
      status: "Pending",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Online Reservations", "Menu Management", "Review System"]
    },
    {
      id: 4,
      title: "Portfolio CMS",
      description: "Content management system for creative professionals with image optimization and SEO features.",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80"
      ],
      technologies: ["Next.js", "Sanity", "Tailwind", "Vercel"],
      type: "CMS",
      status: "In Development",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Image Optimization", "SEO Ready", "Easy Content Updates"]
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "Educational platform with course creation, student tracking, and interactive learning modules.",
      images: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
      ],
      technologies: ["React", "MongoDB", "Express", "Socket.io"],
      type: "Education",
      status: "In Development",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Course Creation", "Progress Tracking", "Interactive Modules"]
    },
    {
      id: 6,
      title: "Real Estate Platform",
      description: "Property listing website with advanced search, virtual tours, and agent management system.",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
      ], // Single image example
      technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
      type: "Enterprise",
      status: "In Development",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Advanced Search", "Virtual Tours", "Agent Portal"]
    }
  ];

  // --- State for AI Modal ---
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [learningPath, setLearningPath] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // --- NEW: State for Gallery Modal ---
  const [galleryProject, setGalleryProject] = useState<any>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Deployed": return "bg-wolf-green text-black";
      case "In Development": return "bg-wolf-blue text-white";
      case "Modified":
      case "Pending": // Added "Pending" status here
        return "bg-wolf-purple text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  // --- Function to handle AI modal open and API call ---
  const handleShowLearningPath = async (project: any) => {
    setSelectedProject(project);
    setIsLoading(true);
    setError("");
    setLearningPath("");

    const apiKey = ""; // API key is handled by the environment
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const systemPrompt = "You are an expert senior developer and mentor. Your goal is to provide a high-level, step-by-step learning path for a junior developer who wants to build a specific project. Focus on the key concepts and technologies.";

    const userPrompt = `
Project Title: "${project.title}"
Project Description: "${project.description}"
Technologies Used: ${project.technologies.join(', ')}

Please provide a concise, step-by-step learning path (5-7 steps) for a junior developer to learn how to build this project. Format your response as a numbered list. Do not add any introductory or concluding sentences, just the list.
    `;

    const payload = {
      contents: [{ parts: [{ text: userPrompt }] }],
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      },
    };

    let retries = 3;
    let delay = 1000;

    while (retries > 0) {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

        if (text) {
          setLearningPath(text);
        } else {
          setError("Couldn't generate a learning path. The response was empty.");
        }

        setIsLoading(false);
        return; // Success

      } catch (err) {
        console.error("API call failed:", err);
        retries--;
        if (retries === 0) {
          setError("Failed to generate path after multiple attempts. Please try again later.");
          setIsLoading(false);
        } else {
          await new Promise(res => setTimeout(res, delay));
          delay *= 2; // Exponential backoff
        }
      }
    }
  };

  // --- Function to close the AI modal ---
  const handleCloseModal = () => {
    setSelectedProject(null);
    setLearningPath("");
    setIsLoading(false);
    setError("");
  };

  // --- NEW: Gallery Modal Functions ---
  const handleShowGallery = (project: any) => {
    setGalleryProject(project);
    setActiveImageIndex(0);
  };

  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api || isPaused) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [api, isPaused]);

  const handleCloseGallery = () => {
    setGalleryProject(null);
  };

  const handleNextImage = () => {
    if (!galleryProject) return;
    setActiveImageIndex((prev) => (prev + 1) % galleryProject.images.length);
  };

  const handlePrevImage = () => {
    if (!galleryProject) return;
    setActiveImageIndex((prev) => (prev - 1 + galleryProject.images.length) % galleryProject.images.length);
  };

  const handleThumbClick = (index: number) => {
    setActiveImageIndex(index);
  };


  // --- Project Card Component with Spotlight ---
  const ProjectCard = ({ project, onShowLearningPath, onShowGallery }: { project: any, onShowLearningPath: (project: any) => void, onShowGallery: (project: any) => void }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    const background = useMotionTemplate`
      radial-gradient(
        300px circle at ${mouseX}px ${mouseY}px,
        rgba(59, 130, 246, 0.15), 
        transparent 80%
      )
    `;

    return (
      <motion.div
        variants={itemVariants}
        className="group relative h-full rounded-[2rem] border border-wolf-blue/20 shadow-2xl overflow-hidden bg-black/40 backdrop-blur-sm"
        onMouseMove={handleMouseMove}
      >
        {/* --- Spotlight Effect --- */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />

        <div className="flex flex-col h-full">
          <div className="relative h-40 md:h-56 overflow-hidden group/img">
            <img
              src={project.images[0]} // Use first image
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              onError={(e) => (e.currentTarget.src = 'https://placehold.co/800x600/0c1016/3b82f6?text=Image+Not+Found')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60" />

            <Badge className={`absolute top-4 right-4 ${getStatusColor(project.status)} uppercase tracking-widest text-[8px] font-black border-none`}>
              {project.status}
            </Badge>
            {/* --- Gallery Button --- */}
            {project.images && project.images.length > 1 && (
              <Button
                size="icon"
                variant="secondary"
                className="absolute top-4 left-4 h-8 w-8 bg-black/50 text-white hover:bg-accent hover:text-black backdrop-blur-sm rounded-lg transition-colors"
                onClick={() => onShowGallery(project)}
                aria-label="View project gallery"
              >
                <GalleryHorizontal className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="p-5 md:p-8 flex flex-col flex-grow relative z-10">
            <div className="flex flex-col gap-2 mb-4">
              <Badge variant="outline" className="w-fit border-accent/20 text-accent font-extrabold text-[8px] uppercase tracking-widest bg-accent/5">
                {project.type}
              </Badge>
              <h3 className="text-xl md:text-2xl font-outfit font-black text-white italic tracking-tighter uppercase">{project.title}</h3>
            </div>

            <p className="text-white/40 mb-6 text-xs md:text-sm font-medium leading-relaxed italic line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 3).map((tech: string) => (
                <span key={tech} className="text-[9px] font-bold text-white/30 uppercase tracking-wider border border-white/10 px-2 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto space-y-3">
              <div className="flex space-x-3">
                {project.status === "Deployed" ? (
                  <Button size="sm" className="flex-1 bg-white/5 border border-white/10 hover:bg-accent hover:text-black hover:border-accent text-white font-black uppercase tracking-widest text-[9px] h-9 rounded-xl transition-all" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Live Site
                    </a>
                  </Button>
                ) : (
                  <Button size="sm" className="flex-1 bg-white/5 border border-white/10 text-white/20 font-black uppercase tracking-widest text-[9px] h-9 rounded-xl" disabled>
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Pending
                  </Button>
                )}

                <Button size="sm" variant="outline" className="bg-transparent border-white/10 text-white hover:border-white/30 rounded-xl w-10 px-0" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="w-full text-[9px] font-black text-accent uppercase tracking-[0.2em] hover:bg-accent/10 hover:text-accent h-8"
                onClick={() => onShowLearningPath(project)}
              >
                <Sparkles className="h-3 w-3 mr-2" />
                View Architecture
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };
  // --- END: Project Card Component ---


  // --- NEW: CTA Card Component ---
  const CtaCard = () => {
    return (
      <motion.div
        variants={itemVariants}
        className="group relative h-full rounded-[2rem] p-8 flex flex-col items-center justify-center text-center overflow-hidden border border-white/10 bg-white/5 hover:border-accent/30 transition-all duration-500"
      >
        <div className="absolute inset-0 -z-10 w-full h-full bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 20 }}
          className="mb-8 p-4 bg-accent/10 rounded-full border border-accent/20 text-accent"
        >
          <Rocket className="h-8 w-8" />
        </motion.div>

        <h3 className="text-2xl font-outfit font-black italic uppercase tracking-tighter text-white mb-4">
          Launch Your <br /><span className="text-accent">Vision</span>
        </h3>

        <p className="text-white/40 mb-8 font-medium italic text-sm max-w-xs mx-auto">
          From concept to deployment, we build the infrastructure of tomorrow.
        </p>

        <Button onClick={() => navigate('/contact')} size="lg" className="bg-accent hover:bg-white text-black font-black uppercase tracking-widest rounded-xl px-8 h-12 shadow-[0_0_20px_rgba(212,255,51,0.3)] hover:shadow-[0_0_30px_rgba(212,255,51,0.5)] transition-all">
          Initiate Project
        </Button>
      </motion.div>
    );
  };
  // --- END: CTA Card Component ---


  return (
    <section className="section-padding bg-black relative overflow-hidden" id="portfolio">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent font-extrabold text-[9px] uppercase tracking-widest mb-6">
            <Sparkles className="h-3 w-3" />
            Engineering Showcase
          </div>
          <h2 className="fluid-h2 font-outfit font-black mb-4 text-white uppercase italic tracking-tighter loading-none">
            Selected <span className="text-accent underline decoration-white/10 underline-offset-8">Projects</span>
          </h2>
          <p className="text-lg text-white/40 font-medium italic leading-relaxed max-w-xl">
            From enterprise architectures to rapid MVP deployments, exploring our engineering capabilities.
          </p>
        </motion.div>

        <Carousel
          setApi={setApi}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="">
            {projects.map((project) => (
              <CarouselItem key={project.id} className="basis-[85%] md:basis-1/2 lg:basis-1/3 pl-6">
                <ProjectCard
                  project={project}
                  onShowLearningPath={handleShowLearningPath}
                  onShowGallery={handleShowGallery}
                />
              </CarouselItem>
            ))}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <CtaCard />
            </CarouselItem>
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12 border-wolf-blue/30 hover:bg-wolf-blue/10" />
            <CarouselNext className="-right-12 border-wolf-blue/30 hover:bg-wolf-blue/10" />
          </div>
        </Carousel>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="shadow-lg shadow-wolf-blue/20 bg-gradient-to-r from-wolf-blue to-wolf-purple hover:shadow-xl hover:shadow-wolf-blue/30">
            View All Projects
          </Button>
        </motion.div>
      </div>

      {/* --- AI Learning Path Modal --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backdropFilter: "blur(8px)" }}
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl p-6 rounded-xl border border-wolf-purple/20 shadow-2xl overflow-hidden"
              style={{
                background: "linear-gradient(to bottom right, rgba(12, 16, 22, 0.95), rgba(59, 130, 246, 0.1))",
              }}
              onClick={(e) => e.stopPropagation()} // Prevent closing modal on inner click
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                onClick={handleCloseModal}
              >
                <X className="h-5 w-5" />
              </Button>

              <div className="flex items-center mb-4">
                <Sparkles className="h-5 w-5 mr-3 text-wolf-purple" />
                <h3 className="text-xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-r from-wolf-blue to-wolf-purple">
                  Learning Path for: {selectedProject.title}
                </h3>
              </div>

              <div className="max-h-[60vh] overflow-y-auto pr-2">
                {isLoading && (
                  <div className="flex flex-col items-center justify-center min-h-[200px] text-muted-foreground">
                    <Loader2 className="h-8 w-8 animate-spin text-wolf-blue mb-4" />
                    Generating your learning path...
                  </div>
                )}
                {error && (
                  <div className="flex items-center justify-center min-h-[200px] text-red-400">
                    {error}
                  </div>
                )}
                {learningPath && (
                  <div
                    className="text-muted-foreground space-y-3"
                    style={{ whiteSpace: "pre-line" }} // Renders newlines from the AI
                  >
                    {learningPath}
                  </div>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* --- NEW: Gallery Modal --- */}
      <AnimatePresence>
        {galleryProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backdropFilter: "blur(8px)" }}
            onClick={handleCloseGallery} // Close on backdrop click
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl p-4 sm:p-6 rounded-xl border border-wolf-purple/20 shadow-2xl overflow-hidden"
              style={{
                background: "linear-gradient(to bottom right, rgba(12, 16, 22, 0.95), rgba(59, 130, 246, 0.1))",
              }}
              onClick={(e) => e.stopPropagation()} // Prevent closing modal on inner click
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-20 text-muted-foreground hover:text-foreground"
                onClick={handleCloseGallery}
                aria-label="Close gallery"
              >
                <X className="h-5 w-5" />
              </Button>

              <h3 className="text-xl font-sans font-semibold text-foreground mb-4">
                {galleryProject.title}
              </h3>

              {/* Main Image Viewer */}
              <div className="relative mb-4">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    src={galleryProject.images[activeImageIndex]}
                    alt={`Project image ${activeImageIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                    onError={(e) => (e.currentTarget.src = 'https://placehold.co/800x600/0c1016/3b82f6?text=Image+Not+Found')}
                  />
                </AnimatePresence>

                {/* Prev Button */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/75"
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                {/* Next Button */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/75"
                  onClick={handleNextImage}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex justify-center gap-2 overflow-x-auto p-2">
                {galleryProject.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => handleThumbClick(index)}
                    className={`w-16 h-12 rounded-md overflow-hidden flex-shrink-0 transition-all duration-200
                      ${index === activeImageIndex ? 'ring-2 ring-wolf-blue ring-offset-2 ring-offset-background/95' : 'opacity-60 hover:opacity-100'}
                    `}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => (e.currentTarget.src = 'https://placehold.co/100x100/0c1016/3b82f6?text=Error')}
                    />
                  </button>
                ))}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Portfolio;


