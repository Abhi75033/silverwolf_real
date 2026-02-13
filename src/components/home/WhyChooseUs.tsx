
import { CheckCircle2, Zap, Shield, Users } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Fast Implementation",
        description: "We deliver projects on time with clean, efficient code.",
    },
    {
        icon: Shield,
        title: "Secure & Scalable",
        description: "Built with security best practices to grow with your business.",
    },
    {
        icon: CheckCircle2,
        title: "Proven Expertise",
        description: "Years of experience delivering successful digital solutions.",
    },
    {
        icon: Users,
        title: "Client-Centric Approach",
        description: "We work closely with you to understand your unique needs.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-[#050505]">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-white leading-tight">
                        Why Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-wolf-purple to-wolf-neon">Silver Wolf?</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        In a digital world full of noise, we help you stand out. Our team combines technical expertise with creative innovation to deliver results that matter.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col space-y-3">
                                <div className="w-12 h-12 rounded-lg bg-wolf-purple/10 flex items-center justify-center text-wolf-purple">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                                <p className="text-gray-400 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-wolf-purple to-wolf-neon blur-[100px] opacity-20"></div>
                    <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 p-4 rounded-xl bg-black/40 border border-white/5">
                                <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">98% Performance Score</h4>
                                    <p className="text-xs text-gray-400">Google PageSpeed Insights</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 rounded-xl bg-black/40 border border-white/5">
                                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Enterprise Security</h4>
                                    <p className="text-xs text-gray-400">Bank-grade encryption standards</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 rounded-xl bg-black/40 border border-white/5">
                                <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Dedicated Support</h4>
                                    <p className="text-xs text-gray-400">24/7 technical assistance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
