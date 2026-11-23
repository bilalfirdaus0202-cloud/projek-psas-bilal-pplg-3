/**
 * Data Store - Cirebon Rattan Heritage (CV. Ridwan Rattan Export)
 * Products, Variants, Stock Availability, International Shipping Rates & Export FAQs
 * International English Edition for Global & Malaysian Export Markets
 */

const businessProfile = {
  name: "Cirebon Rattan Heritage",
  legalName: "CV. Ridwan Rattan Nusantara",
  founder: "Mr. H. Ridwan Mansyur, B.Eng.",
  tagline: "Fine Handcrafted Indonesian Rattan Furniture â€” Export Specialist to Malaysia & Global Markets",
  address: "Jl. Raya Tegalwangi No. 88, Rattan Industrial Zone, Weru, Cirebon, West Java 45154, Indonesia",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  email: "export@cirebonrattan.id",
  established: 2008,
  monthlyCapacity: "15 - 20 Containers (40ft High Cube)",
  factoryArea: "6,500 mÂ² (Kiln Drying, Framework, Weaving & Export Packaging Center)",
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
        { name: "SunbrellaÂ® Outdoor Waterproof Fabric", priceDiff: 320000 }
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
        { name: "QuickDry Foam + SunbrellaÂ® Taupe", priceDiff: 650000 },
        { name: "QuickDry Foam + SunbrellaÂ® Navy", priceDiff: 650000 },
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
      "Treated with 70Â°C kiln-dry anti-mildew thermal process"
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
    name: "ðŸ‡²ðŸ‡¾ Malaysia - Port Klang (Kuala Lumpur & Selangor Hub)",
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
    name: "ðŸ‡²ðŸ‡¾ Malaysia - Penang Port (Northern Region & Langkawi)",
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
    name: "ðŸ‡²ðŸ‡¾ Malaysia - Johor Port / PTP (Southern Region)",
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
    name: "ðŸ‡¸ðŸ‡¬ Singapore (Port of Singapore)",
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
    name: "ðŸ‡¦ðŸ‡º Australia (Sydney / Melbourne / Brisbane)",
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
    name: "ðŸ‡¯ðŸ‡µ Japan (Tokyo / Yokohama / Osaka / Kobe)",
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
    name: "ðŸ‡ªðŸ‡º Europe (Rotterdam, Netherlands / Hamburg, Germany)",
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
    name: "ðŸ‡ºðŸ‡¸ USA West Coast (Los Angeles / Long Beach, CA)",
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
    name: "ðŸ‡®ðŸ‡© Domestic Indonesia (Jakarta / Surabaya / Bali)",
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
    answer: "Every model offers extensive customization options popular in luxury tropical markets:\n1. <strong>Finishing Colors:</strong> Natural Honey Clear Coat, Bleached Scandinavian Wash, Smoked Walnut, Antique Matte Charcoal, and custom color matching.\n2. <strong>Weave Patterns:</strong> Natural Peel Weave, Core Pitrit, Weathered Kubu Grey, and Heavy-Duty UV-Resistant Synthetic Polyethylene (all-weather outdoor).\n3. <strong>Cushions & Upholstery:</strong> High-density D-28 foam with natural linen, water-repellent canvas, or original SunbrellaÂ® marine waterproof fabrics.\n4. <strong>Custom Sizing:</strong> We gladly accommodate bespoke dimensions tailored to your interior design and architectural floor plans."
  },
  {
    id: "faq-3",
    category: "harga",
    categoryName: "Pricing & Wholesale Discounts",
    question: "How is the total order price calculated, and are bulk container discounts available?",
    answer: "Pricing is calculated in real time: (Unit Variant Price x Quantity) - Volume Discount + Ocean Freight & Fumigation. We provide an <strong>Official Tiered Export Discount Structure</strong>:\nâ€¢ <strong>1 - 9 Units:</strong> Standard Unit Price (Sample / Boutique tier)\nâ€¢ <strong>10 - 49 Units:</strong> Automatic 5% Discount (Commercial / Hospitality tier)\nâ€¢ <strong>50 - 99 Units:</strong> 12% Discount (Full 20ft Container capacity)\nâ€¢ <strong>100+ Units:</strong> 18% Discount (Full 40ft High Cube Container capacity)\nYou can toggle between US Dollar (USD $) and Indonesian Rupiah (IDR Rp) at any time. Prices are highly competitive when converted to Malaysian Ringgit (MYR)!"
  },
  {
    id: "faq-4",
    category: "pengiriman",
    categoryName: "Shipping Costs to Malaysia & Global Ports",
    question: "What are the shipping costs to Malaysia (Port Klang, Penang, Johor) and global ports?",
    answer: "Shipments depart from Port Tanjung Priok (Jakarta) via direct weekly feeder sailings at transparent, cost-effective rates:\nâ€¢ <strong>LCL (Less than Container Load):</strong> Starting from <strong>$32 USD / CBM</strong> (~RM 145 / CBM) to Port Klang.\nâ€¢ <strong>FCL 20ft Full Container (~30 CBM):</strong> Approximately <strong>$580 USD</strong> flat (fits 60-80 armchairs).\nâ€¢ <strong>FCL 40ft High Cube Container (~68 CBM):</strong> Approximately <strong>$980 USD</strong> flat (fits 180-240 mixed pieces).\nâ€¢ <strong>Air Cargo Express:</strong> $3.2 USD / kg for urgent prototype samples (1-2 days to KLIA Kuala Lumpur).\nAll shipments include export clearance documentation."
  },
  {
    id: "faq-5",
    category: "estimasi",
    categoryName: "Estimated Delivery Time (ETA)",
    question: "How long does it take for goods to arrive at my destination port?",
    answer: "Due to our close geographical proximity across the Malacca Strait, delivery to Malaysia is exceptionally fast:\nâ€¢ <strong>Port Klang (Selangor / KL):</strong> Only <strong>3 - 5 sailing days</strong> from Tanjung Priok.\nâ€¢ <strong>Penang Port (Northern Region / Langkawi):</strong> Approx. <strong>4 - 6 sailing days</strong>.\nâ€¢ <strong>Johor Port / PTP:</strong> Approx. <strong>3 - 5 sailing days</strong>.\nTotal estimated arrival time equals: Factory preparation/packing lead time (1-3 days for ready stock) + Ocean transit days. Bill of Lading (B/L) and live container tracking numbers are issued immediately once the vessel departs."
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
    answer: "We support standard international commercial banking methods:\nâ€¢ <strong>T/T (Telegraphic Transfer):</strong> 40% Deposit upon Purchase Order (PO) confirmation, and 60% balance payment upon surrender of Bill of Lading (B/L) copy and export documents.\nâ€¢ <strong>Irrevocable L/C at Sight:</strong> Accepted from leading Malaysian and international banks (Maybank, CIMB, Public Bank, RHB, HSBC) for full container loads.\nâ€¢ <strong>Invoicing Currencies:</strong> USD, EUR, SGD, or IDR equivalent."
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
    flag: "ðŸ‡²ðŸ‡¾",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    comment: "We imported 3x 40ft High Cube containers of handcrafted Tegalwangi rattan from Mr. Ridwan for luxury resort villas in Langkawi and boutique hotels in KL. The craftsmanship is world-class, the ATIGA Form D 0% import duty documents were flawless, and the ship arrived at Port Klang in just 4 days!",
    rating: 5
  },
  {
    name: "Puan Noraini Hashim",
    company: "Borneo & Malacca Home Deco",
    country: "Penang, Malaysia",
    flag: "ðŸ‡²ðŸ‡¾",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    comment: "Mr. Ridwan's Plumbon swing chairs and Kuningan dining sets are best-sellers in our George Town showroom. MAQIS fumigation certificates were completely in order with zero customs friction at Penang Port. Truly our most trusted overseas supplier!",
    rating: 5
  },
  {
    name: "Oliver Weber",
    company: "Nordic Living GmbH",
    country: "Hamburg, Germany",
    flag: "ðŸ‡©ðŸ‡ª",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    comment: "We import annual 40ft container loads of Cirebon lounge chairs for our retail chain in Germany. The SVLK V-Legal forestry documentation and 5-ply export packaging quality are consistently outstanding.",
    rating: 5
  }
];
/**
 * Calculator Engine - Cirebon Rattan Heritage
 * Feature 4 (Total Pricing & Discounts), Feature 5 (Freight & Shipping Rates), Feature 6 (Estimated Time of Arrival / ETA)
 * International English Edition
 */

const calculatorState = {
  items: [], // { product, color, weave, cushion, qty, unitPriceIdr, unitPriceUsd }
  destinationId: "dest-malaysia-klang",
  shippingMode: "auto", // auto | lcl | fcl20 | fcl40 | air
  currency: "USD",      // IDR | USD
  incoterm: "CIF"       // CIF (Freight Included) | FOB (Tanjung Priok Port Loading Only)
};

