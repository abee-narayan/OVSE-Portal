"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    CheckCircle2,
    ChevronLeft,
    Send,
    Building2,
    Mail,
    Phone,
    User
} from "lucide-react";

export default function ExpressionOfInterestPage() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="min-h-screen bg-[#FEF7ED]">
            {/* Minimal Header */}
            <header className="bg-white border-b border-slate-200 py-4 px-6 md:px-12 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png"
                        alt="Aadhaar Logo"
                        className="h-10 w-auto"
                    />
                    <div className="h-6 w-[1px] bg-slate-200" />
                    <div>
                        <h1 className="text-sm font-bold text-slate-800 uppercase tracking-tight">Expression of Interest</h1>
                        <p className="text-[10px] text-slate-500 font-medium">Unique Identification Authority of India</p>
                    </div>
                </div>
                <Link href="/" className="text-xs font-bold text-[#1D2660] hover:underline">Return to Portal</Link>
            </header>

            <main className="max-w-2xl mx-auto py-16 px-6 font-sans">
                <Card className="border-none shadow-3xl rounded-[40px] overflow-hidden">
                    <CardContent className="p-0">
                        <div className="bg-[#1D2660] p-10 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <h2 className="text-3xl font-black mb-2 tracking-tight">Express Interest</h2>
                            <p className="text-blue-100/70 text-sm font-medium">Submit your basic details to initiate a discussion regarding OVSE partnership.</p>
                        </div>

                        {!submitted ? (
                            <form className="p-10 space-y-6 bg-white" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                                <div className="space-y-4">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Organization Name</Label>
                                    <div className="relative group">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-[#1D2660] transition-colors" />
                                        <Input className="pl-12 py-7 rounded-xl border-slate-100 bg-slate-50 focus:bg-white transition-all" placeholder="Your Company Name" required />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Contact Person</Label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-[#1D2660] transition-colors" />
                                            <Input className="pl-12 py-7 rounded-xl border-slate-100 bg-slate-50 focus:bg-white transition-all" placeholder="Full Name" required />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Designation</Label>
                                        <Input className="py-7 rounded-xl border-slate-100 bg-slate-50 focus:bg-white transition-all text-sm font-bold" placeholder="e.g. CEO, Director" required />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</Label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-[#1D2660] transition-colors" />
                                            <Input className="pl-12 py-7 rounded-xl border-slate-100 bg-slate-50 focus:bg-white transition-all" type="email" placeholder="official@company.com" required />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mobile Number</Label>
                                        <div className="relative group">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-[#1D2660] transition-colors" />
                                            <Input className="pl-12 py-7 rounded-xl border-slate-100 bg-slate-50 focus:bg-white transition-all" placeholder="10-digit number" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Brief Intent</Label>
                                    <Textarea className="min-h-[120px] rounded-2xl border-slate-100 bg-slate-50 focus:bg-white p-6 transition-all font-medium text-sm leading-relaxed" placeholder="Briefly describe your interest in offline Aadhaar verification..." required />
                                </div>

                                <div className="pt-4">
                                    <Button type="submit" className="w-full py-8 rounded-2xl bg-[#1D2660] hover:bg-[#151B45] font-black uppercase tracking-widest text-xs shadow-2xl shadow-blue-900/20 active:scale-[0.98] transition-all">
                                        Submit Expression of Interest
                                    </Button>
                                </div>
                            </form>
                        ) : (
                            <div className="p-24 text-center space-y-8 animate-in zoom-in duration-500 bg-white">
                                <div className="h-28 w-28 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                    <CheckCircle2 className="h-14 w-14" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-3xl font-black text-slate-900 tracking-tight">Interest Logged!</h3>
                                    <p className="text-slate-500 font-medium max-w-sm mx-auto leading-relaxed">Our partnership desk has received your expression. We will be in touch within **2-3 business days**.</p>
                                </div>
                                <Link href="/" className="inline-block pt-4">
                                    <Button variant="ghost" className="font-extrabold text-[#1D2660] gap-3 hover:bg-slate-50 px-8 py-6 rounded-xl transition-all">
                                        <ChevronLeft className="h-5 w-5" /> Back to Landing Page
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
