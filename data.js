/**
 * Data Store - Cirebon Rattan Heritage (CV. Ridwan Rattan Export)
 * Products, Variants, Stock Availability, International Shipping Rates & Export FAQs
 * International English Edition for Global & Malaysian Export Markets
 */

const businessProfile = {
  name: "Cirebon Rattan Heritage",
  legalName: "CV. Ridwan Rattan Nusantara",
  founder: "Mr. H. Ridwan Mansyur, B.Eng.",
  tagline: "Fine Handcrafted Indonesian Rattan Furniture — Export Specialist to Malaysia & Global Markets",
  address: "Jl. Raya Tegalwangi No. 88, Rattan Industrial Zone, Weru, Cirebon, West Java 45154, Indonesia",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  email: "export@cirebonrattan.id",
  established: 2008,
  monthlyCapacity: "15 - 20 Containers (40ft High Cube)",
  factoryArea: "6,500 m² (Kiln Drying, Framework, Weaving & Export Packaging Center)",
  totalArtisans: "120+ Master Rattan Artisans of Cirebon",
  exportDestinations: "Malaysia (Port Klang, Penang, Johor) & 42+ Countries Worldwide",
  certifications: [
    {
      code: "ATIGA Form D",
      name: "ASEAN Trade in Goods Agreement",
      desc: "Official Preferential Certificate of Origin: 0% Import Duty on entry into Malaysia."
    },
    {
      code: "SVLK / V-Legal",
      name: "Indonesian Timber & Rattan Legality Verification",
      desc: "Guarantees 100% sustainable sourcing from certified Indonesian conservation forests."
    },
    {
      code: "MAQIS & ISPM 15",
      name: "Malaysian & International Quarantine Standard",
      desc: "Certified AFAS fumigation ensuring zero wood-boring insects for smooth customs clearance."
    },
    {
      code: "Phytosanitary",
      name: "Indonesian Agricultural Quarantine Agency",
      desc: "Official plant health clearance certificate recognized by global customs authorities."
    },
    {
      code: "ISO 9001:2015",
      name: "Quality Management Certified",
      desc: "Strict moisture control (MC < 12%), non-toxic water-based eco lacquer, and structural load testing."
    }
  ]
};

// Currency conversion rate: 1 USD = Rp 15,500
const USD_RATE = 15500;