// Initialize default calculator items so visitors see live simulation immediately on landing
function initDefaultCalculatorItems() {
  const defaultProd1 = productsData.find(p => p.id === "crh-001"); // Lounge Armchair
  const defaultProd2 = productsData.find(p => p.id === "crh-004"); // Pendant Lamp

  if (defaultProd1 && defaultProd2) {
    calculatorState.items = [
      {
        id: "item-" + Date.now() + "-1",
        productId: defaultProd1.id,
        name: defaultProd1.name,
        color: defaultProd1.variants.colors[0].name,
        weave: defaultProd1.variants.weaves[0].name,
        cushion: defaultProd1.variants.cushions[1].name,
        qty: 12, // Tier 5% discount
        unitPriceIdr: defaultProd1.basePriceIdr + defaultProd1.variants.cushions[1].priceDiff,
        unitPriceUsd: Math.round((defaultProd1.basePriceIdr + defaultProd1.variants.cushions[1].priceDiff) / USD_RATE),
        cbmPerUnit: defaultProd1.cbm,
        weightPerUnit: defaultProd1.weightKg,
        isPreorder: defaultProd1.status === "preorder",
        leadTimeDays: defaultProd1.leadTimeDays,
        image: defaultProd1.image
      },
      {
        id: "item-" + Date.now() + "-2",
        productId: defaultProd2.id,
        name: defaultProd2.name,
        color: defaultProd2.variants.colors[0].name,
        weave: defaultProd2.variants.weaves[0].name,
        cushion: defaultProd2.variants.cushions[0].name,
        qty: 20,
        unitPriceIdr: defaultProd2.basePriceIdr,
        unitPriceUsd: defaultProd2.basePriceUsd,
        cbmPerUnit: defaultProd2.cbm,
        weightPerUnit: defaultProd2.weightKg,
        isPreorder: defaultProd2.status === "preorder",
        leadTimeDays: defaultProd2.leadTimeDays,
        image: defaultProd2.image
      }
    ];
  }
}

// Add Product to Calculator Simulation
function addItemToCalculator(product, colorName, weaveName, cushionName, qty = 1) {
  // Calculate variant price differential
  const colorObj = product.variants.colors.find(c => c.name === colorName) || product.variants.colors[0];
  const weaveObj = product.variants.weaves.find(w => w.name === weaveName) || product.variants.weaves[0];
  const cushionObj = product.variants.cushions.find(cu => cu.name === cushionName) || product.variants.cushions[0];

  const totalDiffIdr = (colorObj ? colorObj.priceDiff : 0) + (weaveObj ? weaveObj.priceDiff : 0) + (cushionObj ? cushionObj.priceDiff : 0);
  const unitPriceIdr = product.basePriceIdr + totalDiffIdr;
  const unitPriceUsd = Math.round(unitPriceIdr / USD_RATE);

  // Check if identical item with same variants already exists in simulation
  const existingIndex = calculatorState.items.findIndex(item => 
    item.productId === product.id &&
    item.color === colorName &&
    item.weave === weaveName &&
    item.cushion === cushionName
  );

  if (existingIndex > -1) {
    calculatorState.items[existingIndex].qty += qty;
  } else {
    calculatorState.items.push({
      id: "item-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
      productId: product.id,
      name: product.name,
      color: colorName,
      weave: weaveName,
      cushion: cushionName,
      qty: qty,
      unitPriceIdr: unitPriceIdr,
      unitPriceUsd: unitPriceUsd,
      cbmPerUnit: product.cbm,
      weightPerUnit: product.weightKg,
      isPreorder: product.status === "preorder",
      leadTimeDays: product.leadTimeDays,
      image: product.image
    });
  }

  renderCalculator();
  showToast(`Added ${qty}x ${product.name} to Export Calculator!`, "success");
}

// Remove Item from Simulation
function removeCalculatorItem(itemId) {
  calculatorState.items = calculatorState.items.filter(item => item.id !== itemId);
  renderCalculator();
  showToast("Item removed from export simulation.", "info");
}

// Update Item Quantity
function updateCalculatorItemQty(itemId, newQty) {
  const qty = parseInt(newQty, 10);
  if (isNaN(qty) || qty <= 0) {
    removeCalculatorItem(itemId);
    return;
  }
  const item = calculatorState.items.find(i => i.id === itemId);
  if (item) {
    item.qty = qty;
    renderCalculator();
  }
}

// Quick Preset Buttons for Instant Testing
function applyQuickPreset(presetType) {
  if (presetType === "sample") {
    const prod = productsData[0]; // 2 pcs sample
    calculatorState.items = [{
      id: "preset-sample",
      productId: prod.id,
      name: prod.name,
      color: prod.variants.colors[0].name,
      weave: prod.variants.weaves[0].name,
      cushion: prod.variants.cushions[1].name,
      qty: 2,
      unitPriceIdr: prod.basePriceIdr + prod.variants.cushions[1].priceDiff,
      unitPriceUsd: Math.round((prod.basePriceIdr + prod.variants.cushions[1].priceDiff) / USD_RATE),
      cbmPerUnit: prod.cbm,
      weightPerUnit: prod.weightKg,
      isPreorder: false,
      leadTimeDays: prod.leadTimeDays,
      image: prod.image
    }];
    calculatorState.destinationId = "dest-malaysia-klang";
    calculatorState.shippingMode = "lcl";
    showToast("Quick Preset: Sample Order (2 Pcs to Port Klang, Malaysia) loaded!", "success");
  } else if (presetType === "container20") {
    const prod1 = productsData[0];
    const prod2 = productsData[6]; // Barstool
    calculatorState.items = [
      {
        id: "preset-c20-1",
        productId: prod1.id,
        name: prod1.name,
        color: prod1.variants.colors[0].name,
        weave: prod1.variants.weaves[0].name,
        cushion: prod1.variants.cushions[0].name,
        qty: 40,
        unitPriceIdr: prod1.basePriceIdr,
        unitPriceUsd: prod1.basePriceUsd,
        cbmPerUnit: prod1.cbm,
        weightPerUnit: prod1.weightKg,
        isPreorder: false,
        leadTimeDays: 5,
        image: prod1.image
      },
      {
        id: "preset-c20-2",
        productId: prod2.id,
        name: prod2.name,
        color: prod2.variants.colors[0].name,
        weave: prod2.variants.weaves[0].name,
        cushion: prod2.variants.cushions[0].name,
        qty: 30,
        unitPriceIdr: prod2.basePriceIdr,
        unitPriceUsd: prod2.basePriceUsd,
        cbmPerUnit: prod2.cbm,
        weightPerUnit: prod2.weightKg,
        isPreorder: false,
        leadTimeDays: 5,
        image: prod2.image
      }
    ];
    calculatorState.destinationId = "dest-malaysia-penang";
    calculatorState.shippingMode = "fcl20";
    showToast("Quick Preset: 20ft Container (70 Pcs to Penang Port, Malaysia) loaded!", "success");
  } else if (presetType === "container40") {
    const prod1 = productsData[0];
    const prod2 = productsData[3];
    calculatorState.items = [
      {
        id: "preset-c40-1",
        productId: prod1.id,
        name: prod1.name,
        color: prod1.variants.colors[1].name,
        weave: prod1.variants.weaves[0].name,
        cushion: prod1.variants.cushions[1].name,
        qty: 80,
        unitPriceIdr: prod1.basePriceIdr + prod1.variants.colors[1].priceDiff,
        unitPriceUsd: Math.round((prod1.basePriceIdr + prod1.variants.colors[1].priceDiff) / USD_RATE),
        cbmPerUnit: prod1.cbm,
        weightPerUnit: prod1.weightKg,
        isPreorder: false,
        leadTimeDays: 7,
        image: prod1.image
      },
      {
        id: "preset-c40-2",
        productId: prod2.id,
        name: prod2.name,
        color: prod2.variants.colors[0].name,
        weave: prod2.variants.weaves[0].name,
        cushion: prod2.variants.cushions[0].name,
        qty: 150,
        unitPriceIdr: prod2.basePriceIdr,
        unitPriceUsd: prod2.basePriceUsd,
        cbmPerUnit: prod2.cbm,
        weightPerUnit: prod2.weightKg,
        isPreorder: false,
        leadTimeDays: 5,
        image: prod2.image
      }
    ];
    calculatorState.destinationId = "dest-malaysia-klang";
    calculatorState.shippingMode = "fcl40";
    showToast("Quick Preset: 40ft High Cube Container (230 Pcs to Port Klang / KL) loaded!", "success");
  }
  renderCalculator();
}

