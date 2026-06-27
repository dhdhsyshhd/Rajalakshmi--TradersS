import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, Menu, X, Phone, Info, ChevronRight, ClipboardList } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Mobile drawer state
  const [isHovered, setIsHovered] = useState(false); // Desktop hover sidebar state

  const activeClass = "bg-[#C5572D] text-[#F0ECE3] shadow-lg shadow-[#C5572D]/20 border border-[#B89656]/30";
  const inactiveClass = "text-[#F0ECE3]/85 hover:bg-[#C5572D]/10 hover:text-[#C5572D] border border-transparent";

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#1C1F2B] border-b border-[#B89656]/15 py-2 text-center text-[10px] sm:text-xs tracking-[0.15em] text-[#B89656] uppercase font-bold px-4">
        Bulk Orders Across Andhra Pradesh &amp; Telangana · GST Registered Merchant
      </div>

      {/* Brand Header Bar */}
      <header className="bg-[#14161F]/90 backdrop-blur-md border-b border-[#B89656]/15 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Mobile Menu Toggle Button (on the left edge for mobile devices) */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsOpen(true)}
              className="bg-transparent hover:bg-[#1C1F2B] border border-[#B89656]/40 text-[#F0ECE3] p-2"
              size="icon"
            >
              <Menu className="w-5 h-5 text-[#B89656]" />
            </Button>
          </div>

          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              {/* Wax Seal Logo */}
              <div className="w-10 h-10 bg-[#C5572D] border-2 border-[#B89656] rounded-full flex items-center justify-center shadow-lg shadow-[#C5572D]/15 group-hover:scale-105 transition-transform duration-300">
                <span className="text-[#F0ECE3] font-serif font-black text-lg">RT</span>
              </div>
              <div className="flex flex-col">
                <h1 className="font-serif text-base sm:text-lg font-extrabold text-[#F0ECE3] leading-none">Rajalakshmi Traders</h1>
                <span className="text-[10px] text-[#B89656] font-bold tracking-[0.12em] uppercase mt-0.5">B2B Wholesale Staples</span>
              </div>
            </div>
          </Link>

          {/* Spacer for desktop layout alignment */}
          <div className="hidden md:block w-10"></div>
        </div>
      </header>

      {/* Visible Handle/Tab on Left Edge when collapsed (Desktop only) */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        className={`hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 w-7 h-16 bg-[#1C1F2B]/95 border-t border-r border-b border-[#B89656]/30 rounded-r-xl items-center justify-center cursor-pointer shadow-md shadow-black/20 hover:bg-[#1C1F2B] transition-all duration-300 ${
          isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <ChevronRight className="w-4 h-4 text-[#B89656] animate-pulse" />
      </div>

      {/* Invisible Hover Activation Zone (Desktop only) */}
      <div
        className="hidden md:block fixed left-0 top-0 bottom-0 w-8 z-30"
        onMouseEnter={() => setIsHovered(true)}
      />

      {/* Hover-activated Fixed Vertical Navigation Menu (Desktop only) */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4 bg-[#1C1F2B]/95 backdrop-blur-md border border-[#B89656]/25 rounded-2xl p-3 shadow-2xl shadow-black/40 min-w-[150px] transition-all duration-300 ease-in-out transform ${
          isHovered
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "-translate-x-[150%] opacity-0 pointer-events-none"
        }`}
      >
        <Link href="/">
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer text-xs uppercase font-bold tracking-wider transition-all duration-300 ${
              location === "/" ? activeClass : inactiveClass
            }`}
          >
            <HomeIcon className="w-4 h-4 text-[#B89656]" />
            <span>Home</span>
          </div>
        </Link>
        <Link href="/categories">
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer text-xs uppercase font-bold tracking-wider transition-all duration-300 ${
              location === "/categories" ? activeClass : inactiveClass
            }`}
          >
            <Menu className="w-4 h-4 text-[#B89656]" />
            <span>Categories</span>
          </div>
        </Link>
        <Link href="/about">
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer text-xs uppercase font-bold tracking-wider transition-all duration-300 ${
              location === "/about" ? activeClass : inactiveClass
            }`}
          >
            <Info className="w-4 h-4 text-[#B89656]" />
            <span>About Us</span>
          </div>
        </Link>
        <Link href="/orders">
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer text-xs uppercase font-bold tracking-wider transition-all duration-300 ${
              location === "/orders" ? activeClass : inactiveClass
            }`}
          >
            <ClipboardList className="w-4 h-4 text-[#B89656]" />
            <span>Orders</span>
          </div>
        </Link>
        <Link href="/contact">
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer text-xs uppercase font-bold tracking-wider transition-all duration-300 ${
              location === "/contact" ? activeClass : inactiveClass
            }`}
          >
            <Phone className="w-4 h-4 text-[#B89656]" />
            <span>Contact</span>
          </div>
        </Link>
      </div>

      {/* Slide-out Mobile Drawer (Left side of screen) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Drawer Body */}
          <div className="fixed inset-y-0 left-0 w-64 max-w-xs bg-[#1C1F2B]/98 border-r border-[#B89656]/20 shadow-2xl flex flex-col p-6 z-50 transition-all duration-300 ease-in-out">
            {/* Header / Close button */}
            <div className="flex justify-between items-center mb-8 border-b border-[#B89656]/15 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#C5572D] border border-[#B89656]/50 rounded-full flex items-center justify-center">
                  <span className="text-[#F0ECE3] font-serif font-black text-sm">RT</span>
                </div>
                <span className="font-serif font-bold text-sm text-[#F0ECE3]">Menu</span>
              </div>
              <Button
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="text-[#9A95A8] hover:text-white p-1 hover:bg-transparent"
              >
                <X className="w-5 h-5 text-[#B89656]" />
              </Button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-4">
              <Link href="/">
                <div
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer text-xs uppercase font-bold tracking-wider transition-all duration-300 ${
                    location === "/" ? activeClass : inactiveClass
                  }`}
                >
                  <HomeIcon className="w-4 h-4 text-[#B89656]" />
                  <span>Home</span>
                </div>
              </Link>
              <Link href="/categories">
                <div
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer text-xs uppercase font-bold tracking-wider transition-all duration-300 ${
                    location === "/categories" ? activeClass : inactiveClass
                  }`}
                >
                  <Menu className="w-4 h-4 text-[#B89656]" />
                  <span>Categories</span>
                </div>
              </Link>
              <Link href="/about">
                <div
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer text-xs uppercase font-bold tracking-wider transition-all duration-300 ${
                    location === "/about" ? activeClass : inactiveClass
                  }`}
                >
                  <Info className="w-4 h-4 text-[#B89656]" />
                  <span>About Us</span>
                </div>
              </Link>
              <Link href="/orders">
                <div
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer text-xs uppercase font-bold tracking-wider transition-all duration-300 ${
                    location === "/orders" ? activeClass : inactiveClass
                  }`}
                >
                  <ClipboardList className="w-4 h-4 text-[#B89656]" />
                  <span>Orders</span>
                </div>
              </Link>
              <Link href="/contact">
                <div
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer text-xs uppercase font-bold tracking-wider transition-all duration-300 ${
                    location === "/contact" ? activeClass : inactiveClass
                  }`}
                >
                  <Phone className="w-4 h-4 text-[#B89656]" />
                  <span>Contact</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
