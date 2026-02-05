import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  Loader2,
  CalendarDays,
  ArrowRight,
  X,
  ChevronDown,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { API_BASE_URL } from "@/lib/api";

const COUNTRIES = [
  { name: "Afghanistan", code: "AF", dial: "+93", flag: "🇦🇫" },
  { name: "Albania", code: "AL", dial: "+355", flag: "🇦🇱" },
  { name: "Algeria", code: "DZ", dial: "+213", flag: "🇩🇿" },
  { name: "Andorra", code: "AD", dial: "+376", flag: "🇦🇩" },
  { name: "Angola", code: "AO", dial: "+244", flag: "🇦🇴" },
  { name: "Argentina", code: "AR", dial: "+54", flag: "🇦🇷" },
  { name: "Armenia", code: "AM", dial: "+374", flag: "🇦🇲" },
  { name: "Australia", code: "AU", dial: "+61", flag: "🇦🇺" },
  { name: "Austria", code: "AT", dial: "+43", flag: "🇦🇹" },
  { name: "Azerbaijan", code: "AZ", dial: "+994", flag: "🇦🇿" },
  { name: "Bahamas", code: "BS", dial: "+1-242", flag: "🇧🇸" },
  { name: "Bahrain", code: "BH", dial: "+973", flag: "🇧🇭" },
  { name: "Bangladesh", code: "BD", dial: "+880", flag: "🇧🇩" },
  { name: "Barbados", code: "BB", dial: "+1-246", flag: "🇧🇧" },
  { name: "Belarus", code: "BY", dial: "+375", flag: "🇧🇾" },
  { name: "Belgium", code: "BE", dial: "+32", flag: "🇧🇪" },
  { name: "Belize", code: "BZ", dial: "+501", flag: "🇧🇿" },
  { name: "Benin", code: "BJ", dial: "+229", flag: "🇧🇯" },
  { name: "Bhutan", code: "BT", dial: "+975", flag: "🇧🇹" },
  { name: "Bolivia", code: "BO", dial: "+591", flag: "🇧🇴" },
  { name: "Bosnia and Herzegovina", code: "BA", dial: "+387", flag: "🇧🇦" },
  { name: "Botswana", code: "BW", dial: "+267", flag: "🇧🇼" },
  { name: "Brazil", code: "BR", dial: "+55", flag: "🇧🇷" },
  { name: "Brunei", code: "BN", dial: "+673", flag: "🇧🇳" },
  { name: "Bulgaria", code: "BG", dial: "+359", flag: "🇧🇬" },
  { name: "Burkina Faso", code: "BF", dial: "+226", flag: "🇧🇫" },
  { name: "Burundi", code: "BI", dial: "+257", flag: "🇧🇮" },
  { name: "Cambodia", code: "KH", dial: "+855", flag: "🇰🇭" },
  { name: "Cameroon", code: "CM", dial: "+237", flag: "🇨🇲" },
  { name: "Canada", code: "CA", dial: "+1", flag: "🇨🇦" },
  { name: "Cape Verde", code: "CV", dial: "+238", flag: "🇨🇻" },
  { name: "Central African Republic", code: "CF", dial: "+236", flag: "🇨🇫" },
  { name: "Chad", code: "TD", dial: "+235", flag: "🇹🇩" },
  { name: "Chile", code: "CL", dial: "+56", flag: "🇨🇱" },
  { name: "China", code: "CN", dial: "+86", flag: "🇨🇳" },
  { name: "Colombia", code: "CO", dial: "+57", flag: "🇨🇴" },
  { name: "Comoros", code: "KM", dial: "+269", flag: "🇰🇲" },
  { name: "Congo", code: "CG", dial: "+242", flag: "🇨🇬" },
  { name: "Costa Rica", code: "CR", dial: "+506", flag: "🇨🇷" },
  { name: "Croatia", code: "HR", dial: "+385", flag: "🇭🇷" },
  { name: "Cuba", code: "CU", dial: "+53", flag: "🇨🇺" },
  { name: "Cyprus", code: "CY", dial: "+357", flag: "🇨🇾" },
  { name: "Czech Republic", code: "CZ", dial: "+420", flag: "🇨🇿" },
  { name: "Denmark", code: "DK", dial: "+45", flag: "🇩🇰" },
  { name: "Djibouti", code: "DJ", dial: "+253", flag: "🇩🇯" },
  { name: "Dominica", code: "DM", dial: "+1-767", flag: "🇩🇲" },
  { name: "Dominican Republic", code: "DO", dial: "+1-809", flag: "🇩🇴" },
  { name: "Ecuador", code: "EC", dial: "+593", flag: "🇪🇨" },
  { name: "Egypt", code: "EG", dial: "+20", flag: "🇪🇬" },
  { name: "El Salvador", code: "SV", dial: "+503", flag: "🇸🇻" },
  { name: "Equatorial Guinea", code: "GQ", dial: "+240", flag: "🇬🇶" },
  { name: "Eritrea", code: "ER", dial: "+291", flag: "🇪🇷" },
  { name: "Estonia", code: "EE", dial: "+372", flag: "🇪🇪" },
  { name: "Ethiopia", code: "ET", dial: "+251", flag: "🇪🇹" },
  { name: "Fiji", code: "FJ", dial: "+679", flag: "🇫🇯" },
  { name: "Finland", code: "FI", dial: "+358", flag: "🇫🇮" },
  { name: "France", code: "FR", dial: "+33", flag: "🇫🇷" },
  { name: "Gabon", code: "GA", dial: "+241", flag: "🇬🇦" },
  { name: "Gambia", code: "GM", dial: "+220", flag: "🇬🇲" },
  { name: "Georgia", code: "GE", dial: "+995", flag: "🇬🇪" },
  { name: "Germany", code: "DE", dial: "+49", flag: "🇩🇪" },
  { name: "Ghana", code: "GH", dial: "+233", flag: "🇬🇭" },
  { name: "Greece", code: "GR", dial: "+30", flag: "🇬🇷" },
  { name: "Grenada", code: "GD", dial: "+1-473", flag: "🇬🇩" },
  { name: "Guatemala", code: "GT", dial: "+502", flag: "🇬🇹" },
  { name: "Guinea", code: "GN", dial: "+224", flag: "🇬🇳" },
  { name: "Guinea-Bissau", code: "GW", dial: "+245", flag: "🇬🇼" },
  { name: "Guyana", code: "GY", dial: "+592", flag: "🇬🇾" },
  { name: "Haiti", code: "HT", dial: "+509", flag: "🇭🇹" },
  { name: "Honduras", code: "HN", dial: "+504", flag: "🇭🇳" },
  { name: "Hungary", code: "HU", dial: "+36", flag: "🇭🇺" },
  { name: "Iceland", code: "IS", dial: "+354", flag: "🇮🇸" },
  { name: "India", code: "IN", dial: "+91", flag: "🇮🇳" },
  { name: "Indonesia", code: "ID", dial: "+62", flag: "🇮🇩" },
  { name: "Iran", code: "IR", dial: "+98", flag: "🇮🇷" },
  { name: "Iraq", code: "IQ", dial: "+964", flag: "🇮🇶" },
  { name: "Ireland", code: "IE", dial: "+353", flag: "🇮🇪" },
  { name: "Israel", code: "IL", dial: "+972", flag: "🇮🇱" },
  { name: "Italy", code: "IT", dial: "+39", flag: "🇮🇹" },
  { name: "Jamaica", code: "JM", dial: "+1-876", flag: "🇯🇲" },
  { name: "Japan", code: "JP", dial: "+81", flag: "🇯🇵" },
  { name: "Jordan", code: "JO", dial: "+962", flag: "🇯🇴" },
  { name: "Kazakhstan", code: "KZ", dial: "+7", flag: "🇰🇿" },
  { name: "Kenya", code: "KE", dial: "+254", flag: "🇰🇪" },
  { name: "Kiribati", code: "KI", dial: "+686", flag: "🇰🇮" },
  { name: "Korea, North", code: "KP", dial: "+850", flag: "🇰🇵" },
  { name: "Korea, South", code: "KR", dial: "+82", flag: "🇰🇷" },
  { name: "Kuwait", code: "KW", dial: "+965", flag: "🇰🇼" },
  { name: "Kyrgyzstan", code: "KG", dial: "+996", flag: "🇰🇬" },
  { name: "Laos", code: "LA", dial: "+856", flag: "🇱🇦" },
  { name: "Latvia", code: "LV", dial: "+371", flag: "🇱🇻" },
  { name: "Lebanon", code: "LB", dial: "+961", flag: "🇱🇧" },
  { name: "Lesotho", code: "LS", dial: "+266", flag: "🇱🇸" },
  { name: "Liberia", code: "LR", dial: "+231", flag: "🇱🇷" },
  { name: "Libya", code: "LY", dial: "+218", flag: "🇱🇾" },
  { name: "Liechtenstein", code: "LI", dial: "+423", flag: "🇱🇮" },
  { name: "Lithuania", code: "LT", dial: "+370", flag: "🇱🇹" },
  { name: "Luxembourg", code: "LU", dial: "+352", flag: "🇱🇺" },
  { name: "Macedonia", code: "MK", dial: "+389", flag: "🇲🇰" },
  { name: "Madagascar", code: "MG", dial: "+261", flag: "🇲🇬" },
  { name: "Malawi", code: "MW", dial: "+265", flag: "🇲🇼" },
  { name: "Malaysia", code: "MY", dial: "+60", flag: "🇲🇾" },
  { name: "Maldives", code: "MV", dial: "+960", flag: "🇲🇻" },
  { name: "Mali", code: "ML", dial: "+223", flag: "🇲🇱" },
  { name: "Malta", code: "MT", dial: "+356", flag: "🇲🇹" },
  { name: "Marshall Islands", code: "MH", dial: "+692", flag: "🇲🇭" },
  { name: "Mauritania", code: "MR", dial: "+222", flag: "🇲🇷" },
  { name: "Mauritius", code: "MU", dial: "+230", flag: "🇲🇺" },
  { name: "Mexico", code: "MX", dial: "+52", flag: "🇲🇽" },
  { name: "Micronesia", code: "FM", dial: "+691", flag: "🇫🇲" },
  { name: "Moldova", code: "MD", dial: "+373", flag: "🇲🇩" },
  { name: "Monaco", code: "MC", dial: "+377", flag: "🇲🇨" },
  { name: "Mongolia", code: "MN", dial: "+976", flag: "🇲🇳" },
  { name: "Montenegro", code: "ME", dial: "+382", flag: "🇲🇪" },
  { name: "Morocco", code: "MA", dial: "+212", flag: "🇲🇦" },
  { name: "Mozambique", code: "MZ", dial: "+258", flag: "🇲🇿" },
  { name: "Myanmar", code: "MM", dial: "+95", flag: "🇲🇲" },
  { name: "Namibia", code: "NA", dial: "+264", flag: "🇳🇦" },
  { name: "Nauru", code: "NR", dial: "+674", flag: "🇳🇷" },
  { name: "Nepal", code: "NP", dial: "+977", flag: "🇳🇵" },
  { name: "Netherlands", code: "NL", dial: "+31", flag: "🇳🇱" },
  { name: "New Zealand", code: "NZ", dial: "+64", flag: "🇳🇿" },
  { name: "Nicaragua", code: "NI", dial: "+505", flag: "🇳🇮" },
  { name: "Niger", code: "NE", dial: "+227", flag: "🇳🇪" },
  { name: "Nigeria", code: "NG", dial: "+234", flag: "🇳🇬" },
  { name: "Norway", code: "NO", dial: "+47", flag: "🇳🇴" },
  { name: "Oman", code: "OM", dial: "+968", flag: "🇴🇲" },
  { name: "Pakistan", code: "PK", dial: "+92", flag: "🇵🇰" },
  { name: "Palau", code: "PW", dial: "+680", flag: "🇵🇼" },
  { name: "Panama", code: "PA", dial: "+507", flag: "🇵🇦" },
  { name: "Papua New Guinea", code: "PG", dial: "+675", flag: "🇵🇬" },
  { name: "Paraguay", code: "PY", dial: "+595", flag: "🇵🇾" },
  { name: "Peru", code: "PE", dial: "+51", flag: "🇵🇪" },
  { name: "Philippines", code: "PH", dial: "+63", flag: "🇵🇭" },
  { name: "Poland", code: "PL", dial: "+48", flag: "🇵🇱" },
  { name: "Portugal", code: "PT", dial: "+351", flag: "🇵🇹" },
  { name: "Qatar", code: "QA", dial: "+974", flag: "🇶🇦" },
  { name: "Romania", code: "RO", dial: "+40", flag: "🇷🇴" },
  { name: "Russia", code: "RU", dial: "+7", flag: "🇷🇺" },
  { name: "Rwanda", code: "RW", dial: "+250", flag: "🇷🇼" },
  { name: "Saint Kitts and Nevis", code: "KN", dial: "+1-869", flag: "🇰🇳" },
  { name: "Saint Lucia", code: "LC", dial: "+1-758", flag: "🇱🇨" },
  { name: "Saint Vincent and the Grenadines", code: "VC", dial: "+1-784", flag: "🇻🇨" },
  { name: "Samoa", code: "WS", dial: "+685", flag: "🇼🇸" },
  { name: "San Marino", code: "SM", dial: "+378", flag: "🇸🇲" },
  { name: "Sao Tome and Principe", code: "ST", dial: "+239", flag: "🇸🇹" },
  { name: "Saudi Arabia", code: "SA", dial: "+966", flag: "🇸🇦" },
  { name: "Senegal", code: "SN", dial: "+221", flag: "🇸🇳" },
  { name: "Serbia", code: "RS", dial: "+381", flag: "🇷🇸" },
  { name: "Seychelles", code: "SC", dial: "+248", flag: "🇸🇨" },
  { name: "Sierra Leone", code: "SL", dial: "+232", flag: "🇸🇱" },
  { name: "Singapore", code: "SG", dial: "+65", flag: "🇸🇬" },
  { name: "Slovakia", code: "SK", dial: "+421", flag: "🇸🇰" },
  { name: "Slovenia", code: "SI", dial: "+386", flag: "🇸🇮" },
  { name: "Solomon Islands", code: "SB", dial: "+677", flag: "🇸🇧" },
  { name: "Somalia", code: "SO", dial: "+252", flag: "🇸🇴" },
  { name: "South Africa", code: "ZA", dial: "+27", flag: "🇿🇦" },
  { name: "South Sudan", code: "SS", dial: "+211", flag: "🇸🇸" },
  { name: "Spain", code: "ES", dial: "+34", flag: "🇪🇸" },
  { name: "Sri Lanka", code: "LK", dial: "+94", flag: "🇱🇰" },
  { name: "Sudan", code: "SD", dial: "+249", flag: "🇸🇩" },
  { name: "Suriname", code: "SR", dial: "+597", flag: "🇸🇷" },
  { name: "Swaziland", code: "SZ", dial: "+268", flag: "🇸🇿" },
  { name: "Sweden", code: "SE", dial: "+46", flag: "🇸🇪" },
  { name: "Switzerland", code: "CH", dial: "+41", flag: "🇨🇭" },
  { name: "Syria", code: "SY", dial: "+963", flag: "🇸🇾" },
  { name: "Taiwan", code: "TW", dial: "+886", flag: "🇹🇼" },
  { name: "Tajikistan", code: "TJ", dial: "+992", flag: "🇹🇯" },
  { name: "Tanzania", code: "TZ", dial: "+255", flag: "🇹🇿" },
  { name: "Thailand", code: "TH", dial: "+66", flag: "🇹🇭" },
  { name: "Timor-Leste", code: "TL", dial: "+670", flag: "🇹🇱" },
  { name: "Togo", code: "TG", dial: "+228", flag: "🇹🇬" },
  { name: "Tonga", code: "TO", dial: "+676", flag: "🇹🇴" },
  { name: "Trinidad and Tobago", code: "TT", dial: "+1-868", flag: "🇹🇹" },
  { name: "Tunisia", code: "TN", dial: "+216", flag: "🇹🇳" },
  { name: "Turkey", code: "TR", dial: "+90", flag: "🇹🇷" },
  { name: "Turkmenistan", code: "TM", dial: "+993", flag: "🇹🇲" },
  { name: "Tuvalu", code: "TV", dial: "+688", flag: "🇹🇻" },
  { name: "Uganda", code: "UG", dial: "+256", flag: "🇺🇬" },
  { name: "Ukraine", code: "UA", dial: "+380", flag: "🇺🇦" },
  { name: "United Arab Emirates", code: "AE", dial: "+971", flag: "🇦🇪" },
  { name: "United Kingdom", code: "GB", dial: "+44", flag: "🇬🇧" },
  { name: "United States", code: "US", dial: "+1", flag: "🇺🇸" },
  { name: "Uruguay", code: "UY", dial: "+598", flag: "🇺🇾" },
  { name: "Uzbekistan", code: "UZ", dial: "+998", flag: "🇺🇿" },
  { name: "Vanuatu", code: "VU", dial: "+678", flag: "🇻🇺" },
  { name: "Vatican City", code: "VA", dial: "+379", flag: "🇻🇦" },
  { name: "Venezuela", code: "VE", dial: "+58", flag: "🇻🇪" },
  { name: "Vietnam", code: "VN", dial: "+84", flag: "🇻🇳" },
  { name: "Yemen", code: "YE", dial: "+967", flag: "🇾🇪" },
  { name: "Zambia", code: "ZM", dial: "+260", flag: "🇿🇲" },
  { name: "Zimbabwe", code: "ZW", dial: "+263", flag: "🇿🇼" },
];

