"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    CheckCircle2,
    ChevronRight,
    ChevronLeft,
    Mail,
    Smartphone,
    Building2,
    Users,
    FileUp,
    Send,
    ShieldCheck
} from "lucide-react";

const STEPS = [
    { id: 1, title: "Identity", icon: Users },
    { id: 2, title: "Organization", icon: Building2 },
    { id: 3, title: "Contacts", icon: ShieldCheck },
    { id: 4, title: "Documents", icon: FileUp },
    { id: 5, title: "Review", icon: CheckCircle2 }
];

export default function RegisterPage() {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        mobile: "",
        orgName: "",
        orgAddress: "",
        regNumber: "",
        signatoryName: "",
        mpocName: "",
        tpocName: ""
    });

    const nextStep = () => setStep(s => Math.min(s + 1, STEPS.length));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));
    const handleSubmit = () => {
        // Simulate submission
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Minimal Branded Header */}
            <header className="bg-white border-b border-slate-200 py-4 px-6 md:px-12 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png"
                        alt="Aadhaar Logo"
                        className="h-10 w-auto"
                    />
                    <div className="h-6 w-[1px] bg-slate-200" />
                    <div>
                        <h1 className="text-sm font-bold text-slate-800">OVSE Portal</h1>
                        <p className="text-[10px] text-slate-500 font-medium">Unique Identification Authority of India</p>
                    </div>
                </div>
                <Link href="/" className="text-xs font-bold text-blue-900 hover:underline">Back to Home</Link>
            </header>

            <main className="max-w-4xl mx-auto py-12 px-6">
                {/* Progress Stepper */}
                <div className="flex justify-between items-center mb-12 relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0" />
                    {STEPS.map((s) => (
                        <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${step >= s.id ? 'bg-[#1D2660] border-[#1D2660] text-white' : 'bg-white border-slate-200 text-slate-400'
                                }`}>
                                <s.icon className="h-5 w-5" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{s.title}</span>
                        </div>
                    ))}
                </div>

                <Card className="border-none shadow-2xl shadow-blue-900/5 overflow-hidden rounded-3xl">
                    <CardContent className="p-0">
                        <div className="bg-[#1D2660] p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <h2 className="text-2xl font-black mb-1">{STEPS[step - 1].title} Details</h2>
                            <p className="text-blue-100/70 text-sm italic">Step {step} of 5: Complete this section to proceed.</p>
                        </div>

                        <div className="p-10 space-y-8 bg-white">
                            {step === 1 && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                                    <div className="space-y-4">
                                        <Label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Verification</Label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-[#1D2660] transition-colors" />
                                            <Input
                                                placeholder="Enter official email address"
                                                className="pl-12 py-7 text-lg rounded-2xl border-slate-100 bg-slate-50/50 focus:bg-white transition-all shadow-input"
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            />
                                            <Button variant="ghost" className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-blue-600">Send OTP</Button>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <Label className="text-xs font-black uppercase tracking-widest text-slate-400">Mobile Authentication</Label>
                                        <div className="relative group">
                                            <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-[#1D2660] transition-colors" />
                                            <Input
                                                placeholder="Enter 10-digit mobile number"
                                                className="pl-12 py-7 text-lg rounded-2xl border-slate-100 bg-slate-50/50 focus:bg-white transition-all shadow-input"
                                                value={formData.mobile}
                                                onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                                            />
                                            <Button variant="ghost" className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-blue-600">Send OTP</Button>
                                        </div>
                                    </div>
                                    <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100/50 flex items-start gap-4">
                                        <ShieldCheck className="h-6 w-6 text-blue-600 shrink-0" />
                                        <p className="text-xs text-blue-700 leading-relaxed italic">
                                            Identity verification ensures that you have authorized access to the email and mobile number associated with this OVSE registration. One-Time Passwords (OTP) will be sent for validation.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Legal Entity Name</Label>
                                            <Input
                                                placeholder="e.g. Innovate Solutions Pvt Ltd"
                                                className="py-6 rounded-xl bg-slate-50/50 focus:bg-white"
                                                value={formData.orgName}
                                                onChange={e => setFormData({ ...formData, orgName: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Registration Number</Label>
                                            <Input
                                                placeholder="CIN / Registration Number"
                                                className="py-6 rounded-xl bg-slate-50/50 focus:bg-white"
                                                value={formData.regNumber}
                                                onChange={e => setFormData({ ...formData, regNumber: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-span-2 space-y-3">
                                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Headquarters Address</Label>
                                            <Input
                                                placeholder="Full registered office address"
                                                className="py-6 rounded-xl bg-slate-50/50 focus:bg-white"
                                                value={formData.orgAddress}
                                                onChange={e => setFormData({ ...formData, orgAddress: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                                    <div className="space-y-6">
                                        <div className="p-6 border-2 border-dashed border-slate-100 rounded-3xl space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-full bg-[#1D2660] text-white flex items-center justify-center text-xs font-black">1</div>
                                                <h3 className="font-black text-slate-800 uppercase tracking-tight">Authorized Signatory</h3>
                                            </div>
                                            <Input
                                                placeholder="Full Name of Signatory"
                                                className="py-6 rounded-xl bg-slate-50/50"
                                                value={formData.signatoryName}
                                                onChange={e => setFormData({ ...formData, signatoryName: e.target.value })}
                                            />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="p-6 bg-slate-50/50 rounded-3xl space-y-4">
                                                <Label className="text-[10px] font-black uppercase tracking-widest text-[#1D2660]">Management POC (MPOC)</Label>
                                                <Input
                                                    placeholder="MPOC Full Name"
                                                    className="py-5 bg-white rounded-xl"
                                                    value={formData.mpocName}
                                                    onChange={e => setFormData({ ...formData, mpocName: e.target.value })}
                                                />
                                            </div>
                                            <div className="p-6 bg-slate-50/50 rounded-3xl space-y-4">
                                                <Label className="text-[10px] font-black uppercase tracking-widest text-[#1D2660]">Technical POC (TPOC)</Label>
                                                <Input
                                                    placeholder="TPOC Full Name"
                                                    className="py-5 bg-white rounded-xl"
                                                    value={formData.tpocName}
                                                    onChange={e => setFormData({ ...formData, tpocName: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 4 && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 text-center">
                                    <div className="grid grid-cols-2 gap-6">
                                        {[
                                            "Certificate of Incorporation",
                                            "PAN / GST Registration",
                                            "Board Resolution Copy",
                                            "Authorised Signatory ID"
                                        ].map((doc) => (
                                            <div key={doc} className="group p-8 border-2 border-dashed border-slate-100 rounded-3xl hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer flex flex-col items-center gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-blue-600 shadow-sm">
                                                    <FileUp className="h-6 w-6" />
                                                </div>
                                                <p className="font-bold text-sm text-slate-600 group-hover:text-slate-900">{doc}</p>
                                                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Only PDF files (Max 5MB)</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {step === 5 && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                                    <div className="bg-slate-50 p-8 rounded-3xl space-y-6">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <ReviewItem label="Organization" value={formData.orgName} />
                                            <ReviewItem label="Reg Number" value={formData.regNumber} />
                                            <ReviewItem label="Signatory" value={formData.signatoryName} />
                                            <ReviewItem label="MPOC" value={formData.mpocName} />
                                            <ReviewItem label="TPOC" value={formData.tpocName} />
                                            <ReviewItem label="Email" value={formData.email} />
                                        </div>
                                        <div className="pt-6 border-t border-slate-200">
                                            <ReviewItem label="Headquarters" value={formData.orgAddress} />
                                        </div>
                                    </div>
                                    <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 flex items-center gap-4">
                                        <ShieldCheck className="h-6 w-6 text-amber-600 shrink-0" />
                                        <p className="text-xs text-amber-800 leading-relaxed font-medium">
                                            By submitting this application, you confirm that all information provided is accurate and all uploaded documents are authentic. This submission will trigger a tiered admin review process.
                                        </p>
                                    </div>
                                </div>
                            )}

                            <div className="flex justify-between items-center pt-8 border-t border-slate-50">
                                <Button
                                    variant="ghost"
                                    onClick={prevStep}
                                    disabled={step === 1 || submitted}
                                    className="gap-2 font-bold text-slate-400"
                                >
                                    <ChevronLeft className="h-4 w-4" /> Previous
                                </Button>
                                {submitted ? (
                                    <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-xs">
                                        <CheckCircle2 className="h-5 w-5" /> Submitted Successfully
                                    </div>
                                ) : (
                                    <Button
                                        onClick={step === 5 ? handleSubmit : nextStep}
                                        className="bg-[#1D2660] hover:bg-[#151B45] text-white px-8 py-6 rounded-2xl font-black uppercase tracking-widest text-xs gap-2 shadow-xl shadow-blue-900/10"
                                    >
                                        {step === 5 ? "Submit Application" : "Continue to Next Step"} <ChevronRight className="h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <p className="text-center text-[10px] text-slate-400 mt-8 font-bold uppercase tracking-tighter">
                    Secure Registration Process • Protected by UIDAI Data Policies • 2026
                </p>
            </main>

            {/* Success Overlay */}
            {submitted && (
                <div className="fixed inset-0 bg-blue-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-6 text-center animate-in fade-in duration-500">
                    <Card className="max-w-md w-full p-12 space-y-8 rounded-[40px] shadow-3xl border-none">
                        <div className="h-24 w-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Send className="h-12 w-12" />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Application Submitted!</h2>
                            <p className="text-slate-500 font-medium">Your application for OVSE registration has been successfully logged. An acknowledgment email has been sent to **{formData.email}**.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex flex-col items-center gap-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Reference Number</span>
                            <span className="text-xl font-mono font-black text-[#1D2660]">OVSE-2026-X8B2</span>
                        </div>
                        <Link href="/" className="block">
                            <Button className="w-full py-7 rounded-2xl bg-[#1D2660] font-black uppercase tracking-widest text-xs">Back to Portal</Button>
                        </Link>
                    </Card>
                </div>
            )}
        </div>
    );
}

function ReviewItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</span>
            <p className="font-bold text-slate-800">{value || "Not Provided"}</p>
        </div>
    )
}
