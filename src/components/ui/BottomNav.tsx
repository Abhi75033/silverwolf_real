
import { Home, Layers, Users, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMobileMenu } from "@/components/ui/mobile-menu-context";

const BottomNav = () => {
    const location = useLocation();
    const { isOpen, openMenu, closeMenu } = useMobileMenu();

    const navItems = [
        { icon: Home, label: "Home", href: "/" },
        { icon: Layers, label: "Modules", action: "menu" },
        { icon: Users, label: "Operatives", href: "/team" },
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-t border-white/10 safe-area-bottom">
            <div className="flex justify-around items-center h-16 px-2">
                {navItems.map((item) => {
                    let isActive = false;
                    if (item.action === "menu") {
                        isActive = isOpen;
                    } else {
                        isActive = !isOpen && (location.pathname === item.href || (item.href !== "/" && location.pathname.startsWith(item.href || "")));
                    }

                    if (item.action === "menu") {
                        return (
                            <button
                                key="modules-btn"
                                onClick={openMenu}
                                className={cn(
                                    "relative flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors",
                                    isActive ? "text-accent" : "text-white/40 hover:text-white/60"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="bottom-nav-active"
                                        className="absolute -top-[1px] w-12 h-[2px] bg-accent shadow-[0_0_10px_rgba(212,255,51,0.5)]"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <item.icon className="w-5 h-5" />
                                <span className="text-[10px] uppercase font-bold tracking-wider">{item.label}</span>
                            </button>
                        );
                    }

                    return (
                        <Link
                            key={item.href}
                            to={item.href!}
                            onClick={closeMenu}
                            className={cn(
                                "relative flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors",
                                isActive ? "text-accent" : "text-white/40 hover:text-white/60"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="bottom-nav-active"
                                    className="absolute -top-[1px] w-12 h-[2px] bg-accent shadow-[0_0_10px_rgba(212,255,51,0.5)]"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <item.icon className="w-5 h-5" />
                            <span className="text-[10px] uppercase font-bold tracking-wider">{item.label}</span>
                        </Link>
                    );
                })}

                <Link
                    to="/inquiry"
                    onClick={closeMenu}
                    className={cn(
                        "relative flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors",
                        !isOpen && location.pathname === "/inquiry" ? "text-accent" : "text-white/40 hover:text-white/60"
                    )}
                >
                    {!isOpen && location.pathname === "/inquiry" && (
                        <motion.div
                            layoutId="bottom-nav-active"
                            className="absolute -top-[1px] w-12 h-[2px] bg-accent shadow-[0_0_10px_rgba(212,255,51,0.5)]"
                            initial={false}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                    <div className={cn(
                        "p-1.5 rounded-full transition-all duration-300",
                        !isOpen && location.pathname === "/inquiry" ? "bg-accent/20 text-accent" : "bg-white/10"
                    )}>
                        <MessageSquare className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider">Inquire</span>
                </Link>
            </div>
        </div>
    );
};

export default BottomNav;
