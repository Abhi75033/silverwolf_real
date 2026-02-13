
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const portfolioItems = [
    {
        id: 1,
        title: "E-Commerce MegaStore",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        title: "FinTech Dashboard",
        category: "SaaS Platform",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        title: "Luxury Brand Identity",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        title: "HealthCare App",
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 5,
        title: "Real Estate Portal",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 6,
        title: "Digital Marketing Campaign",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
];

const Portfolio = () => {
    return (
        <Layout>
            <SEO
                title="Our Portfolio | Silver Wolf Technologies"
                description="Explore our recent projects in web development, mobile apps, and branding. See how we help businesses solve problems with technology."
                canonical="/portfolio"
            />

            <section className="pt-32 pb-20 bg-background relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-glow opacity-20 blur-[100px]"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-wolf-purple to-wolf-neon">Work</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A showcase of our best projects and digital solutions.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioItems.map((project) => (
                            <div key={project.id} className="group relative rounded-xl overflow-hidden aspect-[4/3] block bg-white/5 border border-white/5">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <span className="text-wolf-neon text-xs font-bold uppercase tracking-wider mb-2 block">
                                        {project.category}
                                    </span>
                                    <div className="flex justify-between items-end">
                                        <h3 className="text-2xl font-bold text-white mb-0">{project.title}</h3>
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-wolf-purple transition-colors">
                                            <ArrowUpRight className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Portfolio;
