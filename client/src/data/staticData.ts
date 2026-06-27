// ============================================================
// STATIC DATA — No backend / No database needed
// All products and categories are defined here
// ============================================================

export interface Category {
  id: number;
  slug: string;
  name: string;
  description: string;
}

export interface Product {
  id: number;
  categoryId: number;
  name: string;
  brand: string;
  description: string;
  unit: string;
  minimumOrderQuantity: number;
  specifications: string; // JSON string with packSizes
  isActive: boolean;
}

export const CATEGORIES: Category[] = [
  { id: 1, slug: "rice", name: "Rice", description: "Premium quality raw rice, boiled rice, sona masoori and basmati varieties sourced directly from Andhra mills." },
  { id: 2, slug: "wheat-flour", name: "Wheat & Flour", description: "Fine wheat flour (maida, atta, sooji) milled fresh and packed for commercial bulk supply." },
  { id: 3, slug: "pulses-dals", name: "Pulses & Dals", description: "Toor dal, moong dal, chana dal, urad dal and more — graded and cleaned for B2B supply." },
  { id: 4, slug: "spices-masalas", name: "Spices & Masalas", description: "Whole and ground spices, blended masalas — packed fresh for hotels, caterers and retail chains." },
  { id: 5, slug: "edible-oils", name: "Edible Oils", description: "Groundnut oil, sunflower oil, palmolein, coconut oil in commercial tin and HDPE jerry cans." },
  { id: 6, slug: "sugar-jaggery", name: "Sugar & Jaggery", description: "Refined white sugar, raw cane sugar, block jaggery and jaggery powder in bulk packs." },
  { id: 7, slug: "dry-fruits", name: "Dry Fruits", description: "Cashews, almonds, raisins, dates, pistas — premium grade imported and domestic varieties." },
  { id: 8, slug: "tea-coffee", name: "Tea & Coffee", description: "CTC tea dust, leaf tea, instant coffee powder and chicory blends for HoReCa and retail." },
  { id: 9, slug: "salt", name: "Salt", description: "Iodised table salt, rock salt, sea salt in 1kg, 5kg and 50kg commercial sacks." },
  { id: 10, slug: "poha-rava", name: "Poha & Rava", description: "Thick and thin poha (flattened rice) and rava (semolina) in fresh-milled wholesale packs." },
  { id: 11, slug: "millets", name: "Millets", description: "Jowar, bajra, ragi, foxtail millet, little millet — sourced from Deccan plateau farmers." },
];

