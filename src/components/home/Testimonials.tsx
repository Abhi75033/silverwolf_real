
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "CEO, TechStart Inc.",
        content: "Silver Wolf Technologies transformed our online presence. Their attention to detail and technical expertise is unmatched.",
    },
    {
        name: "Sarah Jenkins",
        role: "Marketing Director, Creative Flow",
        content: "The team delivered our mobile app ahead of schedule and it looks absolutely stunning. Highly recommended!",
    },
    {
        name: "Amit Patel",
        role: "Founder, QuickEat",
        content: "Professional, responsive, and innovative. They understood our vision perfectly and executed it flawlessly.",
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-[#050505] overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center text-white">
                    Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-wolf-purple to-wolf-neon">Stories</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-2xl relative">
                            <Quote className="w-10 h-10 text-wolf-purple/20 absolute top-6 right-6" />
                            <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                            <div>
                                <h4 className="text-white font-bold">{testimonial.name}</h4>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
