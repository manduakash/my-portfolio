"use client"
import Background from "@/components/Background";
import { PROFILE } from "@/data/mock";
import Link from "next/link";
import { ArrowLeft, CheckCheck, Copy, Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
    const [isCopied, setIsCopied] = useState(false);
    const handleCopyEmail = (e: React.MouseEvent<HTMLDivElement>) => {
        navigator.clipboard.writeText(PROFILE.email);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 5000);
    }
    return (
        <main className="min-h-screen bg-[#0d1117] text-white p-10 flex flex-col items-center justify-center">
            <Background />
            <div className="max-w-2xl w-full bg-white/5 p-12 rounded-3xl border border-white/10 backdrop-blur-xl">
                <Link href="/" className="flex items-center gap-2 text-blue-500 mb-8"><ArrowLeft size={20} /> Back</Link>
                <h1 className="text-4xl font-bold mb-6 tracking-tighter">Let's build something together.</h1>
                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-xl group cursor-pointer" onClick={(e) => handleCopyEmail(e)}><Mail className="text-blue-500" /> <span className="hover:underline">{PROFILE.email}</span> {isCopied ? (<div className="flex items-center gap-1 text-emerald-500 border border-emerald-300 rounded-full font-extrabold p-1 bg-white/90"><CheckCheck size={16} /></div>) : <Copy size={16} />}</div>
                    <div className="flex items-center gap-4 text-xl"><MapPin className="text-blue-500" /> {PROFILE.location}</div>
                    <div className="flex gap-4 pt-10">
                        <Link
                            href={PROFILE.socials[0].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 flex items-center justify-center rounded-full bg-[#181717] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#24292f]"
                        >
                            <Github className="w-7 h-7" />
                        </Link>

                        <Link
                            href={PROFILE.socials[1].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 flex items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#004182]"
                        >
                            <Linkedin className="w-7 h-7" />
                        </Link>

                        <Link
                            href={PROFILE.socials[2].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] text-white shadow-lg transition-all duration-300 hover:scale-110"
                        >
                            <Instagram className="w-7 h-7" />
                        </Link>

                        <Link
                            href={PROFILE.socials[3].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#20b954]"
                        >
                            <FaWhatsapp className="w-7 h-7" />
                        </Link>

                    </div>
                </div>
            </div>
        </main>
    );
}