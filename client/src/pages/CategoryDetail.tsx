import { useState, useMemo } from "react";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft, Search, MessageCircle, Wheat, Bean, Flame, Droplet, Candy,
  Coffee, Database, Layers, Sparkles, Leaf, ChevronRight
} from "lucide-react";
import {
  CATEGORIES, PRODUCTS, getCategoryBySlug, getPackSizes, getBrands
} from "@/data/staticData";
import Navbar from "@/components/Navbar";

const CATEGORY_ICON_MAP: Record<string, React.ComponentType<any>> = {
  rice: Leaf,
  "wheat-flour": Wheat,
  "pulses-dals": Bean,
  "spices-masalas": Flame,
  "edible-oils": Droplet,
  "sugar-jaggery": Candy,
  "dry-fruits": Sparkles,
  "tea-coffee": Coffee,
  salt: Database,
  "poha-rava": Layers,
  millets: Wheat,
};

const PAGE_SIZE = 12;

export default function CategoryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("name-asc");
  const [page, setPage] = useState(1);

  const category = getCategoryBySlug(slug || "");
  const brands = getBrands(category?.id);
  const BannerIcon = CATEGORY_ICON_MAP[slug || ""] || Sparkles;

  // Filter + sort products
  const allFiltered = useMemo(() => {
    let prods = PRODUCTS.filter(p => p.isActive && p.categoryId === category?.id);
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      prods = prods.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }
    if (selectedBrand) prods = prods.filter(p => p.brand === selectedBrand);
    switch (sortBy) {
      case "name-asc": prods = [...prods].sort((a, b) => a.name.localeCompare(b.name)); break;
      case "name-desc": prods = [...prods].sort((a, b) => b.name.localeCompare(a.name)); break;
      case "moq-asc": prods = [...prods].sort((a, b) => a.minimumOrderQuantity - b.minimumOrderQuantity); break;
      case "moq-desc": prods = [...prods].sort((a, b) => b.minimumOrderQuantity - a.minimumOrderQuantity); break;
      case "newest": prods = [...prods].sort((a, b) => b.id - a.id); break;
    }
    return prods;
  }, [category?.id, searchTerm, selectedBrand, sortBy]);

  const visibleProducts = allFiltered.slice(0, page * PAGE_SIZE);
  const hasMore = visibleProducts.length < allFiltered.length;

  if (!category) {
    return (
      <div className="min-h-screen bg-[#14161F] flex flex-col items-center justify-center p-6 text-center md:ml-56">
        <Navbar />
        <h2 className="text-3xl font-bold text-[#F0ECE3] mb-2 mt-10">Category Not Found</h2>
        <p className="text-[#9A95A8] mb-6">The product category you are looking for does not exist.</p>
        <Link href="/categories">
          <Button className="bg-[#C5572D] hover:bg-[#C5572D]/90 text-white">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Categories
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#14161F] text-[#F0ECE3] antialiased selection:bg-[#C5572D] selection:text-white noise-bg md:ml-56">
      <Navbar />

      {/* Category Breadcrumb Nav */}
      <nav className="sticky top-0 z-30 bg-[#14161F]/95 backdrop-blur-md border-b border-[#B89656]/15 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/categories">
              <div className="p-2 hover:bg-[#1C1F2B] border border-[#B89656]/20 rounded-md cursor-pointer transition-colors text-[#B89656]">
                <ArrowLeft className="w-5 h-5" />
              </div>
            </Link>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-[#9A95A8] font-bold">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-[#B89656]" />
              <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>
              <ChevronRight className="w-4 h-4 text-[#B89656]" />
              <span className="text-[#C5572D]">{category.name}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Category Banner */}
      <section className="relative overflow-hidden bg-[#14161F] border-b border-[#B89656]/15 py-16">
        <div className="absolute right-12 bottom-0 w-64 h-64 opacity-[0.03] text-[#B89656] pointer-events-none select-none">
          <Wheat className="w-full h-full stroke-[1]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold mb-4 text-[#F0ECE3]">{category.name} Wholesale</h2>
            <p className="text-base text-[#9A95A8] max-w-2xl leading-relaxed">{category.description}</p>
          </div>
          <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-[#1C1F2B] border border-[#B89656]/20 rounded-md flex items-center justify-center">
            <BannerIcon className="w-10 h-10 md:w-12 md:h-12 text-[#B89656] stroke-[1.5]" />
          </div>
        </div>
      </section>

      {/* Top Brands Grid */}
      {brands.length > 0 && (
        <section className="py-12 bg-[#1C1F2B] border-b border-[#B89656]/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center font-serif font-bold text-[#B89656] uppercase tracking-[0.15em] text-xs mb-8">Top Brands We Supply</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              {brands.map((brandName) => (
                <div
                  key={brandName}
                  onClick={() => setSelectedBrand(brandName === selectedBrand ? null : brandName)}
                  className={`bg-[#14161F] px-6 py-4 rounded-md border transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 hover:-translate-y-0.5 ${
                    selectedBrand === brandName ? "border-[#C5572D] ring-1 ring-[#C5572D]/30" : "border-[#B89656]/20"
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#C5572D] flex items-center justify-center text-white font-bold text-sm">{brandName[0]}</div>
                  <span className="font-serif font-bold text-[#F0ECE3] text-sm md:text-base">{brandName}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter & Search Bar */}
      <section className="py-8 bg-[#F6F1E7] border-b border-[#B89656]/20 sticky top-[49px] z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <Button
              variant={selectedBrand === null ? "default" : "outline"}
              className={`rounded-md px-5 font-bold transition-all ${selectedBrand === null ? "bg-[#C5572D] text-white hover:bg-[#C5572D]/90 border border-[#C5572D]" : "border-[#B89656]/40 text-[#1C1A17] hover:bg-[#C5572D]/5"}`}
              onClick={() => setSelectedBrand(null)}
            >
              All Brands
            </Button>
            {brands.map((brandName) => (
              <Button
                key={brandName}
                variant={selectedBrand === brandName ? "default" : "outline"}
                className={`rounded-md px-5 font-bold transition-all ${selectedBrand === brandName ? "bg-[#C5572D] text-white hover:bg-[#C5572D]/90 border border-[#C5572D]" : "border-[#B89656]/40 text-[#1C1A17] hover:bg-[#C5572D]/5"}`}
                onClick={() => setSelectedBrand(brandName)}
              >
                {brandName}
              </Button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Input
                type="text"
                placeholder={`Search in ${category.name.toLowerCase()}...`}
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setPage(1); }}
                className="pl-10 pr-4 py-2 border-[#B89656]/35 rounded-md focus:border-[#C5572D] bg-[#1C1F2B] text-[#F0ECE3] placeholder:text-[#9A95A8] focus-visible:ring-0"
              />
              <Search className="w-5 h-5 text-[#B89656] absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
            <select
              value={sortBy}
              onChange={(e) => { setSortBy(e.target.value); setPage(1); }}
              className="rounded-md border border-[#B89656]/35 py-2.5 px-4 bg-[#1C1F2B] text-[#F0ECE3] text-sm cursor-pointer outline-none min-w-[180px]"
            >
              <option value="name-asc">Alphabetical (A–Z)</option>
              <option value="name-desc">Alphabetical (Z–A)</option>
              <option value="moq-asc">MOQ (Low to High)</option>
              <option value="moq-desc">MOQ (High to Low)</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-[#14161F] min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {visibleProducts.length === 0 ? (
            <div className="text-center py-20 bg-[#1C1F2B] border border-dashed border-[#B89656]/30 rounded-md p-6 max-w-xl mx-auto">
              <h4 className="font-serif text-xl font-bold text-[#F0ECE3] mb-2">No Products Found</h4>
              <p className="text-[#9A95A8] mb-4">Try adjusting your filters or search term.</p>
              <Button onClick={() => { setSelectedBrand(null); setSearchTerm(""); setSortBy("name-asc"); setPage(1); }} className="bg-[#C5572D] hover:bg-[#C5572D]/90 text-white font-bold rounded-md">
                Clear All Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleProducts.map((product) => {
                  const sizes = getPackSizes(product);
                  return (
                    <Card key={product.id} className="bg-[#1C1F2B] border border-[#B89656]/20 hover:border-[#B89656]/40 hover:-translate-y-1 transition-all duration-300 rounded-md overflow-hidden flex flex-col group h-full">
                      <CardContent className="flex-1 p-6 flex flex-col">
                        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#B89656]/15">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#C5572D] border border-[#B89656]/35 flex items-center justify-center text-white font-bold text-[10px]">{product.brand[0]}</div>
                            <span className="text-xs font-bold text-[#B89656] tracking-wide uppercase">{product.brand}</span>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-[9px] font-bold tracking-widest uppercase bg-[#14161F] text-[#B89656] px-2.5 py-1 rounded-sm border border-[#B89656]/25">{product.brand} Staple</span>
                            <span className="text-[8px] font-bold text-[#C5572D] uppercase tracking-wider">Bulk Available</span>
                          </div>
                        </div>
                        <h3 className="font-serif font-bold text-[#F0ECE3] text-lg mb-2 group-hover:text-[#C5572D] transition-colors">{product.name}</h3>
                        <p className="text-sm text-[#9A95A8] mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
                        <div className="mb-4">
                          <span className="text-xs text-[#B89656] font-bold uppercase tracking-wider block mb-2">Available Pack Sizes</span>
                          <div className="flex flex-wrap gap-1.5">
                            {sizes.map((size) => <span key={size} className="text-xs bg-[#C5572D] text-white font-medium px-2.5 py-1 rounded-sm">{size}</span>)}
                          </div>
                        </div>
                        <div className="mb-6 grid grid-cols-2 gap-y-3 gap-x-4 border-t border-[#B89656]/15 pt-4 text-xs text-[#9A95A8]">
                          <div><span className="text-[#B89656] font-bold block uppercase tracking-widest text-[9px] mb-0.5">Stock Available</span><span className="text-[#F0ECE3] font-medium">{((product.id * 17) % 850) + 150} {product.unit}</span></div>
                          <div><span className="text-[#B89656] font-bold block uppercase tracking-widest text-[9px] mb-0.5">Min Order (MOQ)</span><span className="text-[#F0ECE3] font-medium">{product.minimumOrderQuantity} {product.unit}</span></div>
                          <div className="col-span-2"><span className="text-[#B89656] font-bold block uppercase tracking-widest text-[9px] mb-0.5">Max Order Limit</span><span className="text-[#F0ECE3] font-medium">100 {product.unit}</span></div>
                        </div>
                        <div className="mt-auto pt-4 border-t border-[#B89656]/15 flex flex-col gap-2">
                          <Link href={`/order?productId=${product.id}`} className="w-full">
                            <Button className="w-full bg-[#C5572D] hover:bg-[#C5572D]/90 text-white font-bold py-5 rounded-md text-xs">Order Now</Button>
                          </Link>
                          <a href={`https://wa.me/918885453360?text=Hello%20Rajalakshmi%20Traders,%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.brand)})%20in%20bulk.`} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button variant="outline" className="w-full border-[#B89656]/40 text-[#B89656] hover:bg-[#C5572D]/10 font-bold py-5 rounded-md text-xs flex items-center justify-center gap-1.5">
                              <MessageCircle className="w-4 h-4" /> Order on WhatsApp
                            </Button>
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Load More */}
              {hasMore && (
                <div className="mt-16 flex justify-center">
                  <Button onClick={() => setPage(p => p + 1)} className="bg-[#C5572D] hover:bg-[#C5572D]/90 text-white font-bold px-8 py-6 rounded-md shadow-md transition-all duration-300">
                    Load More Products ({allFiltered.length - visibleProducts.length} remaining)
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Bulk Inquiry CTA */}
      <section className="py-20 bg-[#1C1F2B] border-t border-[#B89656]/20 relative">
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.03] text-[#B89656] pointer-events-none select-none">
          <Wheat className="w-full h-full stroke-[1]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold mb-6 text-[#F0ECE3]">Need Bulk Quantity? Contact Us Today</h2>
          <p className="text-base text-[#9A95A8] max-w-xl mx-auto leading-relaxed mb-10">Get customized logistics, tax pricing, and contract discounts for continuous monthly wholesale food supply.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/918885453360" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#C5572D] hover:bg-[#C5572D]/90 text-white font-bold px-8 py-6 rounded-md text-base flex items-center gap-2">
                <MessageCircle className="w-5 h-5" /> WhatsApp Now
              </Button>
            </a>
            <Link href="/order">
              <Button variant="outline" className="border-[#B89656] text-[#B89656] hover:bg-[#C5572D]/10 font-bold px-8 py-6 rounded-md text-base">Order Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#14161F] text-[#9A95A8] py-12 border-t border-[#B89656]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#C5572D] border border-[#B89656]/50 rounded-full flex items-center justify-center">
              <span className="text-[#F0ECE3] font-serif font-black text-xs">RT</span>
            </div>
            <span className="font-serif font-bold text-[#F0ECE3]">Rajalakshmi Traders</span>
          </div>
          <p>&copy; 2026 Rajalakshmi Traders. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