const productsData = [
  {
    id: "crh-001",
    name: "The Tegalwangi Lounge Armchair",
    category: "Living",
    status: "ready", // ready | preorder
    stock: 142,
    leadTimeDays: 2, // packaging & dispatch readiness
    basePriceIdr: 1450000,
    basePriceUsd: 95,
    cbm: 0.45,
    weightKg: 8.5,
    rating: 4.9,
    reviewsCount: 38,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580481077195-c3f99dd74799?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Iconic lounge chair handcrafted from solid Cirebon natural pole rattan with fine peel weaving.",
    description: "Signature Scandinavian-meets-Tropical lounge armchair. Ergonomically angled at 105 degrees for maximum relaxation. Handcrafted by master artisans of Tegalwangi Village. Ideal for high-end boutique hotels, island villas in Langkawi/Penang, and modern minimalist living spaces.",
    dimensions: "W 72 cm x D 78 cm x H 84 cm (Seat H: 42 cm)",
    material: "Solid Grade-A Natural Manau Rattan Poles + Fine Peel Weave",
    variants: {
      colors: [
        { name: "Natural Honey Clear Coat", priceDiff: 0, preview: "#d97706" },
        { name: "Bleached Nordic Wash", priceDiff: 50000, preview: "#fef3c7" },
        { name: "Dark Smoked Walnut", priceDiff: 75000, preview: "#543821" },
        { name: "Matte Charcoal Black", priceDiff: 75000, preview: "#262626" }
      ],
      weaves: [
        { name: "Standard Classic Peel", priceDiff: 0 },
        { name: "Double Weave Heavy Duty", priceDiff: 85000 },
        { name: "Kubu Grey Weathered", priceDiff: 60000 }
      ],
      cushions: [
        { name: "Without Cushion (Frame Only)", priceDiff: 0 },
        { name: "Off-White Canvas (High-Density Foam D-28)", priceDiff: 180000 },
        { name: "Sunbrella® Outdoor Waterproof Fabric", priceDiff: 320000 }
      ]
    },
    features: [
      "Kiln-dried solid Manau rattan (Moisture Content < 12%)",
      "Load capacity tested up to 150 kg (330 lbs)",
      "Finished with non-toxic, eco-friendly water-based topcoat",
      "Fitted with non-scratch nylon floor glides"
    ]
  },
  {
    id: "crh-002",
    name: "Kuningan Dining Set (1 Table + 4 Chairs)",
    category: "Dining",
    status: "ready",
    stock: 35,
    leadTimeDays: 3,
    basePriceIdr: 5800000,
    basePriceUsd: 380,
    cbm: 1.35,
    weightKg: 34.0,
    rating: 5.0,
    reviewsCount: 24,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Round dining table (Dia 110cm) with 8mm tempered glass top and 4 ergonomic handwoven chairs.",
    description: "An elegant dining centerpiece combining steam-bent rattan spider legs, an 8mm heat-resistant tempered glass tabletop, and 4 matching ergonomic dining chairs. Designed for commercial hospitality projects and luxury homes.",
    dimensions: "Table: Dia 110 x H 76 cm | Chairs: W 54 x D 56 x H 88 cm",
    material: "Selected Natural Rattan Poles + 8mm Tempered Glass",
    variants: {
      colors: [
        { name: "Natural Warm Honey", priceDiff: 0, preview: "#b45309" },
        { name: "Antique Walnut Glaze", priceDiff: 150000, preview: "#451a03" },
        { name: "Organic Raw Matte", priceDiff: 0, preview: "#e2b87f" }
      ],
      weaves: [
        { name: "Open Cane Webbing (Hexagonal Mesh)", priceDiff: 0 },
        { name: "Tight Basket Weave", priceDiff: 120000 }
      ],
      cushions: [
        { name: "4x Cream Linen Cushions Included", priceDiff: 350000 },
        { name: "4x Velvet Olive Cushions Included", priceDiff: 500000 },
        { name: "Without Cushions (Frame Only)", priceDiff: 0 }
      ]
    },
    features: [
      "8mm heavy-duty impact and heat-resistant tempered glass",
      "Reinforced spider-leg base structure",
      "Ergonomic lumbar support for prolonged seating",
      "Packaged in 5-ply export master carton with foam corner guards"
    ]
  },
  {
    id: "crh-003",
    name: "Plumbon Hanging Egg Swing Chair",
    category: "Living",
    status: "ready",
    stock: 60,
    leadTimeDays: 2,
    basePriceIdr: 2250000,
    basePriceUsd: 148,
    cbm: 0.95,
    weightKg: 19.5,
    rating: 4.8,
    reviewsCount: 52,
    image: "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Suspended egg-shaped swing lounger with plush cushions, heavy-duty steel chain & stand.",
    description: "A best-selling statement piece for tropical resorts, residential balconies, and patio terraces. Available in natural rattan for shaded indoor/semi-outdoor settings or UV-resistant synthetic all-weather wicker.",
    dimensions: "Basket: W 95 x D 80 x H 125 cm | Steel Stand: Dia 105 x H 195 cm",
    material: "Steel Frame / Natural Pole + UV-Stabilized All-Weather Weave",
    variants: {
      colors: [
        { name: "Natural Golden Rattan", priceDiff: 0, preview: "#d97706" },
        { name: "Snow White Pure", priceDiff: 60000, preview: "#f8fafc" },
        { name: "Dark Espresso Coffee", priceDiff: 60000, preview: "#291b10" }
      ],
      weaves: [
        { name: "Natural Rattan (Indoor / Shaded)", priceDiff: 0 },
        { name: "Synthetic PE UV-Protected (Outdoor)", priceDiff: 180000 }
      ],
      cushions: [
        { name: "Plush Off-White Cushion Set Included", priceDiff: 0 },
        { name: "Sage Green Cushion Set Included", priceDiff: 50000 },
        { name: "Terracotta Orange Cushion Set Included", priceDiff: 50000 }
      ]
    },
    features: [
      "Complete with galvanized safety hanging spring & chain",
      "Tested load capacity up to 180 kg (400 lbs)",
      "Removable and machine-washable cushion covers",
      "Weather-resistant powder-coated base frame"
    ]
  },
  {
    id: "crh-004",
    name: "Sunyaragi Woven Pendant Lamp (Set/Piece)",
    category: "Lighting",
    status: "ready",
    stock: 320,
    leadTimeDays: 1,
    basePriceIdr: 450000,
    basePriceUsd: 30,
    cbm: 0.15,
    weightKg: 2.2,
    rating: 4.9,
    reviewsCount: 89,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Artisan woven pendant lampshade crafting dramatic shadow patterns and warm ambient lighting.",
    description: "Finely woven from flexible natural rattan pitrit by Cirebon master weavers. Widely specified by interior designers for bohemian cafes, tropical dining pavilions, and Japandi-style dining rooms.",
    dimensions: "Diameter 55 cm x Height 50 cm",
    material: "Handwoven Natural Rattan Pitrit & Metal Inner Ring",
    variants: {
      colors: [
        { name: "Raw Natural Blonde", priceDiff: 0, preview: "#fed7aa" },
        { name: "Smoked Bamboo Brown", priceDiff: 25000, preview: "#78350f" },
        { name: "Modern Matte Black", priceDiff: 35000, preview: "#1f2937" }
      ],
      weaves: [
        { name: "Bell Shape (Classic)", priceDiff: 0 },
        { name: "Dome Shape (Jumbo Dia 70cm)", priceDiff: 120000 },
        { name: "Cylinder Tube Style", priceDiff: 15000 }
      ],
      cushions: [
        { name: "Shade Only (Universal E27 / E26 Ring)", priceDiff: 0 },
        { name: "Include 1.5m Fabric Cable + Wood Fitting", priceDiff: 75000 }
      ]
    },
    features: [
      "Tight weave precision by senior master craftsmen",
      "Universal bulb fitting socket (E26 / E27 compatible)",
      "Ultra lightweight and safe for any ceiling type",
      "Nesting stackable packaging to minimize freight CBM"
    ]
  },
  {
    id: "crh-005",
    name: "Ciremai Modular Daybed & Coffee Table",
    category: "Outdoor",
    status: "preorder",
    stock: 0,
    leadTimeDays: 18, // Pre-order 18 days
    basePriceIdr: 7500000,
    basePriceUsd: 490,
    cbm: 1.80,
    weightKg: 42.0,
    rating: 5.0,
    reviewsCount: 16,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Modular luxury 3-seater daybed with round glass coffee table for pool decks and beach resorts.",
    description: "Constructed with rust-free, heavy-gauge aluminum frames and German-grade Rehau UV-stabilized synthetic polyethylene weave. Engineered to withstand high humidity, saltwater breezes, and scorching tropical sunshine.",
    dimensions: "W 210 cm x D 95 cm x H 72 cm + Table Dia 65 cm",
    material: "Aluminum Frame + UV-Resistant PE Weave + QuickDry Reticulated Foam",
    variants: {
      colors: [
        { name: "Natural Honey Weatherproof", priceDiff: 0, preview: "#d97706" },
        { name: "Driftwood Ash Grey", priceDiff: 150000, preview: "#9ca3af" },
        { name: "Charcoal Slate", priceDiff: 150000, preview: "#374151" }
      ],
      weaves: [
        { name: "Half-Round Ribbed Weave (Commercial Grade)", priceDiff: 0 },
        { name: "Open V-Pattern Weave", priceDiff: 100000 }
      ],
      cushions: [
        { name: "QuickDry Foam + Sunbrella® Taupe", priceDiff: 650000 },
        { name: "QuickDry Foam + Sunbrella® Navy", priceDiff: 650000 },
        { name: "Standard Water-Repellent Olefin", priceDiff: 0 }
      ]
    },
    features: [
      "Modular design can be arranged straight or in L-shape layout",
      "Anti-microbial QuickDry foam dries fully in under 45 minutes",
      "3-year manufacturer guarantee on UV color fastness",
      "Includes matching round woven coffee table with 6mm glass"
    ]
  },
  {
    id: "crh-006",
    name: "Weru Boho Nesting Baskets (Set of 3)",
    category: "Decor",
    status: "ready",
    stock: 250,
    leadTimeDays: 1,
    basePriceIdr: 380000,
    basePriceUsd: 25,
    cbm: 0.12,
    weightKg: 3.0,
    rating: 4.8,
    reviewsCount: 74,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Set of 3 multi-purpose woven organizer baskets with reinforced rattan handles and fringe accents.",
    description: "Versatile handcrafted storage baskets ideal for laundry, hotel towel storage, indoor plant covers (planters), or blanket organizers. Fully nesting design ensures zero wasted container space.",
    dimensions: "S (Dia 28 x H 30) | M (Dia 36 x H 35) | L (Dia 44 x H 40 cm)",
    material: "Natural Water Hyacinth + Solid Rattan Core Skeleton",
    variants: {
      colors: [
        { name: "Natural Honey & White Stripe", priceDiff: 0, preview: "#fde68a" },
        { name: "Monochrome Black Bottom Dip", priceDiff: 20000, preview: "#334155" },
        { name: "Terracotta Earth Accent", priceDiff: 25000, preview: "#c2410c" }
      ],
      weaves: [
        { name: "Diagonal Chevron Weave", priceDiff: 0 },
        { name: "Braided Rope Style", priceDiff: 30000 }
      ],
      cushions: [
        { name: "Open Top Model with Handles", priceDiff: 0 },
        { name: "With Fitted Handwoven Lids", priceDiff: 60000 }
      ]
    },
    features: [
      "Nesting set of 3 (zero dead space in export containers)",
      "Reinforced rattan handles stitched with durable nylon cords",
      "Load capacity tested up to 15 kg per basket",
      "Treated with 70°C kiln-dry anti-mildew thermal process"
    ]
  },
  {
    id: "crh-007",
    name: "Batik Trusmi High Rattan Barstool",
    category: "Dining",
    status: "ready",
    stock: 85,
    leadTimeDays: 2,
    basePriceIdr: 890000,
    basePriceUsd: 58,
    cbm: 0.24,
    weightKg: 5.5,
    rating: 4.9,
    reviewsCount: 31,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "High barstool featuring breathable geometric backrest inspired by Cirebon Mega Mendung motif.",
    description: "Sleek and sturdy counter-height stool for kitchen islands, beach bars, and commercial cafe fit-outs. Natural open weave ensures continuous airflow for comfortable seating in tropical climates.",
    dimensions: "W 48 cm x D 50 cm x H 98 cm (Seat Height: 75 cm)",
    material: "Steam-Bent Solid Rattan Pole + Handwoven Rattan Bark",
    variants: {
      colors: [
        { name: "Natural Honey Finish", priceDiff: 0, preview: "#d97706" },
        { name: "Dark Walnut Glaze", priceDiff: 35000, preview: "#5b21b6" },
        { name: "Vintage White Wash", priceDiff: 40000, preview: "#f1f5f9" }
      ],
      weaves: [
        { name: "Diamond Geometric Weave", priceDiff: 0 },
        { name: "Fine Square Cannage Weave", priceDiff: 50000 }
      ],
      cushions: [
        { name: "Woven Seat Top (Without Cushion)", priceDiff: 0 },
        { name: "Round Faux Leather Cushion Pad", priceDiff: 95000 },
        { name: "Round Cream Linen Cushion Pad", priceDiff: 75000 }
      ]
    },
    features: [
      "Sturdy footrest reinforced with double solid rattan rings",
      "75cm seat height fits standard 100-110 cm bar counters",
      "Stackable design (up to 4 stools) for shipping efficiency",
      "Fitted with floor-protecting nylon glides"
    ]
  },
  {
    id: "crh-008",
    name: "Keraton Heritage Woven Headboard (King Size)",
    category: "Living",
    status: "preorder",
    stock: 0,
    leadTimeDays: 14, // PO 14 days
    basePriceIdr: 3200000,
    basePriceUsd: 210,
    cbm: 0.42,
    weightKg: 14.0,
    rating: 5.0,
    reviewsCount: 19,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Regal floral-arch king-size headboard handcrafted by Cirebon palace master artisans.",
    description: "An awe-inspiring master bedroom focal point inspired by royal Cirebon Kraton palace architecture. Adds organic warmth, acoustic softness, and luxury craftsmanship to boutique hotel suites and private residences.",
    dimensions: "W 180 cm x D 6 cm x H 140 cm (King Size)",
    material: "Full Natural Rattan Mandola Poles & Slimit Weaving",
    variants: {
      colors: [
        { name: "Natural Honey Satin", priceDiff: 0, preview: "#d97706" },
        { name: "Antique Shabby White", priceDiff: 100000, preview: "#f8fafc" },
        { name: "Smoked Caramel Brown", priceDiff: 100000, preview: "#78350f" }
      ],
      weaves: [
        { name: "Mandala Sunburst Floral Pattern", priceDiff: 0 },
        { name: "Royal Crown Arch Pattern", priceDiff: 150000 }
      ],
      cushions: [
        { name: "King Size (Width 180 cm)", priceDiff: 0 },
        { name: "Queen Size (Width 160 cm)", priceDiff: -250000 },
        { name: "Super King Size (Width 200 cm)", priceDiff: 350000 }
      ]
    },
    features: [
      "Solid rigid structure yet lightweight and easy to mount",
      "Includes concealed heavy-duty wall-mounting brackets",
      "Silky smooth hand-sanded finish to protect delicate bedsheets",
      "Handmade bespoke commission with 100% precision guarantee"
    ]
  }
];

