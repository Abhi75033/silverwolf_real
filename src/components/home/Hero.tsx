
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-hero-glow opacity-30 blur-[100px] animate-slow-spin"></div>
            <div className="absolute inset-0 bg-grid opacity-20"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md animate-fade-in-up">
                    <span className="flex h-2 w-2 rounded-full bg-wolf-neon animate-pulse"></span>
                    <span className="text-sm font-medium text-gray-300">Accepting New Projects for 2026</span>
                    <ChevronRight className="w-4 h-4 text-wolf-neon" />
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-wolf-purple to-wolf-neon">Digital & Business</span> Solutions Under One Roof
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    Silver Wolf Technologies transforms businesses with expert web development, mobile apps, digital marketing, and strategic branding.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <Button asChild size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-wolf-purple to-wolf-neon hover:shadow-lg hover:shadow-wolf-purple/20 transition-all duration-300 rounded-full">
                        <Link to="/contact">
                            Get Free Consultation
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>

                    <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md rounded-full">
                        <Link to="/inquiry">Request Quote</Link>
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-wolf-neon rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
