/* =========================================================
   CAREGIVER PORTAL LOGIC
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Init Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // 3. Mobile Sidebar Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const closeMobileMenuBtn = document.getElementById("closeMobileMenuBtn");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const caregiverSidebar = document.getElementById("caregiverSidebar");

  function openSidebar() {
    caregiverSidebar.classList.add("open");
    mobileOverlay.classList.add("active");
  }

  function closeSidebar() {
    caregiverSidebar.classList.remove("open");
    mobileOverlay.classList.remove("active");
    const headerMenuBtn = document.getElementById("headerMenuBtn");
    if (headerMenuBtn) {
      headerMenuBtn.setAttribute("aria-expanded", "false");
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", openSidebar);
  if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener("click", closeSidebar);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeSidebar);

  // Menu link in the header: opens the sidebar (mobile)
  // or collapses/expands it on desktop.
  const headerMenuBtn = document.getElementById("headerMenuBtn");
  if (headerMenuBtn) {
    headerMenuBtn.addEventListener("click", () => {
      if (window.innerWidth < 1024) {
        openSidebar();
        headerMenuBtn.setAttribute("aria-expanded", "true");
      } else {
        const collapsed = document.body.classList.toggle("sidebar-collapsed");
        headerMenuBtn.setAttribute("aria-expanded", String(!collapsed));
      }
    });
  }

  // Close sidebar on link click (mobile)
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      if (window.innerWidth < 1024) {
        closeSidebar();
      }
    });
  });

  // 4. Dark Mode Toggle
  const cgDarkModeToggle = document.getElementById("cgDarkModeToggle");
  const cgDarkModeIcon = document.getElementById("cgDarkModeIcon");
  const cgDarkModeText = document.getElementById("cgDarkModeText");

  function applyCgTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      document.documentElement.classList.add("dark");
      if (cgDarkModeIcon) cgDarkModeIcon.setAttribute("data-lucide", "sun");
      if (cgDarkModeText) cgDarkModeText.textContent = "Light Mode";
    } else {
      document.body.classList.remove("dark-mode");
      document.documentElement.classList.remove("dark");
      if (cgDarkModeIcon) cgDarkModeIcon.setAttribute("data-lucide", "moon");
      if (cgDarkModeText) cgDarkModeText.textContent = "Dark Mode";
    }
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  const savedTheme = localStorage.getItem("carecart_theme") || "light";
  applyCgTheme(savedTheme);

  if (cgDarkModeToggle) {
    cgDarkModeToggle.addEventListener("click", () => {
      const isDark = document.body.classList.contains("dark-mode");
      const nextTheme = isDark ? "light" : "dark";
      localStorage.setItem("carecart_theme", nextTheme);
      applyCgTheme(nextTheme);
    });
  }

  // 5. RTL Toggle
  const cgRtlToggle = document.getElementById("cgRtlToggle");
  const cgRtlIcon = document.getElementById("cgRtlIcon");
  const cgRtlText = document.getElementById("cgRtlText");

  const savedRtl = localStorage.getItem("carecart_rtl");
  if (savedRtl === "rtl") {
    document.documentElement.setAttribute("dir", "rtl");
    if (cgRtlText) cgRtlText.textContent = "Switch to LTR";
  } else {
    document.documentElement.setAttribute("dir", "ltr");
    if (cgRtlText) cgRtlText.textContent = "Switch to RTL";
  }

  if (cgRtlToggle) {
    cgRtlToggle.addEventListener("click", () => {
      const isRtl = document.documentElement.getAttribute("dir") === "rtl";
      const newDir = isRtl ? "ltr" : "rtl";
      document.documentElement.setAttribute("dir", newDir);
      localStorage.setItem("carecart_rtl", newDir);

      if (cgRtlText) {
        cgRtlText.textContent = newDir === "rtl" ? "Switch to LTR" : "Switch to RTL";
      }
    });
  }

  // 6. Logout
  const cgLogoutBtn = document.getElementById("cgLogoutBtn");
  if (cgLogoutBtn) {
    cgLogoutBtn.addEventListener("click", () => {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("isLoggedIn");
      window.location.href = "index.html";
    });
  }
});
