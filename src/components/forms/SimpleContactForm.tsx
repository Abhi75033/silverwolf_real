
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

const SimpleContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email) {
            toast.error("Please fill in required fields");
            return;
        }

        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success("Message sent successfully! We'll contact you soon.");
            setFormData({ name: "", email: "", phone: "", message: "" });
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold font-heading text-white mb-6">Get a Free Quote</h3>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Full Name</label>
                <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black/50 border-white/10 text-white placeholder:text-gray-600"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Email Address</label>
                    <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-black/50 border-white/10 text-white placeholder:text-gray-600"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Phone Number</label>
                    <Input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-black/50 border-white/10 text-white placeholder:text-gray-600"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Project Details</label>
                <Textarea
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 min-h-[120px]"
                />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-wolf-purple to-wolf-neon text-white font-bold h-12 rounded-xl">
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                ) : (
                    <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                )}
            </Button>
        </form>
    );
};

export default SimpleContactForm;
