/* =========================================================
   CART LOGIC
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const emptyCart = document.getElementById("emptyCart");
  const cartContent = document.getElementById("cartContent");
  const cartItemsList = document.getElementById("cartItemsList");
  const cartItemsCountText = document.getElementById("cartItemsCountText");
  const summaryItemsCount = document.getElementById("summaryItemsCount");
  
  const subtotalAmount = document.getElementById("subtotalAmount");
  const deliveryFeeAmount = document.getElementById("deliveryFeeAmount");
  const totalAmount = document.getElementById("totalAmount");
  
  const savingsBox = document.getElementById("savingsBox");
  const savingsAmount = document.getElementById("savingsAmount");
  
  const extraSections = document.getElementById("extraSections");

  // Re-render cart whenever a change happens
  function renderCart() {
    // 1. Get current cart products
    // Note: 'cart' and 'products' are defined in js/products.js
    const cartProducts = products.filter((product) => cart[product.id] > 0);
    
    // 2. Compute Totals
    let subtotal = 0;
    let totalSavings = 0;
    let totalItems = 0;

    cartProducts.forEach((product) => {
      const qty = cart[product.id];
      totalItems += qty;
      subtotal += product.price * qty;
      
      if (product.oldPrice) {
        totalSavings += (product.oldPrice - product.price) * qty;
      }
    });

    const deliveryFee = subtotal > 0 ? 30 : 0;
    const total = subtotal + deliveryFee;

    // 3. Update Header & Summary Counts
    const itemText = totalItems === 1 ? "item" : "items";
    cartItemsCountText.textContent = `${totalItems} ${itemText} ready for checkout`;
    summaryItemsCount.textContent = `${totalItems} ${itemText}`;

    // 4. Show/Hide Empty State
    if (cartProducts.length === 0) {
      emptyCart.classList.remove("hidden");
      cartContent.classList.add("hidden");
      extraSections.classList.add("hidden");
    } else {
      emptyCart.classList.add("hidden");
      cartContent.classList.remove("hidden");
      extraSections.classList.remove("hidden");

      // Populate Items
      cartItemsList.innerHTML = "";
      cartProducts.forEach((product) => {
        const qty = cart[product.id];
        
        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";
        itemDiv.innerHTML = `
          <div class="cart-item-flex">
            <!-- IMAGE -->
            <a href="product-details.html?id=${product.id}" class="cart-item-img-link">
              <img src="${product.image}" alt="${product.name}" />
            </a>

            <!-- INFO -->
            <div class="cart-item-info">
              <span class="item-category">${product.category}</span>
              <a href="product-details.html?id=${product.id}" class="item-name">${product.name}</a>
              <p class="item-unit">${product.unit}</p>
              <p class="item-price">₹${product.price}</p>
            </div>

            <!-- ACTIONS -->
            <div class="cart-item-actions">
              <div class="cart-quantity-controls">
                <button class="cart-btn-minus" data-id="${product.id}">
                  <i data-lucide="minus" style="width: 15px; height: 15px;"></i>
                </button>
                <span>${qty}</span>
                <button class="cart-btn-plus" data-id="${product.id}">
                  <i data-lucide="plus" style="width: 15px; height: 15px;"></i>
                </button>
              </div>

              <button class="cart-btn-remove" data-id="${product.id}">
                <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i> Remove
              </button>
            </div>
          </div>
        `;
        cartItemsList.appendChild(itemDiv);
      });

      // Attach Listeners to dynamic buttons
      document.querySelectorAll(".cart-btn-minus").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const id = e.currentTarget.getAttribute("data-id");
          if (cart[id] > 1) {
            cart[id]--;
          } else {
            delete cart[id];
          }
          localStorage.setItem("carecart_cart", JSON.stringify(cart));
          renderCart();
        });
      });

      document.querySelectorAll(".cart-btn-plus").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const id = e.currentTarget.getAttribute("data-id");
          cart[id] = (cart[id] || 0) + 1;
          localStorage.setItem("carecart_cart", JSON.stringify(cart));
          renderCart();
        });
      });

      document.querySelectorAll(".cart-btn-remove").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const id = e.currentTarget.getAttribute("data-id");
          delete cart[id];
          localStorage.setItem("carecart_cart", JSON.stringify(cart));
          renderCart();
        });
      });

      // Update Summary Info
      if (totalSavings > 0) {
        savingsBox.classList.remove("hidden");
        savingsAmount.textContent = `₹${totalSavings}`;
      } else {
        savingsBox.classList.add("hidden");
      }

      subtotalAmount.textContent = `₹${subtotal}`;
      deliveryFeeAmount.textContent = `₹${deliveryFee}`;
      totalAmount.textContent = `₹${total}`;
    }

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  // Initial render
  renderCart();
});
