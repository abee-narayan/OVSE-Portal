import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Languages,
  Monitor,
  Contrast,
  ChevronDown,
  Accessibility,
  Menu,
  Smartphone
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-orange-100">
      {/* 1. Utility Top Bar */}
      <div className="bg-[#FEF7ED] border-b border-orange-100 py-1 px-4 md:px-24">
        <div className="flex justify-end items-center gap-6">
          <button className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-slate-600 hover:text-orange-600 transition-colors">
            <Languages className="h-4 w-4" />
            English
            <ChevronDown className="h-3 w-3" />
          </button>
          <div className="flex items-center gap-3 border-l border-orange-200 pl-6">
            <button className="text-xs font-bold text-slate-400 hover:text-orange-600">A-</button>
            <button className="text-xs font-bold text-slate-900 bg-white px-1.5 rounded shadow-sm">A</button>
            <button className="text-xs font-bold text-slate-400 hover:text-orange-600">A+</button>
          </div>
          <button className="text-slate-600 hover:text-orange-600 border-l border-orange-200 pl-4">
            <Contrast className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-1 text-[10px] md:text-xs font-bold text-slate-600 hover:text-orange-600 border-l border-orange-200 pl-4">
            <Accessibility className="h-4 w-4" />
            More
          </button>
        </div>
      </div>

      {/* 2. Main Logo Header */}
      <header className="bg-white py-6 px-4 md:px-24 border-b border-slate-100">
        <div className="flex items-center gap-4">
          <div className="relative flex items-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png"
              alt="Aadhaar Logo"
              className="h-16 w-auto"
            />
            <div className="h-12 w-[1px] bg-slate-200 hidden md:block" />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-slate-800 leading-tight">भारतीय विशिष्ट पहचान प्राधिकरण</h1>
              <h2 className="text-lg font-medium text-slate-500 leading-tight">Unique Identification Authority of India</h2>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Navigation Bar */}
      <nav className="bg-[#F1F3F9]/60 backdrop-blur-sm border-b border-slate-200 py-2 px-4 md:px-24">
        <div className="flex items-center gap-1">
          <Link href="/login" className="bg-[#DDE2EE] hover:bg-[#D4D9E6] text-slate-700 font-bold text-sm px-6 py-2.5 rounded-md transition-all">
            Login
          </Link>
          <div className="flex items-center gap-8 ml-8">
            {["What is OVSE", "Expression of Interest", "OVSE Partners", "Compliance"].map((item) => (
              <Link key={item} href="#" className="text-sm font-bold text-slate-500 hover:text-blue-900 transition-colors uppercase tracking-tight">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* 4. Hero Section */}
      <main className="flex-1 relative overflow-hidden bg-gradient-to-br from-[#F5F8F2] via-[#FDFDF7] to-[#F5F8F2]">
        {/* Subtle Decorative Circle */}
        <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-slate-200/40 pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-green-50/50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-24 py-20 grid md:grid-cols-2 items-center gap-12 relative z-10">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-black text-[#1D2660] leading-[1.1] tracking-tight">
                OVSE (Offline Verification Seeking Entities) Registration
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-lg leading-relaxed">
                Register as an OVSE to carry out Aadhaar-based offline verification as per UIDAI regulations
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/register">
                <Button className="bg-[#1D2660] hover:bg-[#151B45] text-white px-10 py-8 text-xl font-bold rounded-2xl shadow-2xl shadow-blue-900/20 transition-all hover:-translate-y-1 active:scale-95">
                  OVSE Login
                </Button>
              </Link>
              <Link href="#">
                <Button variant="outline" className="border-2 border-[#1D2660] text-[#1D2660] hover:bg-blue-50 px-10 py-8 text-xl font-bold rounded-2xl transition-all hover:-translate-y-1 active:scale-95">
                  Expression of Interest
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000">
            {/* Monitor Mockup with Mascott */}
            <div className="relative bg-white rounded-xl shadow-2xl p-4 border-8 border-slate-900 overflow-hidden aspect-video group">
              <div className="absolute inset-0 bg-[#FFF7ED]/30 group-hover:bg-transparent transition-colors" />
              <div className="relative h-full flex flex-col items-center justify-center space-y-4">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">Verify using <span className="text-[#1D2660] italic">Aadhaar</span></h3>
                  <p className="text-xs font-medium text-slate-500">Quick verification, done in less than a minute.</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-xl border-2 border-slate-100">
                  {/* Mock QR */}
                  <div className="grid grid-cols-4 gap-1 w-24 h-24">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className={`h-full w-full rounded-sm ${Math.random() > 0.5 ? 'bg-slate-900' : 'bg-transparent'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Scan this QR using Aadhaar App in your phone</p>
              </div>
            </div>

            {/* Floating Phone with Mascot Image Placeholder */}
            <div className="absolute -bottom-16 -right-12 md:-bottom-24 md:-right-24 h-64 md:h-80 w-auto animate-bounce duration-[2000ms]">
              <div className="relative h-full">
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white shadow-xl">
                  <Smartphone className="h-8 w-8" />
                </div>
                {/* Mock Mascot - Visualized as a sun-like card if image not found */}
                <div className="h-full aspect-[2/3] bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-6 flex flex-col items-center justify-between shadow-2xl border-4 border-white overflow-hidden group">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-orange-500 relative">
                    <div className="absolute inset-0 border-4 border-dashed border-orange-200 rounded-full animate-spin-slow" />
                    <Monitor className="h-12 w-12" />
                  </div>
                  <div className="text-center text-white font-black text-xs leading-tight">
                    SECURE<br />OFFLINE<br />VERIFICATION
                  </div>
                  <div className="w-full h-2 bg-white/30 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-100 py-8 px-4 md:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">© 2026 UIDAI. All rights reserved.</p>
          <div className="flex items-center gap-8">
            {["Policy", "Legal", "Sitemap", "Contact"].map((item) => (
              <Link key={item} href="#" className="text-[10px] font-bold text-slate-500 hover:text-blue-900 uppercase tracking-tight">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
