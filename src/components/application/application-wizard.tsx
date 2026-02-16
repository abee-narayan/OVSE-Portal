"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Check, ChevronRight, Loader2, Upload, Info, User, Globe, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

// --- Steps Definition ---
const STEPS = [
    { id: "01", title: "Basic Information", description: "Start by providing the fundamental details of your organization." },
    { id: "02", title: "Statutory Information", description: "Upload PAN, GST, and Registration Proofs." },
    { id: "03", title: "Use-Case Information", description: "Details about your business domain and expected benefits." },
    { id: "04", title: "Technical Infrastructure", description: "Domain, Callback URLs, and Public Certificate." },
    { id: "05", title: "Authorized Personnel", description: "Management and Technical points of contact details." },
    { id: "06", title: "Declaration", description: "Self-declaration and compliance undertaking." },
    { id: "07", title: "Terms & Conditions", description: "Review and accept the master service agreement." },
]

// --- Schemas ---
const formSchema = z.object({
    entityName: z.string().min(2, "Entity Name is required"),
    entityCategory: z.string().min(1, "Category is required"),
    regAddress: z.string().min(5, "Registered Address is required"),
    correspAddress: z.string(),
    website: z.string(),
    pocName: z.string().min(2, "POC Name is required"),
    pocDesignation: z.string().min(2, "Designation is required"),
    pocMobile: z.string(),
    pocEmail: z.string().email("Invalid Email"),
    agreed: z.boolean(),
})

