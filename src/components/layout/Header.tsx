
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Monitor, Smartphone, Globe, PenTool, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const services = [
        { name: "Web Development", href: "/web-development", icon: Monitor },
        { name: "Mobile Development", href: "/mobile-app-development", icon: Smartphone },
        { name: "Digital Marketing", href: "/digital-marketing", icon: Globe },
        { name: "Design & Branding", href: "/design-branding", icon: PenTool },
        { name: "Business Services", href: "/business-services", icon: Briefcase },
    ];

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Blog", href: "/blog" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-lg border-b border-white/10 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold font-heading">
                    <span className="text-white">SILVER</span>
                    <span className="text-primary">WOLF</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.href ? "text-primary" : "text-gray-300"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Services Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-primary transition-colors focus:outline-none">
                            <span>Services</span>
                            <ChevronDown className="w-4 h-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-[#0A0A0A] border border-white/10 backdrop-blur-xl w-64 p-2 mt-2">
                            {services.map((service) => (
                                <DropdownMenuItem key={service.name} asChild>
                                    <Link
                                        to={service.href}
                                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                                    >
                                        <div className="p-2 rounded-md bg-white/5 group-hover:bg-primary/20 transition-colors">
                                            <service.icon className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-200 group-hover:text-white">
                                            {service.name}
                                        </span>
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button asChild className="bg-gradient-to-r from-wolf-purple to-wolf-neon hover:opacity-90 text-white border-0">
                        <Link to="/contact">Get Started</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 backdrop-blur-xl p-6 flex flex-col space-y-4 animate-in slide-in-from-top-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-lg font-medium text-gray-300 hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 border-t border-white/10">
                        <p className="text-sm text-gray-500 mb-3 px-2">Services</p>
                        {services.map((service) => (
                            <Link
                                key={service.name}
                                to={service.href}
                                className="flex items-center space-x-3 p-2 text-gray-300 hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <service.icon className="w-5 h-5" />
                                <span>{service.name}</span>
                            </Link>
                        ))}
                    </div>
                    <Button asChild className="w-full mt-4 bg-primary text-white">
                        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                            Get Started
                        </Link>
                    </Button>
                </div>
            )}
        </header>
    );
};

export default Header;
