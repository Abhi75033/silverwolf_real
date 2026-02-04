import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2, Smartphone, Database, Zap, Settings, Palette, Video,
  Search, Wrench, TrendingUp, FileText, ArrowRight, CheckCircle2,
  User, Mail, Phone, Send, Sparkles, Loader2, ArrowLeft,
  ChevronRight, Laptop, Server, Cpu, Layers, ShieldCheck, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import SEO from "@/components/ui/SEO";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const SERVICES_DATA: Record<string, any> = {
  "finance-services": {
    title: "Finance Services",
    icon: TrendingUp,
    description: "Comprehensive financial planning and strategic management to ensure your business's fiscal health and long-term growth.",
    fullDescription: "In today's complex economic landscape, having a robust financial strategy is crucial. Our finance services, led by Rushabh Pandey, provide deep insights and actionable plans for businesses of all sizes.",
    features: [
      "Strategic Financial Planning & Budgeting",
      "Investment Analysis & Portfolio Management",
      "Risk Assessment & Mitigation Strategies",
      "Business Valuation & Growth Consulting",
      "Financial Audit Support & Compliance",
      "Cash Flow Optimization"
    ],
    team: [
      {
        name: "Rushabh Pandey",
        role: "Finance Expert & Tax Consultant",
        bio: "Specializing in income tax filing, GST registration, financial strategies, and comprehensive business compliance.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        mail: "rushabh@silverwolftechnologies.in"
      }
    ],
    technologies: ["Financial Modeling", "QuickBooks", "SAP", "Advanced Excel"],
    seoTitle: "Expert Finance Services & Business Strategy | Silverwolf",
    seoDesc: "Professional financial planning and strategic consulting led by Rushabh Pandey. Scale your business with data-driven financial insights."
  },
  "gst-registration": {
    title: "GST & Tax Registration",
    icon: FileText,
    description: "Expert assistance with GST registration, income tax filing, and overall regulatory compliance for your business.",
    fullDescription: "Navigating the complexities of tax laws can be daunting. We handle the entire process of GST and GDT registration, ensuring your business stays compliant and avoids penalties.",
    features: [
      "GST & GDT Registration Assistance",
      "Income Tax Filing (ITR) for Individuals & Businesses",
      "TDS/TCS Compliance & Filing",
      "Tax Planning & Minimization Strategies",
      "Representation before Tax Authorities",
      "Regular Compliance Audits"
    ],
    team: [
      {
        name: "Rushabh Pandey",
        role: "Finance Expert & Tax Consultant",
        bio: "Specializing in income tax filing, GST registration, financial strategies, and comprehensive business compliance.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        mail: "rushabh@silverwolftechnologies.in"
      }
    ],
    technologies: ["Tax Compliance Tools", "GST Portal Integration", "Legal Documentation"],
    seoTitle: "GST Registration & Income Tax Filing Services | Silverwolf",
    seoDesc: "Hassle-free GST registration and tax compliance services. Led by Rushabh Pandey to ensure your business meets all legal requirements."
  },
  "website-development": {
    title: "Web Engineering & Design",
    icon: Code2,
    description: "Creating high-performance, visually stunning websites tailored to your brand's unique identity and business goals.",
    fullDescription: "Your website is your digital storefront. We build modern, responsive, and blazing-fast websites using the latest technologies like React and Next.js, ensuring an optimal user experience.",
    features: [
      "Custom UI/UX Design & Prototyping",
      "Responsive & Mobile-First Development",
      "Search Engine Optimized (SEO) Architecture",
      "E-commerce Platform Integration",
      "Performance Optimization & Core Web Vitals",
      "Content Management System (CMS) Integration"
    ],
    team: [
      {
        name: "Sharad Yadav",
        role: "Full Stack Website Developer",
        bio: "Expert in building high-performance web applications using modern JavaScript frameworks.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
        mail: "sharad@silverwolftechnologies.in"
      },
      {
        name: "Divakar prajapati",
        role: "Lead Creative Designer",
        bio: "Expert in high-end visual design and brand storytelling.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        mail: "diwakar@silverwolftechnologies.in"
      },
      {
        name: "Abhishekh Yadav",
        role: "Full Stack Developer & Cloud Engineer",
        bio: "Specializing in scalable web architectures and AWS cloud infrastructure.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        mail: "abhishekyadav1112.21@gmail.com"
      }
    ],
    technologies: ["React JS", "Next JS", "Tailwind CSS", "TypeScript", "Node.js"],
    seoTitle: "Custom Website Development & UI/UX Design | Silverwolf",
    seoDesc: "Build high-performance websites with Silverwolf. Expert React & Next.js development for modern businesses."
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Building powerful Android and cross-platform applications that provide seamless experiences on every device.",
    fullDescription: "From enterprise ERP systems to niche FinTech solutions, we develop robust mobile applications. Swapnali More leads our mobile division, specializing in Java-based Spring Boot backends and high-performance Android apps.",
    features: [
      "Enterprise Resource Planning (ERP) Apps",
      "FinTech & Payment Gateway Integration",
      "E-commerce & Shopping Applications",
      "Inventory & Warehouse Management Systems",
      "Custom CRM Mobile Solutions",
      "Native Android & Cross-Platform (React Native)"
    ],
    team: [
      {
        name: "Swapnali More",
        role: "Android Developer & Backend Engineer",
        bio: "Specializing in high-performance Android applications and Java-based backend systems using Spring Boot.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        mail: "swapnali@silverwolftechnologies.in"
      }
    ],
    technologies: ["Android SDK", "Java", "Spring Boot", "React Native", "Firebase"],
    seoTitle: "Android & Cross-Platform App Development | Silverwolf",
    seoDesc: "Expert mobile app development by Swapnali More. Specializing in enterprise apps, FinTech, and Java/Spring Boot backends."
  },
  "video-editing": {
    title: "Video Production & Editing",
    icon: Video,
    description: "Professional video editing services that turn your raw footage into compelling stories for your brand.",
    fullDescription: "In the age of visual content, high-quality video is essential. Divakar prajapati brings Hollywood-level editing and motion graphics to your marketing campaigns.",
    features: [
      "Professional Video Color Grading & Correction",
      "Motion Graphics & Visual Effects (VFX)",
      "Social Media Content (Reels, Shorts, TikToks)",
      "Corporate Promotional Video Production",
      "Audio Syncing & Sound Design",
      "Dynamic Intro & Outro Creation"
    ],
    team: [
      {
        name: "Divakar prajapati",
        role: "Lead Creative Designer & Video Editor",
        bio: "Expert in high-end video editing and motion graphics for brand storytelling.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        mail: "diwakar@silverwolftechnologies.in"
      }
    ],
    technologies: ["Premiere Pro", "After Effects", "CapCut", "Davinci Resolve"],
    seoTitle: "Professional Video Editing & Motion Graphics | Silverwolf",
    seoDesc: "Elevate your brand with expert video editing by Divakar prajapati. Motion graphics, social media reels, and corporate videos."
  },
  "graphic-design": {
    title: "Brand Strategy & Design",
    icon: Palette,
    description: "Creative visual design services that define your brand's identity and capture your audience's attention.",
    fullDescription: "Visual identity is more than just a logo. We create comprehensive design systems, from brochures to social media graphics, led by our lead designer Divakar prajapati.",
    features: [
      "Brand Identity & Logo Design",
      "Social Media Graphics & Ad Creatives",
      "Brochure, Flyer & Print Design",
      "Vector Illustration & Image Processing",
      "UI Design for Web & Mobile",
      "Custom Presentation Design"
    ],
    team: [
      {
        name: "Divakar prajapati",
        role: "Lead Creative Designer & Video Editor",
        bio: "Expert in high-end visual design and brand storytelling.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        mail: "diwakar@silverwolftechnologies.in"
      }
    ],
    technologies: ["Photoshop", "Illustrator", "Figma", "Canva"],
    seoTitle: "Creative Graphic Design & Brand Identity | Silverwolf",
    seoDesc: "Professional graphic design services by Divakar prajapati. Logos, brand identity, and social media graphics that stand out."
  },
  "crm-solutions": {
    title: "Custom CRM Solutions",
    icon: Database,
    description: "Build powerful Customer Relationship Management systems tailored to your specific business workflows.",
    fullDescription: "Streamline your sales, marketing, and customer support with a custom CRM. Swapnali More and Sharad Yadav lead our CRM development, ensuring seamless data integration and user-friendly interfaces.",
    features: [
      "Lead & Pipeline Management",
      "Customer Data Centralization",
      "Automated Workflow & Task Alerts",
      "In-depth Analytics & Reporting",
      "Multi-channel Communication Integration",
      "Secure Role-Based Access Control"
    ],
    team: [
      {
        name: "Swapnali More",
        role: "Android Developer & Backend Engineer",
        bio: "Specializing in high-performance Android applications and Java-based backend systems using Spring Boot.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        mail: "swapnali@silverwolftechnologies.in"
      },
      {
        name: "Sharad Yadav",
        role: "Full Stack Website Developer",
        bio: "Expert in building high-performance web applications using modern JavaScript frameworks.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
        mail: "sharad@silverwolftechnologies.in"
      },
      {
        name: "Abhishekh Yadav",
        role: "Full Stack Developer & Cloud Engineer",
        bio: "Specializing in scalable web architectures and AWS cloud infrastructure.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        mail: "abhishekyadav1112.21@gmail.com"
      }
    ],
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "REST APIs"],
    seoTitle: "Custom CRM Development Services | Silverwolf",
    seoDesc: "Transform your business with custom CRM solutions built by Swapnali More and Sharad Yadav. Scalable, secure, and tailored to your needs."
  },
  "database-solutions": {
    title: "Database Engineering",
    icon: Database,
    description: "Architecting high-performance, secure, and scalable database systems for mission-critical applications.",
    fullDescription: "Data is the lifeblood of modern enterprise. We design and implement robust database architectures—from relational SQL systems to distributed NoSQL clusters—engineered for maximum integrity and lightning-fast query performance.",
    features: [
      "Relational Database Design (PostgreSQL, MySQL)",
      "NoSQL Cluster Management (MongoDB, Redis)",
      "Database Migration & Modernization",
      "Performance Tuning & Index Optimization",
      "High Availability & Disaster Recovery Scaling",
      "Secure Data Encryption & Compliance"
    ],
    team: [
      {
        name: "Abhishekh Yadav",
        role: "Cloud & Database Architect",
        bio: "Specializing in distributed systems and high-throughput database architectures on AWS.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        mail: "abhishekyadav1112.21@gmail.com"
      },
      {
        name: "Swapnali More",
        role: "Backend System Engineer",
        bio: "Expert in database integration and complex query optimization for enterprise ERPs.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        mail: "swapnali@silverwolftechnologies.in"
      }
    ],
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "AWS RDS"],
    seoTitle: "Database Engineering & Architecture Services | Silverwolf",
    seoDesc: "Expert database design and management. Scalable SQL and NoSQL solutions for enterprise-grade performance and security."
  },
  "website-bug-fixing": {
    title: "Legacy Support & Maintenance",
    icon: Wrench,
    description: "Rapid bug intervention, security hardening, and continuous optimization for existing digital assets.",
    fullDescription: "Even the best systems require elite maintenance. Our rapid-response team specializes in diagnosing complex regressions, patching security vulnerabilities, and optimizing legacy codebases to meet modern performance standards.",
    features: [
      "Emergency Bug Scrubbing & Fixes",
      "Security Audits & Patch Deployment",
      "Code Refactoring & Technical Debt Reduction",
      "24/7 Uptime Monitoring & Maintenance",
      "Performance Benchmarking & Profiling",
      "Scalability Hardening for High-Traffic Events"
    ],
    team: [
      {
        name: "Sharad Yadav",
        role: "Systems Stability Lead",
        bio: "Expert in deep-level debugging and performance optimization of large-scale JavaScript/TypeScript applications.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
        mail: "sharad@silverwolftechnologies.in"
      },
      {
        name: "Abhishekh Yadav",
        role: "Cloud Infrastructure Specialist",
        bio: "Specializing in identifying and fixing infra-level bottlenecks and security blindspots.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        mail: "abhishekyadav1112.21@gmail.com"
      }
    ],
    technologies: ["Node.js", "Jest", "New Relic", "Sentry", "AWS CloudWatch"],
    seoTitle: "Website Bug Fixing & Maintenance Services | Silverwolf",
    seoDesc: "Professional specialized support for existing websites. Bug fixes, security audits, and performance optimization for your digital business."
  }
};


