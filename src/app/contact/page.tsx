import Background from "@/components/Background";
import { PROFILE } from "@/data/mock";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-[#0d1117] text-white p-10 flex flex-col items-center justify-center">
            <Background />
            <div className="max-w-2xl w-full bg-white/5 p-12 rounded-3xl border border-white/10 backdrop-blur-xl">
                <Link href="/" className="flex items-center gap-2 text-blue-500 mb-8"><ArrowLeft size={20} /> Back</Link>
                <h1 className="text-4xl font-bold mb-6 tracking-tighter">Let's build something together.</h1>
                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-xl"><Mail className="text-blue-500" /> {PROFILE.email}</div>
                    <div className="flex items-center gap-4 text-xl"><MapPin className="text-blue-500" /> {PROFILE.location}</div>
                </div>
            </div>
        </main>
    );
}