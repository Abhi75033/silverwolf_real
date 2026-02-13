
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// Placeholder data - replace with real projects later
const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        title: "Finance App UI/UX",
        category: "Mobile & Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        title: "Corporate Branding",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
];

const PortfolioPreview = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">Our Work</h2>
                        <p className="text-gray-400">Recent projects we've brought to life.</p>
                    </div>
                    <Link to="/portfolio" className="hidden md:flex items-center text-wolf-purple hover:text-white transition-colors">
                        View All Projects <ArrowUpRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Link key={project.id} to="/portfolio" className="group relative rounded-xl overflow-hidden aspect-[4/3] block">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                            <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-wolf-neon text-xs font-bold uppercase tracking-wider mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <Link to="/portfolio" className="inline-flex items-center text-wolf-purple hover:text-white transition-colors">
                        View All Projects <ArrowUpRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PortfolioPreview;
