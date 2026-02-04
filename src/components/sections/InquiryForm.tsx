
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Check, ChevronsUpDown, MessageCircle, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const services = [
    { label: "GST & Tax Registration", value: "gst-registration" },
    { label: "Video Editing", value: "video-editing" },
    { label: "Mobile App Development", value: "mobile-app-development" },
    { label: "Graphic Design", value: "graphic-design" },
    { label: "CRM Solutions", value: "crm-solutions" },
    { label: "Full Stack Websites", value: "website-development" },
    { label: "Bug Fixing & Maintenance", value: "website-bug-fixing" },
    { label: "Database Solutions", value: "database-solutions" },
    { label: "Finance Services", value: "finance-services" },
];

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 characters.",
    }),
    services: z.array(z.string()).refine((value) => value.length > 0, {
        message: "Please select at least one service.",
    }),
});

const InquiryForm = () => {
    const { toast } = useToast();
    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            services: [],
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        // Here you would typically send the data to your backend
        toast({
            title: "Inquiry Submitted!",
            description: "We'll get back to you shortly.",
        });
        form.reset();
    }

    return (
        <section className="py-12 md:py-20 px-4 md:px-8 bg-black relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-2xl relative z-10">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-black font-outfit text-white mb-4 tracking-tighter uppercase italic">
                        Architect The <span className="text-accent text-glow">Future</span>
                    </h2>
                    <p className="text-white/60 text-lg text-center max-w-xl mx-auto">
                        Turn your ambitious ideas into digital reality with our elite engineering.
                    </p>
                </div>

                <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-5 md:p-10 rounded-2xl shadow-2xl">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white/80 uppercase tracking-wider text-xs font-bold">Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} className="bg-black/50 border-white/10 text-white focus:border-accent focus:ring-accent/20 h-12" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white/80 uppercase tracking-wider text-xs font-bold">Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="john@example.com" {...field} className="bg-black/50 border-white/10 text-white focus:border-accent focus:ring-accent/20 h-12" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white/80 uppercase tracking-wider text-xs font-bold">Phone</FormLabel>
                                            <FormControl>
                                                <Input placeholder="(+91) 00000 00000" {...field} className="bg-black/50 border-white/10 text-white focus:border-accent focus:ring-accent/20 h-12" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="services"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel className="text-white/80 uppercase tracking-wider text-xs font-bold">Services</FormLabel>
                                        <Popover open={open} onOpenChange={setOpen}>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant="outline"
                                                        role="combobox"
                                                        aria-expanded={open}
                                                        className={cn(
                                                            "w-full justify-between bg-black/50 border-white/10 text-white hover:bg-black/70 hover:text-accent h-auto min-h-[3rem] py-3",
                                                            (!field.value || field.value.length === 0) && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value && field.value.length > 0 ? (
                                                            <div className="flex flex-wrap gap-2">
                                                                {field.value.map((val) => (
                                                                    <span
                                                                        key={val}
                                                                        className="inline-flex items-center rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent ring-1 ring-inset ring-accent/20"
                                                                    >
                                                                        {services.find((s) => s.value === val)?.label}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            "Select services..."
                                                        )}
                                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 bg-zinc-900 border-white/10">
                                                <Command className="bg-zinc-900 text-white">
                                                    <CommandInput placeholder="Search service..." className="text-white" />
                                                    <CommandEmpty>No service found.</CommandEmpty>
                                                    <CommandGroup className="max-h-60 overflow-y-auto">
                                                        {services.map((service) => (
                                                            <CommandItem
                                                                value={service.label}
                                                                key={service.value}
                                                                onSelect={() => {
                                                                    const current = field.value || [];
                                                                    const isSelected = current.includes(service.value);
                                                                    if (isSelected) {
                                                                        field.onChange(current.filter((val) => val !== service.value));
                                                                    } else {
                                                                        field.onChange([...current, service.value]);
                                                                    }
                                                                }}
                                                                className="text-white/80 aria-selected:bg-accent aria-selected:text-black cursor-pointer"
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        field.value?.includes(service.value)
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />
                                                                {service.label}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full bg-accent text-black hover:bg-accent/80 font-bold uppercase tracking-widest h-14 text-sm mt-4">
                                Let's Talk
                            </Button>
                        </form>
                    </Form>

                    {/* Contact Info in Form Section */}
                    {/* Contact Info in Form Section */}
                    <div className="mt-8 pt-8 border-t border-white/10 flex flex-col items-center gap-4 text-center">
                        <p className="text-white/60 text-sm">Need a quicker response?</p>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="group relative w-full md:w-auto overflow-hidden bg-transparent border-accent/20 text-accent hover:border-accent hover:text-black hover:bg-accent transition-all duration-300 px-6 py-5 md:px-8 md:py-6 rounded-full font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(212,255,51,0.1)] hover:shadow-[0_0_25px_rgba(212,255,51,0.4)]"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Contact Us Directly
                                        <MessageCircle className="w-4 h-4 ml-1 group-hover:fill-current" />
                                    </span>
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-zinc-950 border-white/10 sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl font-black text-white uppercase italic tracking-tighter">
                                        Connect With <span className="text-accent">Silver Wolf</span>
                                    </DialogTitle>
                                    <DialogDescription className="text-white/60">
                                        Choose your preferred channel. We usually respond within 2 hours.
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="grid grid-cols-1 gap-4 py-4">
                                    <a
                                        href="https://wa.me/916394753801?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20project."
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-[#25D366]/10 hover:border-[#25D366]/50 transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="h-12 w-12 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg group-hover:text-[#25D366] transition-colors">WhatsApp Chat</h4>
                                            <p className="text-white/40 text-sm group-hover:text-white/60">Instant response • 24/7 Support</p>
                                        </div>
                                    </a>

                                    <a
                                        href="mailto:contact@silverwolftechnologies.in"
                                        className="group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <Mail className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg group-hover:text-accent transition-colors">Email Us</h4>
                                            <p className="text-white/40 text-sm group-hover:text-white/60">contact@silverwolftechnologies.in</p>
                                        </div>
                                    </a>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InquiryForm;
