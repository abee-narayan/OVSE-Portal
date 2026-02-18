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

      {/* 4. Hero Section */}
      <main className="flex-1 relative overflow-hidden bg-gradient-to-br from-[#E4F2E4] via-[#FEFDF7] to-[#FFF7ED]">
        {/* Decorative Circle Pattern */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#1D2660]/5 pointer-events-none" />

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
                <Button className="bg-[#2D3169] hover:bg-[#1D2660] text-white px-12 py-9 text-2xl font-black rounded-3xl shadow-3xl shadow-blue-900/40 transition-all hover:-translate-y-1 active:scale-95">
                  OVSE Login
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000">
            <div className="relative">
              {/* Monitor Mockup */}
              <div className="bg-white rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] p-4 border-[12px] border-slate-900 overflow-hidden aspect-[16/10] flex flex-col items-center justify-center space-y-6 relative group">
                <div className="text-center space-y-3 relative z-10">
                  <h3 className="text-3xl font-black text-slate-800 tracking-tight">Verify using <span className="text-[#1D2660] italic">Aadhaar</span></h3>
                  <p className="text-sm font-semibold text-slate-500">Quick verification, done in less than a minute.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-2xl border-2 border-slate-50 relative z-10">
                  <div className="grid grid-cols-5 gap-1.5 w-32 h-32 opacity-80">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} className={`h-full w-full rounded-[1px] ${Math.random() > 0.4 ? 'bg-slate-900' : 'bg-transparent'}`} />
                    ))}
                  </div>
                </div>

                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest relative z-10">Scan this QR using Aadhaar App in your phone</p>

                {/* Subtle Background Pattern in Monitor */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#F8FAFC_100%)] opacity-50" />
              </div>

              {/* Mascot Image Mockup */}
              <div className="absolute -bottom-20 -right-16 md:-bottom-24 md:-right-24 h-72 md:h-96 w-auto animate-float">
                <div className="relative h-full flex items-end">
                  <div className="h-[90%] aspect-[3/4] bg-white rounded-[40px] shadow-2xl border-4 border-white overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-red-600" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white space-y-4">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                        <Monitor className="h-10 w-10 text-orange-500" />
                      </div>
                      <h4 className="font-black text-xs uppercase tracking-widest leading-tight">Secure<br />Aadhaar<br />Offline</h4>
                      <div className="w-full h-1 bg-white/20 rounded-full" />
                    </div>
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                  {/* Character Smartphone Support */}
                  <div className="absolute -left-16 bottom-12 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-orange-600 border-2 border-orange-50 animate-pulse">
                    <Smartphone className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
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
