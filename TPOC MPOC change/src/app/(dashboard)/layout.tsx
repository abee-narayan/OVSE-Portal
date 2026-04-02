"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, FileText, Home, Layers, Settings, User, Shield, CreditCard, ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Sidebar({ className }: SidebarProps) {
    const pathname = usePathname()

    const mainRoutes = [
        { href: "/dashboard", label: "Dashboard", icon: Home, active: pathname === "/dashboard" },
        { href: "/agreements", label: "Agreement List", icon: FileText, active: pathname === "/agreements" },
        { href: "/qr-code", label: "Create QR Code", icon: Layers, active: pathname === "/qr-code" },
        { href: "/consents", label: "Consents", icon: Shield, active: pathname === "/consents" },
        { href: "/withdrawals", label: "Withdrawal Requests", icon: Layers, active: pathname === "/withdrawals" },
        { href: "/destinations", label: "Data Destinations", icon: Layers, active: pathname === "/destinations" },
        { href: "/logs", label: "Delivery & Audit Logs", icon: FileText, active: pathname === "/logs" },
        { href: "/activity", label: "Activity", icon: BarChart, active: pathname === "/activity" },
        { href: "/billing", label: "Billing & Payment", icon: CreditCard, active: pathname === "/billing" },
    ]

    return (
        <div className={cn("flex flex-col h-full border-r bg-white dark:bg-slate-900", className)}>
            <div className="p-6">
                <div className="flex items-center gap-2 mb-8">
                    <div className="h-8 w-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold italic">O</div>
                    <span className="font-bold text-xl tracking-tight uppercase">OVSE Portal</span>
                </div>

                <nav className="space-y-1">
                    {mainRoutes.map((route) => (
                        <Button
                            key={route.href}
                            variant="ghost"
                            className={cn(
                                "w-full justify-start text-slate-500 hover:text-orange-600 hover:bg-orange-50",
                                route.active && "text-orange-600 bg-orange-50 font-medium"
                            )}
                            asChild
                        >
                            <Link href={route.href}>
                                <route.icon className="mr-3 h-4 w-4" />
                                {route.label}
                            </Link>
                        </Button>
                    ))}
                </nav>
            </div>

            <div className="mt-auto p-4 space-y-4 bg-slate-50/50 dark:bg-slate-800/50 border-t">
                <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start text-slate-500 text-xs py-2 h-auto" asChild>
                        <Link href="/dev-console">
                            <span className="mr-2">&lt;/&gt;</span> Dev Console
                        </Link>
                    </Button>
                    <Button variant="default" className="w-full justify-start bg-orange-500 hover:bg-orange-600 shadow-sm" asChild>
                        <Link href="/settings">
                            <Settings className="mr-2 h-4 w-4" /> Organization Settings
                        </Link>
                    </Button>
                </div>

                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                        <Layers className="h-3 w-3 text-orange-600" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700">Credits</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">10</div>
                </div>

                <div className="flex items-center gap-3 px-2">
                    <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>JB</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col overflow-hidden">
                        <span className="text-sm font-bold text-slate-900 dark:text-white truncate">Jean Baptiste</span>
                        <span className="text-[10px] text-slate-500 truncate">Ooru Digital</span>
                    </div>
                </div>

                <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-red-600 hover:bg-red-50 text-xs py-2 h-auto" asChild>
                    <Link href="/logout">
                        <ArrowUpRight className="mr-2 h-3 w-3 rotate-180" /> Logout
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <div className="flex min-h-screen bg-slate-50/50 dark:bg-slate-950">
            <aside className="hidden lg:block w-[280px] sticky top-0 h-screen overflow-y-auto">
                <Sidebar />
            </aside>
            <main className="flex-1 flex flex-col overflow-hidden">
                <header className="lg:hidden h-16 border-b bg-white flex items-center px-4">
                    {isMounted && (
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Layers className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="p-0">
                                <Sidebar />
                            </SheetContent>
                        </Sheet>
                    )}
                </header>
                <div className="flex-1 overflow-y-auto p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
