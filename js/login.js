/* =========================================================
   LOGIN PAGE LOGIC
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");
  const loginRole = document.getElementById("loginRole");
  const loginErrorAlert = document.getElementById("loginErrorAlert");
  const togglePasswordBtn = document.getElementById("togglePasswordBtn");
  const togglePasswordIcon = document.getElementById("togglePasswordIcon");

  let isPasswordVisible = false;

  // Toggle password visibility
  if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener("click", () => {
      isPasswordVisible = !isPasswordVisible;
      loginPassword.type = isPasswordVisible ? "text" : "password";
      togglePasswordBtn.innerHTML = isPasswordVisible
        ? '<i data-lucide="eye-off"></i>'
        : '<i data-lucide="eye"></i>';
      if (typeof lucide !== "undefined") lucide.createIcons();
    });
  }

  // Clear error on input change
  [loginEmail, loginPassword, loginRole].forEach((input) => {
    if (input) {
      input.addEventListener("input", () => {
        if (loginErrorAlert) loginErrorAlert.classList.add("hidden");
      });
    }
  });

  function showError(msg) {
    if (loginErrorAlert) {
      loginErrorAlert.textContent = msg;
      loginErrorAlert.classList.remove("hidden");
    }
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = loginEmail.value.trim();
      const password = loginPassword.value;
      const role = loginRole.value;

      // Validations
      if (!email) {
        showError("Please enter your email.");
        return;
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
        showError("Please enter a valid email address.");
        return;
      }

      if (!password) {
        showError("Please enter your password.");
        return;
      }

      if (!role) {
        showError("Please select your portal.");
        return;
      }

      // Check users from localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const normalizedEmail = email.toLowerCase();

      const user = users.find(
        (u) => u.email === normalizedEmail && u.password === password
      );

      if (!user) {
        showError("Invalid email or password.");
        return;
      }

      if (user.role !== role) {
        showError("The selected portal does not match your registered role.");
        return;
      }

      // Save Login state
      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", "true");

      // Redirect by role
      if (user.role === "admin") {
        window.location.href = "admin.html";
      } else if (user.role === "caregiver") {
        window.location.href = "caregiver.html";
      } else if (user.role === "senior") {
        window.location.href = "shop.html";
      } else {
        window.location.href = "index.html";
      }
    });
  }

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});