// Shipping Destinations Data (Specialized in Malaysia & Global Export Ports)
const shippingDestinations = [
  {
    id: "dest-malaysia-klang",
    name: "🇲🇾 Malaysia - Port Klang (Kuala Lumpur & Selangor Hub)",
    country: "Malaysia",
    portName: "Port Klang (Northport / Westport)",
    type: "Primary Export - Malaysia",
    currency: "USD",
    transitMinDays: 3,
    transitMaxDays: 5,
    rateLclPerCbm: 32, // USD per CBM (~RM 145/CBM)
    rateFcl20ft: 580,  // USD flat
    rateFcl40ft: 980,  // USD flat
    rateAirPerKg: 3.2,
    fumigationRequired: true,
    fumigationFee: 55, // MAQIS / ISPM 15 compliance
    notes: "Direct express route via Malacca Strait from Tanjung Priok to Port Klang. Eligible for ATIGA Form D (0% Import Duty)."
  },
  {
    id: "dest-malaysia-penang",
    name: "🇲🇾 Malaysia - Penang Port (Northern Region & Langkawi)",
    country: "Malaysia",
    portName: "Penang Port (NBCT Container Terminal)",
    type: "Primary Export - Malaysia",
    currency: "USD",
    transitMinDays: 4,
    transitMaxDays: 6,
    rateLclPerCbm: 35,
    rateFcl20ft: 630,
    rateFcl40ft: 1050,
    rateAirPerKg: 3.5,
    fumigationRequired: true,
    fumigationFee: 55,
    notes: "Strategic gateway for luxury resort and villa interior projects in Penang, Langkawi, and Kedah."
  },
  {
    id: "dest-malaysia-johor",
    name: "🇲🇾 Malaysia - Johor Port / PTP (Southern Region)",
    country: "Malaysia",
    portName: "Port of Tanjung Pelepas (PTP) / Johor Port",
    type: "Primary Export - Malaysia",
    currency: "USD",
    transitMinDays: 3,
    transitMaxDays: 5,
    rateLclPerCbm: 34,
    rateFcl20ft: 600,
    rateFcl40ft: 1020,
    rateAirPerKg: 3.4,
    fumigationRequired: true,
    fumigationFee: 55,
    notes: "Southern logistics hub bordering Singapore. Highly efficient for Johor Bahru commercial and residential developments."
  },
  {
    id: "dest-singapore",
    name: "🇸🇬 Singapore (Port of Singapore)",
    country: "Singapore",
    portName: "PSA Singapore Port",
    type: "Export - ASEAN",
    currency: "USD",
    transitMinDays: 3,
    transitMaxDays: 6,
    rateLclPerCbm: 38,
    rateFcl20ft: 680,
    rateFcl40ft: 1150,
    rateAirPerKg: 3.8,
    fumigationRequired: true,
    fumigationFee: 65,
    notes: "Weekly feeder sailing from Jakarta Tanjung Priok directly to PSA Singapore."
  },
  {
    id: "dest-australia-syd",
    name: "🇦🇺 Australia (Sydney / Melbourne / Brisbane)",
    country: "Australia",
    portName: "Port Botany (Sydney) / Port of Melbourne",
    type: "Export - Oceania",
    currency: "USD",
    transitMinDays: 12,
    transitMaxDays: 18,
    rateLclPerCbm: 95,
    rateFcl20ft: 1480,
    rateFcl40ft: 2450,
    rateAirPerKg: 7.5,
    fumigationRequired: true,
    fumigationFee: 95,
    notes: "Compliant with Australian Biosecurity Department (AQIS / AFAS accredited fumigation treatment)."
  },
  {
    id: "dest-japan-tyo",
    name: "🇯🇵 Japan (Tokyo / Yokohama / Osaka / Kobe)",
    country: "Japan",
    portName: "Port of Tokyo / Yokohama",
    type: "Export - East Asia",
    currency: "USD",
    transitMinDays: 10,
    transitMaxDays: 15,
    rateLclPerCbm: 78,
    rateFcl20ft: 1280,
    rateFcl40ft: 2180,
    rateAirPerKg: 6.8,
    fumigationRequired: true,
    fumigationFee: 75,
    notes: "Complies with Japanese Agricultural Standards (JAS) & Plant Quarantine inspection standards."
  },
  {
    id: "dest-europe-rot",
    name: "🇪🇺 Europe (Rotterdam, Netherlands / Hamburg, Germany)",
    country: "European Union",
    portName: "Port of Rotterdam / Hamburg",
    type: "Export - Europe",
    currency: "USD",
    transitMinDays: 24,
    transitMaxDays: 32,
    rateLclPerCbm: 120,
    rateFcl20ft: 1950,
    rateFcl40ft: 3250,
    rateAirPerKg: 9.2,
    fumigationRequired: true,
    fumigationFee: 85,
    notes: "Covered by Indonesia-EU FLEGT VPA (SVLK V-Legal document) and ISPM 15 export packing."
  },
  {
    id: "dest-usa-west",
    name: "🇺🇸 USA West Coast (Los Angeles / Long Beach, CA)",
    country: "United States",
    portName: "Port of Los Angeles / Long Beach",
    type: "Export - North America",
    currency: "USD",
    transitMinDays: 20,
    transitMaxDays: 28,
    rateLclPerCbm: 135,
    rateFcl20ft: 2250,
    rateFcl40ft: 3750,
    rateAirPerKg: 10.5,
    fumigationRequired: true,
    fumigationFee: 85,
    notes: "Direct trans-Pacific ocean freight from Port Tanjung Priok Jakarta to Los Angeles."
  },
  {
    id: "dest-domestic",
    name: "🇮🇩 Domestic Indonesia (Jakarta / Surabaya / Bali)",
    country: "Indonesia",
    portName: "Tanjung Priok / Tanjung Perak Hub",
    type: "Domestic",
    currency: "IDR",
    transitMinDays: 2,
    transitMaxDays: 5,
    rateLclPerCbm: 280000,
    rateFcl20ft: 4500000,
    rateFcl40ft: 7500000,
    rateAirPerKg: 35000,
    fumigationRequired: false,
    fumigationFee: 0,
    notes: "Direct factory trucking delivery from Cirebon to buyer warehouses across Java and Bali."
  }
];