// Core Engine: Calculates Total Prices, Volume Discounts, Freight & Arrival ETA
function computeCalculation() {
  const isUsd = calculatorState.currency === "USD";
  const destination = shippingDestinations.find(d => d.id === calculatorState.destinationId) || shippingDestinations[0];

  // 1. Total Units, CBM & Weight
  let totalUnits = 0;
  let totalCbm = 0;
  let totalWeight = 0;
  let grossProductTotalIdr = 0;
  let grossProductTotalUsd = 0;
  let maxLeadTimeDays = 2; // Default 2 days for ready stock packaging
  let hasPreorder = false;

  calculatorState.items.forEach(item => {
    totalUnits += item.qty;
    totalCbm += item.cbmPerUnit * item.qty;
    totalWeight += item.weightPerUnit * item.qty;
    grossProductTotalIdr += item.unitPriceIdr * item.qty;
    grossProductTotalUsd += item.unitPriceUsd * item.qty;

    if (item.isPreorder) {
      hasPreorder = true;
      if (item.leadTimeDays > maxLeadTimeDays) {
        maxLeadTimeDays = item.leadTimeDays;
      }
    }
  });

  // Round CBM and Weight
  totalCbm = Math.round(totalCbm * 100) / 100;
  totalWeight = Math.round(totalWeight * 10) / 10;

  // 2. Tiered Export Volume Discount (Feature 4)
  let discountPercent = 0;
  let discountTierName = "Sample / Boutique Tier (Standard Price)";
  if (totalUnits >= 100) {
    discountPercent = 18;
    discountTierName = "Master Distributor / 40ft HC Tier (18% Discount)";
  } else if (totalUnits >= 50) {
    discountPercent = 12;
    discountTierName = "Wholesale 20ft Container Tier (12% Discount)";
  } else if (totalUnits >= 10) {
    discountPercent = 5;
    discountTierName = "Commercial / Hospitality Tier (5% Discount)";
  }

  const discountAmountIdr = Math.round(grossProductTotalIdr * (discountPercent / 100));
  const discountAmountUsd = Math.round(grossProductTotalUsd * (discountPercent / 100));

  const netProductTotalIdr = grossProductTotalIdr - discountAmountIdr;
  const netProductTotalUsd = grossProductTotalUsd - discountAmountUsd;

  // 3. Recommended Shipping Mode
  let effectiveShippingMode = calculatorState.shippingMode;
  let recommendedModeText = "";

  if (effectiveShippingMode === "auto") {
    if (totalCbm >= 55) {
      effectiveShippingMode = "fcl40";
      recommendedModeText = "Recommended Full Container 40ft HC (Volume > 55 CBM)";
    } else if (totalCbm >= 24) {
      effectiveShippingMode = "fcl20";
      recommendedModeText = "Recommended Full Container 20ft (Volume 24 - 30 CBM)";
    } else {
      effectiveShippingMode = "lcl";
      recommendedModeText = "Recommended Sea Freight LCL per CBM (Cost-effective for < 24 CBM)";
    }
  }

  // 4. Shipping & Ocean Freight Cost (Feature 5)
  let shippingCostIdr = 0;
  let shippingCostUsd = 0;
  let shippingDetailNote = "";

  if (destination.currency === "IDR") {
    // Domestic Indonesian delivery
    if (effectiveShippingMode === "fcl40") {
      shippingCostIdr = destination.rateFcl40ft;
      shippingDetailNote = "40ft Container Trucking Cirebon to Destination Hub";
    } else if (effectiveShippingMode === "fcl20") {
      shippingCostIdr = destination.rateFcl20ft;
      shippingDetailNote = "20ft Container Trucking Cirebon to Destination Hub";
    } else if (effectiveShippingMode === "air") {
      shippingCostIdr = Math.max(1, totalWeight) * destination.rateAirPerKg;
      shippingDetailNote = `Domestic Air Cargo Express (${totalWeight} Kg)`;
    } else {
      // LCL
      const billableCbm = Math.max(1, totalCbm);
      shippingCostIdr = billableCbm * destination.rateLclPerCbm;
      shippingDetailNote = `LCL Consolidation (${billableCbm} CBM @ Rp ${destination.rateLclPerCbm.toLocaleString("id-ID")}/CBM)`;
    }
    shippingCostUsd = Math.round(shippingCostIdr / USD_RATE);
  } else {
    // International Export
    if (effectiveShippingMode === "fcl40") {
      shippingCostUsd = destination.rateFcl40ft;
      shippingDetailNote = `Ocean Freight FCL 40ft HC to ${destination.portName}`;
    } else if (effectiveShippingMode === "fcl20") {
      shippingCostUsd = destination.rateFcl20ft;
      shippingDetailNote = `Ocean Freight FCL 20ft to ${destination.portName}`;
    } else if (effectiveShippingMode === "air") {
      shippingCostUsd = Math.round(Math.max(1, totalWeight) * destination.rateAirPerKg);
      shippingDetailNote = `International Air Cargo Express (${totalWeight} Kg @ $${destination.rateAirPerKg}/Kg)`;
    } else {
      // LCL
      const billableCbm = Math.max(1, totalCbm);
      shippingCostUsd = Math.round(billableCbm * destination.rateLclPerCbm);
      shippingDetailNote = `Sea Freight LCL (${billableCbm} CBM @ $${destination.rateLclPerCbm}/CBM) to ${destination.portName}`;
    }
    shippingCostIdr = shippingCostUsd * USD_RATE;
  }

  // Quarantine & AFAS/MAQIS Fumigation Certification Fee
  let fumigationFeeUsd = 0;
  let fumigationFeeIdr = 0;
  if (destination.fumigationRequired) {
    if (totalUnits >= 50) {
      // Complimentary for wholesale container orders!
      fumigationFeeUsd = 0;
      fumigationFeeIdr = 0;
    } else {
      fumigationFeeUsd = destination.fumigationFee;
      fumigationFeeIdr = fumigationFeeUsd * USD_RATE;
    }
  }

  // Export Handling & SVLK V-Legal Documentation
  const exportHandlingUsd = destination.currency === "IDR" ? 0 : 45; // USD flat
  const exportHandlingIdr = exportHandlingUsd * USD_RATE;

  // Total Freight & Clearance Documentation
  const totalFreightAndDocsIdr = shippingCostIdr + fumigationFeeIdr + exportHandlingIdr;
  const totalFreightAndDocsUsd = shippingCostUsd + fumigationFeeUsd + exportHandlingUsd;

  // Grand Total (CIF vs FOB)
  const isCif = calculatorState.incoterm === "CIF";
  const grandTotalIdr = isCif ? (netProductTotalIdr + totalFreightAndDocsIdr) : netProductTotalIdr;
  const grandTotalUsd = isCif ? (netProductTotalUsd + totalFreightAndDocsUsd) : netProductTotalUsd;

  // 5. Estimated Time of Arrival (ETA) Calculation (Feature 6)
  const today = new Date();
  
  // Preparation lead time: ready stock takes 2-3 days packing & fumigation; pre-order uses maxLeadTime.
  const prepDays = maxLeadTimeDays;
  
  // Ocean / air transit duration
  let transitDaysMin = destination.transitMinDays;
  let transitDaysMax = destination.transitMaxDays;
  if (effectiveShippingMode === "air") {
    transitDaysMin = 2;
    transitDaysMax = 5;
  }

  const totalDaysMin = prepDays + transitDaysMin;
  const totalDaysMax = prepDays + transitDaysMax;

  // Calculate actual calendar ETA date range
  const etaDateMin = new Date(today.getTime() + totalDaysMin * 24 * 60 * 60 * 1000);
  const etaDateMax = new Date(today.getTime() + totalDaysMax * 24 * 60 * 60 * 1000);

  const dateOptions = { day: "numeric", month: "short", year: "numeric" };
  const formattedEtaRange = `${etaDateMin.toLocaleDateString("en-US", dateOptions)} â€“ ${etaDateMax.toLocaleDateString("en-US", dateOptions)}`;

  return {
    totalUnits,
    totalCbm,
    totalWeight,
    hasPreorder,
    maxLeadTimeDays,
    grossProductTotalIdr,
    grossProductTotalUsd,
    discountPercent,
    discountTierName,
    discountAmountIdr,
    discountAmountUsd,
    netProductTotalIdr,
    netProductTotalUsd,
    destination,
    effectiveShippingMode,
    recommendedModeText,
    shippingCostIdr,
    shippingCostUsd,
    shippingDetailNote,
    fumigationFeeIdr,
    fumigationFeeUsd,
    exportHandlingIdr,
    exportHandlingUsd,
    totalFreightAndDocsIdr,
    totalFreightAndDocsUsd,
    grandTotalIdr,
    grandTotalUsd,
    prepDays,
    transitDaysMin,
    transitDaysMax,
    totalDaysMin,
    totalDaysMax,
    formattedEtaRange,
    isUsd,
    isCif
  };
}

