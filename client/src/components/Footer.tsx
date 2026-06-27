import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#14161F] text-[#9A95A8] py-16 border-t border-[#B89656]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#C5572D] border border-[#B89656]/50 rounded-full flex items-center justify-center">
                <span className="text-[#F0ECE3] font-serif font-black text-sm">RT</span>
              </div>
              <h3 className="font-serif text-white font-extrabold text-base leading-none">Rajalakshmi Traders</h3>
            </div>
            <p className="text-xs text-[#9A95A8] leading-relaxed">
              Premium B2B wholesale supplier of staple grains, pulses, spices, dry fruits, and commercial grocery products across South India.
            </p>
          </div>
          <div>
            <h4 className="text-white font-serif font-bold text-sm uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-3 text-xs text-[#9A95A8]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/categories" className="hover:text-white transition-colors">Categories</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif font-bold text-sm uppercase tracking-widest mb-4">Support Channels</h4>
            <ul className="space-y-3 text-xs text-[#9A95A8]">
              <li><a href="tel:+918885453360" className="hover:text-white transition-colors font-bold">+91 8885453360</a></li>
              <li><a href="tel:+919110571093" className="hover:text-white transition-colors font-bold">+91 9110571093</a></li>
              <li><a href="mailto:rajalakshmitrades@gmail.com" className="hover:text-white transition-colors">Commercial Sourcing Inbox</a></li>
              <li><a href="https://wa.me/918885453360" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-bold">WhatsApp Bulk Inquiry</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif font-bold text-sm uppercase tracking-widest mb-4">Coverage Region</h4>
            <p className="text-xs text-[#9A95A8] leading-relaxed">
              Serving Andhra Pradesh, Karnataka, Tamil Nadu, and Telangana wholesale grocery demands directly from milling hubs.
            </p>
          </div>
        </div>
        <div className="border-t border-[#B89656]/15 pt-8 text-center text-xs text-[#9A95A8]">
          <p>&copy; 2026 Rajalakshmi Traders. All rights reserved. Premium B2B Wholesale Staples Sourcing Portal.</p>
          <p className="mt-2 text-[#9A95A8]/70">Developers: <span className="text-[#B89656] font-medium">NxtRoyals</span></p>
        </div>
      </div>
    </footer>
  );
}
