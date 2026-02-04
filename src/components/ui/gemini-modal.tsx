
import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, Loader2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";


interface GeminiModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: string;
    isLoading: boolean;
}

export const GeminiModal = ({ isOpen, onClose, content, isLoading }: GeminiModalProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-black border border-accent/20 rounded-xl shadow-[0_0_50px_rgba(212,255,51,0.1)] overflow-hidden flex flex-col max-h-[80vh]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
                            <div className="flex items-center gap-2 text-accent">
                                <Cpu className="h-4 w-4" />
                                <span className="text-xs font-mono font-bold tracking-widest uppercase">System_Analysis</span>
                            </div>
                            <Button
                                size="icon"
                                variant="ghost"
                                onClick={onClose}
                                className="h-8 w-8 text-white/50 hover:text-white hover:bg-white/10"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>

                        {/* Content using Markdown */}
                        <div className="flex-1 overflow-y-auto p-6 font-mono text-sm leading-relaxed text-white/80 space-y-4">
                            {isLoading ? (
                                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                                    <Loader2 className="h-8 w-8 text-accent animate-spin" />
                                    <p className="text-xs text-accent/50 animate-pulse uppercase tracking-widest">Processing Data...</p>
                                </div>
                            ) : (
                                <div className="whitespace-pre-wrap">
                                    {content}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {!isLoading && content && (
                            <div className="p-4 border-t border-white/10 bg-white/5 flex justifying-end">
                                <Button variant="outline" size="sm" onClick={handleCopy} className="ml-auto border-white/10 hover:bg-white/10 text-xs">
                                    {copied ? <Check className="h-3 w-3 mr-2" /> : <Copy className="h-3 w-3 mr-2" />}
                                    {copied ? "COPIED" : "COPY_LOG"}
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