// Render Calculator Interface
function renderCalculator() {
  const calcItemsList = document.getElementById("calc-items-list");
  const destSelect = document.getElementById("calc-destination-select");
  const modeSelect = document.getElementById("calc-mode-select");
  const incotermSelect = document.getElementById("calc-incoterm-select");

  if (!calcItemsList) return;

  // Set select input values
  if (destSelect) destSelect.value = calculatorState.destinationId;
  if (modeSelect) modeSelect.value = calculatorState.shippingMode;
  if (incotermSelect) incotermSelect.value = calculatorState.incoterm;

  const result = computeCalculation();

  // Render Item List
  if (calculatorState.items.length === 0) {
    calcItemsList.innerHTML = `
      <div class="text-center py-10 px-4 border-2 border-dashed border-amber-200 rounded-xl bg-amber-50/50">
        <i data-lucide="package-open" class="w-12 h-12 mx-auto text-amber-500/70 mb-3"></i>
        <h4 class="font-bold text-gray-700">Simulation is Currently Empty</h4>
        <p class="text-xs text-gray-500 max-w-sm mx-auto mt-1 mb-4">Select items from the catalog above and click "Calculate Freight" to simulate export prices and shipping costs.</p>
        <button onclick="applyQuickPreset('sample')" class="px-3 py-1.5 bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-xs font-semibold shadow-sm transition">
          Load Sample Order Preset
        </button>
      </div>
    `;
  } else {
    calcItemsList.innerHTML = calculatorState.items.map(item => {
      const itemSubtotalIdr = item.unitPriceIdr * item.qty;
      const itemSubtotalUsd = item.unitPriceUsd * item.qty;
      const priceFormatted = result.isUsd ? `$${itemSubtotalUsd.toLocaleString()}` : `Rp ${itemSubtotalIdr.toLocaleString("id-ID")}`;
      const unitPriceFormatted = result.isUsd ? `$${item.unitPriceUsd}` : `Rp ${item.unitPriceIdr.toLocaleString("id-ID")}`;

      return `
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 bg-white rounded-xl border border-amber-100 shadow-sm hover:border-amber-300 transition">
          <div class="flex items-center gap-3">
            <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-cover rounded-lg border border-amber-100 shrink-0">
            <div>
              <div class="flex items-center gap-2">
                <h5 class="font-bold text-sm text-gray-900 leading-tight">${item.name}</h5>
                ${item.isPreorder ? '<span class="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-800 font-semibold rounded">PO</span>' : '<span class="text-[10px] px-1.5 py-0.5 bg-emerald-100 text-emerald-800 font-semibold rounded">Ready</span>'}
              </div>
              <p class="text-xs text-gray-500 mt-0.5">
                <span class="font-medium text-amber-900">${item.color}</span> â€¢ <span>${item.weave}</span>
              </p>
              <p class="text-[11px] text-gray-400">
                ${unitPriceFormatted}/unit â€¢ Vol: ${(item.cbmPerUnit * item.qty).toFixed(2)} CBM â€¢ Weight: ${(item.weightPerUnit * item.qty).toFixed(1)} kg
              </p>
            </div>
          </div>

          <div class="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
            <!-- Quantity Control -->
            <div class="flex items-center border border-gray-200 rounded-lg bg-gray-50 overflow-hidden">
              <button onclick="updateCalculatorItemQty('${item.id}', ${item.qty - 1})" class="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-amber-100 hover:text-amber-800 transition font-bold text-sm" aria-label="Decrease quantity">-</button>
              <input type="number" min="1" max="999" value="${item.qty}" onchange="updateCalculatorItemQty('${item.id}', this.value)" class="w-12 text-center text-xs font-bold bg-transparent focus:outline-none text-gray-800">
              <button onclick="updateCalculatorItemQty('${item.id}', ${item.qty + 1})" class="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-amber-100 hover:text-amber-800 transition font-bold text-sm" aria-label="Increase quantity">+</button>
            </div>

            <!-- Subtotal -->
            <div class="text-right min-w-[90px]">
              <span class="block font-bold text-sm text-amber-900">${priceFormatted}</span>
            </div>

            <!-- Delete -->
            <button onclick="removeCalculatorItem('${item.id}')" title="Remove item" class="p-1.5 text-gray-400 hover:text-red-500 transition rounded-lg hover:bg-red-50" aria-label="Delete item">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  // Update Summary Box (Feature 4: Total Pricing)
  const formatVal = (valIdr, valUsd) => {
    return result.isUsd ? `$${valUsd.toLocaleString()}` : `Rp ${valIdr.toLocaleString("id-ID")}`;
  };

  document.getElementById("calc-summary-units").textContent = `${result.totalUnits} Units`;
  document.getElementById("calc-summary-cbm").textContent = `${result.totalCbm.toFixed(2)} CBM`;
  document.getElementById("calc-summary-weight").textContent = `${result.totalWeight.toFixed(1)} Kg`;

  document.getElementById("calc-gross-total").textContent = formatVal(result.grossProductTotalIdr, result.grossProductTotalUsd);
  document.getElementById("calc-discount-tier").textContent = result.discountTierName;
  document.getElementById("calc-discount-val").textContent = `-${formatVal(result.discountAmountIdr, result.discountAmountUsd)}`;
  document.getElementById("calc-net-products").textContent = formatVal(result.netProductTotalIdr, result.netProductTotalUsd);

  // Update Shipping Section (Feature 5: Freight Rates)
  document.getElementById("calc-shipping-detail").textContent = result.shippingDetailNote;
  document.getElementById("calc-shipping-cost").textContent = formatVal(result.shippingCostIdr, result.shippingCostUsd);
  document.getElementById("calc-fumigation-cost").textContent = result.fumigationFeeUsd === 0 ? "FREE (Container Tier)" : formatVal(result.fumigationFeeIdr, result.fumigationFeeUsd);
  document.getElementById("calc-handling-cost").textContent = result.exportHandlingUsd === 0 ? "Rp 0" : formatVal(result.exportHandlingIdr, result.exportHandlingUsd);

  const freightTotalEl = document.getElementById("calc-freight-total");
  if (freightTotalEl) {
    freightTotalEl.textContent = formatVal(result.totalFreightAndDocsIdr, result.totalFreightAndDocsUsd);
  }

  // Grand Total
  document.getElementById("calc-grand-total").textContent = formatVal(result.grandTotalIdr, result.grandTotalUsd);
  document.getElementById("calc-incoterm-badge").textContent = result.isCif ? "CIF (Cost, Insurance & Freight Included)" : "FOB (Tanjung Priok Port Loading Only)";

  // Update ETA (Feature 6: Estimated Arrival Time)
  document.getElementById("calc-eta-leadtime").textContent = `${result.prepDays} Days (${result.hasPreorder ? "Production Lead Time" : "Ready Stock QC & Packaging"})`;
  document.getElementById("calc-eta-transit").textContent = `${result.transitDaysMin} - ${result.transitDaysMax} Days (${result.effectiveShippingMode.toUpperCase()} Transit)`;
  document.getElementById("calc-eta-total-days").textContent = `${result.totalDaysMin} - ${result.totalDaysMax} Calendar Days`;
  document.getElementById("calc-eta-range").textContent = result.formattedEtaRange;
  document.getElementById("calc-eta-port-dest").textContent = result.destination.portName;

  // Refresh icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Setup Event Listeners for Select Inputs
function setupCalculatorEventListeners() {
  const destSelect = document.getElementById("calc-destination-select");
  const modeSelect = document.getElementById("calc-mode-select");
  const incotermSelect = document.getElementById("calc-incoterm-select");

  if (destSelect) {
    if (destSelect.options.length <= 1) {
      destSelect.innerHTML = shippingDestinations.map(d => `
        <option value="${d.id}">${d.name} (${d.type})</option>
      `).join("");
      destSelect.value = calculatorState.destinationId;
    }

    destSelect.addEventListener("change", (e) => {
      calculatorState.destinationId = e.target.value;
      renderCalculator();
    });
  }

  if (modeSelect) {
    modeSelect.addEventListener("change", (e) => {
      calculatorState.shippingMode = e.target.value;
      renderCalculator();
    });
  }

  if (incotermSelect) {
    incotermSelect.addEventListener("change", (e) => {
      calculatorState.incoterm = e.target.value;
      renderCalculator();
    });
  }
}

// Open Printable Export Proforma Invoice Modal
function openProformaInvoiceModal() {
  const result = computeCalculation();
  const modal = document.getElementById("invoice-modal");
  const invoiceContent = document.getElementById("invoice-printable-content");

  if (!modal || !invoiceContent) return;

  const invoiceNo = `CRH-EXP-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, "0")}-${Math.floor(1000 + Math.random() * 9000)}`;
  const dateFormatted = new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
  const formatVal = (valIdr, valUsd) => result.isUsd ? `$${valUsd.toLocaleString()}` : `Rp ${valIdr.toLocaleString("id-ID")}`;

  invoiceContent.innerHTML = `
    <!-- Invoice Header -->
    <div class="flex justify-between items-start border-b-2 border-amber-800 pb-6 mb-6">
      <div>
        <span class="text-xs font-bold tracking-widest text-amber-700 uppercase">OFFICIAL EXPORT PROFORMA INVOICE</span>
        <h2 class="text-2xl font-black font-serif-luxury text-amber-950">${businessProfile.name}</h2>
        <p class="text-xs text-gray-600 mt-1">${businessProfile.legalName}</p>
        <p class="text-xs text-gray-500 max-w-sm mt-0.5">${businessProfile.address}</p>
        <p class="text-xs text-gray-500 mt-1">Tel / WhatsApp: ${businessProfile.phone} | Email: ${businessProfile.email}</p>
      </div>
      <div class="text-right">
        <div class="inline-block px-3 py-1 bg-amber-100 text-amber-900 rounded font-mono font-bold text-sm mb-2">
          ${invoiceNo}
        </div>
        <p class="text-xs text-gray-500">Date: <strong>${dateFormatted}</strong></p>
        <p class="text-xs text-gray-500">Incoterms: <strong>${calculatorState.incoterm} (${calculatorState.incoterm === "CIF" ? "Cost, Freight & Insurance Included" : "Port Tanjung Priok Loading Only"})</strong></p>
        <p class="text-xs text-gray-500">Port of Loading: <strong>Tanjung Priok, Jakarta (IDJKT)</strong></p>
        <p class="text-xs text-amber-900 font-bold">Port of Discharge: <strong>${result.destination.portName}</strong></p>
      </div>
    </div>

    <!-- Official Export Certifications Bar -->
    <div class="grid grid-cols-4 gap-2 py-2 px-3 bg-amber-50/70 rounded-lg border border-amber-200 text-center text-[10px] text-amber-950 font-semibold mb-6">
      <div>âœ“ ATIGA Form D (0% Duty)</div>
      <div>âœ“ SVLK V-Legal Certified</div>
      <div>âœ“ MAQIS & ISPM 15 Fumigated</div>
      <div>âœ“ Phytosanitary Cleared</div>
    </div>

    <!-- Itemized Products Table -->
    <div class="overflow-x-auto mb-6">
      <table class="w-full text-left text-xs border border-gray-200">
        <thead class="bg-amber-900 text-white uppercase text-[10px] tracking-wider">
          <tr>
            <th class="p-2.5">No</th>
            <th class="p-2.5">Item Description & Specification</th>
            <th class="p-2.5 text-center">Status</th>
            <th class="p-2.5 text-center">Qty</th>
            <th class="p-2.5 text-right">Unit Price</th>
            <th class="p-2.5 text-right">Vol (CBM)</th>
            <th class="p-2.5 text-right">Subtotal (${calculatorState.currency})</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          ${calculatorState.items.map((item, idx) => `
            <tr class="hover:bg-amber-50/40">
              <td class="p-2.5 font-mono text-gray-500">${idx + 1}</td>
              <td class="p-2.5">
                <div class="font-bold text-gray-800">${item.name}</div>
                <div class="text-[11px] text-gray-500">${item.color} | ${item.weave} | ${item.cushion}</div>
              </td>
              <td class="p-2.5 text-center">
                <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${item.isPreorder ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'}">
                  ${item.isPreorder ? 'Pre-Order (14D)' : 'Ready Stock'}
                </span>
              </td>
              <td class="p-2.5 text-center font-bold">${item.qty}</td>
              <td class="p-2.5 text-right font-mono">${formatVal(item.unitPriceIdr, item.unitPriceUsd)}</td>
              <td class="p-2.5 text-right font-mono">${(item.cbmPerUnit * item.qty).toFixed(2)}</td>
              <td class="p-2.5 text-right font-mono font-bold text-gray-900">${formatVal(item.unitPriceIdr * item.qty, item.unitPriceUsd * item.qty)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>

    <!-- Logistics Breakdown & Financial Totals -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-200 pt-4 mb-6">
      <!-- Shipping & Logistics Information -->
      <div class="bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs">
        <h4 class="font-bold text-amber-900 mb-2 flex items-center gap-1.5">
          <i data-lucide="ship" class="w-4 h-4 text-amber-700"></i> Ocean Freight & Logistics Details
        </h4>
        <ul class="space-y-1.5 text-gray-600">
          <li>â€¢ Destination Port: <strong>${result.destination.name}</strong></li>
          <li>â€¢ Cargo Mode: <strong>${result.effectiveShippingMode.toUpperCase()} (${result.shippingDetailNote})</strong></li>
          <li>â€¢ Total Consignment Volume: <strong>${result.totalCbm.toFixed(2)} CBM</strong></li>
          <li>â€¢ Total Estimated Weight: <strong>${result.totalWeight.toFixed(1)} Kg</strong></li>
          <li>â€¢ Estimated Arrival (ETA): <strong class="text-emerald-700">${result.formattedEtaRange}</strong> (${result.totalDaysMin}â€“${result.totalDaysMax} Calendar Days)</li>
        </ul>
      </div>

      <!-- Financial Totals -->
      <div class="space-y-2 text-xs">
        <div class="flex justify-between text-gray-600">
          <span>Gross Product Total (${result.totalUnits} Units):</span>
          <span class="font-mono font-semibold">${formatVal(result.grossProductTotalIdr, result.grossProductTotalUsd)}</span>
        </div>
        <div class="flex justify-between text-emerald-700">
          <span>${result.discountTierName}:</span>
          <span class="font-mono font-semibold">-${formatVal(result.discountAmountIdr, result.discountAmountUsd)}</span>
        </div>
        <div class="flex justify-between text-gray-800 font-semibold border-t pt-2">
          <span>Net Product Total:</span>
          <span class="font-mono">${formatVal(result.netProductTotalIdr, result.netProductTotalUsd)}</span>
        </div>
        <div class="flex justify-between text-gray-600">
          <span>Ocean / Air Freight Rate:</span>
          <span class="font-mono">${formatVal(result.shippingCostIdr, result.shippingCostUsd)}</span>
        </div>
        <div class="flex justify-between text-gray-600">
          <span>ISPM 15 / MAQIS Fumigation Clearance:</span>
          <span class="font-mono">${result.fumigationFeeUsd === 0 ? "FREE" : formatVal(result.fumigationFeeIdr, result.fumigationFeeUsd)}</span>
        </div>
        <div class="flex justify-between text-gray-600">
          <span>Export Declaration & SVLK V-Legal:</span>
          <span class="font-mono">${formatVal(result.exportHandlingIdr, result.exportHandlingUsd)}</span>
        </div>
        <div class="flex justify-between text-base font-black text-amber-950 bg-amber-100/70 p-3 rounded-lg border border-amber-300 mt-2">
          <span>GRAND TOTAL (${calculatorState.incoterm}):</span>
          <span class="font-mono">${formatVal(result.grandTotalIdr, result.grandTotalUsd)}</span>
        </div>
      </div>
    </div>

    <!-- Terms & Signature -->
    <div class="border-t border-gray-200 pt-4 text-[11px] text-gray-500 flex justify-between items-end">
      <div>
        <p class="font-bold text-gray-700 mb-1">Commercial Export Terms & Conditions:</p>
        <p>1. This quotation is legally binding and valid for 30 calendar days from issue date.</p>
        <p>2. Payment Terms: T/T 40% Deposit upon PO confirmation, 60% against Bill of Lading (B/L) copy or Irrevocable L/C at sight.</p>
        <p>3. Packaging: 5-Ply Master Export Carton + Foam Corner Padding + Desiccant Moisture Absorber Bags.</p>
      </div>
      <div class="text-center min-w-[180px]">
        <p class="text-xs text-gray-500 mb-10">Cirebon, ${dateFormatted}<br>Authorized Signature,</p>
        <p class="font-bold text-amber-950 underline">${businessProfile.founder}</p>
        <p class="text-[10px] text-gray-500">Managing Director & Founder</p>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeProformaInvoiceModal() {
  const modal = document.getElementById("invoice-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// Send Order Inquiry Directly to Mr. Ridwan on WhatsApp
function sendOrderToWhatsApp() {
  const result = computeCalculation();
  if (calculatorState.items.length === 0) {
    showToast("Please add at least 1 item before sending order details.", "warning");
    return;
  }

  const formatVal = (valIdr, valUsd) => result.isUsd ? `$${valUsd.toLocaleString()}` : `Rp ${valIdr.toLocaleString("id-ID")}`;

  let itemsListText = "";
  calculatorState.items.forEach((item, idx) => {
    itemsListText += `${idx + 1}. *${item.name}* (${item.qty} units)\n   Variant: ${item.color}, ${item.weave}, ${item.cushion}\n   Subtotal: ${formatVal(item.unitPriceIdr * item.qty, item.unitPriceUsd * item.qty)}\n`;
  });

  const message = `Dear Mr. Ridwan (${businessProfile.name}),\n\nI am interested in placing an export order after reviewing your website simulator. Here are my order details:\n\n*ORDER ITEMS & SPECIFICATIONS:*\n${itemsListText}\n*LOGISTICS & PRICING SUMMARY:*\nâ€¢ Total Units: ${result.totalUnits} Units (${result.totalCbm.toFixed(2)} CBM)\nâ€¢ Destination Port: ${result.destination.name}\nâ€¢ Cargo Mode: ${result.effectiveShippingMode.toUpperCase()}\nâ€¢ Volume Discount: ${result.discountTierName}\nâ€¢ Freight & Fumigation: ${formatVal(result.totalFreightAndDocsIdr, result.totalFreightAndDocsUsd)}\nâ€¢ *ESTIMATED GRAND TOTAL (${calculatorState.incoterm}):* ${formatVal(result.grandTotalIdr, result.grandTotalUsd)}\nâ€¢ *Estimated Time of Arrival (ETA):* ${result.formattedEtaRange} (${result.totalDaysMin}â€“${result.totalDaysMax} days)\n\nPlease confirm stock availability, nearest feeder sailing departure, and send the official Proforma Invoice. Thank you!\n\n_Sent automatically via Cirebon Rattan Heritage Export Portal_`;

  const encodedUrl = `https://wa.me/${businessProfile.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, "_blank");
}
/**
 * Main Application Logic - Cirebon Rattan Heritage
 * UI Orchestration, Catalog Filter & Search, Modal Detail, FAQ Accordion & Toasts
 * International English Edition
 */

// Global Application State
const appState = {
  currentCategory: "all",
  currentAvailability: "all",
  searchQuery: "",
  selectedProductForModal: null,
  activeFaqCategory: "all",
  faqSearchQuery: ""
};

// Initialize on DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize default calculator dataset
  initDefaultCalculatorItems();

  // 2. Setup Event Listeners
  setupNavbar();
  setupCatalogFilters();
  setupFaqAccordion();
  setupCalculatorEventListeners();
  setupCurrencyToggle();

  // 3. Render Core Components
  renderCatalog();
  renderCalculator();
  renderFaq();
  renderTestimonials();
  renderCertifications();

  // 4. Initialize Lucide Vector Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// Setup Mobile Menu & Scroll Effect
function setupNavbar() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const navbar = document.getElementById("main-nav");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("shadow-md");
      navbar.classList.add("nav-glass");
    } else {
      navbar.classList.remove("shadow-md");
    }
  });
}