export function ApplicationWizard() {
    const [step, setStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            entityName: "Ooru Digital",
            entityCategory: "private",
            regAddress: "",
            correspAddress: "",
            website: "https://example.com",
            pocName: "",
            pocDesignation: "",
            pocMobile: "",
            pocEmail: "",
            agreed: false
        }
    })

    const nextStep = () => {
        if (step < STEPS.length) {
            setStep(step + 1)
            window.scrollTo(0, 0)
        }
    }

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1)
            window.scrollTo(0, 0)
        }
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        setIsSuccess(true)
    }

    if (isSuccess) {
        return (
            <Card className="max-w-3xl mx-auto mt-10 text-center py-10">
                <CardContent className="space-y-4 flex flex-col items-center">
                    <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <Check className="h-10 w-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-green-700">Application Submitted!</h2>
                    <p className="text-muted-foreground max-w-md">
                        Your application ID is <span className="font-mono font-bold text-black">OVSE-2026-X892</span>.
                    </p>
                    <Button onClick={() => window.location.href = '/dashboard'}>Go to Dashboard</Button>
                </CardContent>
            </Card>
        )
    }

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            {/* About Banner */}
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 flex gap-4">
                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <Info className="h-5 w-5" />
                </div>
                <div>
                    <h3 className="font-bold text-orange-900 mb-1">About OVSE Registration</h3>
                    <p className="text-sm text-orange-800 leading-relaxed">
                        The Offline Verification Seeking Entity (OVSE) registration allows organizations to perform offline Aadhaar verification using QR code or XML. Complete all 7 steps below and accept the Terms & Conditions to submit your application. Your application will be reviewed within 7-10 business days.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
                {/* Vertical Stepper */}
                <Card className="bg-white border-slate-200">
                    <CardContent className="p-6">
                        <div className="relative space-y-8">
                            {/* Connector Line */}
                            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 border-l-2 border-dashed border-slate-200" />

                            {STEPS.map((s, idx) => {
                                const stepNum = idx + 1
                                const isActive = step === stepNum
                                const isCompleted = step > stepNum

                                return (
                                    <div key={s.id} className="relative flex items-center gap-4 group">
                                        <div className={cn(
                                            "z-10 h-10 w-10 rounded-full flex items-center justify-center border-2 bg-white transition-all duration-300",
                                            isActive ? "border-slate-900 bg-slate-900 text-white shadow-lg scale-110" :
                                                isCompleted ? "border-emerald-500 bg-emerald-500 text-white" :
                                                    "border-slate-200 text-slate-400"
                                        )}>
                                            {isCompleted ? <Check className="h-5 w-5" /> : <span className="text-xs font-bold">{s.id}</span>}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className={cn(
                                                "text-[10px] uppercase font-bold tracking-wider",
                                                isActive ? "text-slate-900" : "text-slate-400"
                                            )}>Step {s.id}</span>
                                            <span className={cn(
                                                "text-sm font-bold",
                                                isActive ? "text-slate-900" : "text-slate-500 group-hover:text-slate-700"
                                            )}>{s.title}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>

                {/* Form Content */}
                <div className="space-y-6">
                    <Card className="border-slate-200 shadow-sm overflow-hidden">
                        <CardHeader className="bg-slate-50/50 border-b pb-4">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                                    <Globe className="h-4 w-4" />
                                </div>
                                <CardTitle className="text-xl font-bold">Step {step}: {STEPS[step - 1].title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8">
                            <Form {...form}>
                                <form className="space-y-8">
                                    {step === 1 && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <FormField control={form.control} name="entityName" render={({ field }) => (
                                                <FormItem className="col-span-2">
                                                    <FormLabel className="text-slate-700 font-bold">Entity Name *</FormLabel>
                                                    <FormControl><Input {...field} className="h-12 border-slate-200 bg-slate-50/30" /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <FormField control={form.control} name="entityCategory" render={({ field }) => (
                                                <FormItem className="col-span-2">
                                                    <FormLabel className="text-slate-700 font-bold">Entity Category *</FormLabel>
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                                                        {[
                                                            { id: "central_govt", label: "Central Govt. Organization" },
                                                            { id: "state_govt", label: "State Govt. Organization" },
                                                            { id: "psu", label: "PSU" },
                                                            { id: "private", label: "Private Organization" },
                                                            { id: "partnership", label: "Partnership Firm" },
                                                            { id: "proprietorship", label: "Proprietorship" },
                                                            { id: "ngo", label: "NGO" },
                                                            { id: "society", label: "Society/Trust/Cooperative" },
                                                        ].map((cat) => (
                                                            <div key={cat.id} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-slate-50 transition-colors cursor-pointer">
                                                                <Checkbox
                                                                    id={cat.id}
                                                                    checked={field.value === cat.id}
                                                                    onCheckedChange={() => field.onChange(cat.id)}
                                                                />
                                                                <label htmlFor={cat.id} className="text-[11px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                                                                    {cat.label}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <FormField control={form.control} name="regAddress" render={({ field }) => (
                                                <FormItem className="col-span-2">
                                                    <FormLabel className="text-slate-700 font-bold">Registered Address *</FormLabel>
                                                    <FormControl><Textarea {...field} placeholder="Enter registered address" className="min-h-[100px] border-orange-200 ring-orange-100 focus:ring-4 transition-all" /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <FormField control={form.control} name="correspAddress" render={({ field }) => (
                                                <FormItem className="col-span-2">
                                                    <FormLabel className="text-slate-700 font-bold">Address for Correspondence</FormLabel>
                                                    <FormControl><Textarea {...field} placeholder="Enter correspondence address (if different)" className="min-h-[80px] border-slate-200" /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <FormField control={form.control} name="website" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-slate-700 font-bold flex items-center gap-2">
                                                        <Globe className="h-3 w-3" /> Official Website
                                                    </FormLabel>
                                                    <FormControl><Input {...field} className="h-12" /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <FormField control={form.control} name="pocName" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-slate-700 font-bold flex items-center gap-2">
                                                        <User className="h-3 w-3" /> Point of Contact - Name *
                                                    </FormLabel>
                                                    <FormControl><Input {...field} placeholder="Contact person name" className="h-12" /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <FormField control={form.control} name="pocDesignation" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-slate-700 font-bold">Point of Contact - Designation *</FormLabel>
                                                    <FormControl><Input {...field} placeholder="Designation" className="h-12" /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <FormField control={form.control} name="pocMobile" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-slate-700 font-bold flex items-center gap-2">
                                                        <Phone className="h-3 w-3" /> Mobile Number *
                                                    </FormLabel>
                                                    <FormControl><Input {...field} placeholder="+91 XXXXXXXXXX" className="h-12" /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>
                                    )}

                                    {/* Placeholder for other steps */}
                                    {step > 1 && (
                                        <div className="py-20 text-center space-y-4">
                                            <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                                                <Loader2 className="h-8 w-8 animate-spin" />
                                            </div>
                                            <p className="text-slate-500 font-medium italic">Section {step} details coming soon...</p>
                                        </div>
                                    )}
                                </form>
                            </Form>
                        </CardContent>
                        <CardFooter className="bg-slate-50/30 border-t p-6 flex justify-between">
                            <Button variant="ghost" onClick={prevStep} disabled={step === 1 || isSubmitting} className="text-slate-500 font-bold uppercase tracking-wider text-xs">
                                Previous
                            </Button>
                            {step < STEPS.length ? (
                                <Button onClick={nextStep} className="bg-orange-500 hover:bg-orange-600 text-white min-w-[140px] h-12">
                                    Next Step <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            ) : (
                                <Button onClick={form.handleSubmit(onSubmit)} disabled={isSubmitting} className="bg-emerald-600 hover:bg-emerald-700 text-white min-w-[140px] h-12">
                                    {isSubmitting ? "Submitting..." : "Complete Application"}
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
