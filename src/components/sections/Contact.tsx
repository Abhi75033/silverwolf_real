import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, User, Mail, Phone, Globe, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { CountrySelector } from "@/components/ui/CountrySelector";
import { SuccessOverlay } from "@/components/ui/SuccessOverlay";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScheduleForm } from "./ScheduleForm";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  countryCode: z.string().min(1, { message: "Required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      countryCode: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Submitting to backend on port 5001
      const response = await fetch("http://localhost:5001/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${values.firstName} ${values.lastName}`,
          email: values.email,
          phone: values.phone,
          country: values.country,
          countryCode: values.countryCode,
          message: values.message,
          type: "mission-brief",
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        form.reset();
      } else {
        toast({
          title: "Submission Failed",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <SuccessOverlay
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        name={form.getValues().firstName}
        type="mission-brief"
      />
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-outfit font-black text-white uppercase italic tracking-tighter mb-4">
                Initiate <span className="text-accent">Protocol</span>
              </h2>
              <p className="text-white/60 text-lg max-w-md">
                Ready to deploy your digital strategy? Transmit your mission brief and our elite unit will be mobilized within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wide text-sm">Secure Channel</h3>
                  <p className="text-white/40">contact@silverwolftechnologies.in</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wide text-sm">Direct Line</h3>
                  <p className="text-white/40">+91 6394753801</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wide text-sm">Global HQ</h3>
                  <p className="text-white/40">Remote</p>
                </div>
              </div>

              {/* Schedule Meeting Dialog */}
              <div className="pt-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full md:w-auto bg-accent text-black hover:bg-white font-black uppercase tracking-widest px-8 py-6 rounded-xl shadow-[0_0_20px_rgba(212,255,51,0.2)] hover:shadow-[0_0_30px_rgba(212,255,51,0.4)] transition-all group">
                      <span className="flex items-center gap-2">
                        Schedule Briefing
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-zinc-950 border-white/10 sm:max-w-lg max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-black text-white uppercase italic tracking-tighter">
                        Secure <span className="text-accent">Link</span>
                      </DialogTitle>
                      <DialogDescription className="text-white/60">
                        Select a time slot for an encrypted video conference with our command unit.
                      </DialogDescription>
                    </DialogHeader>
                    <ScheduleForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
              <div className="w-16 h-16 border-t-2 border-r-2 border-accent rounded-tr-3xl" />
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
                          <User className="h-3 w-3" /> Ident Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="FIRST NAME" {...field} className="bg-black/40 border-white/10 rounded-xl focus:border-accent/50 text-white placeholder:text-white/20 h-12 text-sm uppercase tracking-wide" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Serial Surname</FormLabel>
                        <FormControl>
                          <Input placeholder="LAST NAME" {...field} className="bg-black/40 border-white/10 rounded-xl focus:border-accent/50 text-white placeholder:text-white/20 h-12 text-sm uppercase tracking-wide" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
                        <Mail className="h-3 w-3" /> Comm Channel
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="EMAIL ADDRESS" {...field} className="bg-black/40 border-white/10 rounded-xl focus:border-accent/50 text-white placeholder:text-white/20 h-12 text-sm uppercase tracking-wide" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
                          <Globe className="h-3 w-3" /> Country
                        </FormLabel>
                        <FormControl>
                          <CountrySelector
                            value={field.value}
                            onChange={(country) => {
                              field.onChange(country.code);
                              form.setValue("countryCode", country.dialCode);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
                          <Phone className="h-3 w-3" /> Contact Protocol
                        </FormLabel>
                        <div className="flex gap-3">
                          <div className="h-12 px-3 flex items-center justify-center bg-black/40 border border-white/10 rounded-xl text-white/60 text-sm font-mono shrink-0 min-w-[60px]">
                            {form.watch('countryCode') || '+--'}
                          </div>
                          <FormControl>
                            <Input placeholder="PHONE NUMBER" {...field} className="bg-black/40 border-white/10 rounded-xl focus:border-accent/50 text-white placeholder:text-white/20 h-12 text-sm uppercase tracking-wide w-full" />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
                        <MessageSquare className="h-3 w-3" /> Objective Brief
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="OUTLINE YOUR MISSION REQUIREMENTS..."
                          {...field}
                          className="bg-black/40 border-white/10 rounded-xl focus:border-accent/50 text-white placeholder:text-white/20 min-h-[120px] text-sm uppercase tracking-wide resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-accent hover:bg-white text-black font-black uppercase tracking-[0.2em] rounded-xl transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.2)] group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      Authenticating...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Transmit Data <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