// Currency Switcher (IDR / USD)
function setupCurrencyToggle() {
  const currencyBtns = document.querySelectorAll(".currency-toggle-btn");
  currencyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedCurrency = btn.getAttribute("data-currency");
      calculatorState.currency = selectedCurrency;

      // Update button active visual state
      currencyBtns.forEach(b => {
        if (b.getAttribute("data-currency") === selectedCurrency) {
          b.classList.add("bg-amber-800", "text-white");
          b.classList.remove("bg-transparent", "text-gray-700");
        } else {
          b.classList.remove("bg-amber-800", "text-white");
          b.classList.add("bg-transparent", "text-gray-700");
        }
      });

      // Update prices across catalog and calculator
      renderCatalog();
      renderCalculator();
      showToast(`Currency switched to ${selectedCurrency}`, "info");
    });
  });
}

// Render Business Certifications (Feature 1)
function renderCertifications() {
  const container = document.getElementById("certifications-container");
  if (!container) return;

  container.innerHTML = businessProfile.certifications.map(cert => `
    <div class="p-4 bg-white/80 rounded-xl border border-amber-200/80 shadow-sm hover:border-amber-400 transition">
      <div class="flex items-center gap-2 mb-1.5">
        <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
        <h4 class="font-bold text-amber-950 text-sm">${cert.code}</h4>
      </div>
      <p class="text-xs font-semibold text-gray-800 mb-1">${cert.name}</p>
      <p class="text-[11px] text-gray-500 leading-relaxed">${cert.desc}</p>
    </div>
  `).join("");
}