// Interactive FAQ Data (International Export Edition)
const faqData = [
  {
    id: "faq-1",
    category: "ketersediaan",
    categoryName: "Stock Availability",
    question: "Are products in stock (Ready Stock) or made-to-order (Pre-Order)?",
    answer: "We operate a transparent dual inventory system. Items with a green pulsing badge <strong>'READY STOCK'</strong> are stored in our Cirebon export warehouse and can be prepared for container loading within 1-3 business days. For shipments to Malaysia (Port Klang, Penang, Johor), ready items can reach your port in just <strong>3 to 5 sailing days</strong>! Items marked with an amber badge <strong>'PRE-ORDER / MADE TO ORDER'</strong> require 10-21 business days production lead time depending on order volume and custom architectural specifications."
  },
  {
    id: "faq-2",
    category: "varian",
    categoryName: "Variants & Customization",
    question: "What customization variants are available (colors, weaves, cushions, dimensions)?",
    answer: "Every model offers extensive customization options popular in luxury tropical markets:\n1. <strong>Finishing Colors:</strong> Natural Honey Clear Coat, Bleached Scandinavian Wash, Smoked Walnut, Antique Matte Charcoal, and custom color matching.\n2. <strong>Weave Patterns:</strong> Natural Peel Weave, Core Pitrit, Weathered Kubu Grey, and Heavy-Duty UV-Resistant Synthetic Polyethylene (all-weather outdoor).\n3. <strong>Cushions & Upholstery:</strong> High-density D-28 foam with natural linen, water-repellent canvas, or original Sunbrella® marine waterproof fabrics.\n4. <strong>Custom Sizing:</strong> We gladly accommodate bespoke dimensions tailored to your interior design and architectural floor plans."
  },
  {
    id: "faq-3",
    category: "harga",
    categoryName: "Pricing & Wholesale Discounts",
    question: "How is the total order price calculated, and are bulk container discounts available?",
    answer: "Pricing is calculated in real time: (Unit Variant Price x Quantity) - Volume Discount + Ocean Freight & Fumigation. We provide an <strong>Official Tiered Export Discount Structure</strong>:\n• <strong>1 - 9 Units:</strong> Standard Unit Price (Sample / Boutique tier)\n• <strong>10 - 49 Units:</strong> Automatic 5% Discount (Commercial / Hospitality tier)\n• <strong>50 - 99 Units:</strong> 12% Discount (Full 20ft Container capacity)\n• <strong>100+ Units:</strong> 18% Discount (Full 40ft High Cube Container capacity)\nYou can toggle between US Dollar (USD $) and Indonesian Rupiah (IDR Rp) at any time. Prices are highly competitive when converted to Malaysian Ringgit (MYR)!"
  },
  {
    id: "faq-4",
    category: "pengiriman",
    categoryName: "Shipping Costs to Malaysia & Global Ports",
    question: "What are the shipping costs to Malaysia (Port Klang, Penang, Johor) and global ports?",
    answer: "Shipments depart from Port Tanjung Priok (Jakarta) via direct weekly feeder sailings at transparent, cost-effective rates:\n• <strong>LCL (Less than Container Load):</strong> Starting from <strong>$32 USD / CBM</strong> (~RM 145 / CBM) to Port Klang.\n• <strong>FCL 20ft Full Container (~30 CBM):</strong> Approximately <strong>$580 USD</strong> flat (fits 60-80 armchairs).\n• <strong>FCL 40ft High Cube Container (~68 CBM):</strong> Approximately <strong>$980 USD</strong> flat (fits 180-240 mixed pieces).\n• <strong>Air Cargo Express:</strong> $3.2 USD / kg for urgent prototype samples (1-2 days to KLIA Kuala Lumpur).\nAll shipments include export clearance documentation."
  },
  {
    id: "faq-5",
    category: "estimasi",
    categoryName: "Estimated Delivery Time (ETA)",
    question: "How long does it take for goods to arrive at my destination port?",
    answer: "Due to our close geographical proximity across the Malacca Strait, delivery to Malaysia is exceptionally fast:\n• <strong>Port Klang (Selangor / KL):</strong> Only <strong>3 - 5 sailing days</strong> from Tanjung Priok.\n• <strong>Penang Port (Northern Region / Langkawi):</strong> Approx. <strong>4 - 6 sailing days</strong>.\n• <strong>Johor Port / PTP:</strong> Approx. <strong>3 - 5 sailing days</strong>.\nTotal estimated arrival time equals: Factory preparation/packing lead time (1-3 days for ready stock) + Ocean transit days. Bill of Lading (B/L) and live container tracking numbers are issued immediately once the vessel departs."
  },
  {
    id: "faq-6",
    category: "legalitas",
    categoryName: "ATIGA Form D (0% Duty) & Quarantine",
    question: "Are shipments eligible for 0% import duty in Malaysia, and are quarantine certificates provided?",
    answer: "Yes, 100%! As an Indonesian exporter, all our rattan shipments to Malaysia are accompanied by the <strong>ATIGA Form D (ASEAN Trade in Goods Agreement)</strong> Certificate of Origin, entitling buyers to <strong>0% IMPORT DUTY (Zero Tariff)</strong> on arrival in Malaysia!\nIn addition, we provide:\n1. <strong>ISPM 15 & MAQIS Fumigation Certificate:</strong> Certified by accredited treatment providers to ensure goods are 100% free of wood pests.\n2. <strong>SVLK / V-Legal Indonesia:</strong> Proof of legal timber and rattan sustainability recognized globally.\n3. <strong>Phytosanitary Certificate:</strong> Issued by the Indonesian Agricultural Quarantine Agency."
  },
  {
    id: "faq-7",
    category: "pembayaran",
    categoryName: "Payment Terms",
    question: "What payment terms are accepted for international and Malaysian clients?",
    answer: "We support standard international commercial banking methods:\n• <strong>T/T (Telegraphic Transfer):</strong> 40% Deposit upon Purchase Order (PO) confirmation, and 60% balance payment upon surrender of Bill of Lading (B/L) copy and export documents.\n• <strong>Irrevocable L/C at Sight:</strong> Accepted from leading Malaysian and international banks (Maybank, CIMB, Public Bank, RHB, HSBC) for full container loads.\n• <strong>Invoicing Currencies:</strong> USD, EUR, SGD, or IDR equivalent."
  },
  {
    id: "faq-8",
    category: "kemasan",
    categoryName: "Export Protective Packaging",
    question: "How is furniture packaged to prevent mold or damage during ocean transit?",
    answer: "We adhere strictly to our <strong>4-Tier Export Protective Packaging Protocol</strong>:\n1. <em>Controlled Moisture Content:</em> All rattan is kiln-dried to a strict Moisture Content (MC) below 12%.\n2. <em>Foam Sheet & Bubble Wrapping:</em> Complete cushioned wrapping shielding all curved frames from friction.\n3. <em>Corrugated Paper Edge Protectors:</em> Heavy-duty cardboard pads protecting vulnerable corners and chair legs.\n4. <em>5-Ply Master Export Cartons:</em> Heavy double-wall cartons engineered for high container stacking pressure.\n5. <em>Silica Gel Desiccant Bags:</em> Placed inside every box and container wall to absorb maritime humidity, ensuring goods arrive dry and pristine."
  }
];

