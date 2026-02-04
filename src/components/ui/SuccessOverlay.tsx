import { motion, AnimatePresence } from "framer-motion";
import { Check, Shield, Lock, Wifi, ChevronRight, Activity, Zap } from "lucide-react";
import { useEffect, useState } from "react";

interface SuccessOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    name: string;
    type: 'inquiry' | 'mission-brief';
}

export const SuccessOverlay = ({ isOpen, onClose, name, type }: SuccessOverlayProps) => {
    const [progress, setProgress] = useState(0);
    const [step, setStep] = useState<'uploading' | 'verifying' | 'complete'>('uploading');

    useEffect(() => {
        if (isOpen) {
            setProgress(0);
            setStep('uploading');

            // Simulation sequence
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        return 100;
                    }
                    return prev + 2;
                });
            }, 20);

            setTimeout(() => setStep('verifying'), 1500);
            setTimeout(() => setStep('complete'), 3000);
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl"
                >
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />

                    <div className="w-full max-w-lg p-8 relative">
                        {step !== 'complete' ? (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 1.1, opacity: 0 }}
                                className="flex flex-col items-center text-center space-y-8"
                            >
                                {/* Loading Spinner HUD */}
                                <div className="relative w-32 h-32 flex items-center justify-center">
                                    <svg className="absolute inset-0 w-full h-full animate-spin-slow">
                                        <circle cx="64" cy="64" r="62" stroke="currentColor" strokeWidth="1" fill="transparent" className="text-white/10" />
                                        <circle cx="64" cy="64" r="62" stroke="currentColor" strokeWidth="1" fill="transparent" className="text-accent/50" strokeDasharray="10 20" />
                                    </svg>
                                    <div className="text-4xl font-black text-white font-mono tabular-nums">
                                        {progress}%
                                    </div>
                                    <div className="absolute top-0 w-full h-full border-t-2 border-accent/20 rounded-full animate-spin" />
                                </div>

                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold text-white uppercase tracking-widest animate-pulse">
                                        {step === 'uploading' ? 'Encrypting Transmission' : 'Verifying Secure Link'}
                                    </h2>
                                    <div className="flex items-center justify-center gap-2 text-xs text-white/40 font-mono">
                                        <Lock className="h-3 w-3" />
                                        <span>256-BIT ENCRYPTION ACTIVE</span>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

                                <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        type="spring"
                                        className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 mb-2 group"
                                    >
                                        <Check className="h-10 w-10 text-emerald-500 group-hover:scale-110 transition-transform" />
                                    </motion.div>

                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-black text-white uppercase italic tracking-tight">
                                            Mission <span className="text-emerald-500">Confirmed</span>
                                        </h2>
                                        <p className="text-white/60 text-sm font-medium">
                                            Transmission received successfully, Agent {name.split(' ')[0]}.
                                        </p>
                                    </div>

                                    <div className="w-full bg-white/5 rounded-xl p-4 border border-white/5 text-left space-y-3">
                                        <div className="flex items-center justify-between text-xs text-white/40 uppercase tracking-wider">
                                            <span>Next Steps</span>
                                            <Activity className="h-3 w-3 text-emerald-500" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-start gap-3 text-sm text-white/80">
                                                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">1</div>
                                                <p>Intel analysis by senior command.</p>
                                            </div>
                                            <div className="flex items-start gap-3 text-sm text-white/80">
                                                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">2</div>
                                                <p>Strategic response within 24 hours.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={onClose}
                                        className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-accent transition-colors flex items-center justify-center gap-2 group"
                                    >
                                        Return to Base
                                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
