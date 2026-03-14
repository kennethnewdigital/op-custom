export interface Product {
  slug: string;
  name: string;
  price: string;
  priceNum: number;
  originalPrice: string | null;
  badge: "REA" | "Limited" | null;
  category: string;
  image: string;
  description: string;
  details: string[];
  stripePriceId: string; // Connect later in Stripe Dashboard
}

export const products: Product[] = [
  {
    slug: "scotty-cameron-moto-ltd-newport-2",
    name: "Scotty Cameron MOTO LTD Newport 2",
    price: "9 999 kr",
    priceNum: 999900,
    originalPrice: "12 999 kr",
    badge: "REA",
    category: "Putters",
    image: "https://images.unsplash.com/photo-1592919505780-303950717480?w=800&h=800&fit=crop",
    description: "Den ikoniska Newport 2 i en exklusiv MOTO Limited Edition. Precision och känsla i toppklass med handgjord finish.",
    details: [
      "Scotty Cameron Studio Design",
      "Newport 2 bladmodell",
      "MOTO Limited Edition finish",
      "34\" standardlängd",
      "Handgjord i Carlsbad, Kalifornien",
    ],
    stripePriceId: "price_XXXXX", // Replace with real Stripe Price ID
  },
  {
    slug: "taylormade-qi10-fairway-wood",
    name: "TaylorMade Qi10 Fairway Wood",
    price: "3 399 kr",
    priceNum: 339900,
    originalPrice: "5 999 kr",
    badge: "REA",
    category: "Fairway Woods",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=800&fit=crop",
    description: "TaylorMade Qi10 med revolutionerande karbonkrona och titanium sula. Maximal fart och förlåtande träffyta.",
    details: [
      "Karbonkrona för lägre tyngdpunkt",
      "Titanium sula",
      "Speed Pocket för bättre bollhastighet",
      "Twist Face teknologi",
      "Tillgänglig i 3W och 5W",
    ],
    stripePriceId: "price_XXXXX",
  },
  {
    slug: "scotty-cameron-jet-set-black",
    name: "Scotty Cameron Jet Set Black",
    price: "8 999 kr",
    priceNum: 899900,
    originalPrice: "12 999 kr",
    badge: "REA",
    category: "Putters",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&h=800&fit=crop",
    description: "Jet Set serien i elegant svart finish. Perfekt balans mellan klassisk design och modern prestanda.",
    details: [
      "Jet Set Limited kollektion",
      "Svart PVD-finish",
      "Milled face insert",
      "Custom grip och headcover ingår",
      "Numrerad limited edition",
    ],
    stripePriceId: "price_XXXXX",
  },
  {
    slug: "taylormade-qi10-max-designer-series",
    name: "TaylorMade Qi10 Max Designer Series",
    price: "5 399 kr",
    priceNum: 539900,
    originalPrice: "8 999 kr",
    badge: "REA",
    category: "Drivers",
    image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=800&h=800&fit=crop",
    description: "Designer Series med unik grafisk design. Samma banbrytande Qi10 Max-prestanda i ett exklusivt utförande.",
    details: [
      "60x Carbon Twist Face",
      "Qi10 Max förlåtande profil",
      "Designer Series custom färg",
      "Speed Injected face",
      "Justerbar loft ±2°",
    ],
    stripePriceId: "price_XXXXX",
  },
  {
    slug: "scotty-cameron-special-select-4th-of-july",
    name: "Scotty Cameron Special Select 4th of July",
    price: "9 599 kr",
    priceNum: 959900,
    originalPrice: null,
    badge: "Limited",
    category: "Putters",
    image: "https://images.unsplash.com/photo-1592919505780-303950717480?w=800&h=800&fit=crop",
    description: "Exklusiv Special Select-utgåva med patriotisk design. Extremt sällsynt samlarputter i begränsad upplaga.",
    details: [
      "Special Select kollektion",
      "Begränsad upplaga — 4th of July",
      "Röd, vit och blå detaljer",
      "Matchande headcover ingår",
      "Certifikat äkthet",
    ],
    stripePriceId: "price_XXXXX",
  },
  {
    slug: "scotty-cameron-jet-set-newport-ltd",
    name: "Scotty Cameron Jet Set Newport LTD",
    price: "9 999 kr",
    priceNum: 999900,
    originalPrice: null,
    badge: "Limited",
    category: "Putters",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=800&fit=crop",
    description: "Newport-modellen i den eftertraktade Jet Set LTD-serien. Tidlös design med premiumkänsla.",
    details: [
      "Newport bladmodell",
      "Jet Set LTD kollektion",
      "Tour-inspirerad finish",
      "Milled 303 stainless steel",
      "Custom headcover och grip",
    ],
    stripePriceId: "price_XXXXX",
  },
  {
    slug: "scotty-cameron-jet-set-phantom-ltd",
    name: "Scotty Cameron Jet Set Phantom LTD",
    price: "9 999 kr",
    priceNum: 999900,
    originalPrice: null,
    badge: "Limited",
    category: "Putters",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&h=800&fit=crop",
    description: "Phantom-modellen med mallet-design i Jet Set LTD-utförande. Maximal stabilitet och alignment.",
    details: [
      "Phantom mallet-modell",
      "Jet Set LTD kollektion",
      "Hög MOI för stabilitet",
      "Alignment-linjer på toppen",
      "Dual-balance viktfördelning",
    ],
    stripePriceId: "price_XXXXX",
  },
  {
    slug: "scotty-cameron-jet-set-del-mar-ltd",
    name: "Scotty Cameron Jet Set Del Mar LTD",
    price: "9 999 kr",
    priceNum: 999900,
    originalPrice: null,
    badge: "Limited",
    category: "Putters",
    image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=800&h=800&fit=crop",
    description: "Del Mar i Jet Set LTD-serien. Mid-mallet med perfekt balans mellan precision och förlåtelse.",
    details: [
      "Del Mar mid-mallet modell",
      "Jet Set LTD kollektion",
      "Flow neck hosel",
      "Bred sula för stabilitet",
      "Premium grip och headcover",
    ],
    stripePriceId: "price_XXXXX",
  },
];

