
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link to="/" className="text-3xl font-bold font-heading block">
                            <span className="text-white">SILVER</span>
                            <span className="text-primary">WOLF</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Silver Wolf Technologies provides web development, mobile app development, digital marketing, and branding solutions to help businesses grow online.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about-us" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/portfolio" className="text-gray-400 hover:text-primary transition-colors text-sm">Portfolio</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-primary transition-colors text-sm">Blog</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            <li><Link to="/web-development" className="text-gray-400 hover:text-primary transition-colors text-sm">Web Development</Link></li>
                            <li><Link to="/mobile-app-development" className="text-gray-400 hover:text-primary transition-colors text-sm">App Development</Link></li>
                            <li><Link to="/digital-marketing" className="text-gray-400 hover:text-primary transition-colors text-sm">Digital Marketing</Link></li>
                            <li><Link to="/design-branding" className="text-gray-400 hover:text-primary transition-colors text-sm">Design & Branding</Link></li>
                            <li><Link to="/business-services" className="text-gray-400 hover:text-primary transition-colors text-sm">Business Services</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-primary mt-1" />
                                <span className="text-gray-400 text-sm">
                                    123 Tech Park, Innovation Hub,<br />
                                    Cyber City, India - 560100
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <span className="text-gray-400 text-sm">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <span className="text-gray-400 text-sm">hello@silverwolf.tech</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} Silver Wolf Technologies. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-xs">Privacy Policy</Link>
                        <Link to="/terms-conditions" className="text-gray-500 hover:text-white text-xs">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
