# 🪑 Cirebon Rattan Heritage — Mr. Ridwan's Global Rattan Export Portal
### 🎓 Vocational Software Engineering (PPLG) Summative Assessment Project

---

## 📌 1. Background & Case Study

**Mr. Ridwan** is the owner and founder of a prominent handcrafted rattan export enterprise based in **Tegalwangi, Weru, Cirebon, Indonesia**—the historic epicentre of the global rattan manufacturing industry. In his daily commercial operations with international buyers (particularly across Southeast Asia, Malaysia, and worldwide), Mr. Ridwan faced recurring communication bottlenecks. Potential clients consistently asked the same **5 fundamental inquiries**:

1. *Are the desired products currently available / ready stock?*
2. *What customization variants exist (finishing colors, weave types, dimensions, and cushion fabrics)?*
3. *What is the total order price for specific quantities (including wholesale container volume discounts)?*
4. *How much is the international ocean freight / shipping cost to their destination port?*
5. *What is the estimated delivery time of arrival (ETA)?*

To solve these challenges, this web portal was engineered as a **trusted digital business publication** and an **interactive export solution hub**, empowering international buyers to access transparent, real-time answers 24/7.

---

## 🚀 2. Fulfilment of the 7 Mandatory Features

All **7 Mandatory Features** have been fully developed and integrated:

| No | Mandatory Feature | Technical Implementation & Export Details | Status |
|:---:|:---|:---|:---:|
| **1** | **Business Publication** | Comprehensive company profile for **CV. Ridwan Rattan Nusantara** (est. 2008), 6,500 m² facility, 15-20 containers/month capacity, and 4 international legal certifications (**SVLK / V-Legal**, **AFAS Certified Fumigation**, **Phytosanitary Health Certificate**, and **ISO 9001:2015**). | ✅ Complete |
| **2** | **Product Availability** | Real-time dual inventory badges: dynamic pulsing green badge **"READY STOCK (X units)"** (dispatched in 1-3 business days) and amber badge **"PRE-ORDER (X Days)"** for custom architectural orders, backed by instant catalog availability filters. | ✅ Complete |
| **3** | **Product Variants** | Rich interactive variant selector featuring genuine Cirebon craftsmanship: 4 finishing colors (*Natural Honey, Bleached Scandinavian, Smoked Walnut, Antique Charcoal* with live color swatches), 4 weave types (*Peel Weave, Core Pitrit, Kubu Grey, All-Weather Synthetic PE*), and marine-grade Sunbrella® / water-repellent canvas cushions. | ✅ Complete |
| **4** | **Total Price Calculator** | Dynamic real-time calculation engine with automatic tiered bulk volume discounts: **5% off** (10-49 units), **12% off** (50-99 units / 20ft container), and **18% off** (100+ units / 40ft High Cube container). Seamlessly supports dual currencies (**USD $** & **IDR Rp**). | ✅ Complete |
| **5** | **Shipping Costs** | Transparent freight calculator focusing on **Malaysia ports** (**Port Klang - Selangor/KL, Penang Port - Langkawi/North, Johor Port / PTP**) as well as global hubs (*Singapore, Sydney, Tokyo, Rotterdam, Los Angeles, Dubai*). Supports **LCL** (from $32/CBM ~ RM 145), **FCL 20ft** ($580), **FCL 40ft HC** ($980), and **Air Cargo Express**. Automatically applies **ATIGA Form D (0% Import Duty)** & MAQIS standard fumigation. | ✅ Complete |
| **6** | **Estimated Time of Arrival (ETA)** | Real-time calendar arrival calculator combining production lead time with direct ocean transit via the Malacca Straits (**only 3 to 5 sailing days to Malaysia ports**). Includes a visual 5-stage export milestone tracker (*QC → Fumigation → Jakarta Priok Port Loading → Ocean Transit → Client Port Arrival*). | ✅ Complete |
| **7** | **Frequently Asked Questions (FAQ)** | Responsive FAQ accordion with instant keyword search covering essential export topics: Minimum Order Quantity (MOQ), T/T & L/C payment terms, fumigation certification, 5-ply moisture-barrier packaging, and sample policies. | ✅ Complete |

---

## 🇲🇾 3. Specialized Malaysia Export Focus

