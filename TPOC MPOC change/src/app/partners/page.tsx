"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Landmark, ShieldCheck, ChevronLeft, ArrowUpRight, Globe, Users } from "lucide-react";

const PARTNER_CATEGORIES = [
    {
        title: "Banking & Financial Services",
        icon: Landmark,
        color: "bg-emerald-50 text-emerald-600",
        partners: ["HDFC Bank", "ICICI Bank", "State Bank of India", "Axis Bank"]
    },
    {
        title: "Telecom Operators",
        icon: Globe,
        color: "bg-blue-50 text-blue-600",
        partners: ["Reliance Jio", "Bharti Airtel", "Vodafone Idea", "BSNL"]
    },
    {
        title: "Fintech & Payment Aggregators",
        icon: ShieldCheck,
        color: "bg-purple-50 text-purple-600",
        partners: ["Paytm", "PhonePe", "Razorpay", "Pine Labs"]
    }
];

export default function PartnersPage() {
    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Minimal Header */}
            <header className="bg-white border-b border-slate-200 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png"
                        alt="Aadhaar Logo"
                        className="h-10 w-auto"
                    />
                    <div className="h-6 w-[1px] bg-slate-200" />
                    <div>
                        <h1 className="text-sm font-bold text-slate-800 tracking-tight text-white/0 lg:text-slate-800">OVSE Partners</h1>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Ecosystem Network</p>
                    </div>
                </div>
                <Link href="/" className="text-xs font-black text-[#1D2660] hover:underline uppercase tracking-widest transition-all">Portal Home</Link>
            </header>

            <main className="max-w-6xl mx-auto py-20 px-6 font-sans">
                <div className="max-w-3xl mb-20 animate-in fade-in slide-in-from-left-4 duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D2660] text-white text-[10px] font-black uppercase tracking-widest mb-6">
                        <Users className="h-3 w-3" /> Trusted Network
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-[#1D2660] tracking-tight mb-6">Our Ecosystem Partners</h2>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed italic">
                        The Offline Verification Seeding Ecosystem (OVSE) is supported by India's leading financial and technological institutions, enabling
                        seamless and secure Aadhaar seeding across various service domains.
                    </p>
                </div>

                <div className="grid gap-12 mb-24">
                    {PARTNER_CATEGORIES.map((category, idx) => (
                        <div key={idx} className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className={`h-12 w-12 rounded-[20px] flex items-center justify-center shadow-inner ${category.color}`}>
                                    <category.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-black text-slate-800 tracking-tight uppercase">{category.title}</h3>
                                <div className="h-[2px] flex-1 bg-slate-100 hidden md:block" />
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {category.partners.map((partner, pIdx) => (
                                    <Card key={pIdx} className="border-none shadow-xl shadow-blue-900/5 rounded-[32px] hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 cursor-pointer group bg-white">
                                        <CardContent className="p-8 flex flex-col items-center justify-center text-center space-y-4">
                                            <div className="h-14 w-14 bg-slate-50 group-hover:bg-[#1D2660] group-hover:text-white rounded-[24px] flex items-center justify-center transition-colors duration-500">
                                                <Building2 className="h-6 w-6" />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="font-extrabold text-slate-800 group-hover:text-[#1D2660] transition-colors">{partner}</p>
                                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Verified Partner</span>
                                            </div>
                                            <ArrowUpRight className="h-4 w-4 text-slate-200 group-hover:text-[#1D2660] transition-colors self-end" />
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-[#1D2660] rounded-[60px] p-12 md:p-20 text-white relative overflow-hidden group">
                    <ShieldCheck className="absolute -right-16 -bottom-16 h-80 w-80 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                    <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h3 className="text-4xl font-black tracking-tighter leading-tight">Become an OVSE Partner Today</h3>
                            <p className="text-blue-100/70 font-medium text-lg italic leading-relaxed">
                                Join the elite network of institutions authorized to perform offline Aadhaar verification through our streamlined integration framework.
                            </p>
                            <Link href="/register">
                                <Button className="bg-[#FEF7ED] text-[#1D2660] hover:bg-white h-16 px-12 rounded-[24px] font-black uppercase tracking-widest text-xs gap-3 shadow-2xl transition-all hover:scale-105 active:scale-95">
                                    Start Onboarding Flow <ArrowUpRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                        <div className="p-10 bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 space-y-6">
                            <div className="space-y-2">
                                <h4 className="text-sm font-black uppercase tracking-widest text-blue-200">Onboarding Benefits</h4>
                                <div className="h-[1px] w-12 bg-blue-400" />
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Direct integration with UIDAI offline system",
                                    "Compliance automation & audit reporting",
                                    "Tiered access to verification APIs",
                                    "Official trust badge for your portal"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-sm font-medium text-blue-50/80">
                                        <div className="h-2 w-2 rounded-full bg-emerald-400" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-20 text-center space-y-4">
                <Link href="/">
                    <Button variant="ghost" className="gap-3 font-black text-slate-400 hover:text-[#1D2660] hover:bg-slate-50 px-8 py-6 rounded-2xl transition-all">
                        <ChevronLeft className="h-5 w-5" /> Return to Main Gateway
                    </Button>
                </Link>
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em]">UIDAI • OVSE Ecosystem • 2026</p>
            </footer>
        </div>
    );
}
