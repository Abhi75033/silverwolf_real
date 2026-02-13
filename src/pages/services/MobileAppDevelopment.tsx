
import ServiceLayout from "@/components/services/ServiceLayout";
import { Smartphone, Tablet, Zap, Layers } from "lucide-react";

const MobileAppDevelopment = () => {
    return (
        <ServiceLayout
            title="Mobile App Development Company | Android & iOS Apps"
            description="Expert mobile app development for Android and iOS. We build scalable, secure, and high-performance mobile applications for startups and enterprises."
            heroTitle="Mobile App Development Services"
            heroSubtitle="Create engaging mobile experiences driven by strategy, design, and technology. We build apps that users love."
            canonical="/mobile-app-development"
        >
            <div className="space-y-12 text-gray-300">
                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <Smartphone className="w-8 h-8 text-wolf-purple" />
                        <h2 className="text-3xl font-bold font-heading text-white">iOS App Development</h2>
                    </div>
                    <p className="leading-relaxed">
                        We craft premium iOS applications using Swift and SwiftUI. Our apps are designed to meet Apple's high standards for design and performance, ensuring
                        a seamless experience for iPhone and iPad users.
                    </p>
                </section>

                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <Tablet className="w-8 h-8 text-wolf-purple" />
                        <h2 className="text-3xl font-bold font-heading text-white">Android App Development</h2>
                    </div>
                    <p className="leading-relaxed">
                        Reach the widest audience with our custom Android apps. We build robust, feature-rich applications using Kotlin and Java that run smoothly across
                        the diverse Android ecosystem.
                    </p>
                </section>

                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <Layers className="w-8 h-8 text-wolf-purple" />
                        <h2 className="text-3xl font-bold font-heading text-white">Cross-Platform Solutions</h2>
                    </div>
                    <p className="leading-relaxed">
                        Save time and budget with cross-platform development using React Native and Flutter. We verify native-like performance while maintaining a single codebase
                        for both iOS and Android.
                    </p>
                </section>

                <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h2 className="text-2xl font-bold font-heading text-white mb-6">Our Development Process</h2>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <div className="bg-wolf-purple/20 text-wolf-neon w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">1</div>
                            <p>Strategy & Discovery</p>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-wolf-purple/20 text-wolf-neon w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">2</div>
                            <p>UI/UX Design</p>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-wolf-purple/20 text-wolf-neon w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">3</div>
                            <p>Development & Testing</p>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-wolf-purple/20 text-wolf-neon w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">4</div>
                            <p>Launch & Growth</p>
                        </div>
                    </div>
                </section>
            </div>
        </ServiceLayout>
    );
};

export default MobileAppDevelopment;