The platform is customized to serve buyers in **Malaysia** (resorts, hotels, interior designers, cafe chains, and furniture distributors):
- **Strategic Ports Covered**: Port Klang (Selangor / Greater KL), Penang Port (Penang & Langkawi resort corridor), and Johor Port / Tanjung Pelepas (Johor & Southern region).
- **Ultra-Fast Transit**: Just **3 to 5 sailing days** from Tanjung Priok, Jakarta across the Malacca Straits.
- **ATIGA Form D (0% Import Duty)**: ASEAN Trade in Goods Agreement documentation assistance ensuring 0% preferential customs tariff into Malaysia.
- **MAQIS Compliance**: High-standard Methyl Bromide fumigation treatment with official Phytosanitary documentation accepted by the Malaysian Quarantine and Inspection Services.

---

## 🌟 4. Advanced Interactive Features

Beyond the core requirements, the platform includes professional international trading tools:

1. **Official Export Proforma Invoice Generator (Print / PDF)**:
   - Generates a formal, printable Proforma Invoice complete with unique document reference numbers, itemized CBM, Incoterms (FOB/CIF), bank wire details, and Mr. Ridwan's official export signature.
2. **One-Click WhatsApp Export Inquiry**:
   - Compiles all selected products, variants, quantities, total cubic volume (CBM), gross weight, shipping breakdown, and final landed price into a clean WhatsApp message sent directly to Mr. Ridwan's export sales desk.
3. **Dual Currency Toggle (USD $ / IDR Rp)**:
   - Allows instant conversion between USD and IDR with competitive rates when converted to Malaysian Ringgit (MYR).
4. **Quick Simulation Presets**:
   - One-click buttons to simulate common buying tiers: *Sample Order (2 pcs)*, *20ft Container (70 pcs)*, and *40ft HC Container (230 pcs)*.
5. **Interactive Variant Modal with Live Price & Cubic Calculation**:
   - Selecting a variant automatically adjusts dimensions, cubic volume (CBM), and gross weight in real time.
6. **Toast Notification System**:
   - Provides clear feedback when updating quantities, switching currency, or copying invoice details.

---

## 📁 5. Flat File Architecture (Zero Subfolders)

All files reside directly in the root workspace directory for ease of deployment, grading, and testing:

```
d:\tugas-asas-pplg\
├── index.html       # Main application page (Semantic HTML5, fully responsive)
├── style.css        # Custom styles (warm rattan aesthetics, glassmorphism, print CSS)
├── data.js          # Export database (products, variants, stock, shipping rates, FAQ)
├── calculator.js    # Calculation engine (total price, bulk discounts, freight, ETA & Invoice)
├── app.js           # UI logic (catalog filtering, modal, FAQ accordion, search & toast)
├── script.js        # Unified JavaScript bundle
└── README.md        # Comprehensive project documentation
```

---

## 🛠️ 6. Technology Stack

- **HTML5 Semantic**: Clean, accessible, SEO-friendly layout structure.
- **Tailwind CSS (CDN)**: Mobile-first utility styling with custom warm rattan earthy color palette.
- **Modern JavaScript (ES6+ Modular)**: Clean separation of concerns (Data Store, Calculation Logic, and DOM Manipulation) without heavy external framework dependencies.
- **Lucide Icons**: Crisp, lightweight vector iconography.
- **Google Fonts**: *Plus Jakarta Sans* (modern UI) paired with *Playfair Display* (luxury artisan craft serif).

---

## 💻 7. How to Run & Test the Application

The web portal is completely standalone (**zero build dependencies**). No Node.js, npm, or local web server is required:

1. Open the project folder in File Explorer: `d:\tugas-asas-pplg\`
2. Double-click **`index.html`** to launch it in any modern browser (**Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari**).
3. Test key interactions:
   - Browse the catalog and filter by *"Ready Stock"* or *"Chairs & Loungers"*.
   - Click any product card to inspect woven variants and add to the export calculator.
   - Adjust quantities to see automatic **5%, 12%, or 18% container discounts**.
   - Select **"Malaysia - Port Klang (Selangor / KL)"** to verify ocean freight and ETA date.
   - Click **"Print / Save Official Proforma Invoice"** to preview the formal PDF-ready export document.
   - Test the FAQ search bar by typing *"fumigation"*, *"MOQ"*, or *"payment"*.

---

*Engineered with precision for Mr. Ridwan's Cirebon Rattan Heritage Export Enterprise — Vocational Software Engineering (PPLG) 2026.*