const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = slug ? SERVICES_DATA[slug] : null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.98]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "916394753801";
    const message = `*New Inquiry for ${service.title}*\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${service.title}\nRequirements: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center space-y-8 p-20 bg-white/5 border border-white/5 rounded-[3rem] shadow-2xl">
          <h2 className="text-4xl font-outfit font-extrabold uppercase italic tracking-tighter">Protocol <span className="text-accent underline">Undefined.</span></h2>
          <Button onClick={() => navigate("/services")} className="bg-accent text-black font-extrabold px-10 h-14 rounded-2xl hover:bg-white uppercase tracking-tighter shadow-glow">Abort & Return</Button>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon || Code2;
  const otherServices = Object.keys(SERVICES_DATA)
    .filter(s => s !== slug)
    .slice(0, 3);

  // Generate Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.fullDescription,
    "provider": {
      "@type": "Organization",
      "name": "Silver Wolf Technologies",
      "url": "https://silverwolftechnologies.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title,
      "itemListElement": service.features?.map((feature: string) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "47"
    }
  };

  // Generate Person schemas for team members
  const personSchemas = service.team?.map((member: any) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.role,
    "email": member.mail,
    "worksFor": {
      "@type": "Organization",
      "name": "Silver Wolf Technologies"
    },
    "description": member.bio
  }));

  // Generate Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://silverwolftechnologies.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://silverwolftechnologies.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://silverwolftechnologies.com/services/${slug}`
      }
    ]
  };

  const allSchemas = [serviceSchema, breadcrumbSchema, ...(personSchemas || [])];

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title={service.seoTitle || service.title}
        description={service.seoDesc || service.description}
        canonical={`/services/${slug}`}
        schema={allSchemas}
      />
      <Navigation />

      <main ref={scrollRef} className="mission-padding relative">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

        {/* Dynamic Hero Section */}
        <div className="container mx-auto px-6 mb-24 md:mb-32 relative z-10">
          <motion.div
            style={{ opacity: opacity || 1, scale: scale || 1 }}
            className="flex flex-col xl:flex-row xl:items-center gap-16 xl:gap-24"
          >
            <div className="flex-1 text-left space-y-12">
              <Link to="/services" className="inline-flex items-center text-accent hover:text-white transition-colors font-black text-[10px] tracking-[0.4em] uppercase">
                <ArrowLeft className="mr-3 h-4 w-4" />
                Return to Capabilities
              </Link>

              <div className="space-y-8">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="p-5 bg-white/5 border border-white/10 rounded-[2rem] text-accent shadow-glow">
                    <ServiceIcon className="h-12 w-12" />
                  </div>
                  <Badge variant="outline" className="border-accent/30 text-accent font-black px-5 py-2 text-[10px] uppercase tracking-[0.3em] bg-accent/5 rounded-full">Enterprise Protocol Active</Badge>
                </div>
                <h1 className="fluid-h1 font-outfit font-black text-white uppercase italic">
                  {service.title}
                </h1>
              </div>

              <p className="text-lg md:text-2xl text-white/40 leading-relaxed font-medium italic max-w-3xl">
                {service.fullDescription}
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {service.technologies?.map((tech: string) => (
                  <span key={tech} className="px-6 py-3 rounded-full bg-white/5 border border-white/5 text-[10px] font-black text-white/40 uppercase tracking-[0.3em] hover:border-accent/40 hover:text-accent transition-all">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="xl:w-[450px] w-full">
              <div className="p-10 md:p-12 bg-accent text-black rounded-[3.5rem] space-y-10 shadow-glow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-black/10 rounded-bl-full" />
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-5">
                    <div className="p-3 bg-black/10 rounded-2xl">
                      <Clock className="h-8 w-8" />
                    </div>
                    <span className="text-xs font-black tracking-[0.3em] uppercase">Cycle Duration</span>
                  </div>
                  <div>
                    <div className="text-5xl sm:text-6xl md:text-7xl font-outfit font-black italic uppercase tracking-tighter leading-none mb-4">7 - 14 Days</div>
                    <p className="text-black/60 text-sm md:text-base font-bold leading-relaxed italic">
                      Rapid prototype-to-production cycles engineered for mission-critical digital expansion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strategic Deep Dive */}
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-32">
            <section className="space-y-16">
              <div className="flex items-center gap-4">
                <div className="h-[2px] bg-accent w-16" />
                <h2 className="fluid-h3 font-outfit font-black text-white uppercase italic tracking-tighter">Core <span className="text-accent underline decoration-2 underline-offset-8">Deliverables.</span></h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-0">
                {service.features?.map((feature: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-5 p-7 md:p-8 bg-white/5 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 hover:border-accent/30 hover:bg-white/10 transition-all group shadow-2xl"
                  >
                    <div className="mt-1 p-3 bg-white/5 border border-white/10 rounded-2xl text-accent group-hover:bg-accent group-hover:text-black transition-all">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <span className="text-base md:text-lg text-white/50 font-medium leading-relaxed group-hover:text-white transition-colors italic">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Managed Excellence */}
            <section className="space-y-16">
              <div className="flex items-center gap-4 px-4 md:px-0">
                <div className="h-[2px] bg-accent w-16" />
                <h2 className="fluid-h3 font-outfit font-black text-white uppercase italic tracking-tighter">Execution <span className="text-accent underline decoration-white/10 underline-offset-8">Squad.</span></h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-0">
                {service.team?.map((member: any) => (
                  <div key={member.name} className="overflow-hidden bg-white/5 border border-white/5 rounded-[2rem] md:rounded-[3rem] group p-6 md:p-10 space-y-6 md:space-y-8 hover:border-accent/40 shadow-2xl transition-all relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:opacity-10 transition-opacity" />
                    <div className="flex items-center gap-5 md:gap-8">
                      <div className="relative">
                        <img src={member.image} alt={member.name} className="w-14 h-14 md:w-24 md:h-24 rounded-xl md:rounded-[2rem] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10 group-hover:border-accent shadow-glow" />
                        <div className="absolute -bottom-1 -right-1 p-1 bg-accent text-black rounded-lg">
                          <User className="h-2.5 w-2.5 md:h-3 md:w-3" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-black text-white font-outfit uppercase tracking-tight italic">{member.name}</h3>
                        <p className="text-accent font-black text-[8px] md:text-[10px] uppercase tracking-[0.3em] mt-1 italic">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-xs md:text-base text-white/40 leading-relaxed font-medium italic">"{member.bio}"</p>
                    <button className="flex items-center gap-2 text-[9px] font-black text-white/20 uppercase tracking-widest hover:text-accent transition-colors pt-4 italic">
                      <Mail className="h-3 w-3" />
                      {member.mail}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Inquiry Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-12">
              <div className="p-12 bg-black border border-white/10 rounded-[4rem] text-white shadow-glow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-5 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="relative z-10 space-y-10">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent font-extrabold text-[9px] uppercase tracking-widest">
                      <Sparkles className="h-3 w-3" />
                      Intelligence Active
                    </div>
                    <h3 className="text-4xl font-outfit font-extrabold leading-none uppercase italic tracking-tighter">Command <span className="text-accent">Strategy.</span></h3>
                    <p className="text-white/40 text-sm font-medium leading-relaxed">
                      Request a mission-critical blueprint for your {service.title} initiative.
                    </p>
                  </div>

                  <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div className="space-y-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-white/20">Ident Name</label>
                      <Input
                        name="name"
                        placeholder="Subject Identity"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/10 focus:border-accent transition-all h-14 rounded-2xl"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-white/20">Comm Channel</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Communication Address"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/10 focus:border-accent transition-all h-14 rounded-2xl"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-white/20">Mission Brief</label>
                      <Textarea
                        name="message"
                        placeholder="Describe the objective detail..."
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/10 focus:border-accent transition-all min-h-[160px] resize-none rounded-2xl"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full h-16 bg-accent hover:bg-white text-black font-black rounded-2xl shadow-glow transition-all active:scale-[0.98] group uppercase tracking-tighter text-lg italic">
                      EXECUTE INQUIRY
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>

                  <div className="flex items-center gap-4 pt-4 opacity-30">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                    <span className="text-[9px] font-extrabold uppercase tracking-[0.3em]">Secure Engagement Protocol v2.6</span>
                  </div>
                </div>
              </div>

              {/* Cross-linking other services */}
              <div className="space-y-8 px-4">
                <h4 className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-white/20">Internal Nodes</h4>
                <div className="grid gap-4">
                  {otherServices.map(sKey => {
                    const OtherIcon = SERVICES_DATA[sKey].icon || Code2;
                    return (
                      <Link
                        key={sKey}
                        to={`/services/${sKey}`}
                        className="flex items-center justify-between p-6 bg-white/5 border border-white/5 rounded-[2rem] hover:border-accent/40 hover:bg-white/10 transition-all group"
                      >
                        <div className="flex items-center gap-5">
                          <div className="p-3 bg-white/5 text-accent rounded-xl group-hover:bg-accent group-hover:text-black transition-all">
                            <OtherIcon className="h-5 w-5" />
                          </div>
                          <span className="font-extrabold text-white font-outfit text-sm uppercase tracking-tight">{SERVICES_DATA[sKey].title}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-white/20 group-hover:text-accent transition-all" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
