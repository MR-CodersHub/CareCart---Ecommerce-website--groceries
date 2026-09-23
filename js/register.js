/* =========================================================
   REGISTER PAGE LOGIC
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const regName = document.getElementById("regName");
  const regEmail = document.getElementById("regEmail");
  const regPassword = document.getElementById("regPassword");
  const regConfirmPassword = document.getElementById("regConfirmPassword");
  const selectedRoleInput = document.getElementById("selectedRoleInput");
  
  const registerErrorAlert = document.getElementById("registerErrorAlert");
  const registerSuccessAlert = document.getElementById("registerSuccessAlert");

  const toggleRegPasswordBtn = document.getElementById("toggleRegPasswordBtn");
  const toggleRegConfirmPasswordBtn = document.getElementById("toggleRegConfirmPasswordBtn");

  let isRegPassVisible = false;
  let isRegConfirmPassVisible = false;

  // Toggle Password
  if (toggleRegPasswordBtn) {
    toggleRegPasswordBtn.addEventListener("click", () => {
      isRegPassVisible = !isRegPassVisible;
      regPassword.type = isRegPassVisible ? "text" : "password";
      toggleRegPasswordBtn.innerHTML = isRegPassVisible
        ? '<i data-lucide="eye-off"></i>'
        : '<i data-lucide="eye"></i>';
      if (typeof lucide !== "undefined") lucide.createIcons();
    });
  }

  // Toggle Confirm Password
  if (toggleRegConfirmPasswordBtn) {
    toggleRegConfirmPasswordBtn.addEventListener("click", () => {
      isRegConfirmPassVisible = !isRegConfirmPassVisible;
      regConfirmPassword.type = isRegConfirmPassVisible ? "text" : "password";
      toggleRegConfirmPasswordBtn.innerHTML = isRegConfirmPassVisible
        ? '<i data-lucide="eye-off"></i>'
        : '<i data-lucide="eye"></i>';
      if (typeof lucide !== "undefined") lucide.createIcons();
    });
  }

  // Portal selection cards
  const portalCards = document.querySelectorAll(".portal-choice-card");
  portalCards.forEach((card) => {
    card.addEventListener("click", () => {
      portalCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      const role = card.getAttribute("data-role");
      selectedRoleInput.value = role;
      clearAlerts();
    });
  });

  function clearAlerts() {
    if (registerErrorAlert) registerErrorAlert.classList.add("hidden");
    if (registerSuccessAlert) registerSuccessAlert.classList.add("hidden");
  }

  [regName, regEmail, regPassword, regConfirmPassword].forEach((input) => {
    if (input) {
      input.addEventListener("input", clearAlerts);
    }
  });

  function showError(msg) {
    if (registerErrorAlert) {
      registerErrorAlert.textContent = msg;
      registerErrorAlert.classList.remove("hidden");
    }
    if (registerSuccessAlert) registerSuccessAlert.classList.add("hidden");
  }

  function showSuccess(msg) {
    if (registerSuccessAlert) {
      registerSuccessAlert.textContent = msg;
      registerSuccessAlert.classList.remove("hidden");
    }
    if (registerErrorAlert) registerErrorAlert.classList.add("hidden");
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = regName.value.trim();
      const email = regEmail.value.trim();
      const password = regPassword.value;
      const confirmPassword = regConfirmPassword.value;
      const role = selectedRoleInput.value;

      // Validation
      if (!name) {
        showError("Please enter your full name.");
        return;
      }

      if (!email) {
        showError("Please enter your email.");
        return;
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
        showError("Please enter a valid email address.");
        return;
      }

      if (!password) {
        showError("Please enter a password.");
        return;
      }

      if (password.length < 6) {
        showError("Password must contain at least 6 characters.");
        return;
      }

      if (!confirmPassword) {
        showError("Please confirm your password.");
        return;
      }

      if (password !== confirmPassword) {
        showError("Passwords do not match.");
        return;
      }

      if (!role) {
        showError("Please select your portal.");
        return;
      }

      // Check existing user
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const normalizedEmail = email.toLowerCase();

      const existingUser = users.find((u) => u.email === normalizedEmail);
      if (existingUser) {
        showError("An account with this email already exists.");
        return;
      }

      // Create new user
      const newUser = {
        id: Date.now(),
        name,
        email: normalizedEmail,
        password,
        role,
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      showSuccess("Account created successfully! Redirecting to login...");

      setTimeout(() => {
        window.location.href = "login.html";
      }, 1200);
    });
  }

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});
