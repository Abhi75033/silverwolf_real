
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development: Trends to Watch in 2026",
        excerpt: "Explore the latest technologies shaping the web, from AI-driven interfaces to WebAssembly and Edge Computing.",
        date: "Feb 10, 2026",
        author: "Abhishek Kumar",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        title: "Why Your Business Needs a Mobile App Strategy",
        excerpt: "In a mobile-first world, having a dedicated app can significantly boost customer engagement and retention.",
        date: "Feb 05, 2026",
        author: "Swapnali More",
        category: "Mobile",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        title: "SEO Strategies that Actually Work in 2026",
        excerpt: "Stop chasing algorithms and start building value. Here are the SEO strategies that deliver sustainable organic growth.",
        date: "Jan 28, 2026",
        author: "Divakar Prajapati",
        category: "Digital Marketing",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        title: "Brand Identity Essentials for Startups",
        excerpt: "Building a brand is more than just a logo. Learn the key components of a strong, memorable brand identity.",
        date: "Jan 15, 2026",
        author: "Divakar Prajapati",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1493612276216-9c5901955d43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
];

const Blog = () => {
    return (
        <Layout>
            <SEO
                title="Insights & News | Silver Wolf Technologies"
                description="Stay updated with the latest trends in technology, design, and business growth. Read our expert articles and case studies."
                canonical="/blog"
            />

            <section className="pt-32 pb-20 bg-background relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-glow opacity-20 blur-[100px]"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-wolf-purple to-wolf-neon">Insights</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Expert perspectives on technology, design, and business.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {blogPosts.map((post) => (
                            <article key={post.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-wolf-purple/50 transition-all group">
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-wolf-purple text-white text-xs font-bold rounded-full">{post.category}</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {post.date}</span>
                                        <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {post.author}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-wolf-neon transition-colors">
                                        <Link to="/blog">{post.title}</Link>
                                    </h2>
                                    <p className="text-gray-400 mb-6 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <Link to="/blog" className="inline-flex items-center text-wolf-purple font-bold hover:text-white transition-colors">
                                        Read Article <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Blog;
