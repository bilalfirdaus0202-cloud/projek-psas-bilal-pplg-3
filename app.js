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
              <p class="text-xs text-gray-500">${testi.company} • ${testi.country} ${testi.flag}</p>
            </div>
          </div>
          <div class="text-amber-500 text-xs tracking-wider">
            ${'★'.repeat(testi.rating)}
          </div>
        </div>
        <p class="text-xs text-gray-600 italic leading-relaxed">
          "${testi.comment}"
        </p>
      </div>
      <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-emerald-700 font-semibold">
        <span>✓ Verified Global Importer</span>
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
              <span>CBM: <strong>${prod.cbm} m³</strong></span>
              <span>Weight: <strong>${prod.weightKg} kg</strong></span>
              <span class="flex items-center text-amber-500 font-bold">★ ${prod.rating}</span>
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
          <p><strong>40ft HC Capacity:</strong> ±${Math.floor(65 / product.cbm)} units maximum load</p>
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
                ✓ Ready Stock (${product.stock} pcs in Cirebon Warehouse)
              </span>
            ` : `
              <span class="px-2.5 py-0.5 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">
                ⏱ Pre-Order (${product.leadTimeDays} Days Lead Time)
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
          <span class="text-emerald-700 font-semibold">✓ Official Exporter Guidance</span>
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
