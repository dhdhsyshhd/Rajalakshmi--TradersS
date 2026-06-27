import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  MessageCircle,
  Phone,
  Leaf,
  Wheat,
  Bean,
  Flame,
  Droplet,
  Candy,
  Coffee,
  Database,
  Layers,
  Sparkles
} from "lucide-react";

// Style map for colorful icons based on category slug
const CATEGORY_STYLE_MAP: Record<
  string,
  {
    icon: React.ComponentType<any>;
    bgClass: string;
    iconClass: string;
    borderClass: string;
  }
> = {
  rice: { icon: Leaf, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30" },
  "wheat-flour": { icon: Wheat, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30" },
  "pulses-dals": { icon: Bean, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30" },
  "spices-masalas": { icon: Flame, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30" },
  "edible-oils": { icon: Droplet, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30" },
  "sugar-jaggery": { icon: Candy, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30" },
  "dry-fruits": { icon: Sparkles, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30" },
  "tea-coffee": { icon: Coffee, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30" },
  salt: { icon: Database, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30" },
  "poha-rava": { icon: Layers, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30" },
  millets: { icon: Wheat, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30" }
};

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [location] = useLocation();

  // Read search term from URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("search") || "";
    if (query) {
      setSearchTerm(query);
      setActiveSearch(query);
    }
  }, [location]);

  // Fetch categories
  const { data: categories } = trpc.categories.list.useQuery();

  // Fetch featured products
  const { data: productsData } = trpc.products.list.useQuery({
    limit: 12,
    offset: 0,
  });

  const { data: searchResultsData, isLoading: isSearchLoading } = trpc.products.list.useQuery(
    {
      limit: 24,
      search: activeSearch || undefined,
    },
    {
      enabled: !!activeSearch,
    }
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveSearch(searchTerm);
    // Update URL query param silently without full reload
    const newRelativePathQuery = window.location.pathname + '?search=' + encodeURIComponent(searchTerm);
    window.history.pushState(null, '', newRelativePathQuery);
  };

  const getPackSizes = (product: any): string[] => {
    try {
      const parsed = JSON.parse(product.specifications);
      if (parsed && parsed.packSizes) {
        return parsed.packSizes;
      }
    } catch (e) {
      // return default
    }
    return ["1kg", "5kg", "10kg", "25kg", "50kg"];
  };

  return (
    <div className="min-h-screen bg-[#14161F] text-[#F0ECE3] antialiased selection:bg-[#C5572D] selection:text-white noise-bg">
      <Navbar />

      {/* Header Search Section */}
      <section className="py-12 bg-[#1C1F2B] border-b border-[#B89656]/15">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-extrabold text-[#F0ECE3] mb-4">Search B2B Catalog</h2>
          <form onSubmit={handleSearch} className="relative flex items-center max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Search rice, wheat, pulses, oils, spices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-[#14161F] border-[#B89656]/40 text-[#F0ECE3] placeholder:text-[#9A95A8]/50 focus:border-[#C5572D] focus:ring-1 focus:ring-[#C5572D] h-12 rounded-md pr-12 text-sm w-full"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-1 top-1 h-10 w-10 bg-[#C5572D] hover:bg-[#C5572D]/90 text-white rounded-sm"
            >
              <Search className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </section>

      {/* Search Results Display */}
      {activeSearch && (
        <section id="search-results" className="py-16 bg-[#14161F] border-b border-[#B89656]/20 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-[#B89656]/15">
              <div className="flex items-baseline gap-2">
                <h3 className="font-serif text-2xl font-extrabold text-[#F0ECE3]">Search Results</h3>
                <span className="text-xs text-[#9A95A8]">for &ldquo;{activeSearch}&rdquo;</span>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setActiveSearch("");
                  setSearchTerm("");
                  window.history.pushState(null, '', window.location.pathname);
                }}
                className="border-[#B89656] text-[#B89656] hover:bg-[#C5572D]/10 rounded-md px-5 font-bold"
              >
                Clear Search
              </Button>
            </div>

            {isSearchLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="animate-pulse bg-[#1C1F2B] border border-[#B89656]/15 rounded-md p-6 flex flex-col h-96">
                    <div className="bg-[#14161F] h-48 rounded-md mb-4"></div>
                    <div className="h-4 bg-[#14161F] rounded w-1/4 mb-2"></div>
                    <div className="h-6 bg-[#14161F] rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-[#14161F] rounded w-5/6 mb-4"></div>
                    <div className="mt-auto h-10 bg-[#14161F] rounded-md"></div>
                  </div>
                ))}
              </div>
            ) : !searchResultsData?.items || searchResultsData.items.length === 0 ? (
              <div className="text-center py-16 bg-[#1C1F2B] border border-dashed border-[#B89656]/30 rounded-md p-8 max-w-xl mx-auto">
                <h4 className="font-serif text-xl font-bold text-[#F0ECE3] mb-2">No Products Found</h4>
                <p className="text-[#9A95A8] text-sm leading-relaxed">We couldn't find any staples matching your search. Check our categories below.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchResultsData.items.map((product: any) => {
                  const sizes = getPackSizes(product);
                  return (
                    <Card key={product.id} className="bg-[#1C1F2B] border border-[#B89656]/20 hover:border-[#B89656]/40 hover:-translate-y-1 transition-all duration-300 rounded-md overflow-hidden flex flex-col group h-full">
                      <CardContent className="flex-1 p-6 flex flex-col">
                        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#B89656]/15">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#C5572D] border border-[#B89656]/30 flex items-center justify-center text-white font-extrabold text-[10px]">
                              {product.brand[0]}
                            </div>
                            <span className="text-xs font-bold text-[#B89656] tracking-wide uppercase">{product.brand}</span>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-[9px] font-bold tracking-widest uppercase bg-[#14161F] text-[#B89656] px-2 py-0.5 rounded-sm border border-[#B89656]/25">
                              {product.brand} Staple
                            </span>
                            <span className="text-[8px] font-bold text-[#C5572D] uppercase tracking-wider">
                              Bulk Available
                            </span>
                          </div>
                        </div>

                        <h3 className="font-serif font-extrabold text-[#F0ECE3] text-lg mb-2 group-hover:text-[#C5572D] transition-colors">
                          {product.name}
                        </h3>
                        
                        <p className="text-sm text-[#9A95A8] mb-4 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>

                        <div className="mb-4">
                          <span className="text-[10px] text-[#B89656] font-bold uppercase tracking-wider block mb-2">Available Pack Sizes</span>
                          <div className="flex flex-wrap gap-1.5">
                            {sizes.map((size) => (
                              <span key={size} className="text-xs bg-[#C5572D] text-white font-medium px-2.5 py-1 rounded-sm border border-[#C5572D]/20">
                                {size}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Order & Stock Specs */}
                        <div className="mb-6 grid grid-cols-2 gap-y-3 gap-x-4 border-t border-[#B89656]/15 pt-4 text-xs text-[#9A95A8]">
                          <div>
                            <span className="text-[#B89656] font-bold block uppercase tracking-widest text-[9px] mb-0.5">Available Stock</span>
                            <span className="text-[#F0ECE3] font-medium">{((product.id * 17) % 850) + 150} {product.unit || 'bags'}</span>
                          </div>
                          <div>
                            <span className="text-[#B89656] font-bold block uppercase tracking-widest text-[9px] mb-0.5">Min Order (MOQ)</span>
                            <span className="text-[#F0ECE3] font-medium">{product.minimumOrderQuantity || 5} {product.unit || 'bags'}</span>
                          </div>
                          <div className="col-span-2">
                            <span className="text-[#B89656] font-bold block uppercase tracking-widest text-[9px] mb-0.5">Max Order Limit</span>
                            <span className="text-[#F0ECE3] font-medium">100 {product.unit || 'bags'}</span>
                          </div>
                        </div>

                        <div className="mt-auto pt-4 border-t border-[#B89656]/15 flex flex-col gap-2">
                          <Link href={`/order?productId=${product.id}`} className="w-full">
                            <Button className="w-full bg-[#C5572D] hover:bg-[#C5572D]/90 text-white font-bold py-5 rounded-md text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-[#C5572D]/15">
                              Order Now
                            </Button>
                          </Link>
                          <a
                            href={`https://wa.me/918885453360?text=Hello%20Rajalakshmi%20Traders,%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.brand)})%20in%20bulk%20wholesale%20quantity.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                          >
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
            )}
          </div>
        </section>
      )}

      {/* Product Categories */}
      <section className="py-20 bg-[#14161F] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#B89656] uppercase tracking-[0.15em] block mb-3">STAPLES CATALOG</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#F0ECE3] tracking-tight mb-4">Our Product Categories</h2>
            <div className="w-20 h-[1px] bg-[#B89656] mx-auto mb-6"></div>
            <p className="text-base text-[#9A95A8] max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive commercial catalog to source for your enterprise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {!categories ? (
              Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-[#1C1F2B] border border-[#B89656]/15 rounded-md p-6 flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 bg-[#14161F] rounded-md mb-4"></div>
                  <div className="h-5 bg-[#14161F] rounded w-2/3 mb-2"></div>
                  <div className="h-4 bg-[#14161F] rounded w-5/6"></div>
                </div>
              ))
            ) : (
              categories.map((category: any) => {
                const style = CATEGORY_STYLE_MAP[category.slug] || {
                  icon: Sparkles,
                  bgClass: "bg-[#1C1F2B]",
                  iconClass: "text-[#B89656]",
                  borderClass: "border-[#B89656]/30"
                };
                const CategoryIcon = style.icon;

                return (
                  <Link key={category.id} href={`/categories/${category.slug}`}>
                    <div className="group bg-[#F6F1E7] border border-[#B89656]/20 rounded-md p-6 shadow-sm hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col items-start text-left">
                      <div className="w-12 h-12 rounded-full bg-[#1C1F2B] border border-[#B89656]/30 flex items-center justify-center text-[#B89656] mb-4">
                        <CategoryIcon className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif font-bold text-[#1C1A17] text-lg mb-2 group-hover:text-[#C5572D] transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-xs text-[#6B6458] line-clamp-3 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
