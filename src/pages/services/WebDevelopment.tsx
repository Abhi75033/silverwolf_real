
import ServiceLayout from "@/components/services/ServiceLayout";
import { Code, ShoppingCart, Database, Server } from "lucide-react";

const WebDevelopment = () => {
    return (
        <ServiceLayout
            title="Web Development Company in India | Custom Website Development"
            description="Professional web development services including custom websites, eCommerce, and full-stack solutions. Build fast, secure, and SEO-optimized websites for your business."
            heroTitle="Custom Web Development Services"
            heroSubtitle="We build high-performance, scalable, and secure websites tailored to your business goals using cutting-edge technologies."
            canonical="/web-development"
        >
            <div className="space-y-12 text-gray-300">
                <section>
                    <h2 className="text-3xl font-bold font-heading text-white mb-4">Custom Website Development</h2>
                    <p className="leading-relaxed">
                        Your website is your digital storefront. We create stunning, responsive, and user-friendly websites that leave a lasting impression.
                        Whether you need a simple corporate site or a complex web application, our team delivers excellence.
                    </p>
                    <ul className="mt-4 space-y-2 list-disc list-inside text-gray-400">
                        <li>Responsive Design for all devices</li>
                        <li>SEO-friendly architecture</li>
                        <li>Fast loading speeds</li>
                        <li>Secure coding practices</li>
                    </ul>
                </section>

                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <ShoppingCart className="w-8 h-8 text-wolf-purple" />
                        <h2 className="text-3xl font-bold font-heading text-white">E-Commerce Website Development</h2>
                    </div>
                    <p className="leading-relaxed">
                        Launch your online store with our robust e-commerce solutions. We specialize in Shopify, WooCommerce, and custom MERN stack e-commerce platforms
                        that drive sales and provide seamless shopping experiences.
                    </p>
                </section>

                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <Code className="w-8 h-8 text-wolf-purple" />
                        <h2 className="text-3xl font-bold font-heading text-white">Full Stack Development</h2>
                    </div>
                    <p className="leading-relaxed">
                        From frontend interfaces to backend logic, we handle it all. Our full-stack expertise ensures your application is cohesive, efficient, and easy to maintain.
                        We work with React, Next.js, Node.js, and more.
                    </p>
                </section>

                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <Server className="w-8 h-8 text-wolf-purple" />
                        <h2 className="text-3xl font-bold font-heading text-white">API & Backend Solutions</h2>
                    </div>
                    <p className="leading-relaxed">
                        Power your applications with secure and scalable backend infrastructure. We design RESTful APIs and GraphQL schemas that ensure smooth data communication
                        between your services.
                    </p>
                </section>

                <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h2 className="text-2xl font-bold font-heading text-white mb-6">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 mt-2 rounded-full bg-wolf-neon"></div>
                            <p>Agile Development Process</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 mt-2 rounded-full bg-wolf-neon"></div>
                            <p>Dedicated Support Team</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 mt-2 rounded-full bg-wolf-neon"></div>
                            <p>Clean & Maintainable Code</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 mt-2 rounded-full bg-wolf-neon"></div>
                            <p>On-Time Delivery</p>
                        </div>
                    </div>
                </section>
            </div>
        </ServiceLayout>
    );
};

export default WebDevelopment;
