import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, User, ArrowRight, Shield, Scan, Cpu, Radio, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [scanLine, setScanLine] = useState("0%");
    const navigate = useNavigate();
    const { toast } = useToast();

    // Simulated scanning effect loop
    useEffect(() => {
        const interval = setInterval(() => {
            setScanLine(prev => prev === "100%" ? "0%" : "100%");
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:5001/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("adminToken", data.token);
                // Artificial delay for "Verification" effect
                setTimeout(() => {
                    toast({
                        title: "IDENTITY CONFIRMED",
                        description: "Access level: ADMINISTRATOR. Welcome back.",
                        className: "bg-emerald-950 border-emerald-500/50 text-emerald-100 uppercase font-mono tracking-widest",
                    });
                    navigate("/admin/dashboard");
                }, 1500);
            } else {
                toast({
                    title: "ACCESS DENIED",
                    description: data.error || "Biometric mismatch detected.",
                    variant: "destructive",
                    className: "uppercase font-mono tracking-widest",
                });
                setIsLoading(false);
            }
        } catch (error) {
            toast({
                title: "NETWORK FAILURE",
                description: "Secure uplink could not be established.",
                variant: "destructive",
                className: "uppercase font-mono tracking-widest",
            });
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#030303] relative overflow-hidden flex items-center justify-center font-mono selection:bg-accent/30 selection:text-accent">
            {/* Ambient Dynamic Background */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />

            {/* Moving Scan Line Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_bottom,transparent_49%,rgba(255,255,255,0.1)_50%,transparent_51%)] bg-[size:100%_4px]" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-lg relative z-10"
            >
                {/* Holographic Card Container */}
                <div className="relative group">
                    {/* Animated Border Gradient */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent/0 via-accent/30 to-purple-500/0 rounded-[2.5rem] blur-md opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

                    <div className="relative bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden">
                        {/* Internal Scanning Light */}
                        <motion.div
                            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.5)] z-20"
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        />

                        {/* Header Section */}
                        <div className="text-center mb-12 relative">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-black border border-white/10 mb-8 relative group/icon"
                            >
                                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover/icon:opacity-100 transition-opacity" />
                                <Shield className="h-10 w-10 text-white group-hover/icon:text-accent transition-colors relative z-10" />
                                <Scan className="absolute h-20 w-20 text-accent/20 animate-spin-slow duration-[10s]" />

                                {/* Corner Decorations */}
                                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-accent opacity-50" />
                                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-accent opacity-50" />
                                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-accent opacity-50" />
                                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-accent opacity-50" />
                            </motion.div>

                            <h1 className="text-3xl font-black text-white uppercase tracking-[0.2em] mb-2">
                                Silver Wolf
                            </h1>
                            <div className="flex items-center justify-center gap-3 text-xs font-bold text-accent tracking-[0.3em] uppercase opacity-80">
                                <Cpu className="h-3 w-3" />
                                <span>Command Interface</span>
                            </div>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleLogin} className="space-y-8 relative z-20">
                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
                                        <User className="h-3 w-3" /> Identity Protocol
                                    </label>
                                    <div className="h-px flex-1 bg-white/5 mx-4" />
                                    <span className={cn("text-[10px] uppercase tracking-wider", username ? "text-accent" : "text-white/20")}>
                                        {username ? "DETECTED" : "WAITING"}
                                    </span>
                                </div>
                                <div className="relative group/input">
                                    <Input
                                        type="text"
                                        placeholder="ENTER IDENTIFIER"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="bg-black/50 border-white/5 h-16 text-sm text-center text-white placeholder:text-white/10 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 tracking-[0.15em] transition-all rounded-xl"
                                        autoComplete="off"
                                    />
                                    {/* Corner Accents on Focus */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent group-focus-within/input:w-full transition-all duration-500 opacity-0 group-focus-within/input:opacity-100" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
                                        <Lock className="h-3 w-3" /> Security Token
                                    </label>
                                    <div className="h-px flex-1 bg-white/5 mx-4" />
                                    <span className="text-[10px] text-white/20 uppercase tracking-wider">ENCRYPTED</span>
                                </div>
                                <div className="relative group/input">
                                    <Input
                                        type="password"
                                        placeholder="••••••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="bg-black/50 border-white/5 h-16 text-sm text-center text-white placeholder:text-white/10 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 tracking-[0.5em] transition-all rounded-xl"
                                    />
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent group-focus-within/input:w-full transition-all duration-500 opacity-0 group-focus-within/input:opacity-100" />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full h-20 bg-white hover:bg-accent text-black font-black text-sm tracking-[0.3em] uppercase rounded-xl transition-all duration-500 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] relative overflow-hidden group/btn"
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine opacity-0 group-hover/btn:opacity-100 transition-opacity" />

                                {isLoading ? (
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="flex gap-1">
                                            {[...Array(3)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{ height: ["10px", "20px", "10px"] }}
                                                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                                                    className="w-1 bg-black rounded-full"
                                                />
                                            ))}
                                        </div>
                                        <span className="text-[10px] tracking-widest opacity-60">VERIFYING CREDENTIALS</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-4">
                                        <span className="relative z-10">Initiate Access</span>
                                        <Radio className="h-5 w-5 animate-pulse" />
                                    </div>
                                )}
                            </Button>
                        </form>

                        {/* Footer Status */}
                        <div className="mt-12 flex justify-between items-center text-[9px] text-white/20 uppercase tracking-[0.2em] font-medium border-t border-white/5 pt-6">
                            <div className="flex items-center gap-2">
                                <Activity className="h-3 w-3 text-emerald-500" />
                                <span>System Normal</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
                                <span>Secure Link Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