// Render Global Client Testimonials
function renderTestimonials() {
  const container = document.getElementById("testimonials-container");
  if (!container) return;

  container.innerHTML = testimonialsData.map(testi => `
    <div class="p-6 bg-white rounded-2xl border border-amber-100 shadow-sm card-hover-effect flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <img src="${testi.avatar}" alt="${testi.name}" class="w-11 h-11 rounded-full object-cover border-2 border-amber-200">
            <div>
              <h5 class="font-bold text-sm text-gray-900">${testi.name}</h5>
              <p class="text-xs text-gray-500">${testi.company} â€¢ ${testi.country} ${testi.flag}</p>
            </div>
          </div>
          <div class="text-amber-500 text-xs tracking-wider">
            ${'â˜…'.repeat(testi.rating)}
          </div>
        </div>
        <p class="text-xs text-gray-600 italic leading-relaxed">
          "${testi.comment}"
        </p>
      </div>
      <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-emerald-700 font-semibold">
        <span>âœ“ Verified Global Importer</span>
        <span class="text-gray-400 font-normal">FCL Container Order</span>
      </div>
    </div>
  `).join("");
}

// Setup Event Listeners for Catalog Filters
function setupCatalogFilters() {
  // Category Tabs
  const catTabs = document.querySelectorAll(".cat-tab-btn");
  catTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      catTabs.forEach(t => t.classList.remove("tab-active", "bg-amber-900", "text-white"));
      catTabs.forEach(t => t.classList.add("bg-white", "text-gray-600"));
      
      tab.classList.remove("bg-white", "text-gray-600");
      tab.classList.add("tab-active", "bg-amber-900", "text-white");

      appState.currentCategory = tab.getAttribute("data-category");
      renderCatalog();
    });
  });

  // Availability Filter Buttons
  const availFilters = document.querySelectorAll(".avail-filter-btn");
  availFilters.forEach(btn => {
    btn.addEventListener("click", () => {
      availFilters.forEach(b => b.classList.remove("bg-amber-700", "text-white"));
      availFilters.forEach(b => b.classList.add("bg-amber-50", "text-amber-900"));

      btn.classList.remove("bg-amber-50", "text-amber-900");
      btn.classList.add("bg-amber-700", "text-white");

      appState.currentAvailability = btn.getAttribute("data-avail");
      renderCatalog();
    });
  });

  // Search Input
  const searchInput = document.getElementById("catalog-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      appState.searchQuery = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }
}