export const PRODUCTS: Product[] = [
  // Rice (categoryId: 1)
  { id: 1, categoryId: 1, name: "Sona Masoori Raw Rice", brand: "Rajalakshmi", description: "Premium HMT Sona Masoori raw rice, light and non-sticky, ideal for daily consumption. Sourced directly from Andhra Pradesh mills.", unit: "bags", minimumOrderQuantity: 10, specifications: JSON.stringify({ packSizes: ["5kg", "10kg", "25kg", "50kg"] }), isActive: true },
  { id: 2, categoryId: 1, name: "BPT Boiled Rice", brand: "Rajalakshmi", description: "BPT (Bangaru Theegalu) parboiled rice — high nutritional value, long shelf life, perfect for hotels and mass feeding.", unit: "bags", minimumOrderQuantity: 10, specifications: JSON.stringify({ packSizes: ["5kg", "25kg", "50kg"] }), isActive: true },
  { id: 3, categoryId: 1, name: "Basmati Rice Premium", brand: "India Gate", description: "Long grain aged Basmati rice with natural aroma. Ideal for biryani and pulao preparations in hotels and catering.", unit: "bags", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "10kg", "25kg"] }), isActive: true },
  { id: 4, categoryId: 1, name: "Ponni Raw Rice", brand: "Rajalakshmi", description: "Soft, fluffy Ponni raw rice from Tamil Nadu — widely preferred for everyday cooking and mid-day meal programmes.", unit: "bags", minimumOrderQuantity: 10, specifications: JSON.stringify({ packSizes: ["5kg", "10kg", "25kg", "50kg"] }), isActive: true },
  { id: 5, categoryId: 1, name: "HMT Raw Rice", brand: "Rajalakshmi", description: "Classic HMT variety raw rice — medium grain, low stickiness, cost-effective for large-scale distribution.", unit: "bags", minimumOrderQuantity: 10, specifications: JSON.stringify({ packSizes: ["5kg", "25kg", "50kg"] }), isActive: true },
  { id: 6, categoryId: 1, name: "Steam Boiled Rice", brand: "Suryaa", description: "Steam-cooked parboiled rice with enhanced shelf life and nutrition. Best for canteen and institutional supply.", unit: "bags", minimumOrderQuantity: 20, specifications: JSON.stringify({ packSizes: ["25kg", "50kg"] }), isActive: true },

  // Wheat & Flour (categoryId: 2)
  { id: 7, categoryId: 2, name: "Chakki Fresh Atta", brand: "Aashirvaad", description: "100% whole wheat flour, stone-ground chakki atta. Rich in fibre, suitable for chapati, roti and paratha.", unit: "bags", minimumOrderQuantity: 10, specifications: JSON.stringify({ packSizes: ["5kg", "10kg", "25kg", "50kg"] }), isActive: true },
  { id: 8, categoryId: 2, name: "Maida (Refined Flour)", brand: "Rajalakshmi", description: "Fine white refined wheat flour (maida) for bakeries, sweet shops and institutional cooking.", unit: "bags", minimumOrderQuantity: 10, specifications: JSON.stringify({ packSizes: ["5kg", "10kg", "25kg", "50kg"] }), isActive: true },
  { id: 9, categoryId: 2, name: "Bombay Rava (Sooji)", brand: "Rajalakshmi", description: "Fine-grain semolina (sooji/rava) used for upma, halwa, sheera and confectionery. Commercial bulk packs.", unit: "bags", minimumOrderQuantity: 10, specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "10kg", "25kg"] }), isActive: true },
  { id: 10, categoryId: 2, name: "Besan (Gram Flour)", brand: "Rajalakshmi", description: "Fresh-milled chickpea flour (besan) for snacks, fritters, sweets and dhokla. Consistent quality batch.", unit: "bags", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "10kg", "25kg"] }), isActive: true },

  // Pulses & Dals (categoryId: 3)
  { id: 11, categoryId: 3, name: "Toor Dal (Arhar)", brand: "Rajalakshmi", description: "Split pigeon pea — the most widely used dal in South and Central India. Machine-cleaned and graded.", unit: "bags", minimumOrderQuantity: 10, specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "10kg", "25kg", "50kg"] }), isActive: true },
  { id: 12, categoryId: 3, name: "Moong Dal (Split)", brand: "Rajalakshmi", description: "Green moong split and skinned dal. Light, easily digestible, ideal for hospitals, canteens and homes.", unit: "bags", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "10kg", "25kg"] }), isActive: true },
  { id: 13, categoryId: 3, name: "Chana Dal", brand: "Rajalakshmi", description: "Split Bengal gram dal — mild, nutty flavour. Used in curries, chutneys and snack preparations.", unit: "bags", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "10kg", "25kg"] }), isActive: true },
  { id: 14, categoryId: 3, name: "Urad Dal (Black Gram)", brand: "Rajalakshmi", description: "Whole and split urad dal for idli, dosa batter, dal makhani and South Indian staple dishes.", unit: "bags", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "10kg", "25kg"] }), isActive: true },
  { id: 15, categoryId: 3, name: "Masoor Dal (Red Lentil)", brand: "Rajalakshmi", description: "Red split lentils — quick-cooking, protein-rich. Popular in soup, sambar and everyday dal preparations.", unit: "bags", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "10kg", "25kg"] }), isActive: true },

  // Spices & Masalas (categoryId: 4)
  { id: 16, categoryId: 4, name: "Red Chilli Powder", brand: "Rajalakshmi", description: "Vibrant red Guntur chilli powder — hot and aromatic. Sourced directly from Guntur market, Andhra Pradesh.", unit: "bags", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["500g", "1kg", "5kg", "10kg"] }), isActive: true },
  { id: 17, categoryId: 4, name: "Turmeric Powder", brand: "Rajalakshmi", description: "Pure Erode turmeric powder with high curcumin content. Bright yellow, fine-ground, no artificial colour.", unit: "bags", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["500g", "1kg", "5kg", "10kg"] }), isActive: true },
  { id: 18, categoryId: 4, name: "Coriander Powder", brand: "Rajalakshmi", description: "Fresh-ground dhania powder from premium quality seeds. Adds depth and aroma to curries and gravies.", unit: "bags", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["500g", "1kg", "5kg"] }), isActive: true },
  { id: 19, categoryId: 4, name: "Cumin Seeds (Jeera)", brand: "Rajalakshmi", description: "Whole cumin seeds — aromatic and flavourful. Used in tadka, rice dishes, curries and spice blends.", unit: "bags", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["500g", "1kg", "5kg"] }), isActive: true },

  // Edible Oils (categoryId: 5)
  { id: 20, categoryId: 5, name: "Groundnut Oil", brand: "Fortune", description: "Cold-pressed groundnut oil — heart-healthy, high smoke point. Widely used in South Indian cooking.", unit: "tins", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["1L", "5L", "15L tin"] }), isActive: true },
  { id: 21, categoryId: 5, name: "Sunflower Oil", brand: "Sundrop", description: "Refined sunflower oil — light, mild-flavoured, cholesterol-free. Ideal for deep frying and baking.", unit: "tins", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["1L", "5L", "15L tin"] }), isActive: true },
  { id: 22, categoryId: 5, name: "Palmolein Oil", brand: "Rajalakshmi", description: "Refined palmolein oil in commercial packs. High-yield frying oil for institutional and catering use.", unit: "tins", minimumOrderQuantity: 10, specifications: JSON.stringify({ packSizes: ["5L", "15L", "15kg tin"] }), isActive: true },

  // Sugar & Jaggery (categoryId: 6)
  { id: 23, categoryId: 6, name: "Refined White Sugar", brand: "Rajalakshmi", description: "M-30 grade refined white sugar — fine crystalline, free-flowing. Suitable for tea stalls, sweet shops and bakeries.", unit: "bags", minimumOrderQuantity: 10, specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "10kg", "25kg", "50kg"] }), isActive: true },
  { id: 24, categoryId: 6, name: "Jaggery (Block)", brand: "Rajalakshmi", description: "Natural block jaggery from Andhra Pradesh cane farmers. Chemical-free, rich in minerals, dark brown.", unit: "bags", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "10kg", "30kg"] }), isActive: true },
  { id: 25, categoryId: 6, name: "Jaggery Powder", brand: "Rajalakshmi", description: "Fine jaggery powder for easy dissolving in desserts, health drinks and traditional sweets.", unit: "bags", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["500g", "1kg", "5kg", "10kg"] }), isActive: true },

  // Dry Fruits (categoryId: 7)
  { id: 26, categoryId: 7, name: "Cashew W240 (Kaju)", brand: "Rajalakshmi", description: "W-240 grade premium whole cashews — large, creamy white. Sourced from Kollam, Kerala. For retail and industrial use.", unit: "boxes", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["250g", "500g", "1kg", "5kg"] }), isActive: true },
  { id: 27, categoryId: 7, name: "Almonds (Badam)", brand: "Rajalakshmi", description: "California-grade almond kernels — crunchy, rich in protein. Available in natural and blanched varieties.", unit: "boxes", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["250g", "500g", "1kg", "5kg"] }), isActive: true },
  { id: 28, categoryId: 7, name: "Raisins (Kishmish)", brand: "Rajalakshmi", description: "Seedless golden raisins from Nashik vineyards — plump, sweet and moist. Ideal for bakeries and sweet shops.", unit: "boxes", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["250g", "500g", "1kg", "5kg"] }), isActive: true },

  // Tea & Coffee (categoryId: 8)
  { id: 29, categoryId: 8, name: "CTC Tea Dust", brand: "Rajalakshmi", description: "Strong Assam CTC tea dust — bold flavour, deep red liquor. Perfect for chai stalls, offices and mass catering.", unit: "boxes", minimumOrderQuantity: 10, specifications: JSON.stringify({ packSizes: ["250g", "500g", "1kg", "5kg", "25kg"] }), isActive: true },
  { id: 30, categoryId: 8, name: "Filter Coffee Powder", brand: "Cothas", description: "Premium south Indian filter coffee blend with chicory. Ground fresh, aromatic, dark roast. For HoReCa supply.", unit: "boxes", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["200g", "500g", "1kg", "5kg"] }), isActive: true },

  // Salt (categoryId: 9)
  { id: 31, categoryId: 9, name: "Iodised Table Salt", brand: "Tata Salt", description: "Vacuum-evaporated iodised salt — fine grain, free-flowing, anti-caking. BIS certified for safe consumption.", unit: "bags", minimumOrderQuantity: 20, specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "25kg", "50kg"] }), isActive: true },
  { id: 32, categoryId: 9, name: "Rock Salt (Sendha Namak)", brand: "Rajalakshmi", description: "Natural Himalayan pink rock salt. Unprocessed, mineral-rich, used in Ayurvedic cooking and fasting diets.", unit: "bags", minimumOrderQuantity: 10, specifications: JSON.stringify({ packSizes: ["500g", "1kg", "5kg"] }), isActive: true },

  // Poha & Rava (categoryId: 10)
  { id: 33, categoryId: 10, name: "Thick Poha (Atukulu)", brand: "Rajalakshmi", description: "Machine-cleaned thick flattened rice — fresh milled, uniform flake thickness. For breakfast items and farsan.", unit: "bags", minimumOrderQuantity: 10, specifications: JSON.stringify({ packSizes: ["500g", "1kg", "5kg", "10kg", "25kg"] }), isActive: true },
  { id: 34, categoryId: 10, name: "Thin Poha", brand: "Rajalakshmi", description: "Delicate thin beaten rice flakes — crisp texture, ideal for chivda, quick-cook poha and snack mixes.", unit: "bags", minimumOrderQuantity: 10, specifications: JSON.stringify({ packSizes: ["500g", "1kg", "5kg", "25kg"] }), isActive: true },

  // Millets (categoryId: 11)
  { id: 35, categoryId: 11, name: "Ragi (Finger Millet)", brand: "Rajalakshmi", description: "Whole ragi grain and ragi flour — high calcium and iron content. Trending health staple for modern retail.", unit: "bags", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["500g", "1kg", "5kg", "10kg"] }), isActive: true },
  { id: 36, categoryId: 11, name: "Jowar (Sorghum)", brand: "Rajalakshmi", description: "White sorghum grain — gluten-free, high-fibre. Used for roti, porridge and health food manufacturing.", unit: "bags", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "10kg", "25kg"] }), isActive: true },
  { id: 37, categoryId: 11, name: "Bajra (Pearl Millet)", brand: "Rajalakshmi", description: "Whole bajra pearl millet grains — iron-rich, energy-dense. For roti, malt drinks and health food supply.", unit: "bags", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "10kg", "25kg"] }), isActive: true },
  { id: 38, categoryId: 11, name: "Foxtail Millet (Korralu)", brand: "Rajalakshmi", description: "Nutritious foxtail millet — low glycemic index, high protein. Popular in Andhra Pradesh daily cooking.", unit: "bags", minimumOrderQuantity: 5, specifications: JSON.stringify({ packSizes: ["500g", "1kg", "5kg"] }), isActive: true },
];

