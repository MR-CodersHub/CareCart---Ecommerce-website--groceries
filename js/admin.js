/* =========================================================
   CARECART ADMIN PORTAL JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // 2. Dark Mode Toggle
  const adminThemeToggle = document.getElementById("adminThemeToggle");
  const adminThemeIcon = document.getElementById("adminThemeIcon");
  const adminThemeText = document.getElementById("adminThemeText");

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark-mode");
      if (adminThemeIcon) adminThemeIcon.setAttribute("data-lucide", "sun");
      if (adminThemeText) adminThemeText.textContent = "Light Mode";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark-mode");
      if (adminThemeIcon) adminThemeIcon.setAttribute("data-lucide", "moon");
      if (adminThemeText) adminThemeText.textContent = "Dark Mode";
    }
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  const savedTheme = localStorage.getItem("carecart_theme") || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme(savedTheme);

  if (adminThemeToggle) {
    adminThemeToggle.addEventListener("click", () => {
      const isCurrentlyDark = document.documentElement.classList.contains("dark");
      const nextTheme = isCurrentlyDark ? "light" : "dark";
      localStorage.setItem("carecart_theme", nextTheme);
      applyTheme(nextTheme);
    });
  }

  // 3. RTL Toggle
  const adminRtlToggle = document.getElementById("adminRtlToggle");
  const adminRtlText = document.getElementById("adminRtlText");

  function applyRtl(dir) {
    if (dir === "rtl") {
      document.documentElement.setAttribute("dir", "rtl");
      if (adminRtlText) adminRtlText.textContent = "Switch to LTR";
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      if (adminRtlText) adminRtlText.textContent = "Switch to RTL";
    }
  }

  const savedRtl = localStorage.getItem("carecart_rtl") || "ltr";
  applyRtl(savedRtl);

  if (adminRtlToggle) {
    adminRtlToggle.addEventListener("click", () => {
      const isRtl = document.documentElement.getAttribute("dir") === "rtl";
      const nextDir = isRtl ? "ltr" : "rtl";
      localStorage.setItem("carecart_rtl", nextDir);
      applyRtl(nextDir);
    });
  }

  // 4. Mobile Sidebar Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const closeMobileMenuBtn = document.getElementById("closeMobileMenuBtn");
  const adminSidebar = document.getElementById("adminSidebar");
  const mobileOverlay = document.getElementById("mobileOverlay");

  function openSidebar() {
    if (adminSidebar) {
      adminSidebar.classList.remove("hidden");
      adminSidebar.classList.add("fixed", "inset-y-0", "left-0", "z-50", "flex");
    }
    if (mobileOverlay) {
      mobileOverlay.classList.remove("hidden");
    }
  }

  function closeSidebar() {
    if (adminSidebar) {
      adminSidebar.classList.add("hidden");
      adminSidebar.classList.remove("fixed", "inset-y-0", "left-0", "z-50", "flex");
    }
    if (mobileOverlay) {
      mobileOverlay.classList.add("hidden");
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", openSidebar);
  if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener("click", closeSidebar);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeSidebar);

  // 5. Logout
  const adminLogoutBtn = document.getElementById("adminLogoutBtn");
  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("currentUser");
      localStorage.removeItem("isLoggedIn");
      window.location.href = "login.html";
    });
  }
});