// Render Products Catalog (Feature 2: Stock Availability & Feature 3: Variants)
function renderCatalog() {
  const container = document.getElementById("products-grid");
  const countBadge = document.getElementById("catalog-count-badge");
  if (!container) return;

  const isUsd = calculatorState.currency === "USD";

  // Filter Data
  const filteredProducts = productsData.filter(prod => {
    // 1. Category
    const matchCategory = appState.currentCategory === "all" || prod.category.toLowerCase() === appState.currentCategory.toLowerCase();

    // 2. Stock Availability
    const matchAvail = appState.currentAvailability === "all" || prod.status === appState.currentAvailability;

    // 3. Search Query
    const matchSearch = appState.searchQuery === "" || 
      prod.name.toLowerCase().includes(appState.searchQuery) ||
      prod.shortDesc.toLowerCase().includes(appState.searchQuery) ||
      prod.material.toLowerCase().includes(appState.searchQuery) ||
      prod.variants.colors.some(c => c.name.toLowerCase().includes(appState.searchQuery));

    return matchCategory && matchAvail && matchSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filteredProducts.length} Products Displayed`;
  }

  if (filteredProducts.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 bg-white rounded-2xl border border-dashed border-amber-200">
        <i data-lucide="search-x" class="w-12 h-12 mx-auto text-amber-400 mb-3"></i>
        <h3 class="text-lg font-bold text-gray-800">No matching products found</h3>
        <p class="text-xs text-gray-500 mt-1 max-w-sm mx-auto">Try adjusting your search keywords or resetting category and availability filters.</p>
        <button onclick="resetCatalogFilters()" class="mt-4 px-4 py-2 bg-amber-800 text-white rounded-lg text-xs font-semibold hover:bg-amber-900 transition">
          Reset Catalog Filters
        </button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = filteredProducts.map(prod => {
    const isReady = prod.status === "ready";
    const priceFormatted = isUsd ? `$${prod.basePriceUsd}` : `Rp ${prod.basePriceIdr.toLocaleString("id-ID")}`;
    
    return `
      <div class="bg-white rounded-2xl border border-amber-100 overflow-hidden shadow-sm card-hover-effect flex flex-col justify-between group">
        <!-- Image & Stock Availability Badge (Feature 2) -->
        <div class="relative overflow-hidden aspect-[4/3] bg-amber-50">
          <img src="${prod.image}" alt="${prod.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          
          <!-- Stock Status Badge -->
          <div class="absolute top-3 left-3">
            ${isReady ? `
              <span class="inline-flex items-center gap-1.5 pl-6 pr-3 py-1 bg-emerald-500/95 text-white font-bold text-[11px] rounded-full shadow-md badge-ready-pulse backdrop-blur-sm">
                Ready Stock (${prod.stock} units)
              </span>
            ` : `
              <span class="inline-flex items-center gap-1 px-3 py-1 bg-amber-600/95 text-white font-bold text-[11px] rounded-full shadow-md backdrop-blur-sm">
                <i data-lucide="clock" class="w-3 h-3"></i> Pre-Order (${prod.leadTimeDays} Days)
              </span>
            `}
          </div>

          <!-- Category Badge -->
          <div class="absolute top-3 right-3">
            <span class="px-2.5 py-1 bg-black/60 text-white font-medium text-[10px] rounded-md backdrop-blur-sm uppercase tracking-wide">
              ${prod.category}
            </span>
          </div>

          <!-- Quick Action Overlay -->
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button onclick="openProductDetailModal('${prod.id}')" class="px-3.5 py-2 bg-white text-gray-900 rounded-lg text-xs font-bold shadow-lg hover:bg-amber-50 transition flex items-center gap-1.5">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i> View Variants
            </button>
          </div>
        </div>

        <!-- Product Details (Feature 3: Variants) -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-gray-500 mb-1">
              <span>CBM: <strong>${prod.cbm} mÂ³</strong></span>
              <span>Weight: <strong>${prod.weightKg} kg</strong></span>
              <span class="flex items-center text-amber-500 font-bold">â˜… ${prod.rating}</span>
            </div>

            <h4 class="font-bold text-gray-900 text-base group-hover:text-amber-800 transition line-clamp-1 mb-1">
              ${prod.name}
            </h4>

            <p class="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">
              ${prod.shortDesc}
            </p>

            <!-- Variants Preview Badges (Feature 3) -->
            <div class="space-y-1.5 mb-4 py-2 border-y border-amber-50 text-[11px]">
              <div class="flex items-center gap-1 text-gray-600">
                <span class="text-gray-400 font-medium w-16 shrink-0">Colors:</span>
                <div class="flex items-center gap-1 overflow-x-auto">
                  ${prod.variants.colors.map(c => `
                    <span class="inline-block w-3.5 h-3.5 rounded-full border border-gray-300 shadow-inner" style="background-color: ${c.preview}" title="${c.name}"></span>
                  `).join("")}
                  <span class="text-gray-400 text-[10px] ml-1">(${prod.variants.colors.length} options)</span>
                </div>
              </div>
              <div class="flex items-center gap-1 text-gray-600">
                <span class="text-gray-400 font-medium w-16 shrink-0">Weave:</span>
                <span class="font-medium text-amber-900 truncate">${prod.variants.weaves[0].name} +${prod.variants.weaves.length - 1} more</span>
              </div>
            </div>
          </div>

          <!-- Bottom: Pricing & Action Buttons -->
          <div>
            <div class="flex items-baseline justify-between mb-3">
              <div>
                <span class="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">Starting At (FOB Cirebon)</span>
                <span class="text-lg font-black text-amber-950 font-serif-luxury">${priceFormatted}</span>
                <span class="text-[10px] text-gray-500">/ piece</span>
              </div>
              <span class="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold border border-emerald-200">
                Up to 18% Off FCL
              </span>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <button onclick="openProductDetailModal('${prod.id}')" class="w-full py-2 px-3 border border-amber-800 text-amber-800 hover:bg-amber-50 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1">
                <i data-lucide="sliders" class="w-3.5 h-3.5"></i> Variants
              </button>
              <button onclick="quickAddToCalculator('${prod.id}')" class="w-full py-2 px-3 bg-amber-800 hover:bg-amber-900 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 shadow-sm">
                <i data-lucide="calculator" class="w-3.5 h-3.5"></i> Calc Freight
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function resetCatalogFilters() {
  appState.currentCategory = "all";
  appState.currentAvailability = "all";
  appState.searchQuery = "";

  const searchInput = document.getElementById("catalog-search-input");
  if (searchInput) searchInput.value = "";

  const catTabs = document.querySelectorAll(".cat-tab-btn");
  catTabs.forEach((t, i) => {
    if (i === 0) {
      t.classList.add("tab-active", "bg-amber-900", "text-white");
    } else {
      t.classList.remove("tab-active", "bg-amber-900", "text-white");
      t.classList.add("bg-white", "text-gray-600");
    }
  });

  renderCatalog();
}

// Open Interactive Product Detail & Variant Selector Modal
function openProductDetailModal(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  appState.selectedProductForModal = {
    product: product,
    selectedColor: product.variants.colors[0],
    selectedWeave: product.variants.weaves[0],
    selectedCushion: product.variants.cushions[0],
    qty: 1
  };

  renderProductModalContent();

  const modal = document.getElementById("product-detail-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

function closeProductDetailModal() {
  const modal = document.getElementById("product-detail-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// Render Content Inside Product Detail Modal
function renderProductModalContent() {
  const container = document.getElementById("modal-product-content");
  if (!container || !appState.selectedProductForModal) return;

  const { product, selectedColor, selectedWeave, selectedCushion, qty } = appState.selectedProductForModal;
  const isUsd = calculatorState.currency === "USD";

  // Calculate unit price with variant differences
  const totalDiffIdr = selectedColor.priceDiff + selectedWeave.priceDiff + selectedCushion.priceDiff;
  const unitPriceIdr = product.basePriceIdr + totalDiffIdr;
  const unitPriceUsd = Math.round(unitPriceIdr / USD_RATE);

  const priceFormatted = isUsd ? `$${unitPriceUsd}` : `Rp ${unitPriceIdr.toLocaleString("id-ID")}`;
  const totalSubtotalFormatted = isUsd ? `$${unitPriceUsd * qty}` : `Rp ${(unitPriceIdr * qty).toLocaleString("id-ID")}`;

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Left Column: Image Gallery -->
      <div>
        <div class="rounded-xl overflow-hidden aspect-[4/3] bg-amber-50 border border-amber-200 mb-3">
          <img id="modal-main-image" src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
        </div>
        <div class="grid grid-cols-3 gap-2">
          ${product.gallery.map((img) => `
            <button onclick="document.getElementById('modal-main-image').src='${img}'" class="aspect-video rounded-lg overflow-hidden border border-amber-200 hover:border-amber-600 focus:border-amber-700 transition" aria-label="Select photo">
              <img src="${img}" class="w-full h-full object-cover">
            </button>
          `).join("")}
        </div>

        <div class="mt-4 p-3.5 bg-amber-50/70 rounded-xl border border-amber-200/80 text-xs space-y-1.5 text-gray-700">
          <p><strong>Dimensions:</strong> ${product.dimensions}</p>
          <p><strong>Materials:</strong> ${product.material}</p>
          <p><strong>CBM / Weight:</strong> ${product.cbm} CBM / ${product.weightKg} kg per unit</p>
          <p><strong>40ft HC Capacity:</strong> Â±${Math.floor(65 / product.cbm)} units maximum load</p>
        </div>
      </div>

      <!-- Right Column: Specifications & Variant Selectors -->
      <div class="flex flex-col justify-between">
        <div>
          <!-- Status Badge -->
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs uppercase font-bold text-amber-800 tracking-wider">${product.category} FURNITURE</span>
            ${product.status === "ready" ? `
              <span class="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                âœ“ Ready Stock (${product.stock} pcs in Cirebon Warehouse)
              </span>
            ` : `
              <span class="px-2.5 py-0.5 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">
                â± Pre-Order (${product.leadTimeDays} Days Lead Time)
              </span>
            `}
          </div>

          <h3 class="text-xl font-bold font-serif-luxury text-amber-950 mb-2">${product.name}</h3>
          <p class="text-xs text-gray-600 mb-4 leading-relaxed">${product.description}</p>

          <!-- Variant 1: Finishing Color -->
          <div class="mb-3">
            <label class="block text-xs font-bold text-gray-800 mb-1.5">
              1. Select Rattan Finish / Color: <span class="text-amber-800 font-semibold">${selectedColor.name}</span>
            </label>
            <div class="flex flex-wrap gap-2">
              ${product.variants.colors.map(col => `
                <button onclick="updateModalVariant('color', '${col.name}')" class="px-2.5 py-1.5 rounded-lg border text-xs flex items-center gap-1.5 transition ${selectedColor.name === col.name ? 'border-amber-800 bg-amber-50 text-amber-900 font-bold shadow-sm' : 'border-gray-200 hover:border-amber-300 text-gray-700'}">
                  <span class="w-3 h-3 rounded-full border border-gray-400" style="background-color: ${col.preview}"></span>
                  ${col.name} ${col.priceDiff > 0 ? `(+${isUsd ? '$' + Math.round(col.priceDiff/USD_RATE) : 'Rp ' + col.priceDiff.toLocaleString()})` : ''}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Variant 2: Weaving Style -->
          <div class="mb-3">
            <label class="block text-xs font-bold text-gray-800 mb-1.5">
              2. Select Weaving Pattern: <span class="text-amber-800 font-semibold">${selectedWeave.name}</span>
            </label>
            <div class="flex flex-wrap gap-2">
              ${product.variants.weaves.map(weave => `
                <button onclick="updateModalVariant('weave', '${weave.name}')" class="px-2.5 py-1.5 rounded-lg border text-xs transition ${selectedWeave.name === weave.name ? 'border-amber-800 bg-amber-50 text-amber-900 font-bold shadow-sm' : 'border-gray-200 hover:border-amber-300 text-gray-700'}">
                  ${weave.name} ${weave.priceDiff > 0 ? `(+${isUsd ? '$' + Math.round(weave.priceDiff/USD_RATE) : 'Rp ' + weave.priceDiff.toLocaleString()})` : ''}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Variant 3: Cushion & Specifications -->
          <div class="mb-4">
            <label class="block text-xs font-bold text-gray-800 mb-1.5">
              3. Cushion & Size Options: <span class="text-amber-800 font-semibold">${selectedCushion.name}</span>
            </label>
            <div class="flex flex-wrap gap-2">
              ${product.variants.cushions.map(cush => `
                <button onclick="updateModalVariant('cushion', '${cush.name}')" class="px-2.5 py-1.5 rounded-lg border text-xs transition ${selectedCushion.name === cush.name ? 'border-amber-800 bg-amber-50 text-amber-900 font-bold shadow-sm' : 'border-gray-200 hover:border-amber-300 text-gray-700'}">
                  ${cush.name} ${cush.priceDiff !== 0 ? `(${cush.priceDiff > 0 ? '+' : ''}${isUsd ? '$' + Math.round(cush.priceDiff/USD_RATE) : 'Rp ' + cush.priceDiff.toLocaleString()})` : ''}
                </button>
              `).join("")}
            </div>
          </div>
        </div>

        <!-- Bottom: Quantity & Real-time Subtotal -->
        <div class="pt-4 border-t border-gray-200">
          <div class="flex items-center justify-between mb-4">
            <div>
              <span class="text-[11px] text-gray-500 block">Selected Variant Unit Price:</span>
              <span class="text-xl font-black text-amber-950 font-serif-luxury">${priceFormatted}</span>
            </div>

            <!-- Qty Counter -->
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-gray-700">Quantity:</span>
              <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                <button onclick="updateModalQty(-1)" class="w-8 h-8 flex items-center justify-center font-bold text-gray-600 hover:bg-amber-100 hover:text-amber-900" aria-label="Decrease quantity">-</button>
                <span class="w-10 text-center font-bold text-sm text-gray-800">${qty}</span>
                <button onclick="updateModalQty(1)" class="w-8 h-8 flex items-center justify-center font-bold text-gray-600 hover:bg-amber-100 hover:text-amber-900" aria-label="Increase quantity">+</button>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between bg-amber-100/60 p-2.5 rounded-lg border border-amber-200 text-xs mb-3">
            <span class="text-gray-700">Estimated Subtotal (${qty} units):</span>
            <span class="font-bold text-amber-950 text-sm font-mono">${totalSubtotalFormatted}</span>
          </div>

          <div class="flex gap-2">
            <button onclick="addModalProductToCalculator()" class="flex-1 py-3 px-4 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2">
              <i data-lucide="plus-circle" class="w-4 h-4"></i> Add to Export Calculator
            </button>
            <button onclick="closeProductDetailModal()" class="py-3 px-4 border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold text-xs rounded-xl transition">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Modal Variant Selection Handlers
function updateModalVariant(type, valueName) {
  if (!appState.selectedProductForModal) return;
  const prod = appState.selectedProductForModal.product;

  if (type === "color") {
    appState.selectedProductForModal.selectedColor = prod.variants.colors.find(c => c.name === valueName);
  } else if (type === "weave") {
    appState.selectedProductForModal.selectedWeave = prod.variants.weaves.find(w => w.name === valueName);
  } else if (type === "cushion") {
    appState.selectedProductForModal.selectedCushion = prod.variants.cushions.find(c => c.name === valueName);
  }

  renderProductModalContent();
}

function updateModalQty(delta) {
  if (!appState.selectedProductForModal) return;
  const newQty = appState.selectedProductForModal.qty + delta;
  if (newQty >= 1 && newQty <= 999) {
    appState.selectedProductForModal.qty = newQty;
    renderProductModalContent();
  }
}

function addModalProductToCalculator() {
  if (!appState.selectedProductForModal) return;
  const { product, selectedColor, selectedWeave, selectedCushion, qty } = appState.selectedProductForModal;

  addItemToCalculator(product, selectedColor.name, selectedWeave.name, selectedCushion.name, qty);
  closeProductDetailModal();

  const calcSection = document.getElementById("kalkulator");
  if (calcSection) {
    calcSection.scrollIntoView({ behavior: "smooth" });
  }
}

function quickAddToCalculator(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  addItemToCalculator(
    product,
    product.variants.colors[0].name,
    product.variants.weaves[0].name,
    product.variants.cushions[0].name,
    1
  );

  const calcSection = document.getElementById("kalkulator");
  if (calcSection) {
    calcSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Setup FAQ Accordion & Category Filter (Feature 7)
function setupFaqAccordion() {
  const faqTabs = document.querySelectorAll(".faq-tab-btn");
  faqTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      faqTabs.forEach(t => {
        t.classList.remove("bg-amber-800", "text-white");
        t.classList.add("bg-white", "text-gray-700");
      });

      tab.classList.remove("bg-white", "text-gray-700");
      tab.classList.add("bg-amber-800", "text-white");

      appState.activeFaqCategory = tab.getAttribute("data-faq-cat");
      renderFaq();
    });
  });

  const faqSearchInput = document.getElementById("faq-search-input");
  if (faqSearchInput) {
    faqSearchInput.addEventListener("input", (e) => {
      appState.faqSearchQuery = e.target.value.toLowerCase().trim();
      renderFaq();
    });
  }
}

// Render FAQ Accordion (Feature 7)
function renderFaq() {
  const container = document.getElementById("faq-accordion-container");
  if (!container) return;

  const filteredFaqs = faqData.filter(faq => {
    const matchCat = appState.activeFaqCategory === "all" || faq.category === appState.activeFaqCategory;
    const matchSearch = appState.faqSearchQuery === "" || 
      faq.question.toLowerCase().includes(appState.faqSearchQuery) ||
      faq.answer.toLowerCase().includes(appState.faqSearchQuery);

    return matchCat && matchSearch;
  });

  if (filteredFaqs.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 text-gray-500 text-xs">
        No questions matched your search query "${appState.faqSearchQuery}". Please contact Mr. Ridwan directly via WhatsApp.
      </div>
    `;
    return;
  }

  container.innerHTML = filteredFaqs.map((faq, index) => `
    <div class="border border-amber-200/80 rounded-xl bg-white overflow-hidden shadow-sm hover:border-amber-400 transition">
      <button onclick="toggleFaqAccordion('faq-ans-${faq.id}')" class="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-gray-900 text-sm hover:text-amber-800 transition">
        <span class="flex items-center gap-2.5">
          <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs flex items-center justify-center shrink-0">
            ${index + 1}
          </span>
          <span>${faq.question}</span>
        </span>
        <i data-lucide="chevron-down" id="faq-icon-${faq.id}" class="w-4 h-4 text-amber-800 shrink-0 transition-transform duration-300"></i>
      </button>

      <div id="faq-ans-${faq.id}" class="hidden p-4 sm:p-5 pt-0 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-amber-50/20">
        <div class="py-1">
          ${faq.answer.replace(/\n/g, "<br>")}
        </div>
        <div class="mt-3 pt-2 border-t border-amber-100/60 flex items-center justify-between text-[11px] text-gray-400">
          <span>Topic: <strong class="text-amber-800">${faq.categoryName}</strong></span>
          <span class="text-emerald-700 font-semibold">âœ“ Official Exporter Guidance</span>
        </div>
      </div>
    </div>
  `).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function toggleFaqAccordion(contentId) {
  const content = document.getElementById(contentId);
  if (!content) return;

  const isHidden = content.classList.contains("hidden");
  content.classList.toggle("hidden");

  const iconId = contentId.replace("faq-ans-", "faq-icon-");
  const icon = document.getElementById(iconId);
  if (icon) {
    if (isHidden) {
      icon.classList.add("rotate-180");
    } else {
      icon.classList.remove("rotate-180");
    }
  }
}

// Toast Notification Helper
function showToast(message, type = "info") {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `toast-item p-3.5 rounded-xl text-xs font-semibold shadow-lg border flex items-center gap-2.5 max-w-sm ${
    type === "success" ? "bg-emerald-900 text-white border-emerald-700" :
    type === "warning" ? "bg-amber-900 text-white border-amber-700" :
    "bg-gray-900 text-white border-gray-700"
  }`;

  const iconSvg = type === "success" ? "check-circle" : type === "warning" ? "alert-triangle" : "info";
  toast.innerHTML = `
    <i data-lucide="${iconSvg}" class="w-4 h-4 shrink-0"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}
