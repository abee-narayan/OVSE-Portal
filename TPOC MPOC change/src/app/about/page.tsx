"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Info, Target, ShieldCheck, Zap, ChevronLeft, ArrowRight, Building2, UserCheck } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 py-5 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png"
                        alt="Aadhaar Logo"
                        className="h-10 w-auto"
                    />
                    <div className="h-6 w-[1px] bg-slate-200" />
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1D2660]">About OVSE</span>
                </div>
                <Link href="/" className="text-xs font-black text-slate-400 hover:text-[#1D2660] transition-colors">BACK TO PORTAL</Link>
            </header>

            <main className="font-sans">
                {/* Hero Section */}
                <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1D2660] text-[10px] font-black uppercase tracking-widest">
                            <Info className="h-3 w-3" /> Ecosystem Overview
                        </div>
                        <h1 className="text-6xl md:text-7xl font-black text-[#1D2660] tracking-tighter leading-[0.95]">
                            What is <span className="text-blue-600">OVSE?</span>
                        </h1>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl italic">
                            The Offline Verification Seeking Entities (OVSE) ecosystem is a revolutionary framework designed by UIDAI to enable secure, privacy-preserving, and offline Aadhaar verification.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-[#1D2660] rounded-[60px] rotate-3 absolute inset-0 -z-10 opacity-5" />
                        <Card className="border-none shadow-3xl shadow-blue-900/10 rounded-[60px] overflow-hidden bg-white p-12 relative z-10">
                            <div className="space-y-8">
                                <div className="h-16 w-16 bg-blue-50 rounded-3xl flex items-center justify-center text-[#1D2660]">
                                    <ShieldCheck className="h-8 w-8" />
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 tracking-tight">Privacy First Verification</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    Unlike traditional online authentication, OVSE uses Digitally Signed XML or Secure QR Codes, ensuring that the resident's data never leaves their control without explicit consent.
                                </p>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* Core Pillars */}
                <section className="bg-slate-50 py-32 px-6">
                    <div className="max-w-7xl mx-auto space-y-20">
                        <div className="text-center space-y-4">
                            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">The Three Pillars</h2>
                            <p className="text-4xl font-black text-[#1D2660] tracking-tight">How OVSE Empowers Organizations</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                {
                                    title: "Zero Data Risk",
                                    desc: "Verify identities without storing biometrics or sensitive central database links.",
                                    icon: ShieldCheck,
                                    color: "text-emerald-500"
                                },
                                {
                                    title: "Instant Trust",
                                    desc: "Cryptographically signed data from UIDAI ensures 100% authenticity of the resident.",
                                    icon: UserCheck,
                                    color: "text-blue-500"
                                },
                                {
                                    title: "Offline Ready",
                                    desc: "Perform KYC even in low-connectivity areas using secure QR code technology.",
                                    icon: Zap,
                                    color: "text-amber-500"
                                }
                            ].map((pillar, i) => (
                                <div key={i} className="space-y-6 group">
                                    <div className={`h-14 w-14 rounded-2xl bg-white shadow-xl shadow-blue-900/5 flex items-center justify-center ${pillar.color} group-hover:scale-110 transition-transform duration-500`}>
                                        <pillar.icon className="h-7 w-7" />
                                    </div>
                                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">{pillar.title}</h4>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{pillar.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <Target className="h-16 w-16 text-[#1D2660] mx-auto opacity-20" />
                        <h2 className="text-4xl md:text-5xl font-black text-[#1D2660] tracking-tight">Ready to join the ecosystem?</h2>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed">
                            Registration is open for banks, telecom operators, and fintech entities looking to modernize their identity verification workflows.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/register">
                            <Button className="bg-[#1D2660] hover:bg-[#151B45] text-white px-10 py-8 rounded-[24px] font-black uppercase tracking-widest text-xs gap-3 shadow-2xl transition-all hover:-translate-y-1">
                                Start Your Registration <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/compliance">
                            <Button variant="outline" className="border-slate-200 hover:bg-slate-50 text-slate-600 px-10 py-8 rounded-[24px] font-black uppercase tracking-widest text-xs">
                                Review Compliance
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="bg-white border-t border-slate-100 py-16 px-6 text-center">
                <div className="flex justify-center items-center gap-3 mb-8 grayscale opacity-50">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png" alt="Logo" className="h-8" />
                    <div className="h-6 w-[1px] bg-slate-300" />
                    <Building2 className="h-6 w-6 text-slate-800" />
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">UIDAI • OVSE Portal • 2026</p>
            </footer>
        </div>
    );
}
