
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Mail, Phone, MapPin, Search } from "lucide-react";
import SimpleContactForm from "@/components/forms/SimpleContactForm";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@silverwolftechnologies.in", "support@silverwolftechnologies.in"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 63947 53801", "+91 80000 00000"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Lucknow, India", "Serving Clients Globally"],
  },
];

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact Us | Silver Wolf Technologies"
        description="Get in touch with Silver Wolf Technologies for web development, mobile apps, and digital marketing services."
        canonical="/contact"
      />

      {/* Header */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-20 blur-[100px]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-wolf-purple to-wolf-neon">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-wolf-purple/50 transition-colors">
                    <div className="w-12 h-12 bg-wolf-purple/20 rounded-full flex items-center justify-center mb-4 text-wolf-neon">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="text-gray-400 space-y-1">
                      {item.lines.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 h-64 md:h-80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 text-center">
                  <MapPin className="w-10 h-10 text-wolf-purple mx-auto mb-2" />
                  <p className="text-white font-bold">Lucknow, India</p>
                  <p className="text-gray-500 text-sm">Main Headquarters</p>
                </div>
                {/* In a real app, embed Google Maps iframe here */}
              </div>
            </div>

            {/* Form */}
            <div>
              <SimpleContactForm />
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;