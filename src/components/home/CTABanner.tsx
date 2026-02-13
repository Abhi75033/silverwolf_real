
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-wolf-purple to-wolf-violet opacity-10"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
                    Ready to Build the Future?
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                    Let's turn your vision into reality. Partner with us for cutting-edge digital solutions.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <Button asChild size="lg" className="h-14 px-10 text-lg bg-white text-black hover:bg-gray-200 transition-colors rounded-full font-bold">
                        <Link to="/contact">Start a Project</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg border-white/20 text-white hover:bg-white/10 transition-colors rounded-full">
                        <Link to="/portfolio">View Portfolio</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
