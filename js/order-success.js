/* =========================================================
   ORDER SUCCESS LOGIC
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Clear cart upon successful order
  localStorage.removeItem("carecart_cart");

  // Retrieve payment method if stored
  const selectedPayment = localStorage.getItem("carecart_payment_method") || "cod";
  const paymentMethodText = document.getElementById("paymentMethodText");
  if (paymentMethodText) {
    paymentMethodText.textContent = selectedPayment === "upi" ? "UPI / Card" : "Cash on Delivery";
  }

  // Generate random order ID suffix or keep consistent
  const orderIdText = document.getElementById("orderIdText");
  if (orderIdText) {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    orderIdText.textContent = `#CARE-${year}-${month}${day}-${randomNum}`;
  }

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});
