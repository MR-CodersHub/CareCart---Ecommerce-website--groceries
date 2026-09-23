/* =====================================================
   PRODUCTS DATA
===================================================== */

const products = [
  {
    id: "banana",
    name: "Banana",
    unit: "1 kg",
    price: 54,
    oldPrice: 60,
    discount: "10%",
    category: "Fruits & Vegetables",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800",
    description:
      "Fresh and naturally sweet bananas, perfect for a healthy everyday diet.",
    rating: 4.8,
    reviews: 120,
  },

  {
    id: "apple",
    name: "Red Apple",
    unit: "1 kg",
    price: 120,
    oldPrice: 135,
    discount: "11%",
    category: "Fruits & Vegetables",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800",
    description:
      "Crisp, fresh and delicious red apples. Rich in vitamins and perfect for a healthy lifestyle.",
    rating: 4.8,
    reviews: 134,
  },

  {
    id: "broccoli",
    name: "Broccoli",
    unit: "500 g",
    price: 80,
    oldPrice: 90,
    discount: "11%",
    category: "Fruits & Vegetables",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=800",
    description:
      "Fresh green broccoli carefully selected for your family's healthy meals.",
    rating: 4.7,
    reviews: 98,
  },

  {
    id: "carrot",
    name: "Carrot",
    unit: "500 g",
    price: 45,
    oldPrice: 55,
    discount: "18%",
    category: "Fruits & Vegetables",
    image:
      "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=800",
    description:
      "Fresh and crunchy carrots, naturally rich in nutrients and perfect for everyday cooking.",
    rating: 4.6,
    reviews: 87,
  },

  {
    id: "tomato",
    name: "Tomato",
    unit: "1 kg",
    price: 40,
    oldPrice: 48,
    discount: "17%",
    category: "Fruits & Vegetables",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800",
    description:
      "Fresh juicy tomatoes selected for flavour and everyday cooking.",
    rating: 4.7,
    reviews: 105,
  },

  {
    id: "spinach",
    name: "Spinach",
    unit: "250 g",
    price: 30,
    oldPrice: 35,
    discount: "14%",
    category: "Fruits & Vegetables",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800",
    description:
      "Fresh leafy spinach packed with nutrients for healthy meals.",
    rating: 4.6,
    reviews: 76,
  },

  {
    id: "potato",
    name: "Potato",
    unit: "1 kg",
    price: 38,
    oldPrice: 45,
    discount: "16%",
    category: "Fruits & Vegetables",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800",
    description:
      "Fresh quality potatoes suitable for a variety of everyday dishes.",
    rating: 4.7,
    reviews: 92,
  },

  {
    id: "orange",
    name: "Orange",
    unit: "1 kg",
    price: 95,
    oldPrice: 110,
    discount: "14%",
    category: "Fruits & Vegetables",
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?w=800",
    description:
      "Juicy and refreshing oranges packed with natural goodness.",
    rating: 4.8,
    reviews: 110,
  },

  {
    id: "milk",
    name: "Fresh Milk",
    unit: "1 litre",
    price: 58,
    oldPrice: 65,
    discount: "11%",
    category: "Dairy & Eggs",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800",
    description:
      "Fresh milk for your family's everyday nutrition.",
    rating: 4.8,
    reviews: 145,
  },

  {
    id: "eggs",
    name: "Farm Eggs",
    unit: "12 pcs",
    price: 85,
    oldPrice: 95,
    discount: "10%",
    category: "Dairy & Eggs",
    image:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=800",
    description:
      "Farm-fresh eggs, carefully selected for quality.",
    rating: 4.7,
    reviews: 118,
  },

  {
    id: "biscuits",
    name: "Digestive Biscuits",
    unit: "250 g",
    price: 55,
    oldPrice: 65,
    discount: "15%",
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800",
    description:
      "Crispy digestive biscuits perfect for tea-time snacks.",
    rating: 4.5,
    reviews: 72,
  },

  {
    id: "juice",
    name: "Orange Juice",
    unit: "1 litre",
    price: 110,
    oldPrice: 125,
    discount: "12%",
    category: "Beverages",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800",
    description:
      "Refreshing orange juice made for a delicious and healthy drink.",
    rating: 4.7,
    reviews: 89,
  },

  {
    id: "oats",
    name: "Rolled Oats",
    unit: "500 g",
    price: 95,
    oldPrice: 110,
    discount: "14%",
    category: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?w=800",
    description:
      "Healthy rolled oats for a nutritious and filling breakfast.",
    rating: 4.6,
    reviews: 81,
  },

  // ================= NEW PRODUCTS =================

  {
    id: "mango",
    name: "Fresh Mango",
    unit: "1 kg",
    price: 140,
    oldPrice: 160,
    discount: "13%",
    category: "Fruits & Vegetables",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800",
    description:
      "Sweet and juicy fresh mangoes, perfect for a refreshing healthy snack.",
    rating: 4.8,
    reviews: 96,
  },

  {
    id: "curd",
    name: "Fresh Curd",
    unit: "500 g",
    price: 45,
    oldPrice: 52,
    discount: "13%",
    category: "Dairy & Eggs",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
    description:
      "Smooth and creamy fresh curd, ideal for everyday meals and healthy diets.",
    rating: 4.7,
    reviews: 84,
  },

  {
    id: "bread",
    name: "Whole Wheat Bread",
    unit: "400 g",
    price: 50,
    oldPrice: 60,
    discount: "17%",
    category: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
    description:
      "Soft whole wheat bread made for a simple and nutritious breakfast.",
    rating: 4.6,
    reviews: 91,
  },
];


