
import { Link } from "react-router-dom";
import { Monitor, Smartphone, Globe, PenTool, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Monitor,
        title: "Web Development",
        desc: "Custom, responsive, and SEO-optimized websites built with modern frameworks.",
        link: "/web-development",
        color: "text-blue-400",
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        desc: "Scalable Android & iOS applications delivering seamless user experiences.",
        link: "/mobile-app-development",
        color: "text-green-400",
    },
    {
        icon: Globe,
        title: "Digital Marketing",
        desc: "Data-driven SEO, PPC, and social media strategies to grow your brand online.",
        link: "/digital-marketing",
        color: "text-purple-400",
    },
    {
        icon: PenTool,
        title: "Design & Branding",
        desc: "Creative UI/UX design and branding that defines your business identity.",
        link: "/design-branding",
        color: "text-pink-400",
    },
];

const ServicesOverview = () => {
    return (
        <section className="py-20 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">Our Expertise</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We deliver end-to-end digital solutions tailored to your business goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            to={service.link}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-wolf-purple/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity ${service.color}`}>
                                <service.icon className="w-24 h-24 transform rotate-12 translate-x-4 -translate-y-4" />
                            </div>

                            <div className="relative z-10 font-heading">
                                <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                                    <service.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-wolf-neon transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    {service.desc}
                                </p>

                                <div className="flex items-center text-sm font-medium text-wolf-purple group-hover:text-wolf-neon transition-colors">
                                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
