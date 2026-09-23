/* =========================================================
   PRODUCT DETAILS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Get the product ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  // 2. DOM Elements
  const notFound = document.getElementById("notFound");
  const productFound = document.getElementById("productFound");
  const breadcrumbName = document.getElementById("breadcrumbName");
  
  const productImage = document.getElementById("productImage");
  const productDiscountBadge = document.getElementById("productDiscountBadge");
  const productCategory = document.getElementById("productCategory");
  const productName = document.getElementById("productName");
  const productRating = document.getElementById("productRating");
  const productReviews = document.getElementById("productReviews");
  const productPrice = document.getElementById("productPrice");
  const productOldPrice = document.getElementById("productOldPrice");
  const productDiscountText = document.getElementById("productDiscountText");
  const productUnit = document.getElementById("productUnit");
  const productDescription = document.getElementById("productDescription");
  
  const qtyMinus = document.getElementById("qtyMinus");
  const qtyPlus = document.getElementById("qtyPlus");
  const qtyValue = document.getElementById("qtyValue");
  const productPack = document.getElementById("productPack");
  
  const addToCartBtn = document.getElementById("addToCartBtn");
  const addToCartText = document.getElementById("addToCartText");
  const addToCartTotal = document.getElementById("addToCartTotal");
  const likeBtn = document.getElementById("likeBtn");
  
  const faqSection = document.getElementById("faqSection");
  const faqList = document.getElementById("faqList");
  const deliverySupportSection = document.getElementById("deliverySupportSection");

  // State
  let quantity = 1;
  let isLiked = false;
  let product = null;

  // 3. Find Product (assumes products.js is loaded before this script)
  if (typeof products !== "undefined" && productId) {
    product = products.find(p => String(p.id) === String(productId));
  }

  // 4. Render Logic
  if (!product) {
    notFound.classList.remove("hidden");
    productFound.classList.add("hidden");
    faqSection.classList.add("hidden");
    deliverySupportSection.classList.add("hidden");
    return;
  }

  // Product found
  notFound.classList.add("hidden");
  productFound.classList.remove("hidden");
  faqSection.classList.remove("hidden");
  deliverySupportSection.classList.remove("hidden");

  // Populate basic info
  breadcrumbName.textContent = product.name;
  productImage.src = product.image;
  productImage.alt = product.name;
  productDiscountBadge.textContent = `SAVE ${product.discount}`;
  productCategory.textContent = product.category;
  productName.textContent = product.name;
  productRating.textContent = product.rating;
  productReviews.textContent = `${product.reviews} customer reviews`;
  productPrice.textContent = `₹${product.price}`;
  productOldPrice.textContent = `₹${product.oldPrice}`;
  productDiscountText.textContent = `${product.discount} OFF`;
  productUnit.textContent = `Price for ${product.unit}`;
  productDescription.textContent = product.description;
  productPack.textContent = `${product.unit} / pack`;

  function updateCartButton() {
    qtyValue.textContent = quantity;
    const itemText = quantity === 1 ? "Item" : "Items";
    addToCartText.textContent = `Add ${quantity} ${itemText} to Cart`;
    addToCartTotal.textContent = `• ₹${(product.price * quantity).toFixed(2)}`;
  }

  // Initial update
  updateCartButton();

  // Event Listeners
  qtyMinus.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      updateCartButton();
    }
  });

  qtyPlus.addEventListener("click", () => {
    quantity++;
    updateCartButton();
  });

  likeBtn.addEventListener("click", () => {
    isLiked = !isLiked;
    if (isLiked) {
      likeBtn.classList.add("active");
    } else {
      likeBtn.classList.remove("active");
    }
  });

  addToCartBtn.addEventListener("click", () => {
    // If addToCart is globally available from products.js
    if (typeof addToCart === "function") {
      addToCart(product, quantity);
    } else if (typeof cart !== "undefined") {
      cart[product.id] = (cart[product.id] || 0) + quantity;
      localStorage.setItem("carecart_cart", JSON.stringify(cart));
    } else {
      console.warn("Cart functionality not initialized properly.");
    }
    
    // Redirect to cart
    window.location.href = "cart.html"; 
  });

  // ==========================================
  // FAQ LOGIC
  // ==========================================
  const faqs = [
    {
      category: "Shopping",
      icon: "shopping-cart",
      question: "How do I place a grocery order?",
      answer: "Browse the Products page, select the groceries you need, add them to your cart, and continue to checkout to complete your order.",
    },
    {
      category: "Delivery",
      icon: "truck",
      question: "Can I schedule a grocery delivery?",
      answer: "Yes. CareCart allows users and caregivers to plan their grocery deliveries according to their preferred schedule.",
    },
    {
      category: "Caregiver",
      icon: "users",
      question: "Can a family member manage groceries for a senior?",
      answer: "Yes. Caregivers can manage senior profiles, delivery addresses, dietary preferences, frequently ordered items, and grocery orders through the caregiver dashboard.",
    },
    {
      category: "Payments",
      icon: "credit-card",
      question: "What payment methods are available?",
      answer: "Available payment methods may vary depending on the checkout options provided by CareCart.",
    },
    {
      category: "Safety",
      icon: "shield-check",
      question: "Is my personal information safe?",
      answer: "CareCart is designed with privacy and security in mind. Personal information should only be used for providing and improving the requested services.",
    },
    {
      category: "General",
      icon: "help-circle",
      question: "Who can use CareCart?",
      answer: "CareCart is designed for seniors, family members, caregivers, and anyone who wants a simpler way to manage grocery shopping and delivery.",
    },
    {
      category: "Shopping",
      icon: "shopping-cart",
      question: "Can I reorder frequently purchased groceries?",
      answer: "Yes. Frequently ordered items can be saved so that commonly purchased groceries are easier to find and order again.",
    },
    {
      category: "Delivery",
      icon: "truck",
      question: "Can I track my order?",
      answer: "CareCart provides an order-status experience so users and caregivers can stay informed about active deliveries.",
    }
  ];

  function renderFAQs() {
    faqList.innerHTML = "";
    
    faqs.forEach((faq, index) => {
      const faqItem = document.createElement("div");
      faqItem.className = "faq-item";
      
      faqItem.innerHTML = `
        <button class="faq-header" data-index="${index}">
          <div class="faq-icon">
            <i data-lucide="${faq.icon}"></i>
          </div>
          <div class="faq-q-container">
            <span class="faq-category">${faq.category}</span>
            <h2 class="faq-question">${faq.question}</h2>
          </div>
          <i data-lucide="chevron-down" class="faq-chevron"></i>
        </button>
        <div class="faq-body">
          <p class="faq-answer">${faq.answer}</p>
        </div>
      `;
      
      faqList.appendChild(faqItem);
    });

    const faqHeaders = document.querySelectorAll(".faq-header");
    faqHeaders.forEach(header => {
      header.addEventListener("click", function() {
        const parent = this.parentElement;
        const isOpen = parent.classList.contains("open");
        
        // Close all
        document.querySelectorAll(".faq-item").forEach(item => {
          item.classList.remove("open");
        });
        
        // If it wasn't open, open it
        if (!isOpen) {
          parent.classList.add("open");
        }
      });
    });
  }

  renderFAQs();

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});
