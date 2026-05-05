"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    ArrowLeft, ExternalLink, Globe, Youtube,
    Twitter, Facebook, Smartphone, Newspaper,
    CheckCircle2, ImageIcon
} from "lucide-react";
import { ACHIEVEMENTS } from "@/data/mock";

// Helper to get Icon and Color based on link type
const getLinkStyles = (type: string) => {
    switch (type) {
        case "youtube": return { icon: <Youtube size={16} />, color: "text-red-500", bg: "bg-red-500/10" };
        case "twitter": return { icon: <Twitter size={16} />, color: "text-sky-400", bg: "bg-sky-400/10" };
        case "facebook": return { icon: <Facebook size={16} />, color: "text-blue-600", bg: "bg-blue-600/10" };
        case "playstore": return { icon: <Smartphone size={16} />, color: "text-emerald-400", bg: "bg-emerald-400/10" };
        case "news": return { icon: <Newspaper size={16} />, color: "text-amber-400", bg: "bg-amber-400/10" };
        default: return { icon: <Globe size={16} />, color: "text-sky-400", bg: "bg-sky-400/10" };
    }
};

export default function AchievementDetailPage() {
    const params = useParams();
    const router = useRouter();
    const item = ACHIEVEMENTS.find((a) => a.id.toString() === params.id);

    if (!item) return <div className="text-white p-20">Milestone not found...</div>;

    return (
        <main className="min-h-screen bg-[#0b1120] text-slate-300 font-sans pb-20">
            <div className="fixed inset-0 -z-10 bg-[#0b1120] overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 blur-[150px] rounded-full" />
            </div>

            <nav className="sticky top-0 z-50 border-b border-slate-800 bg-[#0b1120]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <button onClick={() => router.back()} className="flex items-center gap-2 text-white font-bold hover:text-sky-400 transition-colors">
                        <ArrowLeft size={18} /> BACK
                    </button>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{item.tag}</span>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto px-6 pt-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

                    <div className="mb-12">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-4 leading-none">{item.title}</h1>
                        <p className="text-xl text-sky-400 font-bold uppercase tracking-tight">{item.subtitle}</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            {/* Media Player / Image */}
                            <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-black/40">
                                {item.videoUrl ? (
                                    <iframe className="w-full aspect-video" src={item.videoUrl} allowFullScreen />
                                ) : (
                                    <img src={item.image} className="w-full h-auto object-cover" alt="" />
                                )}
                            </div>

                            {/* Story */}
                            <div className="bg-slate-900/40 p-10 rounded-[2.5rem] border border-slate-800">
                                <h2 className="text-2xl font-bold text-white mb-6">Execution & Impact</h2>
                                <p className="text-lg leading-relaxed text-slate-400 font-light">{item.detailedStory}</p>
                            </div>
                        </div>

                        {/* Sidebar with MULTIPLE LINKS */}
                        <div className="space-y-6">
                            {item.stats && (
                                <div className="p-8 bg-sky-500 rounded-3xl text-black shadow-lg shadow-sky-500/20">
                                    <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-70">{item.stats.label}</p>
                                    <p className="text-5xl font-black tracking-tighter">{item.stats.value}</p>
                                </div>
                            )}

                            <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl">
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Reference & Media Links</h4>

                                <div className="space-y-3">
                                    {item.links?.map((link, i) => {
                                        const style = getLinkStyles(link.type);
                                        return (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center justify-between p-4 rounded-2xl border border-white/5 ${style.bg} hover:border-white/20 transition-all group`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className={style.color}>{style.icon}</span>
                                                    <span className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                                                        {link.label || "View Link"}
                                                    </span>
                                                </div>
                                                <ExternalLink size={14} className="text-slate-600 group-hover:text-white transition-colors" />
                                            </a>
                                        );
                                    })}
                                </div>

                                <div className="mt-10 pt-8 border-t border-white/5">
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Core Verification</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2 text-xs text-slate-400"><CheckCircle2 className="text-emerald-500" size={14} /> Gov-Authored Code</li>
                                        <li className="flex items-center gap-2 text-xs text-slate-400"><CheckCircle2 className="text-emerald-500" size={14} /> Security Audited</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Section */}
                    {item.gallery && (
                        <div className="mt-20">
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <ImageIcon size={24} className="text-sky-500" /> Gallery
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {item.gallery.map((img, i) => (
                                    <div key={i} className="group rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
                                        <img src={img} className="w-full h-72 object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </main>
    );
}