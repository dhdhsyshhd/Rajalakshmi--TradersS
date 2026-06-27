import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Home as HomeIcon, Menu, X, Phone, Info, ClipboardList, LayoutGrid } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/categories", label: "Categories", icon: LayoutGrid },
  { href: "/about", label: "About Us", icon: Info },
  { href: "/orders", label: "Orders", icon: ClipboardList },
  { href: "/contact", label: "Contact", icon: Phone },
];

export default function Navbar() {
  const [location] = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <>
      {/* ─────────────── TOP UTILITY BAR ─────────────── */}
      <div className="bg-[#1C1F2B] border-b border-[#B89656]/15 py-2 text-center text-[10px] sm:text-xs tracking-[0.15em] text-[#B89656] uppercase font-bold px-4 relative z-50">
        Bulk Orders Across Andhra Pradesh &amp; Telangana · GST Registered Merchant
      </div>

      {/* ─────────────── MOBILE TOP HEADER ─────────────── */}
      <header className="md:hidden bg-[#F6F1E7] border-b border-[#B89656]/25 py-3 px-4 sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-[#B89656]/30 bg-white shadow-sm hover:bg-[#F6F1E7] transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-[#1C1A17]" />
          </button>
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-9 h-9 bg-[#C5572D] border-2 border-[#B89656] rounded-full flex items-center justify-center shadow">
                <span className="text-white font-serif font-black text-base">RT</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-extrabold text-[#1C1A17] leading-none">Rajalakshmi Traders</span>
                <span className="text-[10px] text-[#B89656] font-bold tracking-widest uppercase mt-0.5">B2B Wholesale Staples</span>
              </div>
            </div>
          </Link>
        </div>
      </header>

      {/* ─────────────── DESKTOP LEFT SIDEBAR ─────────────── */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 z-40 flex-col bg-[#F6F1E7] border-r border-[#B89656]/20 shadow-lg w-56">
        {/* Brand */}
        <Link href="/">
          <div className="flex items-center gap-3 px-5 py-5 border-b border-[#B89656]/20 cursor-pointer group">
            <div className="w-10 h-10 bg-[#C5572D] border-2 border-[#B89656] rounded-full flex items-center justify-center shadow group-hover:scale-105 transition-transform">
              <span className="text-white font-serif font-black text-lg">RT</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-extrabold text-[#1C1A17] text-sm leading-tight">Rajalakshmi<br />Traders</span>
            </div>
          </div>
        </Link>

        {/* Utility bar text in sidebar */}
        <div className="px-4 py-2 bg-[#1C1F2B]/5 border-b border-[#B89656]/10">
          <span className="text-[9px] font-bold text-[#B89656] tracking-widest uppercase leading-tight block">B2B Wholesale · AP &amp; TS</span>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col gap-1 px-3 pt-4 flex-1">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href}>
              <div
                className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl cursor-pointer transition-all duration-200 ${
                  isActive(href)
                    ? "bg-[#C5572D] text-white shadow-md shadow-[#C5572D]/20"
                    : "text-[#1C1A17] hover:bg-[#E8E0D0]"
                }`}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 ${isActive(href) ? "text-white" : "text-[#B89656]"}`} />
                <span className="font-bold text-[11px] uppercase tracking-widest">{label}</span>
              </div>
            </Link>
          ))}
        </nav>

        {/* WhatsApp CTA at bottom */}
        <div className="px-4 pb-6 pt-4 border-t border-[#B89656]/20">
          <a
            href="https://wa.me/918885453360"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold text-[11px] py-3 rounded-xl shadow transition-all uppercase tracking-wider"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
          <p className="text-[9px] text-center text-[#B89656] font-bold tracking-wider mt-2 uppercase">+91 88854 53360</p>
        </div>
      </aside>

      {/* ─────────────── MOBILE DRAWER ─────────────── */}
      {drawerOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />
          {/* Drawer */}
          <div className="fixed inset-y-0 left-0 w-72 max-w-[85vw] bg-[#F6F1E7] shadow-2xl flex flex-col z-50">
            {/* Header */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-[#B89656]/20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#C5572D] border-2 border-[#B89656] rounded-full flex items-center justify-center shadow">
                  <span className="text-white font-serif font-black text-sm">RT</span>
                </div>
                <span className="font-serif font-bold text-[#1C1A17] text-base">Menu</span>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-[#6B6458] hover:text-[#1C1A17] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col gap-1 px-4 pt-5 flex-1">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href}>
                  <div
                    onClick={() => setDrawerOpen(false)}
                    className={`flex items-center gap-4 px-4 py-4 rounded-xl cursor-pointer transition-all duration-200 ${
                      isActive(href)
                        ? "bg-[#C5572D] text-white shadow-md shadow-[#C5572D]/20"
                        : "text-[#1C1A17] hover:bg-[#E8E0D0]"
                    }`}
                  >
                    <Icon className={`w-5 h-5 flex-shrink-0 ${isActive(href) ? "text-white" : "text-[#B89656]"}`} />
                    <span className="font-bold text-sm uppercase tracking-widest">{label}</span>
                  </div>
                </Link>
              ))}
            </nav>

            {/* WhatsApp CTA */}
            <div className="px-4 pb-6 pt-4 border-t border-[#B89656]/20 mx-1">
              <a
                href="https://wa.me/918885453360"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold text-sm py-3 rounded-xl shadow transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
