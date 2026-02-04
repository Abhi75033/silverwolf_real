
import { useState } from "react";
import { API_BASE_URL } from "@/lib/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, Clock, Loader2, Check } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const timeSlots = [
    "10:00 AM IST", "11:00 AM IST", "12:00 PM IST",
    "02:00 PM IST", "03:00 PM IST", "04:00 PM IST",
    "05:00 PM IST", "06:00 PM IST", "07:00 PM IST"
];

const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Valid phone number required"),
    date: z.date({
        required_error: "Please select a date",
    }),
    timeSlot: z.string({
        required_error: "Please select a time slot",
    }),
});

export function ScheduleForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            const response = await fetch(`${API_BASE_URL}/api/submit`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...values,
                    type: "schedule",
                    country: "Remote", // Default for scheduling
                    countryCode: "+91", // Default to India or handle in backend
                    message: `Scheduled Meeting for ${format(values.date, "PPP")} at ${values.timeSlot}`,
                    scheduledDate: values.date,
                    timeSlot: values.timeSlot
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
                toast({
                    title: "Briefing Scheduled",
                    description: "Your session has been confirmed. Check your email for the secure link.",
                    className: "bg-emerald-950 text-emerald-100 border-emerald-900"
                });
                form.reset();
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || "Submission failed");
            }
        } catch (error: any) {
            console.error("Scheduling error:", error);
            toast({
                title: "Scheduling Error",
                description: error.message || "Unable to secure time slot. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="h-20 w-20 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50">
                    <Check className="h-10 w-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">
                    Briefing Confirmed
                </h3>
                <p className="text-white/60 text-sm max-w-xs">
                    Our team is preparing your briefing dossier. A calendar invite has been dispatched to your secure channel.
                </p>
                <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    className="mt-4 border-white/20 text-white hover:bg-white/10"
                >
                    Schedule Another
                </Button>
            </div>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
                <div className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Ident Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="YOUR NAME" {...field} className="bg-black/40 border-white/10 text-white focus:border-accent/50 uppercase tracking-widest text-xs h-10" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Comm Channel</FormLabel>
                                    <FormControl>
                                        <Input placeholder="EMAIL" {...field} className="bg-black/40 border-white/10 text-white focus:border-accent/50 uppercase tracking-widest text-xs h-10" />
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
                                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Contact</FormLabel>
                                    <FormControl>
                                        <Input placeholder="PHONE" {...field} className="bg-black/40 border-white/10 text-white focus:border-accent/50 uppercase tracking-widest text-xs h-10" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Operation Date</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full pl-3 text-left font-normal bg-black/40 border-white/10 text-white hover:bg-white/5 hover:text-white",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span className="text-white/40 text-xs uppercase tracking-widest">Pick a date</span>
                                                )}
                                                <Calendar className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 bg-zinc-900 border-white/10" align="start">
                                        <CalendarComponent
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date < new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                            className="bg-zinc-900 text-white rounded-md border-white/10"
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="timeSlot"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Time Sector (IST)</FormLabel>
                                <div className="grid grid-cols-3 gap-2">
                                    {timeSlots.map((slot) => (
                                        <div
                                            key={slot}
                                            className={cn(
                                                "cursor-pointer rounded-lg border px-3 py-2 text-center text-[10px] font-bold uppercase tracking-wider transition-all",
                                                field.value === slot
                                                    ? "bg-accent text-black border-accent shadow-[0_0_10px_rgba(212,255,51,0.3)]"
                                                    : "bg-black/40 text-white/60 border-white/10 hover:bg-white/10 hover:text-white"
                                            )}
                                            onClick={() => field.onChange(slot)}
                                        >
                                            {slot.replace(" IST", "")}
                                        </div>
                                    ))}
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-white text-black font-black uppercase tracking-widest h-12"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Locking Slot...
                        </>
                    ) : (
                        "Confirm Briefing"
                    )}
                </Button>
            </form>
        </Form>
    );
}