// Global Client Testimonials (Highlighting Malaysian & International Buyers)
const testimonialsData = [
  {
    name: "Dato' Sri Farhan bin Ismail",
    company: "Nusantara Living Sdn. Bhd.",
    country: "Kuala Lumpur, Malaysia",
    flag: "🇲🇾",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    comment: "We imported 3x 40ft High Cube containers of handcrafted Tegalwangi rattan from Mr. Ridwan for luxury resort villas in Langkawi and boutique hotels in KL. The craftsmanship is world-class, the ATIGA Form D 0% import duty documents were flawless, and the ship arrived at Port Klang in just 4 days!",
    rating: 5
  },
  {
    name: "Puan Noraini Hashim",
    company: "Borneo & Malacca Home Deco",
    country: "Penang, Malaysia",
    flag: "🇲🇾",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    comment: "Mr. Ridwan's Plumbon swing chairs and Kuningan dining sets are best-sellers in our George Town showroom. MAQIS fumigation certificates were completely in order with zero customs friction at Penang Port. Truly our most trusted overseas supplier!",
    rating: 5
  },
  {
    name: "Oliver Weber",
    company: "Nordic Living GmbH",
    country: "Hamburg, Germany",
    flag: "🇩🇪",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    comment: "We import annual 40ft container loads of Cirebon lounge chairs for our retail chain in Germany. The SVLK V-Legal forestry documentation and 5-ply export packaging quality are consistently outstanding.",
    rating: 5
  }
];
