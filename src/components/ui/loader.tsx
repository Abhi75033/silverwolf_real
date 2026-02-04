import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Command } from "lucide-react";

const services = [
    "FULL STACK WEBSITES",
    "MOBILE APP DEVELOPMENT",
    "GRAPHIC DESIGN",
    "VIDEO EDITING",
    "CRM SOLUTIONS",
    "AI INTEGRATION"
];

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

    useEffect(() => {
        // Cycle services every 1.2 seconds for better readability
        const serviceInterval = setInterval(() => {
            setCurrentServiceIndex((prev) => (prev + 1) % services.length);
        }, 1200);

        // Complete after 4s (enough time to read ~3 services)
        const completeTimer = setTimeout(() => {
            clearInterval(serviceInterval);
            onComplete();
        }, 4000);

        return () => {
            clearInterval(serviceInterval);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center font-mono"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative flex items-center justify-center mb-8">
                {/* Outer Ring */}
                <motion.div
                    className="w-32 h-32 rounded-full border-2 border-white/10 border-t-accent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner Ring */}
                <motion.div
                    className="absolute w-24 h-24 rounded-full border-2 border-white/10 border-b-white/50"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Logo/Icon in Center */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Command className="w-8 h-8 text-accent animate-pulse" />
                </motion.div>
            </div>

            {/* Text branding */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex flex-col items-center gap-4"
            >
                <h1 className="text-xl font-bold tracking-[0.3em] text-white">
                    SILVER WOLF
                </h1>

                {/* Dynamic Service Text */}
                <div className="h-6 flex items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentServiceIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-3"
                        >
                            <span className="text-accent text-xs">●</span>
                            <span className="text-xs text-white/70 tracking-widest uppercase font-semibold w-[200px] text-center">
                                {services[currentServiceIndex]}
                            </span>
                            <span className="text-accent text-xs">●</span>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent mt-2" />
            </motion.div>

        </motion.div>
    );
};
