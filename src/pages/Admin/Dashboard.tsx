import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";
import {
    Users,
    MessageSquare,
    Globe,
    Download,
    LogOut,
    Search,
    ChevronDown,
    Activity,
    Zap,
    Server,
    Database,
    Clock,
    CheckCircle,
    XCircle,
    AlertCircle,
    Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Submission {
    _id: string;
    name: string;
    email: string;
    phone: string;
    country: string;
    message?: string;
    services?: string[];
    type: 'inquiry' | 'mission-brief' | 'schedule';
    status: 'pending' | 'confirmed' | 'completed' | 'not-interested';
    createdAt: string;
    scheduledDate?: string;
    timeSlot?: string;
}

const AdminDashboard = () => {
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [filteredSubmissions, setFilteredSubmissions] = useState<Submission[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState<'all' | 'inquiry' | 'mission-brief' | 'schedule'>('all');
    const [currentTime, setCurrentTime] = useState(new Date());
    const { toast } = useToast();

    useEffect(() => {
        fetchSubmissions();
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const results = submissions.filter(sub => {
            const matchesSearch =
                sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                sub.country.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType = activeTab === 'all' || sub.type === activeTab;
            return matchesSearch && matchesType;
        });
        setFilteredSubmissions(results);
    }, [searchTerm, submissions, activeTab]);

    const fetchSubmissions = async () => {
        try {
            const token = localStorage.getItem("adminToken");
            const response = await fetch(`${API_BASE_URL}/api/submissions`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.ok) {
                const data = await response.json();
                setSubmissions(data);
                setFilteredSubmissions(data);
            }
        } catch (error) {
            toast({ title: "System Error", description: "Failed to sync data stream.", variant: "destructive" });
        } finally {
            setIsLoading(false);
        }
    };

    const handleStatusUpdate = async (id: string, newStatus: string) => {
        try {
            const token = localStorage.getItem("adminToken");
            const response = await fetch(`${API_BASE_URL}/api/submissions/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ status: newStatus })
            });

            if (response.ok) {
                setSubmissions(prev => prev.map(sub =>
                    sub._id === id ? { ...sub, status: newStatus as any } : sub
                ));
                toast({
                    title: "STATUS UPDATED",
                    description: `Mission status changed to ${newStatus.toUpperCase()}`,
                    className: "bg-emerald-950 text-emerald-100 uppercase tracking-widest font-mono"
                });
            }
        } catch (error) {
            toast({ title: "UPDATE FAILED", description: "Status change denied.", variant: "destructive" });
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("CONFIRM DELETION: This action cannot be undone.")) return;

        try {
            const token = localStorage.getItem("adminToken");
            const response = await fetch(`${API_BASE_URL}/api/submissions/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.ok) {
                setSubmissions(prev => prev.filter(sub => sub._id !== id));
                toast({
                    title: "ARCHIVE DELETED",
                    description: "Record permanently purged.",
                    variant: "destructive",
                    className: "uppercase tracking-widest font-mono"
                });
            }
        } catch (error) {
            toast({ title: "DELETION FAILED", description: "Purge sequence interrupted.", variant: "destructive" });
        }
    };

    const handleExport = async () => {
        try {
            const token = localStorage.getItem("adminToken");
            const response = await fetch(`${API_BASE_URL}/api/export`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `SILVERWOLF_DATA_EXPORT_${new Date().toISOString().slice(0, 10)}.xlsx`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                toast({ title: "DATA EXPORTED", description: "Secure archive generated successfully.", className: "bg-emerald-950 text-emerald-100 uppercase tracking-widest font-mono" });
            }
        } catch (error) {
            toast({ title: "EXPORT FAILED", description: "Data compilation interrupted.", variant: "destructive" });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        window.location.href = "/admin";
    };

    const stats = [
        {
            label: "Total Signals",
            value: submissions.length,
            icon: Database,
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            border: "border-blue-400/20"
        },
        {
            label: "Mission Briefs",
            value: submissions.filter(s => s.type === 'mission-brief').length,
            icon: Zap,
            color: "text-yellow-400",
            bg: "bg-yellow-400/10",
            border: "border-yellow-400/20"
        },
        {
            label: "Global Reach",
            value: new Set(submissions.map(s => s.country)).size,
            icon: Globe,
            color: "text-emerald-400",
            bg: "bg-emerald-400/10",
            border: "border-emerald-400/20"
        },
    ];

    if (isLoading) return (
        <div className="min-h-screen bg-black flex items-center justify-center font-mono">
            <div className="flex flex-col items-center gap-4">
                <div className="relative">
                    <div className="h-16 w-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Activity className="h-6 w-6 text-accent animate-pulse" />
                    </div>
                </div>
                <span className="text-accent text-xs tracking-[0.3em] uppercase animate-pulse">Initializing System...</span>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#050505] text-white font-mono selection:bg-accent/30">
            {/* Background Grid */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:h-20 gap-4">
                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center">
                            <Server className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                            <h1 className="text-sm font-black uppercase tracking-[0.2em] text-white">Command Center</h1>
                            <div className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-wider">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Live Connection
                            </div>
                        </div>
                    </div>
                    {/* Mobile Logout - Visible only on small screens */}
                    <Button
                        onClick={handleLogout}
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-red-400 hover:text-red-300 hover:bg-red-400/10"
                    >
                        <LogOut className="h-5 w-5" />
                    </Button>
                </div>

                <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto justify-between md:justify-end">
                    <div className="flex items-center gap-2 text-[10px] md:text-xs text-white/40 bg-white/5 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/5 whitespace-nowrap">
                        <Clock className="h-3 w-3" />
                        <span>{currentTime.toLocaleTimeString()}</span>
                        <span className="text-accent ml-2 hidden sm:inline">UTC+5:30</span>
                    </div>

                    <Button
                        onClick={handleLogout}
                        variant="ghost"
                        className="hidden md:flex text-red-400 hover:text-red-300 hover:bg-red-400/10 text-xs tracking-widest uppercase gap-2"
                    >
                        <LogOut className="h-4 w-4" /> Terminate Session
                    </Button>
                </div>
            </header>

            <main className="p-8 relative z-10 max-w-[1600px] mx-auto space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative overflow-hidden p-6 rounded-2xl bg-black/40 border ${stat.border} hover:bg-white/5 transition-colors group`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-xl ${stat.bg}`}>
                                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                                </div>
                                <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Statistic 0{i + 1}</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-4xl font-black text-white">{stat.value}</h3>
                                <span className={`text-[10px] uppercase font-bold tracking-wider ${stat.color}`}>Recorded</span>
                            </div>
                            <p className="text-white/40 text-xs uppercase tracking-wider mt-2 group-hover:text-white/60 transition-colors">
                                {stat.label}
                            </p>

                            {/* Decorative Corner */}
                            <div className={`absolute top-0 right-0 p-2 opacity-20`}>
                                <div className={`w-16 h-16 border-t-2 border-r-2 ${stat.border} rounded-tr-2xl`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Control Panel */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 pb-6 border-b border-white/10">
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 bg-black/40 border border-white/10 rounded-xl p-1 relative w-full xl:w-auto">
                        {['all', 'inquiry', 'mission-brief', 'schedule'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={`flex-1 md:flex-none px-3 md:px-6 py-2 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all relative whitespace-nowrap ${activeTab === tab ? 'text-black' : 'text-white/40 hover:text-white'
                                    }`}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-accent rounded-lg"
                                    />
                                )}
                                <span className="relative z-10">{tab.replace('-', ' ')}</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4 w-full xl:w-auto">
                        <div className="relative w-full md:w-80 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20 group-focus-within:text-accent transition-colors" />
                            <Input
                                placeholder="SEARCH ARCHIVES..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-12 bg-black/40 border-white/10 text-xs rounded-xl h-12 text-white placeholder:text-white/20 focus:border-accent/50 uppercase tracking-wider w-full"
                            />
                        </div>
                        <Button
                            onClick={handleExport}
                            className="bg-white hover:bg-accent hover:text-black text-black font-bold text-xs uppercase tracking-wider h-12 px-6 rounded-xl transition-all w-full md:w-auto"
                        >
                            <Download className="h-4 w-4 mr-2" />
                            Export Data
                        </Button>
                    </div>
                </div>

                {/* Data Stream Table */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border border-white/10 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full hidden md:table">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/5">
                                    {['Received', 'Identity', 'Contact Protocol', 'Origin', 'Type', 'Status', 'Actions'].map((head) => (
                                        <th key={head} className="px-6 py-6 text-left text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                                            {head}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <AnimatePresence>
                                    {filteredSubmissions.map((sub, index) => (
                                        <motion.tr
                                            key={sub._id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="group hover:bg-white/[0.02] transition-colors"
                                        >
                                            <td className="px-6 py-6">
                                                <div className="flex flex-col">
                                                    <span className="text-white text-xs font-medium tabular-nums">
                                                        {new Date(sub.createdAt).toLocaleDateString()}
                                                    </span>
                                                    <span className="text-[10px] text-white/30 tabular-nums">
                                                        {new Date(sub.createdAt).toLocaleTimeString()}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10">
                                                        <span className="text-[10px] font-black">{sub.name.charAt(0)}</span>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-bold text-white uppercase tracking-wide">{sub.name}</span>
                                                        <span className="text-[10px] text-white/40 font-mono">{sub.email}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-6">
                                                <code className="px-3 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-accent font-mono tracking-wider">
                                                    {sub.phone}
                                                </code>
                                            </td>
                                            <td className="px-6 py-6 text-sm text-white/60 font-medium">
                                                {sub.country}
                                            </td>
                                            <td className="px-6 py-6">
                                                <Badge variant="outline" className={`
                                                uppercase tracking-wider text-[10px] border-0
                                                ${sub.type === 'mission-brief'
                                                        ? 'bg-purple-500/10 text-purple-400'
                                                        : 'bg-blue-500/10 text-blue-400'}
                                            `}>
                                                    {sub.type.replace('-', ' ')}
                                                </Badge>
                                            </td>
                                            <td className="px-6 py-6">
                                                {sub.type === 'schedule' ? (
                                                    <div className="flex flex-col">
                                                        <span className="text-white text-xs font-bold tabular-nums">
                                                            {sub.scheduledDate ? new Date(sub.scheduledDate).toLocaleDateString() : 'N/A'}
                                                        </span>
                                                        <span className="text-[10px] text-accent font-mono tracking-wider">
                                                            {sub.timeSlot || 'N/A'}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-emerald-500 tracking-wider">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                        Archived
                                                    </div>
                                                )}
                                            </td>
                                            <td className="px-6 py-6">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" className={`h-8 text-[10px] uppercase font-bold tracking-wider ${sub.status === 'confirmed' ? 'text-emerald-400 bg-emerald-400/10' :
                                                            sub.status === 'completed' ? 'text-blue-400 bg-blue-400/10' :
                                                                sub.status === 'not-interested' ? 'text-red-400 bg-red-400/10' :
                                                                    'text-yellow-400 bg-yellow-400/10'
                                                            }`}>
                                                            {sub.status || 'pending'} <ChevronDown className="ml-2 h-3 w-3" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent className="bg-black border-white/10">
                                                        <DropdownMenuItem onClick={() => handleStatusUpdate(sub._id, 'pending')} className="text-yellow-400 text-xs font-mono uppercase">
                                                            Pending
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem onClick={() => handleStatusUpdate(sub._id, 'confirmed')} className="text-emerald-400 text-xs font-mono uppercase">
                                                            Confirmed
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem onClick={() => handleStatusUpdate(sub._id, 'completed')} className="text-blue-400 text-xs font-mono uppercase">
                                                            Completed
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem onClick={() => handleStatusUpdate(sub._id, 'not-interested')} className="text-red-400 text-xs font-mono uppercase">
                                                            Not Interested
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </td>
                                            <td className="px-6 py-6">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => handleDelete(sub._id)}
                                                    className="h-8 w-8 text-white/20 hover:text-red-400 hover:bg-red-400/10 transition-colors"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </AnimatePresence>
                            </tbody>
                        </table>

                        {/* Mobile Card View */}
                        <div className="md:hidden space-y-4 p-4">
                            <AnimatePresence>
                                {filteredSubmissions.map((sub, index) => (
                                    <motion.div
                                        key={sub._id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10">
                                                    <span className="text-xs font-black">{sub.name.charAt(0)}</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-white uppercase tracking-wide">{sub.name}</h3>
                                                    <p className="text-[10px] text-white/40 font-mono">{sub.email}</p>
                                                </div>
                                            </div>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="sm" className={`h-6 text-[10px] uppercase font-bold tracking-wider ${sub.status === 'confirmed' ? 'text-emerald-400 bg-emerald-400/10' :
                                                        sub.status === 'completed' ? 'text-blue-400 bg-blue-400/10' :
                                                            sub.status === 'not-interested' ? 'text-red-400 bg-red-400/10' :
                                                                'text-yellow-400 bg-yellow-400/10'
                                                        }`}>
                                                        {sub.status || 'pending'} <ChevronDown className="ml-1 h-3 w-3" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className="bg-black border-white/10">
                                                    <DropdownMenuItem onClick={() => handleStatusUpdate(sub._id, 'pending')} className="text-yellow-400 text-xs font-mono uppercase">Pending</DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => handleStatusUpdate(sub._id, 'confirmed')} className="text-emerald-400 text-xs font-mono uppercase">Confirmed</DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => handleStatusUpdate(sub._id, 'completed')} className="text-blue-400 text-xs font-mono uppercase">Completed</DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => handleStatusUpdate(sub._id, 'not-interested')} className="text-red-400 text-xs font-mono uppercase">Not Interested</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
                                            <div>
                                                <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-1">Phone</span>
                                                <code className="text-xs text-accent font-mono">{sub.phone}</code>
                                            </div>
                                            <div>
                                                <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-1">Origin</span>
                                                <span className="text-xs text-white/60 font-medium">{sub.country}</span>
                                            </div>
                                            <div>
                                                <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-1">Received</span>
                                                <div className="flex flex-col">
                                                    <span className="text-white text-xs tabular-nums">{new Date(sub.createdAt).toLocaleDateString()}</span>
                                                    <span className="text-[10px] text-white/30 tabular-nums">{new Date(sub.createdAt).toLocaleTimeString()}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-1">Type</span>
                                                <Badge variant="outline" className={`uppercase tracking-wider text-[10px] border-0 px-2 py-0.5 ${sub.type === 'mission-brief' ? 'bg-purple-500/10 text-purple-400' : 'bg-blue-500/10 text-blue-400'
                                                    }`}>
                                                    {sub.type.replace('-', ' ')}
                                                </Badge>
                                            </div>
                                        </div>

                                        {sub.type === 'schedule' && (
                                            <div className="bg-accent/5 rounded-lg p-3 border border-accent/10">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Clock className="h-3 w-3 text-accent" />
                                                    <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Scheduled Briefing</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-white text-xs font-bold">{sub.scheduledDate ? new Date(sub.scheduledDate).toLocaleDateString() : 'N/A'}</span>
                                                    <span className="text-xs text-white/60 font-mono bg-white/5 px-2 py-0.5 rounded">{sub.timeSlot || 'N/A'}</span>
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex justify-end pt-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleDelete(sub._id)}
                                                className="w-full border-red-500/20 text-red-400 hover:bg-red-500/10 hover:text-red-300 h-9 uppercase text-[10px] tracking-widest font-bold"
                                            >
                                                <Trash2 className="h-3 w-3 mr-2" />
                                                Archive Record
                                            </Button>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {filteredSubmissions.length === 0 && (
                        <div className="p-12 text-center text-white/20">
                            <Database className="h-12 w-12 mx-auto mb-4 opacity-50" />
                            <p className="text-xs uppercase tracking-[0.2em]">No Signal Detected in Archives</p>
                        </div>
                    )}
                </motion.div>
            </main>
        </div>
    );
};

export default AdminDashboard;
