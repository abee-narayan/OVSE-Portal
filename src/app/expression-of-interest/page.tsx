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

            <main className="max-w-2xl mx-auto py-16 px-6">
                <Card className="border-none shadow-3xl rounded-[40px] overflow-hidden">
                    <CardContent className="p-0">
                        <div className="bg-[#1D2660] p-10 text-white">
                            <h2 className="text-3xl font-black mb-2 tracking-tight">Express Interest</h2>
                            <p className="text-blue-100/70 text-sm font-medium">Submit your basic details to initiate a discussion regarding OVSE partnership.</p>
                        </div>

                        {!submitted ? (
                            <form className="p-10 space-y-6 bg-white" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                                <div className="space-y-4">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Organization Name</Label>
                                    <div className="relative">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                                        <Input className="pl-12 py-6 rounded-xl border-slate-100 bg-slate-50" placeholder="Your Company Name" required />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Contact Person</Label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                                            <Input className="pl-12 py-6 rounded-xl border-slate-100 bg-slate-50" placeholder="Full Name" required />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Designation</Label>
                                        <Input className="py-6 rounded-xl border-slate-100 bg-slate-50" placeholder="e.g. CEO, Director" required />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                                            <Input className="pl-12 py-6 rounded-xl border-slate-100 bg-slate-50" type="email" placeholder="official@company.com" required />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mobile Number</Label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                                            <Input className="pl-12 py-6 rounded-xl border-slate-100 bg-slate-50" placeholder="10-digit number" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Brief Intent</Label>
                                    <Textarea className="min-h-[120px] rounded-xl border-slate-100 bg-slate-50 p-4" placeholder="Briefly describe your interest in offline Aadhaar verification..." required />
                                </div>

                                <div className="pt-4">
                                    <Button type="submit" className="w-full py-8 rounded-2xl bg-[#1D2660] hover:bg-[#151B45] font-black uppercase tracking-widest text-sm shadow-xl shadow-blue-900/10">
                                        Submit Expression of Interest
                                    </Button>
                                </div>
                            </form>
                        ) : (
                            <div className="p-20 text-center space-y-8 animate-in zoom-in duration-500 bg-white">
                                <div className="h-24 w-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="h-12 w-12" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black text-slate-900">Thank You!</h3>
                                    <p className="text-slate-500 font-medium">Your Expression of Interest has been received. Our team will contact you shortly.</p>
                                </div>
                                <Link href="/" className="inline-block">
                                    <Button variant="ghost" className="font-bold text-[#1D2660] gap-2">
                                        <ChevronLeft className="h-4 w-4" /> Back to Landing Page
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