export interface Lesson {
  slug: string;
  title: string;
  duration: string;
  price: string;
  priceNum: number;
  desc: string;
  popular?: boolean;
  stripePriceId: string;
}

export const lessons: Lesson[] = [
  {
    slug: "privatlektion-60",
    title: "Privatlektion",
    duration: "60 min",
    price: "1 200 kr",
    priceNum: 120000,
    desc: "En-till-en undervisning anpassad efter din nivå och dina mål. Videoanalys och övningsplan ingår.",
    stripePriceId: "price_XXXXX",
  },
  {
    slug: "halvlektion-30",
    title: "Halvlektion",
    duration: "30 min",
    price: "700 kr",
    priceNum: 70000,
    desc: "Fokuserad session på ett specifikt område — sving, kortspel eller putting.",
    stripePriceId: "price_XXXXX",
  },
  {
    slug: "paket-5-lektioner",
    title: "Paket 5 lektioner",
    duration: "5 × 60 min",
    price: "5 100 kr",
    priceNum: 510000,
    desc: "Spara 15% med ett paket. Perfekt för att bygga en stabil grund och följa upp framsteg.",
    popular: true,
    stripePriceId: "price_XXXXX",
  },
  {
    slug: "paket-10-lektioner",
    title: "Paket 10 lektioner",
    duration: "10 × 60 min",
    price: "9 600 kr",
    priceNum: 960000,
    desc: "Maximera din utveckling med 10 lektioner. Mest prisvärt för den dedikerade spelaren.",
    stripePriceId: "price_XXXXX",
  },
  {
    slug: "nyborjarkurs",
    title: "Nybörjarkurs",
    duration: "4 × 90 min",
    price: "2 400 kr",
    priceNum: 240000,
    desc: "Lär dig grunderna i golf. Sving, regler, etikett och kortspel. Grupp om max 4 personer.",
    stripePriceId: "price_XXXXX",
  },
  {
    slug: "on-course-lektion",
    title: "On-Course Lektion",
    duration: "90 min",
    price: "1 800 kr",
    priceNum: 180000,
    desc: "Spela 4-6 hål tillsammans med Nico. Lär dig kurshantering, strategi och mentalt spel.",
    stripePriceId: "price_XXXXX",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
