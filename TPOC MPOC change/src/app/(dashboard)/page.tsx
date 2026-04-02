"use client"

import Link from "next/link"
import {
    Activity,
    CreditCard,
    Users,
    PlusCircle,
    ArrowUpRight,
    CheckCircle2,
    Zap,
    FileText,
    Shield,
    Settings,
    Bell,
    Search
} from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const data = [
    { name: "Jan", total: 1200 },
    { name: "Feb", total: 2100 },
    { name: "Mar", total: 1800 },
    { name: "Apr", total: 2400 },
    { name: "May", total: 3200 },
    { name: "Jun", total: 4500 },
    { name: "Jul", total: 6000 },
]

export default function DashboardPage() {
    return (
        <div className="flex-1 space-y-8 p-8 pt-6 bg-slate-50/50 dark:bg-slate-950/50 min-h-screen">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard</h2>
                    <p className="text-muted-foreground">Welcome back, Demo User.</p>
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search applications..." className="pl-8 bg-white dark:bg-slate-900" />
                    </div>
                    <Button size="icon" variant="outline" className="bg-white dark:bg-slate-900">
                        <Bell className="h-4 w-4" />
                    </Button>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>

            {/* Hero Section - Abstract Visuals */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-xl"
            >
                <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-24 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none" />

                <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-2 max-w-xl">
                        <Badge className="bg-white/20 hover:bg-white/30 text-white border-0 mb-2">Beta Access</Badge>
                        <h3 className="text-3xl font-bold">Fast-track your Integration</h3>
                        <p className="text-indigo-100 text-lg">
                            Complete your onboarding checklist to unlock full production access and start verifying users instantly.
                        </p>
                    </div>
                    <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 border-0 shadow-lg">
                        <Link href="/onboarding">
                            Resume Onboarding <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </motion.div>

            {/* Metrics Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Applications</CardTitle>
                        <FileText className="h-4 w-4 text-indigo-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            <span className="text-green-500 font-medium">+1</span> this week
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Integration Status</CardTitle>
                        <Shield className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-orange-600">Pending</div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
                            <div className="bg-orange-500 h-1.5 rounded-full w-[40%]" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">API Usage</CardTitle>
                        <Zap className="h-4 w-4 text-yellow-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">0</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            calls this month
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Success Rate</CardTitle>
                        <Activity className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">--%</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            No data available
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Main Chart Section */}
                <Card className="col-span-4 border-slate-100 dark:border-slate-800 shadow-sm">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle>Verification Volume</CardTitle>
                                <CardDescription>projected growth based on similar entities</CardDescription>
                            </div>
                            <Select defaultValue="6m">
                                <SelectTrigger className="w-[120px]">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="6m">Last 6 Months</SelectItem>
                                    <SelectItem value="1y">Last Year</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                        itemStyle={{ color: '#1e293b' }}
                                    />
                                    <Area type="monotone" dataKey="total" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Right Column: Quick Actions & Checklist */}
                <div className="col-span-3 space-y-4">
                    {/* Quick Actions */}
                    <Card className="border-slate-100 dark:border-slate-800 shadow-sm bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/50">
                        <CardHeader>
                            <CardTitle className="text-lg">Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2 hover:border-indigo-500 hover:text-indigo-600 transition-colors" asChild>
                                <Link href="/application/new">
                                    <PlusCircle className="h-6 w-6" />
                                    <span>New App</span>
                                </Link>
                            </Button>
                            <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2 hover:border-indigo-500 hover:text-indigo-600 transition-colors" asChild>
                                <Link href="/settings">
                                    <Settings className="h-6 w-6" />
                                    <span>Settings</span>
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Onboarding Checklist */}
                    <Card className="border-slate-100 dark:border-slate-800 shadow-sm">
                        <CardHeader>
                            <CardTitle>Onboarding Checklist</CardTitle>
                            <CardDescription>2 of 4 steps completed</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100 dark:before:bg-slate-800">
                                <div className="flex items-start relative z-10">
                                    <div className="mr-3 bg-white dark:bg-slate-900">
                                        <CheckCircle2 className="h-10 w-10 text-green-500 bg-white dark:bg-slate-900" />
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-sm font-semibold leading-none">Expression of Interest</p>
                                        <p className="text-xs text-muted-foreground mt-1">Submitted on Feb 16, 2026</p>
                                    </div>
                                </div>
                                <div className="flex items-start relative z-10">
                                    <div className="mr-3 bg-white dark:bg-slate-900">
                                        <div className="h-10 w-10 rounded-full border-2 border-indigo-600 flex items-center justify-center bg-white dark:bg-slate-900">
                                            <span className="text-indigo-600 font-bold text-sm">2</span>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-sm font-semibold leading-none text-indigo-600">Submit Application</p>
                                        <p className="text-xs text-muted-foreground mt-1">In Progress - Draft Saved</p>
                                        <Button size="sm" variant="link" className="p-0 h-auto text-indigo-600 mt-1" asChild>
                                            <Link href="/application/new">Continue &rarr;</Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex items-start opacity-50 relative z-10">
                                    <div className="mr-3 bg-white dark:bg-slate-900">
                                        <div className="h-10 w-10 rounded-full border-2 border-slate-200 flex items-center justify-center bg-white dark:bg-slate-900">
                                            <span className="text-slate-400 font-bold text-sm">3</span>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-sm font-medium leading-none">Technical Integration</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
