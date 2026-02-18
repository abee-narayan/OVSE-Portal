"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, FileText, Scale, Lock, ChevronLeft, ExternalLink } from "lucide-react";

export default function CompliancePage() {
    return (
        <div className="min-h-screen bg-[#FDFCFB]">
            {/* Minimal Branded Header */}
            <header className="bg-white border-b border-slate-200 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png"
                        alt="Aadhaar Logo"
                        className="h-10 w-auto"
                    />
                    <div className="h-6 w-[1px] bg-slate-200" />
                    <div>
                        <h1 className="text-sm font-bold text-slate-800 tracking-tight">Compliance & Guidelines</h1>
                        <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">OVSE Framework 2.0</p>
                    </div>
                </div>
                <Link href="/" className="text-xs font-black text-[#1D2660] hover:underline uppercase tracking-widest">Return Home</Link>
            </header>

            <main className="max-w-5xl mx-auto py-16 px-6 font-sans">
                <div className="text-center space-y-4 mb-20 animate-in fade-in slide-in-from-top-4 duration-700">
                    <h2 className="text-4xl md:text-5xl font-black text-[#1D2660] tracking-tight">Regulatory Compliance</h2>
                    <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto italic">
                        Ensuring secure, transparent, and legally binding offline Aadhaar verification through the Offline Verification Seeding Ecosystem (OVSE).
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <Card className="border-none shadow-2xl shadow-blue-900/5 rounded-[40px] overflow-hidden bg-white">
                        <CardContent className="p-10 space-y-6">
                            <div className="h-14 w-14 bg-blue-50 text-[#1D2660] rounded-2xl flex items-center justify-center shadow-inner">
                                <ShieldCheck className="h-8 w-8" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Data Privacy Standards</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    All OVSE partners must adhere to the Aadhaar (Sharing of Information) Regulations, ensuring that no biometric data is stored or shared. Only minimal demographic data as permitted by the user is processed.
                                </p>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-xs font-bold text-slate-400">
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400" /> End-to-End Encryption
                                </li>
                                <li className="flex items-center gap-3 text-xs font-bold text-slate-400">
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400" /> Mandatory Audit Logging
                                </li>
                                <li className="flex items-center gap-3 text-xs font-bold text-slate-400">
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400" /> Data Minimization Principles
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-2xl shadow-blue-900/5 rounded-[40px] overflow-hidden bg-white">
                        <CardContent className="p-10 space-y-6">
                            <div className="h-14 w-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shadow-inner">
                                <Scale className="h-8 w-8" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Legal Framework</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    The OVSE operates under Section 8 of the Aadhaar Act, 2016. Entities must be registered and authorized by UIDAI to perform offline verification via XML/QR code methods.
                                </p>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-xs font-bold text-slate-400">
                                    <div className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Mandatory User Consent
                                </li>
                                <li className="flex items-center gap-3 text-xs font-bold text-slate-400">
                                    <div className="h-1.5 w-1.5 rounded-full bg-amber-400" /> KYC Purpose Limitation
                                </li>
                                <li className="flex items-center gap-3 text-xs font-bold text-slate-400">
                                    <div className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Regulatory Reporting
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <div className="bg-[#1D2660] rounded-[50px] p-12 md:p-16 text-white relative overflow-hidden group">
                    <Lock className="absolute -right-10 -bottom-10 h-64 w-64 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                    <div className="relative z-10 max-w-2xl space-y-8">
                        <h3 className="text-3xl font-black tracking-tight leading-tight">Download Official Guideline Documents</h3>
                        <p className="text-blue-100/70 font-medium text-lg leading-relaxed">
                            Access the latest technical specifications and legal circulars issued by UIDAI regarding Offline Aadhaar Verification.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 pt-4">
                            <Button className="bg-white text-[#1D2660] hover:bg-blue-50 h-16 rounded-2xl font-black uppercase tracking-widest text-xs gap-3 shadow-xl">
                                <FileText className="h-4 w-4" /> Technical Specs
                            </Button>
                            <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white h-16 rounded-2xl font-black uppercase tracking-widest text-xs gap-3">
                                <ExternalLink className="h-4 w-4" /> Legal Circulars
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center space-y-6">
                    <p className="text-slate-400 text-xs font-black uppercase tracking-[0.4em]">Integrated Compliance Registry</p>
                    <div className="flex flex-wrap justify-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png" alt="Logo" className="h-10 grayscale" />
                        <div className="h-10 w-[1px] bg-slate-300" />
                        <div className="font-black text-2xl text-slate-800 pt-1">OVSE 2.0</div>
                    </div>
                </div>
            </main>

            <footer className="bg-white border-t border-slate-100 py-12 px-6 text-center">
                <Link href="/">
                    <Button variant="ghost" className="gap-3 font-black text-[#1D2660] hover:bg-slate-50 px-8 py-6 rounded-2xl">
                        <ChevronLeft className="h-5 w-5" /> Back to Landing Page
                    </Button>
                </Link>
            </footer>
        </div>
    );
}
