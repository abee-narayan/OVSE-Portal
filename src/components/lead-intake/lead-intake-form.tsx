"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useEffect, useState } from "react"
import { Check, Loader2, Sparkles, ShieldCheck, Zap } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
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
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const formSchema = z.object({
    entityName: z.string().min(2, {
        message: "Entity name must be at least 2 characters.",
    }),
    entityType: z.string().min(1, {
        message: "Please select an entity type.",
    }),
    sector: z.string().min(1, {
        message: "Please select a sector.",
    }),
    useCase: z.string().min(10, {
        message: "Use case description must be at least 10 characters.",
    }),
    volume: z.string().regex(/^\d+$/, { message: "Volume must be a number" }),
    readinessFn: z.string().min(1, {
        message: "Please select your technical readiness level.",
    }),
    contactName: z.string().min(2, {
        message: "Contact name is required.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
})

export function LeadIntakeForm() {
    const [score, setScore] = useState(0)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            entityName: "",
            useCase: "",
            volume: "",
            contactName: "",
            email: "",
        },
    })

    const sector = form.watch("sector")
    const volume = form.watch("volume")
    const readiness = form.watch("readinessFn")

    useEffect(() => {
        let newScore = 0
        if (["fintech", "healthcare", "telecom"].includes(sector)) newScore += 40
        else if (["education", "hospitality"].includes(sector)) newScore += 30
        else if (sector) newScore += 20

        const volNum = parseInt(volume) || 0
        if (volNum > 1000000) newScore += 30
        else if (volNum > 100000) newScore += 20
        else if (volNum > 10000) newScore += 10

        if (readiness === "live_elsewhere") newScore += 30
        else if (readiness === "prototype") newScore += 20
        else if (readiness === "concept") newScore += 10

        setScore(Math.min(newScore, 100))
    }, [sector, volume, readiness])

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        setTimeout(() => {
            console.log(values)
            setIsSubmitting(false)
            setSubmitted(true)
        }, 2000)
    }

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-2xl mx-auto mt-10"
            >
                <Card className="border-green-100 shadow-xl bg-gradient-to-br from-white to-green-50/50 dark:from-slate-900 dark:to-green-900/10">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                                <Sparkles className="h-6 w-6 text-green-600 dark:text-green-400" />
                            </div>
                            <CardTitle className="text-2xl text-green-700 dark:text-green-400">Expression of Interest Submitted!</CardTitle>
                        </div>
                        <CardDescription>
                            Welcome to the future of identity verification.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <span className="font-semibold text-lg">Readiness Score</span>
                            <Badge variant={score > 60 ? "default" : "secondary"} className="text-xl px-6 py-1.5 h-auto rounded-full bg-primary hover:bg-primary/90">
                                {score}/100
                            </Badge>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-muted-foreground text-sm leading-relaxed">
                            {score > 60
                                ? "Excellent! Your profile indicates high readiness. Our dedicated onboarding team has been notified and will contact you within 24 hours to fast-track your integration."
                                : "Thank you for applying. We have received your details. Our team will review your application and guide you through the next steps to improve your readiness."}
                        </div>
                        <Button onClick={() => window.location.reload()} variant="outline" className="w-full">
                            Submit Another Application
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>
        )
    }

    return (
        <div className="grid gap-8 lg:grid-cols-12 items-start pt-6">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-7"
            >
                <Card className="shadow-2xl shadow-primary/5 border-0 ring-1 ring-slate-100 dark:ring-slate-800">
                    <CardHeader className="pb-4 border-b border-slate-50 dark:border-slate-800">
                        <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                            Submit Expression of Interest
                        </CardTitle>
                        <CardDescription className="text-base">
                            Join the Aadhaar OVSE Ecosystem. Power your business with instant, trusted verification.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <FormField
                                        control={form.control}
                                        name="entityName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Entity Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Acme Corp" className="h-10" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="entityType"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Entity Type</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="h-10">
                                                            <SelectValue placeholder="Select type" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="private">Private Organization</SelectItem>
                                                        <SelectItem value="psu">PSU / Government</SelectItem>
                                                        <SelectItem value="bank">Bank / NBFC</SelectItem>
                                                        <SelectItem value="startup">Startup</SelectItem>
                                                        <SelectItem value="ngo">NGO / Trust</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <FormField
                                        control={form.control}
                                        name="sector"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Sector</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="h-10">
                                                            <SelectValue placeholder="Select sector" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="fintech">BFSI / Fintech</SelectItem>
                                                        <SelectItem value="telecom">Telecom</SelectItem>
                                                        <SelectItem value="healthcare">Healthcare</SelectItem>
                                                        <SelectItem value="education">Education</SelectItem>
                                                        <SelectItem value="hospitality">Hospitality</SelectItem>
                                                        <SelectItem value="transport">Transport / Mobility</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="volume"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Monthly Verifications (Est.)</FormLabel>
                                                <FormControl>
                                                    <Input type="number" placeholder="50000" className="h-10" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="useCase"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Use Case Description</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Describe how you intend to use Aadhaar Offline Verification..."
                                                    className="resize-none min-h-[100px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="readinessFn"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Technical Readiness</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="h-10">
                                                        <SelectValue placeholder="Select status" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="concept">Concept Stage</SelectItem>
                                                    <SelectItem value="development">In Development</SelectItem>
                                                    <SelectItem value="prototype">Prototype Ready</SelectItem>
                                                    <SelectItem value="live_elsewhere">Live with other IDs</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid gap-6 md:grid-cols-2">
                                    <FormField
                                        control={form.control}
                                        name="contactName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Contact Person</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Full Name" className="h-10" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Work Email</FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder="name@company.com" className="h-10" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        "Submit Expression of Interest"
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-5 space-y-6"
            >
                <Card className="bg-slate-900 text-white border-0 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 p-32 bg-purple-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

                    <CardHeader className="relative">
                        <CardTitle className="flex items-center gap-2 text-white/90">
                            <Zap className="text-yellow-400 h-5 w-5" />
                            Readiness Score
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            Real-time eligibility assessment.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-5xl font-bold tracking-tight">{score}</span>
                            <span className="text-xl text-slate-500">/100</span>
                        </div>
                        <Progress value={score} className="h-3 mb-6 bg-slate-800" indicatorClassName={score > 80 ? "bg-green-500" : score > 50 ? "bg-yellow-500" : "bg-red-500"} />

                        <div className="space-y-4 text-sm">
                            <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                                <span className="text-slate-300">Sector Priority</span>
                                <Badge variant="outline" className={["fintech", "healthcare"].includes(sector) ? "text-green-400 border-green-400/30" : "text-slate-400 border-slate-700"}>
                                    {["fintech", "healthcare"].includes(sector) ? "High" : "Standard"}
                                </Badge>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                                <span className="text-slate-300">Volume Potential</span>
                                <Badge variant="outline" className={parseInt(volume) > 100000 ? "text-green-400 border-green-400/30" : "text-slate-400 border-slate-700"}>
                                    {parseInt(volume) > 100000 ? "High" : "Standard"}
                                </Badge>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                                <span className="text-slate-300">Tech Readiness</span>
                                <Badge variant="outline" className={readiness === "live_elsewhere" ? "text-green-400 border-green-400/30" : "text-slate-400 border-slate-700"}>
                                    {readiness === "live_elsewhere" ? "High" : "Standard"}
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-slate-100 dark:border-slate-800 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg">Why Join OVSE?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <div className="mt-1 p-1 bg-green-100 rounded-full">
                                    <ShieldCheck className="text-green-600 h-4 w-4" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm">Privacy-First Verification</p>
                                    <p className="text-xs text-muted-foreground">Verify users without storing data.</p>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="mt-1 p-1 bg-blue-100 rounded-full">
                                    <Zap className="text-blue-600 h-4 w-4" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm">Instant Onboarding</p>
                                    <p className="text-xs text-muted-foreground">Reduce drop-offs with 1-click KYC.</p>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="mt-1 p-1 bg-purple-100 rounded-full">
                                    <Sparkles className="text-purple-600 h-4 w-4" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm">National Scale</p>
                                    <p className="text-xs text-muted-foreground">Reach 1.3 Billion+ citizens.</p>
                                </div>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}