/* =====================================================
   CATEGORIES
===================================================== */

const categories = [
  {
    name: "All Categories",
    icon: "grid-3x3",
  },

  {
    name: "Fruits & Vegetables",
    icon: "apple",
  },

  {
    name: "Dairy & Eggs",
    icon: "milk",
  },

  {
    name: "Snacks",
    icon: "cookie",
  },

  {
    name: "Beverages",
    icon: "coffee",
  },

  {
    name: "Personal Care",
    icon: "heart",
  },

  {
    name: "Household",
    icon: "home",
  },

  {
    name: "Breakfast",
    icon: "cookie",
  },

  {
    name: "Health & Wellness",
    icon: "leaf",
  },
];


/* =====================================================
   STATES
===================================================== */

let selectedCategory = "All Categories";

let searchTerm = "";

let cart = JSON.parse(localStorage.getItem("carecart_cart")) || {};

let wishlist = [];

let sortBy = "popular";

let viewMode = "grid";


/* =====================================================
   DOM ELEMENTS
===================================================== */

const productGrid =
  document.getElementById("productGrid");

const categoryList =
  document.getElementById("categoryList");

const mobileCategoryList =
  document.getElementById("mobileCategoryList");

const searchInput =
  document.getElementById("searchInput");

const categoryTitle =
  document.getElementById("categoryTitle");

const bannerTitle =
  document.getElementById("bannerTitle");

const bannerDescription =
  document.getElementById("bannerDescription");

const productCount =
  document.getElementById("productCount");

const emptyState =
  document.getElementById("emptyState");

const sortButton =
  document.getElementById("sortButton");

const sortText =
  document.getElementById("sortText");

const gridViewBtn =
  document.getElementById("gridViewBtn");

const listViewBtn =
  document.getElementById("listViewBtn");

const mobileSidebar =
  document.getElementById("mobileSidebar");

const mobileCategoryBtn =
  document.getElementById("mobileCategoryBtn");

const closeMobileSidebar =
  document.getElementById("closeMobileSidebar");

const mobileSelectedCategory =
  document.getElementById(
    "mobileSelectedCategory"
  );


/* =====================================================
   RENDER CATEGORIES
===================================================== */

function renderCategories() {

  categoryList.innerHTML = "";

  mobileCategoryList.innerHTML = "";


  categories.forEach((category) => {

    const active =
      selectedCategory === category.name;


    const desktopButton =
      document.createElement("button");

    desktopButton.className =
      `category-button ${
        active ? "active" : ""
      }`;

    desktopButton.innerHTML = `
      <i data-lucide="${category.icon}"></i>

      <span>
        ${category.name}
      </span>

      ${
        active
          ? `
            <i
              data-lucide="chevron-right"
              class="arrow"
            ></i>
          `
          : ""
      }
    `;


    desktopButton.addEventListener(
      "click",
      () => {

        selectedCategory =
          category.name;

        renderAll();

      }
    );


    categoryList.appendChild(
      desktopButton
    );


    /* MOBILE CATEGORY */

    const mobileButton =
      desktopButton.cloneNode(true);


    mobileButton.addEventListener(
      "click",
      () => {

        selectedCategory =
          category.name;

        mobileSidebar.classList.remove(
          "show"
        );

        renderAll();

      }
    );


    mobileCategoryList.appendChild(
      mobileButton
    );

  });


  lucide.createIcons();

}


