"use client"

import { LeadIntakeForm } from "@/components/lead-intake/lead-intake-form"
import { motion } from "framer-motion"

export default function LeadIntakePage() {
    return (
        <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950/50">
            {/* Hero Section */}
            <div className="relative bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,transparent,black)]" />
                <div className="container relative py-16 md:py-24 lg:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-3xl text-center space-y-6"
                    >
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                            Show, Share and Verify using <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Aadhaar App</span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400 sm:text-xl">
                            The Online Verification Service Ecosystem (OVSE) enables compliant, privacy-preserving, and instant user verification.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Form Section */}
            <div className="container py-12 -mt-10 relative z-10">
                <LeadIntakeForm />
            </div>

            <div className="text-center py-12 text-sm text-slate-400">
                <p>&copy; 2026 UIDAI OVSE Ecosystem. All rights reserved.</p>
            </div>
        </div>
    )
}