const contactDetails = [
  { icon: Mail, label: "Direct Email", value: "info@silverwolftechnologies.in ", color: "text-blue-500" },
  { icon: Phone, label: "Strategic Support", value: "+91 63947 53801", color: "text-emerald-500" },
  { icon: MapPin, label: "Global Presence", value: "Remote / Worldwide", color: "text-purple-500" },
];

const faqs = [
  {
    question: "What is your typical project engagement process?",
    answer: "Our process begins with a deep discovery phase to align on strategic goals, followed by iterative design, agile development, and a rigorous quality assurance cycle before final deployment."
  },
  {
    question: "How do you handle ongoing maintenance and support?",
    answer: "We offer tailored Service Level Agreements (SLAs) including 24/7 monitoring, security audits, and dedicated engineering support to ensure your digital assets remain high-performance."
  },
  {
    question: "Can you assist with financial and regulatory compliance for tech startups?",
    answer: "Yes, our unique bridge between finance and engineering allows us to implement GST-ready systems, tax-compliant architectures, and robust auditing tools alongside your core product."
  }
];

const ExecutiveCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("bg-white dark:bg-zinc-900 border border-border rounded-2xl shadow-sm hover:shadow-executive transition-all duration-500 p-8", className)}>
    {children}
  </div>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES.find(c => c.code === "IN") || COUNTRIES[0]);
  const [isCountrySelectorOpen, setIsCountrySelectorOpen] = useState(false);
  const [selectedBookingCountry, setSelectedBookingCountry] = useState(COUNTRIES.find(c => c.code === "IN") || COUNTRIES[0]);
  const [isBookingCountrySelectorOpen, setIsBookingCountrySelectorOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [showContactSuccess, setShowContactSuccess] = useState(false);
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);

  // Form states
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    date: ""
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.firstName || !contactForm.email || !contactForm.phone) {
      toast.error("MISSION CRITICAL: Required parameters missing.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${contactForm.firstName} ${contactForm.lastName}`.trim(),
          email: contactForm.email.toLowerCase(),
          phone: contactForm.phone,
          country: selectedCountry.name,
          countryCode: selectedCountry.dial,
          message: contactForm.message,
          type: "mission-brief"
        })
      });

      if (!response.ok) throw new Error("Connection failed");

      setShowContactSuccess(true);
      setContactForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      toast.success("MISSION ACCOMPLISHED: Brief securely transmitted.");
    } catch (error) {
      toast.error("SIGNAL INTERRUPTED: Please retry uplink.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.phone || !bookingForm.date || !selectedTime) {
      toast.error("MISSION CRITICAL: Scheduling parameters incomplete.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: bookingForm.name,
          phone: bookingForm.phone,
          country: selectedBookingCountry.name,
          countryCode: selectedBookingCountry.dial,
          email: "scheduled@briefing.protocol", // Placeholder as email isn't in modal
          scheduledDate: bookingForm.date,
          timeSlot: selectedTime,
          type: "schedule"
        })
      });

      if (!response.ok) throw new Error("Booking failed");

      setShowBookingSuccess(true);
      setBookingForm({ name: "", phone: "", date: "" });
      setSelectedTime("");
      toast.success("SLOT SECURED: Operational window reserved.");

      // Auto-close after 3 seconds of showing success
      setTimeout(() => {
        setIsBookingOpen(false);
        setShowBookingSuccess(false);
      }, 3000);
    } catch (error) {
      toast.error("UPLINK FAILURE: Protocol error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-black relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blob opacity-5" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-left space-y-6 md:space-y-8 mb-16 md:mb-24 px-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent font-extrabold text-[8px] sm:text-[9px] uppercase tracking-widest"
          >
            <Send className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
            Engagement Phase Alpha
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-outfit font-black text-white leading-[0.9] tracking-tighter uppercase italic"
          >
            Bridge the <br />
            <span className="text-accent underline decoration-white/10 underline-offset-8 md:underline-offset-[12px]">& Collaborate.</span>
          </motion.h2>
          <p className="text-sm sm:text-base md:text-lg text-white/40 leading-relaxed font-medium italic max-w-2xl">
            Whether scaling or launching, we provide the technical firepower
            and strategic depth to command your industry prestige.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 max-w-7xl mx-auto px-0">
          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] bg-white/5 border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Send className="h-16 w-16 sm:h-24 sm:w-24 text-accent" />
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-outfit font-black text-white mb-8 sm:mb-10 italic uppercase tracking-tighter">Mission Brief</h3>
              <AnimatePresence mode="wait">
                {!showContactSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleContactSubmit}
                    className="space-y-6 sm:space-y-8 relative z-10"
                  >
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2 sm:space-y-3">
                        <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/20">Ident Name</label>
                        <Input
                          placeholder="FIRSTNAME"
                          value={contactForm.firstName}
                          onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                          className="rounded-xl border-white/10 bg-black/40 h-12 sm:h-14 text-[10px] sm:text-xs text-white placeholder:text-white/10 focus:border-accent/40 uppercase tracking-widest transition-all"
                        />
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/20">Serial Surname</label>
                        <Input
                          placeholder="LASTNAME"
                          value={contactForm.lastName}
                          onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                          className="rounded-xl border-white/10 bg-black/40 h-12 sm:h-14 text-[10px] sm:text-xs text-white placeholder:text-white/10 focus:border-accent/40 uppercase tracking-widest transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2 sm:space-y-3">
                        <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/20">Comm Channel</label>
                        <Input
                          type="email"
                          placeholder="SUBJECT@DOMAIN.PROTOCOL"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="rounded-xl border-white/10 bg-black/40 h-12 sm:h-14 text-[10px] sm:text-xs text-white placeholder:text-white/10 focus:border-accent/40 uppercase tracking-widest transition-all"
                        />
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/20">Direct Uplink</label>
                        <div className="flex gap-2">
                          <Popover open={isCountrySelectorOpen} onOpenChange={setIsCountrySelectorOpen}>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-[100px] sm:w-[120px] rounded-xl border-white/10 bg-black/40 h-12 sm:h-14 flex items-center justify-between px-3 sm:px-4 hover:bg-white/5 active:scale-95 transition-all text-xs"
                              >
                                <span className="flex items-center gap-1 sm:gap-2">
                                  {selectedCountry.flag} <span className="font-mono text-[10px] sm:text-xs">{selectedCountry.dial}</span>
                                </span>
                                <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 text-white/20" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[280px] sm:w-[320px] p-0 bg-zinc-950 border-white/10 shadow-2xl rounded-2xl overflow-hidden z-[200]">
                              <Command className="bg-transparent text-white border-none">
                                <CommandInput placeholder="Search Country..." className="h-12 border-b border-white/5 bg-transparent text-white focus:ring-0" />
                                <CommandEmpty className="py-6 text-center text-zinc-500 font-mono text-xs uppercase tracking-widest">No Sector Found.</CommandEmpty>
                                <CommandList>
                                  <CommandGroup className="max-h-60 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-white/10">
                                    {COUNTRIES.map((country) => (
                                      <CommandItem
                                        key={country.code}
                                        value={country.name}
                                        onSelect={() => {
                                          setSelectedCountry(country);
                                          setIsCountrySelectorOpen(false);
                                        }}
                                        className="flex items-center justify-between py-3 px-4 rounded-xl cursor-pointer hover:bg-white/5 transition-colors aria-selected:bg-white/5"
                                      >
                                        <div className="flex items-center gap-3">
                                          <span className="text-lg">{country.flag}</span>
                                          <span className="text-xs font-mono uppercase tracking-widest text-white/60">{country.name}</span>
                                        </div>
                                        <span className="text-xs font-mono text-accent">{country.dial}</span>
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <Input
                            placeholder="9998887776"
                            value={contactForm.phone}
                            onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                            className="flex-1 rounded-xl border-white/10 bg-black/40 h-12 sm:h-14 text-[10px] sm:text-xs text-white placeholder:text-white/10 focus:border-accent/40 uppercase tracking-widest transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex justify-between items-center">
                        <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/20">Objective Brief</label>
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[7px] sm:text-[8px] font-black text-accent uppercase tracking-widest px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-accent/5 border border-accent/20">
                          <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                          AI Analysis Active
                        </div>
                      </div>
                      <Textarea
                        placeholder="DESCRIBE THE CORE TECHNICAL REQUIREMENTS OR VISIONARY OBJECTIVES..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="rounded-xl border-white/10 bg-black/40 min-h-[150px] sm:min-h-[180px] resize-none text-[10px] sm:text-xs text-white placeholder:text-white/10 focus:border-accent/40 uppercase tracking-widest leading-relaxed p-4 sm:p-6 transition-all"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 sm:h-16 bg-accent hover:bg-white text-black font-black rounded-xl shadow-glow group transition-all active:scale-[0.98] uppercase tracking-normal sm:tracking-widest text-xs sm:text-sm md:text-base"
                    >
                      {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : "EXECUTE INQUIRY"}
                      {!isSubmitting && <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 sm:py-20 flex flex-col items-center text-center space-y-6"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                      >
                        <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 text-accent" />
                      </motion.div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl sm:text-3xl font-outfit font-black text-white uppercase italic tracking-tighter">Transmission Secured.</h4>
                      <p className="text-white/40 text-xs sm:text-sm font-medium uppercase tracking-widest max-w-[280px] mx-auto leading-relaxed">
                        Your mission brief is being analyzed by our senior architects. Stand by for uplink.
                      </p>
                    </div>
                    <Button
                      onClick={() => setShowContactSuccess(false)}
                      variant="link"
                      className="text-accent uppercase text-[10px] tracking-[0.3em] font-black hover:text-white transition-colors pt-4"
                    >
                      Initiate New Protocol?
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid gap-4">
              {contactDetails.map((detail) => {
                // Determine the href based on the icon type
                let href = '';
                let onClick: (() => void) | undefined = undefined;

                if (detail.icon === Mail) {
                  href = `mailto:${detail.value.trim()}`;
                } else if (detail.icon === Phone) {
                  // For phone, open modal instead of direct link
                  onClick = () => {
                    setPhoneNumber(detail.value.replace(/\s/g, ''));
                    setIsPhoneModalOpen(true);
                  };
                }

                const content = (
                  <>
                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 group-hover:bg-accent/20 group-hover:text-accent transition-all shrink-0">
                      <detail.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[8px] sm:text-[10px] font-extrabold uppercase tracking-widest text-white/30 mb-0.5 sm:mb-1">{detail.label}</p>
                      <p className="font-outfit font-bold text-white tracking-tight text-sm sm:text-base break-all sm:break-normal">{detail.value}</p>
                    </div>
                  </>
                );

                return onClick ? (
                  <button
                    key={detail.label}
                    onClick={onClick}
                    className="p-4 sm:p-6 bg-white/5 border border-white/5 rounded-2xl sm:rounded-3xl flex items-center gap-4 sm:gap-6 transition-all hover:border-accent/40 group cursor-pointer w-full text-left"
                  >
                    {content}
                  </button>
                ) : href ? (
                  <a
                    key={detail.label}
                    href={href}
                    className="p-4 sm:p-6 bg-white/5 border border-white/5 rounded-2xl sm:rounded-3xl flex items-center gap-4 sm:gap-6 transition-all hover:border-accent/40 group cursor-pointer overflow-hidden"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={detail.label}
                    className="p-4 sm:p-6 bg-white/5 border border-white/5 rounded-2xl sm:rounded-3xl flex items-center gap-4 sm:gap-6 transition-all hover:border-accent/40 group"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-white/10 to-black/20 border border-white/10 relative overflow-hidden group cursor-pointer shadow-2xl hover:shadow-[0_0_40px_rgba(212,255,51,0.15)] hover:border-accent/30 transition-all duration-500 hover:scale-[1.01]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-accent/30 transition-all" />

              <div className="relative z-10 space-y-8">
                <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:scale-110 transition-all duration-500">
                  <CalendarDays className="h-6 w-6 text-accent" />
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-outfit font-black text-white uppercase italic tracking-tighter mb-4 leading-none">
                    Schedule <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Briefing.</span>
                  </h3>
                  <p className="text-white/40 text-sm font-medium leading-relaxed max-w-[280px]">
                    Secure a private 20-minute operational sync with our senior architects.
                  </p>
                </div>

                <Button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full bg-accent hover:bg-white text-black font-black h-14 rounded-xl shadow-[0_0_20px_rgba(212,255,51,0.2)] hover:shadow-glow transition-all uppercase tracking-widest text-xs"
                >
                  Reserve Slot
                </Button>
              </div>
            </div>

            <div className="p-5 sm:p-8 border border-white/5 rounded-2xl sm:rounded-3xl bg-white/5 flex items-center justify-between group cursor-pointer hover:border-accent/20 transition-all">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-ping" />
                <div>
                  <p className="text-[8px] sm:text-[10px] font-extrabold text-accent uppercase tracking-widest">Live Status</p>
                  <p className="text-xs sm:text-base text-white font-bold tracking-tight">Q1 2026 Engagement Open</p>
                </div>
              </div>
              <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-white/20 group-hover:text-accent transition-all shrink-0" />
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mt-24 sm:mt-32 md:mt-40 max-w-4xl mx-auto px-0">
          <div className="flex flex-col items-center gap-4 sm:gap-6 mb-12 sm:mb-20">
            <div className="h-[2px] w-12 sm:w-16 bg-accent/30" />
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-outfit font-black text-white uppercase italic tracking-tighter text-center">Protocol <span className="text-accent underline decoration-white/10 underline-offset-8">Intelligence.</span></h2>
            <p className="text-white/40 text-[10px] sm:text-sm font-medium uppercase tracking-[0.1em] sm:tracking-[0.2em] italic text-center">Frequently Encountered Operational Queries</p>
          </div>

          <div className="space-y-6">
            <Accordion type="single" collapsible className="space-y-5">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="border border-white/5 bg-white/5 rounded-[1.5rem] sm:rounded-[2rem] px-5 sm:px-8 transition-all hover:border-accent/30 group"
                >
                  <AccordionTrigger className="hover:no-underline font-outfit font-black text-white py-6 sm:py-8 text-base sm:text-xl tracking-tighter text-left uppercase italic group-hover:text-accent transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/40 leading-relaxed pb-6 sm:pb-8 text-xs sm:text-base font-medium italic">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

      </div>

      {/* Phone Action Modal */}
      <AnimatePresence>
        {isPhoneModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-zinc-950 w-full max-w-md rounded-[3rem] p-12 shadow-shadow-glow relative border border-white/10"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-6 right-6 sm:top-8 sm:right-8 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all z-[110]"
                onClick={() => setIsPhoneModalOpen(false)}
              >
                <X className="h-6 w-6 sm:h-7 sm:w-7" />
              </Button>

              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-outfit font-extrabold text-white uppercase italic tracking-tighter">
                    Contact <span className="text-accent">Method.</span>
                  </h3>
                  <p className="text-white/30 text-xs mt-2 font-bold uppercase tracking-widest leading-loose">
                    Choose your preferred communication channel.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* WhatsApp Option */}
                  <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onClick={() => setIsPhoneModalOpen(false)}
                  >
                    <Button className="w-full h-16 bg-[#25D366] hover:bg-[#20BD5A] text-white font-black rounded-xl shadow-glow group transition-all active:scale-[0.98] uppercase tracking-widest">
                      <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Chat on WhatsApp
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>

                  {/* Call Option */}
                  <a
                    href={`tel:${phoneNumber}`}
                    className="block"
                    onClick={() => setIsPhoneModalOpen(false)}
                  >
                    <Button className="w-full h-16 bg-accent hover:bg-white text-black font-black rounded-xl shadow-glow group transition-all active:scale-[0.98] uppercase tracking-widest">
                      <Phone className="mr-3 h-5 w-5" />
                      Make a Call
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-zinc-950 w-full max-w-lg rounded-[3rem] p-12 shadow-shadow-glow relative border border-white/10"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-6 right-6 sm:top-8 sm:right-8 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all z-[110]"
                onClick={() => setIsBookingOpen(false)}
              >
                <X className="h-6 w-6 sm:h-7 sm:w-7" />
              </Button>

              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-outfit font-extrabold text-white uppercase italic tracking-tighter">Consultation <span className="text-accent">Request.</span></h3>
                  <p className="text-white/30 text-xs mt-2 font-bold uppercase tracking-widest leading-loose">Enter your identity and mission timeline.</p>
                </div>

                <AnimatePresence mode="wait">
                  {!showBookingSuccess ? (
                    <motion.form
                      key="booking-form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      onSubmit={handleBookingSubmit}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <label className="text-[10px] font-extrabold uppercase tracking-widest text-white/30">Subject Name</label>
                        <Input
                          placeholder="Full Name"
                          value={bookingForm.name}
                          onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                          className="rounded-2xl h-12 bg-white/5 border-white/10 text-white placeholder:text-white/10"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-extrabold uppercase tracking-widest text-white/30">Direct Uplink</label>
                        <div className="flex gap-2">
                          <Popover open={isBookingCountrySelectorOpen} onOpenChange={setIsBookingCountrySelectorOpen}>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-[100px] rounded-xl border-white/10 bg-white/5 h-12 flex items-center justify-between px-3 hover:bg-white/10 active:scale-95 transition-all text-xs"
                              >
                                <span className="flex items-center gap-1">
                                  {selectedBookingCountry.flag} <span className="font-mono text-[10px]">{selectedBookingCountry.dial}</span>
                                </span>
                                <ChevronDown className="h-3 w-3 text-white/20" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[280px] p-0 bg-zinc-950 border-white/10 shadow-2xl rounded-2xl overflow-hidden z-[300]">
                              <Command className="bg-transparent text-white border-none">
                                <CommandInput placeholder="Search Country..." className="h-12 border-b border-white/5 bg-transparent text-white focus:ring-0" />
                                <CommandEmpty className="py-6 text-center text-zinc-500 font-mono text-xs uppercase tracking-widest">No Sector Found.</CommandEmpty>
                                <CommandList>
                                  <CommandGroup className="max-h-60 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-white/10">
                                    {COUNTRIES.map((country) => (
                                      <CommandItem
                                        key={`booking-${country.code}`}
                                        value={country.name}
                                        onSelect={() => {
                                          setSelectedBookingCountry(country);
                                          setIsBookingCountrySelectorOpen(false);
                                        }}
                                        className="flex items-center justify-between py-3 px-4 rounded-xl cursor-pointer hover:bg-white/5 transition-colors aria-selected:bg-white/5"
                                      >
                                        <div className="flex items-center gap-3">
                                          <span className="text-lg">{country.flag}</span>
                                          <span className="text-xs font-mono uppercase tracking-widest text-white/60">{country.name}</span>
                                        </div>
                                        <span className="text-xs font-mono text-accent">{country.dial}</span>
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <Input
                            placeholder="9998887776"
                            value={bookingForm.phone}
                            onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                            className="flex-1 rounded-2xl border-white/10 bg-white/5 h-12 text-sm text-white placeholder:text-white/10 focus:border-accent/40 transition-all font-mono"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-extrabold uppercase tracking-widest text-white/30">Target Cycle</label>
                          <Input
                            type="date"
                            value={bookingForm.date}
                            onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                            className="rounded-2xl h-12 bg-white/5 border-white/10 text-white [color-scheme:dark] text-xs"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-extrabold uppercase tracking-widest text-white/30">Operational Window</label>
                          <select
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="w-full rounded-2xl h-12 bg-white/5 border-white/10 text-white text-xs px-4 outline-none focus:border-accent/40 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" disabled className="bg-zinc-950">Select Time</option>
                            {["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"].map(time => (
                              <option key={time} value={time} className="bg-zinc-950">{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 bg-accent text-black font-bold shadow-glow rounded-2xl transition-all hover:bg-white uppercase tracking-tighter text-lg"
                      >
                        {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : "Confirm Registration"}
                      </Button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="booking-success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 flex flex-col items-center text-center space-y-6"
                    >
                      <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-2">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                        >
                          <CalendarDays className="h-10 w-10 text-accent" />
                        </motion.div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-2xl font-outfit font-black text-white uppercase italic tracking-tighter">Briefing Secured.</h4>
                        <p className="text-white/40 text-xs font-medium uppercase tracking-[0.2em] max-w-[240px] mx-auto leading-relaxed">
                          Mission timeline is locked. Deployment parameters confirmed.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Contact;