/* =====================================================
   GET FILTERED PRODUCTS
===================================================== */

function getFilteredProducts() {

  let filtered =
    [...products];


  /* CATEGORY */

  if (
    selectedCategory !==
    "All Categories"
  ) {

    filtered =
      filtered.filter(
        (product) =>
          product.category ===
          selectedCategory
      );

  }


  /* SEARCH */

  if (
    searchTerm.trim() !== ""
  ) {

    filtered =
      filtered.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(
              searchTerm.toLowerCase()
            )
      );

  }


  /* SORT */

  if (
    sortBy === "price-low"
  ) {

    filtered.sort(
      (a, b) =>
        a.price - b.price
    );

  }


  if (
    sortBy === "price-high"
  ) {

    filtered.sort(
      (a, b) =>
        b.price - a.price
    );

  }


  return filtered;

}


/* =====================================================
   RENDER PRODUCTS
===================================================== */

function renderProducts() {

  const filteredProducts =
    getFilteredProducts();


  productGrid.innerHTML = "";


  /* PRODUCT COUNT */

  productCount.textContent =
    `${filteredProducts.length} products`;


  /* EMPTY */

  if (
    filteredProducts.length === 0
  ) {

    emptyState.classList.remove(
      "hidden"
    );

  } else {

    emptyState.classList.add(
      "hidden"
    );

  }


  /* PRODUCTS */

  filteredProducts.forEach(
    (product) => {

      const quantity =
        cart[product.id] || 0;


      const isWishlisted =
        wishlist.includes(product.id);


      const card =
        document.createElement("div");


      card.className =
        "product-card";


      card.innerHTML = `

        <!-- IMAGE -->

        <a href="product-details.html?id=${product.id}" class="product-image" style="display: block; cursor: pointer;">

          <span class="discount-badge">
            -${product.discount}
          </span>

          <img
            src="${product.image}"
            alt="${product.name}"
          />

        </a>


        <!-- INFO -->

        <div class="product-info">


          <div class="product-top">

            <div>

              <a href="product-details.html?id=${product.id}" style="text-decoration: none; color: inherit;">
                <h3 class="product-name" style="cursor: pointer;">
                  ${product.name}
                </h3>
              </a>

              <p class="product-unit">
                ${product.unit}
              </p>

            </div>


            <button
              class="
                wishlist-btn
                ${
                  isWishlisted
                    ? "active"
                    : ""
                }
              "
            >

              <i data-lucide="heart"></i>

            </button>

          </div>


          <!-- PRICE -->

          <div class="product-price">

            <span class="current-price">
              ₹${product.price}
            </span>

            <span class="old-price">
              ₹${product.oldPrice}
            </span>

          </div>


          <!-- CART -->

          <div class="product-cart">

            ${
              quantity === 0
                ? `

                  <button
                    class="add-cart-btn"
                  >

                    Add to Cart

                    <i
                      data-lucide="shopping-cart"
                    ></i>

                  </button>

                `
                : `

                  <div
                    class="
                      quantity-controls
                    "
                  >

                    <button
                      class="minus-btn"
                    >

                      <i
                        data-lucide="minus"
                      ></i>

                    </button>


                    <span>
                      ${quantity}
                    </span>


                    <button
                      class="plus-btn"
                    >

                      <i
                        data-lucide="plus"
                      ></i>

                    </button>

                  </div>

                `
            }

          </div>

        </div>

      `;


      /* WISHLIST */

      const wishlistButton =
        card.querySelector(
          ".wishlist-btn"
        );


      wishlistButton.addEventListener(
        "click",
        () => {

          toggleWishlist(
            product.id
          );

        }
      );


      /* ADD TO CART */

      const addButton =
        card.querySelector(
          ".add-cart-btn"
        );


      if (addButton) {

        addButton.addEventListener(
          "click",
          () => {

            addToCart(
              product,
              1
            );

          }
        );

      }


      /* MINUS */

      const minusButton =
        card.querySelector(
          ".minus-btn"
        );


      if (minusButton) {

        minusButton.addEventListener(
          "click",
          () => {

            updateCart(
              product.id,
              quantity - 1
            );

          }
        );

      }


      /* PLUS */

      const plusButton =
        card.querySelector(
          ".plus-btn"
        );


      if (plusButton) {

        plusButton.addEventListener(
          "click",
          () => {

            updateCart(
              product.id,
              quantity + 1
            );

          }
        );

      }


      productGrid.appendChild(
        card
      );

    }
  );


  lucide.createIcons();

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(
  product,
  quantity = 1
) {

  cart[product.id] =
    (cart[product.id] || 0)
    + quantity;

  localStorage.setItem("carecart_cart", JSON.stringify(cart));

  window.location.href = "cart.html";
}


/* =====================================================
   UPDATE CART
===================================================== */

function updateCart(
  productId,
  quantity
) {

  if (
    quantity <= 0
  ) {

    delete cart[productId];

  } else {

    cart[productId] =
      quantity;

  }

  localStorage.setItem("carecart_cart", JSON.stringify(cart));

  renderProducts();

}


/* =====================================================
   WISHLIST
===================================================== */

function toggleWishlist(
  productId
) {

  if (
    wishlist.includes(productId)
  ) {

    wishlist =
      wishlist.filter(
        (id) =>
          id !== productId
      );

  } else {

    wishlist.push(
      productId
    );

  }


  renderProducts();

}


/* =====================================================
   UPDATE BANNER
===================================================== */

function updateBanner() {

  const isAll =
    selectedCategory ===
    "All Categories";


  const title =
    isAll
      ? "Fresh Groceries"
      : selectedCategory;


  categoryTitle.textContent =
    title;


  bannerTitle.textContent =
    title;


  bannerDescription.textContent =
    isAll
      ? `
        Everyday essentials carefully selected
        for your loved ones.
      `
      : `
        Fresh and carefully selected
        ${selectedCategory.toLowerCase()}
        for your loved ones.
      `;


  mobileSelectedCategory.textContent =
    selectedCategory;

}


/* =====================================================
   SORT
===================================================== */

sortButton.addEventListener(
  "click",
  () => {

    if (
      sortBy === "popular"
    ) {

      sortBy =
        "price-low";

      sortText.textContent =
        "Sort: Price Low";

    }

    else if (
      sortBy ===
      "price-low"
    ) {

      sortBy =
        "price-high";

      sortText.textContent =
        "Sort: Price High";

    }

    else {

      sortBy =
        "popular";

      sortText.textContent =
        "Sort: Popular";

    }


    renderProducts();

  }
);


/* =====================================================
   VIEW MODE
===================================================== */

gridViewBtn.addEventListener(
  "click",
  () => {

    viewMode =
      "grid";


    productGrid.classList.remove(
      "list-view"
    );


    gridViewBtn.classList.add(
      "active"
    );


    listViewBtn.classList.remove(
      "active"
    );

  }
);


listViewBtn.addEventListener(
  "click",
  () => {

    viewMode =
      "list";


    productGrid.classList.add(
      "list-view"
    );


    listViewBtn.classList.add(
      "active"
    );


    gridViewBtn.classList.remove(
      "active"
    );

  }
);


/* =====================================================
   SEARCH
===================================================== */

if (searchInput) {
  searchInput.addEventListener(
    "input",
    (event) => {

      searchTerm =
        event.target.value;


      renderProducts();

    }
  );
}


/* =====================================================
   MOBILE SIDEBAR
===================================================== */

mobileCategoryBtn.addEventListener(
  "click",
  () => {

    mobileSidebar.classList.add(
      "show"
    );

  }
);


closeMobileSidebar.addEventListener(
  "click",
  () => {

    mobileSidebar.classList.remove(
      "show"
    );

  }
);


mobileSidebar.addEventListener(
  "click",
  (event) => {

    if (
      event.target ===
      mobileSidebar
    ) {

      mobileSidebar.classList.remove(
        "show"
      );

    }

  }
);


/* =====================================================
   SHOP NOW
===================================================== */

document
  .getElementById("shopNowBtn")
  .addEventListener(
    "click",
    () => {

      productGrid.scrollIntoView({
        behavior: "smooth",
      });

    }
  );


/* =====================================================
   SCROLL TO TOP
===================================================== */

document
  .getElementById("scrollTopBtn")
  .addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    }
  );


/* =====================================================
   RENDER EVERYTHING
===================================================== */

function renderAll() {
  if (!document.getElementById("productGrid")) return;
  renderCategories();
  updateBanner();
  renderProducts();
}


/* =====================================================
   INITIAL LOAD
===================================================== */

if (document.getElementById("productGrid")) {
  renderAll();
}

if (typeof lucide !== "undefined") {
  lucide.createIcons();
}