/* =========================================================
   CHECKOUT LOGIC
========================================================= */

let paymentMethod = "cod";

function setPaymentMethod(method) {
  paymentMethod = method;
  localStorage.setItem("carecart_payment_method", method);
  
  const btnCod = document.getElementById("btnCod");
  const btnUpi = document.getElementById("btnUpi");
  const radioCod = document.getElementById("radioCod");
  const radioUpi = document.getElementById("radioUpi");

  if (method === "cod") {
    btnCod.classList.add("active");
    btnUpi.classList.remove("active");
    radioCod.classList.add("radio-active");
    radioUpi.classList.remove("radio-active");
  } else {
    btnUpi.classList.add("active");
    btnCod.classList.remove("active");
    radioUpi.classList.add("radio-active");
    radioCod.classList.remove("radio-active");
  }
}

function handlePlaceOrder() {
  localStorage.setItem("carecart_payment_method", paymentMethod);
  window.location.href = "order-success.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const emptyCheckout = document.getElementById("emptyCheckout");
  const checkoutContent = document.getElementById("checkoutContent");
  
  const orderItemsList = document.getElementById("orderItemsList");
  const orderItemsCount = document.getElementById("orderItemsCount");
  
  const totalItemsDisplay = document.getElementById("totalItemsDisplay");
  const subtotalDisplay = document.getElementById("subtotalDisplay");
  const deliveryDisplay = document.getElementById("deliveryDisplay");
  const totalDisplay = document.getElementById("totalDisplay");

  function renderCheckout() {
    // 1. Get current cart products
    const cartProducts = products.filter((product) => cart[product.id] > 0);
    
    // 2. Compute Totals
    let subtotal = 0;
    let totalItems = 0;

    cartProducts.forEach((product) => {
      const qty = cart[product.id];
      totalItems += qty;
      subtotal += product.price * qty;
    });

    const deliveryFee = subtotal > 0 ? 30 : 0;
    const total = subtotal + deliveryFee;

    // 3. Show/Hide Empty State
    if (cartProducts.length === 0) {
      emptyCheckout.classList.remove("hidden");
      checkoutContent.classList.add("hidden");
    } else {
      emptyCheckout.classList.add("hidden");
      checkoutContent.classList.remove("hidden");

      // Populate Items
      orderItemsCount.textContent = `${totalItems} items`;
      orderItemsList.innerHTML = "";
      
      cartProducts.forEach((product) => {
        const qty = cart[product.id];
        
        const itemDiv = document.createElement("div");
        itemDiv.className = "order-item-card";
        itemDiv.innerHTML = `
          <div class="order-item-img">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div class="order-item-info">
            <h3>${product.name}</h3>
            <p class="order-item-unit">${product.unit}</p>
            <p class="order-item-qty">Qty: ${qty}</p>
          </div>
          <div class="order-item-price-box">
            <p class="order-item-total">₹${product.price * qty}</p>
            <p class="order-item-each">₹${product.price} each</p>
          </div>
        `;
        orderItemsList.appendChild(itemDiv);
      });

      // Update Summary Info
      totalItemsDisplay.textContent = totalItems;
      subtotalDisplay.textContent = `₹${subtotal}`;
      
      if (deliveryFee === 0) {
        deliveryDisplay.textContent = "FREE";
      } else {
        deliveryDisplay.textContent = `₹${deliveryFee}`;
      }
      
      totalDisplay.textContent = `₹${total}`;
    }

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  // Initial render
  renderCheckout();
});