// Helper: get products by category slug
export function getProductsBySlug(slug: string): Product[] {
  const cat = CATEGORIES.find(c => c.slug === slug);
  if (!cat) return [];
  return PRODUCTS.filter(p => p.categoryId === cat.id && p.isActive);
}

// Helper: get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug);
}

// Helper: search products
export function searchProducts(query: string): Product[] {
  if (!query.trim()) return PRODUCTS.filter(p => p.isActive);
  const q = query.toLowerCase();
  return PRODUCTS.filter(p =>
    p.isActive && (
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      CATEGORIES.find(c => c.id === p.categoryId)?.name.toLowerCase().includes(q)
    )
  );
}

// Helper: parse pack sizes
export function getPackSizes(product: Product): string[] {
  try {
    const parsed = JSON.parse(product.specifications);
    if (parsed?.packSizes) return parsed.packSizes;
  } catch {}
  return ["1kg", "5kg", "10kg", "25kg", "50kg"];
}

// Helper: get all brands
export function getBrands(categoryId?: number): string[] {
  const prods = categoryId
    ? PRODUCTS.filter(p => p.categoryId === categoryId && p.isActive)
    : PRODUCTS.filter(p => p.isActive);
  return [...new Set(prods.map(p => p.brand))];
}

// Helper: get unit price (deterministic)
export function getUnitPrice(productId: number): number {
  return ((productId * 17) % 1500) + 1800;
}
