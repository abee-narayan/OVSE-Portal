import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Languages,
  Monitor,
  Contrast,
  ChevronDown,
  Accessibility,
  Smartphone
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-orange-100 overflow-x-hidden">
      {/* 1. Utility Top Bar */}
      <div className="bg-[#FEF7ED] border-b border-orange-100 py-1.5 px-4 md:px-24">
        <div className="flex justify-end items-center gap-6">
          <button className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-slate-600 hover:text-orange-600 transition-colors">
            <Languages className="h-4 w-4" />
            English
            <ChevronDown className="h-3 w-3" />
          </button>
          <div className="flex items-center gap-3 border-l border-orange-200 pl-6">
            <button className="text-xs font-bold text-slate-400 hover:text-orange-600">A-</button>
            <button className="text-xs font-bold text-slate-900 bg-white px-1.5 rounded shadow-sm border border-slate-200">A</button>
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
      <header className="bg-white py-6 px-4 md:px-24 border-b border-slate-100 shadow-sm relative z-20">
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

      {/* 3. Navigation Bar - Matching Image Exactly */}
      <nav className="bg-white border-b border-slate-200 py-2.5 px-4 md:px-24 sticky top-0 z-50">
        <div className="flex items-center">
          <Link href="/login" className="bg-[#DDE2EE] hover:bg-[#D4D9E6] text-slate-700 font-bold text-sm px-10 py-2.5 rounded-md transition-all mr-12">
            Login
          </Link>
          <div className="flex items-center gap-10">
            <Link href="#" className="text-sm font-bold text-slate-500 hover:text-[#1D2660] transition-colors">
              What is OVSE
            </Link>
            <Link href="#" className="text-sm font-bold text-slate-500 hover:text-[#1D2660] transition-colors">
              OVSE Partners
            </Link>
            <div className="relative group">
              <Link href="/expression-of-interest" className="text-sm font-bold text-slate-500 group-hover:text-[#1D2660] transition-colors">
                Contact Us
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-slate-100 shadow-2xl rounded-xl hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-300 z-[60] p-1 overflow-hidden">
                <Link href="/expression-of-interest" className="block px-4 py-3 text-xs font-bold text-slate-600 hover:bg-blue-50 hover:text-[#1D2660] transition-colors rounded-lg">
                  Expression of Interest
                </Link>
              </div>
            </div>
            <Link href="#" className="text-sm font-bold text-slate-500 hover:text-[#1D2660] transition-colors">
              Compliance
            </Link>
          </div>
        </div>
      </nav>

      {/* 4. Hero Section - Using Provided Assets */}
      <main className="flex-1 relative overflow-hidden bg-white">
        {/* Official Branded Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="Branded Background"
            className="w-full h-full object-cover object-center opacity-80"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-24 py-24 grid md:grid-cols-2 items-center gap-16 relative z-10">
          <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black text-[#1D2660] leading-[1.1] tracking-tighter">
                OVSE (Offline Verification Seeking Entities) Registration
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-lg leading-relaxed">
                Register as an OVSE to carry out Aadhaar-based offline verification as per UIDAI regulations
              </p>
            </div>

            <div className="pt-2">
              <Link href="/register">
                <Button className="bg-[#2D3169] hover:bg-[#1D2660] text-white px-12 py-9 text-2xl font-black rounded-3xl shadow-[0_20px_50px_-10px_rgba(45,49,105,0.4)] transition-all hover:-translate-y-1 active:scale-95">
                  OVSE Login
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000">
            {/* High-Fidelity Hero Illustration */}
            <div className="relative z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/hero-mascot.png"
                alt="Aadhaar Verification Mascot and Monitor"
                className="w-full h-auto max-w-[650px] mx-auto"
              />
            </div>

            {/* Subtle glow behind illustration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/20 blur-[100px] rounded-full -z-10" />
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-100 py-10 px-4 md:px-24 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">© 2026 UIDAI. Every identity, unique verification.</p>
          <div className="flex items-center gap-10">
            {["Policy", "Legal", "Sitemap", "Internal Docs"].map((item) => (
              <Link key={item} href="#" className="text-xs font-bold text-slate-500 hover:text-[#1D2660] uppercase tracking-widest transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
