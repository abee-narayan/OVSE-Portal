"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
    ShieldCheck,
    CreditCard,
    Hash,
    FileCode
} from "lucide-react";
import { validatePAN, validateGSTIN, validateCIN } from "../../../alogorithm to check/validators";

// Registration Schema
const registrationSchema = z.object({
    email: z.string().email("Invalid official email address"),
    mobile: z.string().regex(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
    orgName: z.string().min(3, "Legal entity name is required"),
    orgAddress: z.string().min(10, "Full headquarters address is required"),
    regNumber: z.string().min(5, "Valid registration number (CIN/LLPIN) required"),
    panNumber: z.string().refine(val => validatePAN(val), "Invalid PAN Number format (e.g. ABCDE1234F)"),
    gstinNumber: z.string().refine(val => validateGSTIN(val), "Invalid GSTIN format (e.g. 29ABCDE1234F1Z5)"),
    cinNumber: z.string().refine(val => validateCIN(val), "Invalid CIN format (e.g. L12345KA2020PLC123456)"),
    signatoryName: z.string().min(3, "Authorized signatory name is required"),
    mpocName: z.string().min(3, "Management POC name is required"),
    tpocName: z.string().min(3, "Technical POC name is required")
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

const STEPS = [
    { id: 1, title: "Identity", icon: Users, fields: ["email", "mobile"] },
    { id: 2, title: "Organization", icon: Building2, fields: ["orgName", "regNumber", "orgAddress", "panNumber", "gstinNumber", "cinNumber"] },
    { id: 3, title: "Contacts", icon: ShieldCheck, fields: ["signatoryName", "mpocName", "tpocName"] },
    { id: 4, title: "Documents", icon: FileUp, fields: [] },
    { id: 5, title: "Review", icon: CheckCircle2, fields: [] }
];

export default function RegisterPage() {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors },
        getValues
    } = useForm<RegistrationFormData>({
        resolver: zodResolver(registrationSchema),
        mode: "onChange",
        defaultValues: {
            email: "",
            mobile: "",
            orgName: "",
            orgAddress: "",
            regNumber: "",
            panNumber: "",
            gstinNumber: "",
            cinNumber: "",
            signatoryName: "",
            mpocName: "",
            tpocName: ""
        }
    });

    const nextStep = async () => {
        const fields = STEPS[step - 1].fields as (keyof RegistrationFormData)[];
        const isValid = await trigger(fields);
        if (isValid) setStep(s => Math.min(s + 1, STEPS.length));
    };

    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    const onFinalSubmit = (data: RegistrationFormData) => {
        console.log("Submitting registration data:", data);
        setSubmitted(true);
    };

    const formData = getValues();

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
                    <div className="h-6 w-[1px] bg-slate-100" />
                    <div>
                        <h1 className="text-sm font-bold text-slate-800">OVSE Portal 2.0</h1>
                        <p className="text-[10px] text-slate-500 font-medium">Unique Identification Authority of India</p>
                    </div>
                </div>
                <Link href="/" className="text-xs font-bold text-[#1D2660] hover:underline">Back to Home</Link>
            </header>

            <main className="max-w-4xl mx-auto py-12 px-6 font-sans">
                {/* Progress Stepper */}
                <div className="flex justify-between items-center mb-16 relative">
                    <div className="absolute top-5 left-0 w-full h-[2px] bg-slate-100 z-0" />
                    {STEPS.map((s) => (
                        <div key={s.id} className="relative z-10 flex flex-col items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 scale-110 ${step >= s.id ? 'bg-[#1D2660] border-[#1D2660] text-white shadow-xl shadow-blue-900/20' : 'bg-white border-slate-200 text-slate-400'
                                }`}>
                                <s.icon className="h-5 w-5" />
                            </div>
                            <span className={`text-[9px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${step >= s.id ? 'text-[#1D2660]' : 'text-slate-400'}`}>{s.title}</span>
                        </div>
                    ))}
                </div>

                <Card className="border-none shadow-3xl shadow-blue-900/5 overflow-hidden rounded-[40px]">
                    <CardContent className="p-0">
                        <div className="bg-[#1D2660] p-10 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <h2 className="text-3xl font-black mb-1 tracking-tight">{STEPS[step - 1].title} Details</h2>
                            <p className="text-blue-100/70 text-sm font-medium">Step {step} of 5 • Please ensure all official details match your legal documents.</p>
                        </div>

                        <form onSubmit={handleSubmit(onFinalSubmit)} className="p-12 space-y-10 bg-white">
                            {step === 1 && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center px-1">
                                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Official Email Discovery</Label>
                                            {errors.email && <span className="text-[9px] font-black text-red-500 uppercase tracking-tighter">{errors.email.message}</span>}
                                        </div>
                                        <div className="relative group">
                                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-[#1D2660] transition-colors" />
                                            <Input
                                                {...register("email")}
                                                placeholder="e.g. contact@organization.gov.in"
                                                className={`pl-14 py-8 text-lg rounded-2xl border-slate-100 bg-slate-50/50 focus:bg-white transition-all shadow-sm ${errors.email ? 'border-red-200 bg-red-50/20' : ''}`}
                                            />
                                            <Button variant="ghost" type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-black text-[#1D2660] uppercase tracking-widest hover:bg-blue-50">Verify</Button>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center px-1">
                                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mobile Authentication</Label>
                                            {errors.mobile && <span className="text-[9px] font-black text-red-500 uppercase tracking-tighter">{errors.mobile.message}</span>}
                                        </div>
                                        <div className="relative group">
                                            <Smartphone className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-[#1D2660] transition-colors" />
                                            <Input
                                                {...register("mobile")}
                                                placeholder="10-digit primary contact number"
                                                className={`pl-14 py-8 text-lg rounded-2xl border-slate-100 bg-slate-50/50 focus:bg-white transition-all shadow-sm ${errors.mobile ? 'border-red-200 bg-red-50/20' : ''}`}
                                            />
                                            <Button variant="ghost" type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-black text-[#1D2660] uppercase tracking-widest hover:bg-blue-50">Get OTP</Button>
                                        </div>
                                    </div>
                                    <div className="p-8 bg-blue-50/30 rounded-3xl border border-blue-100/50 flex items-start gap-5">
                                        <ShieldCheck className="h-7 w-7 text-[#1D2660] shrink-0" />
                                        <div className="space-y-1">
                                            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#1D2660]">Secure Handshake</h4>
                                            <p className="text-xs text-blue-900/70 font-medium leading-relaxed italic">
                                                By verifying your credentials, you establish a secure communication channel for all future OVSE compliance and audit notifications.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center px-1">
                                                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Legal Entity Name</Label>
                                                {errors.orgName && <span className="text-[9px] font-black text-red-500 uppercase">{errors.orgName.message}</span>}
                                            </div>
                                            <Input
                                                {...register("orgName")}
                                                placeholder="Registered Corporation Name"
                                                className={`py-7 rounded-2xl bg-slate-50/50 focus:bg-white transition-all ${errors.orgName ? 'border-red-200' : ''}`}
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center px-1">
                                                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Registration Number</Label>
                                                {errors.regNumber && <span className="text-[9px] font-black text-red-500 uppercase">{errors.regNumber.message}</span>}
                                            </div>
                                            <Input
                                                {...register("regNumber")}
                                                placeholder="CIN / LLPIN / Registration ID"
                                                className={`py-7 rounded-2xl bg-slate-50/50 focus:bg-white transition-all ${errors.regNumber ? 'border-red-200' : ''}`}
                                            />
                                        </div>
                                        <div className="col-span-2 space-y-4">
                                            <div className="flex justify-between items-center px-1">
                                                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Headquarters Address</Label>
                                                {errors.orgAddress && <span className="text-[9px] font-black text-red-500 uppercase">{errors.orgAddress.message}</span>}
                                            </div>
                                            <Input
                                                {...register("orgAddress")}
                                                placeholder="Complete registered office address as per official records"
                                                className={`py-7 rounded-2xl bg-slate-50/50 focus:bg-white transition-all ${errors.orgAddress ? 'border-red-200' : ''}`}
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center px-1">
                                                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">PAN Number</Label>
                                                {errors.panNumber && <span className="text-[9px] font-black text-red-500 uppercase">{errors.panNumber.message}</span>}
                                            </div>
                                            <div className="relative group">
                                                <CreditCard className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-[#1D2660] transition-colors" />
                                                <Input
                                                    {...register("panNumber")}
                                                    placeholder="ABCDE1234F"
                                                    className={`pl-14 py-7 rounded-2xl bg-slate-50/50 focus:bg-white transition-all ${errors.panNumber ? 'border-red-200' : ''}`}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center px-1">
                                                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">GSTIN Number</Label>
                                                {errors.gstinNumber && <span className="text-[9px] font-black text-red-500 uppercase">{errors.gstinNumber.message}</span>}
                                            </div>
                                            <div className="relative group">
                                                <Hash className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-[#1D2660] transition-colors" />
                                                <Input
                                                    {...register("gstinNumber")}
                                                    placeholder="29ABCDE1234F1Z5"
                                                    className={`pl-14 py-7 rounded-2xl bg-slate-50/50 focus:bg-white transition-all ${errors.gstinNumber ? 'border-red-200' : ''}`}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-2 space-y-4">
                                            <div className="flex justify-between items-center px-1">
                                                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">CIN Number</Label>
                                                {errors.cinNumber && <span className="text-[9px] font-black text-red-500 uppercase">{errors.cinNumber.message}</span>}
                                            </div>
                                            <div className="relative group">
                                                <FileCode className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-[#1D2660] transition-colors" />
                                                <Input
                                                    {...register("cinNumber")}
                                                    placeholder="L12345KA2020PLC123456"
                                                    className={`pl-14 py-7 rounded-2xl bg-slate-50/50 focus:bg-white transition-all ${errors.cinNumber ? 'border-red-200' : ''}`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="space-y-8">
                                        <div className="p-10 border-2 border-dashed border-slate-100 rounded-[40px] space-y-6 group hover:border-[#1D2660]/20 transition-all duration-700">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-4">
                                                    <div className="h-10 w-10 rounded-2xl bg-[#1D2660] text-white flex items-center justify-center text-[10px] font-black shadow-lg shadow-blue-900/20">01</div>
                                                    <h3 className="font-black text-slate-800 uppercase tracking-widest">Authorized Signatory</h3>
                                                </div>
                                                {errors.signatoryName && <span className="text-[9px] font-black text-red-500 uppercase">{errors.signatoryName.message}</span>}
                                            </div>
                                            <Input
                                                {...register("signatoryName")}
                                                placeholder="Full legal name of the person authorized to sign"
                                                className={`py-7 rounded-2xl bg-slate-50/50 transition-all ${errors.signatoryName ? 'border-red-200' : ''}`}
                                            />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-10 bg-slate-50/50 rounded-[40px] space-y-5 border border-slate-100/50">
                                                <div className="flex justify-between items-center px-1">
                                                    <Label className="text-[10px] font-black uppercase tracking-widest text-[#1D2660]">Management POC</Label>
                                                    {errors.mpocName && <span className="text-[9px] font-black text-red-500 uppercase">{errors.mpocName.message}</span>}
                                                </div>
                                                <Input
                                                    {...register("mpocName")}
                                                    placeholder="MPOC Full Name"
                                                    className={`py-6 bg-white rounded-2xl transition-all shadow-sm ${errors.mpocName ? 'border-red-200' : ''}`}
                                                />
                                            </div>
                                            <div className="p-10 bg-slate-50/50 rounded-[40px] space-y-5 border border-slate-100/50">
                                                <div className="flex justify-between items-center px-1">
                                                    <Label className="text-[10px] font-black uppercase tracking-widest text-[#1D2660]">Technical POC</Label>
                                                    {errors.tpocName && <span className="text-[9px] font-black text-red-500 uppercase">{errors.tpocName.message}</span>}
                                                </div>
                                                <Input
                                                    {...register("tpocName")}
                                                    placeholder="TPOC Full Name"
                                                    className={`py-6 bg-white rounded-2xl transition-all shadow-sm ${errors.tpocName ? 'border-red-200' : ''}`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 4 && (
                                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
                                    <div className="grid grid-cols-2 gap-8">
                                        {[
                                            "Certificate of Incorporation",
                                            "PAN / GST Registration",
                                            "Board Resolution Copy",
                                            "Authorised Signatory ID"
                                        ].map((doc) => (
                                            <div key={doc} className="group p-10 border-2 border-dashed border-slate-100 rounded-[40px] hover:border-[#1D2660]/30 hover:bg-blue-50/30 transition-all cursor-pointer flex flex-col items-center gap-5">
                                                <div className="h-16 w-16 rounded-[24px] bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-white group-hover:text-[#1D2660] transition-all shadow-sm group-hover:shadow-xl group-hover:shadow-blue-900/10">
                                                    <FileUp className="h-8 w-8" />
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="font-black text-sm text-slate-700 group-hover:text-slate-900 transition-colors uppercase tracking-tight">{doc}</p>
                                                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest group-hover:text-slate-400">PDF • MAX 5MB</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {step === 5 && (
                                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 text-slate-800">
                                    <div className="bg-slate-50/80 p-12 rounded-[50px] border border-slate-100 shadow-sm relative overflow-hidden group">
                                        <Building2 className="absolute -right-8 -bottom-8 h-64 w-64 text-slate-200/40 rotate-12 pointer-events-none group-hover:rotate-6 transition-transform duration-1000" />

                                        <div className="relative z-10 grid md:grid-cols-2 gap-y-12 gap-x-16">
                                            <div className="space-y-8">
                                                <div className="flex items-center gap-3">
                                                    <Building2 className="h-5 w-5 text-[#1D2660]" />
                                                    <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#1D2660]">Corporate Identity</h4>
                                                </div>
                                                <div className="space-y-6">
                                                    <ReviewItem label="Legal Entity" value={formData.orgName} />
                                                    <ReviewItem label="Reg ID" value={formData.regNumber} />
                                                    <ReviewItem label="PAN" value={formData.panNumber} />
                                                    <ReviewItem label="GSTIN" value={formData.gstinNumber} />
                                                    <ReviewItem label="CIN" value={formData.cinNumber} />
                                                    <ReviewItem label="HQ Address" value={formData.orgAddress} />
                                                </div>
                                            </div>

                                            <div className="space-y-8">
                                                <div className="flex items-center gap-3">
                                                    <Users className="h-5 w-5 text-[#1D2660]" />
                                                    <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#1D2660]">Point of Contacts</h4>
                                                </div>
                                                <div className="space-y-6">
                                                    <ReviewItem label="Signatory" value={formData.signatoryName} />
                                                    <ReviewItem label="Management" value={formData.mpocName} />
                                                    <ReviewItem label="Technical" value={formData.tpocName} />
                                                </div>
                                            </div>

                                            <div className="col-span-full pt-10 border-t border-slate-200/50">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <Mail className="h-5 w-5 text-[#1D2660]" />
                                                    <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#1D2660]">Validated Channels</h4>
                                                </div>
                                                <div className="grid grid-cols-2 gap-10">
                                                    <ReviewItem label="Official Email" value={formData.email} />
                                                    <ReviewItem label="Primary Mobile" value={formData.mobile} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-10 bg-[#FFF9F2] rounded-[40px] border border-orange-100/50 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                                        <div className="h-16 w-16 bg-[#FEF0E0] rounded-full flex items-center justify-center text-orange-600 shrink-0 shadow-inner">
                                            <ShieldCheck className="h-8 w-8" />
                                        </div>
                                        <div className="space-y-2 text-center md:text-left">
                                            <h5 className="font-black text-[11px] uppercase tracking-widest text-orange-900">Compliance Affirmation</h5>
                                            <p className="text-[11px] text-orange-900/60 leading-relaxed font-bold uppercase tracking-tight">
                                                I hereby certify that all information provided is accurate and I am authorized to register this organization with UIDAI OVSE ecosystem.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="flex justify-between items-center pt-10 border-t border-slate-100">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={prevStep}
                                    disabled={step === 1 || submitted}
                                    className="gap-3 font-black uppercase tracking-widest text-[10px] text-slate-400 hover:text-[#1D2660] h-14 rounded-2xl px-8 hover:bg-slate-50 transition-all"
                                >
                                    <ChevronLeft className="h-4 w-4" /> Go Back
                                </Button>
                                {submitted ? (
                                    <div className="flex items-center gap-3 text-emerald-600 font-extrabold uppercase tracking-[0.2em] text-[10px] bg-emerald-50 px-8 py-4 rounded-2xl border border-emerald-100">
                                        <CheckCircle2 className="h-5 w-5" /> Submission Finalized
                                    </div>
                                ) : (
                                    <Button
                                        type={step === 5 ? "submit" : "button"}
                                        onClick={step === 5 ? undefined : nextStep}
                                        className="bg-[#1D2660] hover:bg-[#151B45] text-white px-12 py-8 rounded-[24px] font-black uppercase tracking-[0.2em] text-[10px] gap-4 shadow-3xl shadow-blue-900/30 active:scale-95 transition-all transform hover:-translate-y-1"
                                    >
                                        {step === 5 ? "Confirm and Submit" : "Advance Section"} <ChevronRight className="h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                        </form>
                    </CardContent>
                </Card>
                <div className="text-center space-y-2 mt-12 opacity-40">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em]">Integrated Compliance Gateway</p>
                    <div className="flex justify-center gap-4 text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                        <span>Tier 4 Security</span>
                        <span>•</span>
                        <span>End-to-End Encrypted</span>
                        <span>•</span>
                        <span>ISO 27001 Certified</span>
                    </div>
                </div>
            </main>

            {/* Success Overlay */}
            {submitted && (
                <div className="fixed inset-0 bg-[#0F172A]/60 backdrop-blur-md z-[100] flex items-center justify-center p-8 text-center animate-in zoom-in duration-500">
                    <Card className="max-w-md w-full p-16 space-y-10 rounded-[60px] shadow-3xl border-none relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />
                        <div className="h-28 w-28 bg-emerald-50 text-emerald-600 rounded-[35px] flex items-center justify-center mx-auto shadow-inner rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Send className="h-14 w-14" />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Application Logged</h2>
                            <p className="text-slate-500 font-medium leading-relaxed">Your registration dossier has been queued for verification. A status tracker has been sent to your email.</p>
                        </div>
                        <div className="bg-slate-50/80 p-8 rounded-[35px] border border-slate-100 flex flex-col items-center gap-3">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Unique Dossier ID</span>
                            <span className="text-2xl font-mono font-black text-[#1D2660] tracking-widest">REG-2026-HQ91</span>
                        </div>
                        <Link href="/" className="block">
                            <Button className="w-full py-8 rounded-[25px] bg-[#1D2660] hover:bg-[#151B45] font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-blue-900/20 active:scale-95 transition-all">Exit Registration</Button>
                        </Link>
                    </Card>
                </div>
            )}
        </div>
    );
}

function ReviewItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="space-y-2">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{label}</span>
            <p className="font-extrabold text-slate-800 text-sm tracking-tight leading-tight">{value || "Section Incomplete"}</p>
        </div>
    )
}
