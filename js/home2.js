/* =========================================================
   CARECART HOME2
   Vanilla JavaScript
========================================================= */


/* =========================================================
   NAVBAR
========================================================= */

function loadNavbar() {

  const navbar = document.getElementById("navbar");

  if (!navbar) return;

  navbar.innerHTML = `

    <header class="site-navbar">

      <div class="navbar-container">

        <a href="index.html" class="navbar-logo">

          <span class="navbar-logo-icon">
            <i data-lucide="heart"></i>
          </span>

          <span class="navbar-logo-text">
            CareCart
          </span>

        </a>


        <nav class="navbar-links" aria-label="Main navigation">

          <a href="index.html">
            Home
          </a>

          <a href="home2.html" class="active">
            Home 2
          </a>

          <a href="services.html">
            Services
          </a>

          <a href="shop.html">
            Products
          </a>

          <a href="about.html">
            About
          </a>

          <a href="contact.html">
            Contact
          </a>

        </nav>


        <div class="navbar-actions">

          <button
            type="button"
            class="navbar-icon-button"
            id="themeToggle"
            aria-label="Toggle dark mode"
          >
            <i data-lucide="moon"></i>
          </button>


          <button
            type="button"
            class="navbar-icon-button"
            id="rtlToggle"
            aria-label="Toggle RTL"
          >
            <i data-lucide="languages"></i>
          </button>


          <a
            href="login.html"
            class="navbar-login"
          >
            Login
          </a>


          <a
            href="register.html"
            class="navbar-register"
          >
            Get Started
          </a>


          <button
            type="button"
            class="mobile-menu-button"
            id="mobileMenuButton"
            aria-label="Open navigation menu"
          >
            <i data-lucide="menu"></i>
          </button>

        </div>

      </div>


      <div
        class="mobile-navbar-menu"
        id="mobileNavbarMenu"
      >

        <a href="index.html">
          Home
        </a>

        <a href="home2.html">
          Home 2
        </a>

        <a href="services.html">
          Services
        </a>

        <a href="shop.html">
          Products
        </a>

        <a href="about.html">
          About
        </a>

        <a href="contact.html">
          Contact
        </a>

        <a href="login.html">
          Login
        </a>

        <a href="register.html">
          Get Started
        </a>

      </div>

    </header>

  `;

  addNavbarStyles();

}


/* =========================================================
   NAVBAR CSS
========================================================= */

function addNavbarStyles() {

  if (document.getElementById("home2-navbar-styles")) {
    return;
  }

  const style = document.createElement("style");

  style.id = "home2-navbar-styles";

  style.textContent = `

    .site-navbar {
      position: relative;
      width: 100%;
      background: #ffffff;
      border-bottom: 1px solid #eef2f0;
    }

    .navbar-container {
      width: min(100% - 32px, 1280px);
      min-height: 76px;
      margin: 0 auto;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }

    .navbar-logo {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
    }

    .navbar-logo-icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 13px;
      background: #E67A55;
      color: #ffffff;
    }

    .navbar-logo-icon svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    .navbar-logo-text {
      color: #34745F;
      font-size: 22px;
      font-weight: 800;
    }

    .navbar-links {
      display: flex;
      align-items: center;
      gap: 26px;
    }

    .navbar-links a {
      position: relative;
      color: #475569;
      font-size: 14px;
      font-weight: 600;
      transition: 0.25s ease;
    }

    .navbar-links a:hover,
    .navbar-links a.active {
      color: #34745F;
    }

    .navbar-links a.active::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -8px;
      height: 2px;
      border-radius: 999px;
      background: #E67A55;
    }

    .navbar-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .navbar-icon-button,
    .mobile-menu-button {
      width: 40px;
      height: 40px;
      border: 0;
      border-radius: 12px;
      background: transparent;
      color: #475569;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: 0.25s ease;
    }

    .navbar-icon-button:hover,
    .mobile-menu-button:hover {
      background: #DDF1E7;
      color: #34745F;
    }

    .navbar-icon-button svg,
    .mobile-menu-button svg {
      width: 19px;
      height: 19px;
    }

    .navbar-login {
      margin-left: 4px;
      padding: 10px 14px;
      color: #34745F;
      font-size: 14px;
      font-weight: 700;
    }

    .navbar-register {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 42px;
      padding: 10px 18px;
      border-radius: 999px;
      background: #E67A55;
      color: #ffffff;
      font-size: 13px;
      font-weight: 700;
      transition: 0.25s ease;
    }

    .navbar-register:hover {
      background: #D96845;
      transform: translateY(-1px);
    }

    .mobile-menu-button {
      display: none;
    }

    .mobile-navbar-menu {
      display: none;
    }


    body.dark-mode .site-navbar {
      background: #0f172a;
      border-color: #1e293b;
    }

    body.dark-mode .navbar-logo-text {
      color: #86efac;
    }

    body.dark-mode .navbar-links a,
    body.dark-mode .navbar-icon-button,
    body.dark-mode .mobile-menu-button {
      color: #cbd5e1;
    }

    body.dark-mode .navbar-links a:hover,
    body.dark-mode .navbar-links a.active {
      color: #86efac;
    }


    @media (max-width: 900px) {

      .navbar-links {
        display: none;
      }

      .navbar-login,
      .navbar-register {
        display: none;
      }

      .mobile-menu-button {
        display: flex;
      }

      .mobile-navbar-menu {
        padding: 10px 16px 20px;
        border-top: 1px solid #eef2f0;
        background: #ffffff;
      }

      .mobile-navbar-menu.open {
        display: flex;
        flex-direction: column;
      }

      .mobile-navbar-menu a {
        padding: 13px 8px;
        color: #475569;
        font-size: 15px;
        font-weight: 600;
        border-radius: 10px;
      }

      .mobile-navbar-menu a:hover {
        background: #DDF1E7;
        color: #34745F;
      }

      body.dark-mode .mobile-navbar-menu {
        border-color: #1e293b;
        background: #0f172a;
      }

      body.dark-mode .mobile-navbar-menu a {
        color: #cbd5e1;
      }

      body.dark-mode .mobile-navbar-menu a:hover {
        background: #1e293b;
        color: #86efac;
      }
    }

  `;

  document.head.appendChild(style);

}


/* =========================================================
   FOOTER
========================================================= */

function loadFooter() {

  const footer = document.getElementById("footer");

  if (!footer) return;

  footer.innerHTML = `

    <footer class="site-footer">

      <div class="footer-container">

        <div class="footer-main">

          <!-- Brand -->

          <div class="footer-brand">

            <a
              href="index.html"
              class="footer-logo"
            >

              <span class="footer-logo-icon">

                <i data-lucide="heart"></i>

              </span>

              <span>
                CareCart
              </span>

            </a>


            <p>
              Simple technology that helps families manage
              everyday care, groceries, and deliveries for
              the people who matter most.
            </p>


            <div class="footer-socials">

              <a
                href="#"
                aria-label="Instagram"
              >
                <i data-lucide="instagram"></i>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
              >
                <i data-lucide="linkedin"></i>
              </a>

            </div>

          </div>


          <!-- Quick Links -->

          <div class="footer-column">

            <h3>
              Quick Links
            </h3>

            <a href="index.html">
              Home
            </a>

            <a href="services.html">
              Services
            </a>

            <a href="shop.html">
              Products
            </a>

            <a href="about.html">
              About Us
            </a>

          </div>


          <!-- Support -->

          <div class="footer-column">

            <h3>
              Support
            </h3>

            <a href="contact.html">
              Contact Us
            </a>

            <a href="pricing.html">
              Pricing & Plans
            </a>

            <a href="faq.html">
              FAQ
            </a>

            <a href="privacy.html">
              Privacy Policy
            </a>

            <a href="terms.html">
              Terms & Conditions
            </a>

            <a href="caregiver.html">
              Caregiver Dashboard
            </a>

          </div>


          <!-- Contact -->

          <div class="footer-column footer-contact">

            <h3>
              Get in Touch
            </h3>

            <div>

              <i data-lucide="phone"></i>

              <span>
                +91 98765 43210
              </span>

            </div>

            <div>

              <i data-lucide="mail"></i>

              <span>
                hello@carecart.com
              </span>

            </div>

            <div>

              <i data-lucide="map-pin"></i>

              <span>
                Tamil Nadu, India
              </span>

            </div>

          </div>

        </div>


        <!-- Footer Bottom -->

        <div class="footer-bottom">

          <p>
            © ${new Date().getFullYear()} CareCart. All rights reserved.
          </p>

          <div>

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>

  `;

  addFooterStyles();

}


/* =========================================================
   FOOTER CSS
========================================================= */

function addFooterStyles() {

  if (document.getElementById("home2-footer-styles")) {
    return;
  }

  const style = document.createElement("style");

  style.id = "home2-footer-styles";

  style.textContent = `

    .site-footer {
      background: #173f35;
      color: #ffffff;
    }

    .footer-container {
      width: min(100% - 32px, 1280px);
      margin: 0 auto;
    }

    .footer-main {
      display: grid;
      grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
      gap: 50px;
      padding: 70px 0 50px;
    }

    .footer-brand {
      max-width: 360px;
    }

    .footer-logo {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: #ffffff;
      font-size: 24px;
      font-weight: 800;
    }

    .footer-logo-icon {
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 13px;
      background: #E67A55;
    }

    .footer-logo-icon svg {
      width: 21px;
      height: 21px;
      fill: currentColor;
    }

    .footer-brand > p {
      margin-top: 18px;
      color: rgba(255, 255, 255, 0.65);
      font-size: 14px;
      line-height: 1.8;
    }

    .footer-socials {
      display: flex;
      gap: 10px;
      margin-top: 22px;
    }

    .footer-socials a {
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 50%;
      color: rgba(255,255,255,0.75);
      transition: 0.25s ease;
    }

    .footer-socials a:hover {
      background: #E67A55;
      border-color: #E67A55;
      color: #ffffff;
      transform: translateY(-2px);
    }

    .footer-socials svg {
      width: 17px;
      height: 17px;
    }

    .footer-column {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }

    .footer-column h3 {
      margin-bottom: 8px;
      color: #ffffff;
      font-size: 15px;
      font-weight: 700;
    }

    .footer-column a {
      color: rgba(255,255,255,0.65);
      font-size: 13px;
      transition: 0.25s ease;
    }

    .footer-column a:hover {
      color: #ffffff;
      transform: translateX(2px);
    }

    .footer-contact > div {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      color: rgba(255,255,255,0.65);
      font-size: 13px;
      line-height: 1.6;
    }

    .footer-contact svg {
      width: 17px;
      height: 17px;
      flex-shrink: 0;
      margin-top: 2px;
      color: #E67A55;
    }

    .footer-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 22px 0;
      border-top: 1px solid rgba(255,255,255,0.1);
    }

    .footer-bottom p {
      color: rgba(255,255,255,0.5);
      font-size: 12px;
    }

    .footer-bottom > div {
      display: flex;
      gap: 20px;
    }

    .footer-bottom a {
      color: rgba(255,255,255,0.5);
      font-size: 12px;
      transition: 0.25s ease;
    }

    .footer-bottom a:hover {
      color: #ffffff;
    }


    @media (max-width: 900px) {

      .footer-main {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px 30px;
      }

    }


    @media (max-width: 600px) {

      .footer-main {
        grid-template-columns: 1fr;
        padding: 50px 0 35px;
      }

      .footer-brand {
        max-width: none;
      }

      .footer-bottom {
        align-items: flex-start;
        flex-direction: column;
      }

      .footer-bottom > div {
        flex-direction: column;
        gap: 8px;
      }

    }

  `;

  document.head.appendChild(style);

}


/* =========================================================
   DARK MODE
========================================================= */

function setupTheme() {

  const themeButton = document.getElementById("themeToggle");

  if (!themeButton) return;

  const savedTheme = localStorage.getItem("carecart-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  updateThemeIcon();


  themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const isDark =
      document.body.classList.contains("dark-mode");

    localStorage.setItem(
      "carecart-theme",
      isDark ? "dark" : "light"
    );

    updateThemeIcon();

  });

}


function updateThemeIcon() {

  const button = document.getElementById("themeToggle");

  if (!button) return;

  const isDark =
    document.body.classList.contains("dark-mode");

  button.innerHTML = isDark
    ? '<i data-lucide="sun"></i>'
    : '<i data-lucide="moon"></i>';

  refreshIcons();

}


/* =========================================================
   RTL
========================================================= */

function setupRTL() {

  const rtlButton = document.getElementById("rtlToggle");

  if (!rtlButton) return;

  const savedDirection =
    localStorage.getItem("carecart-direction");

  if (savedDirection === "rtl") {
    document.documentElement.dir = "rtl";
  }

  rtlButton.addEventListener("click", function () {

    const current =
      document.documentElement.dir || "ltr";

    const next =
      current === "rtl" ? "ltr" : "rtl";

    document.documentElement.dir = next;

    localStorage.setItem(
      "carecart-direction",
      next
    );

  });

}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

  const menuButton =
    document.getElementById("mobileMenuButton");

  const menu =
    document.getElementById("mobileNavbarMenu");

  if (!menuButton || !menu) return;

  menuButton.addEventListener("click", function () {

    menu.classList.toggle("open");

    const isOpen =
      menu.classList.contains("open");

    menuButton.innerHTML = isOpen
      ? '<i data-lucide="x"></i>'
      : '<i data-lucide="menu"></i>';

    refreshIcons();

  });


  const menuLinks =
    menu.querySelectorAll("a");

  menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      menu.classList.remove("open");

      menuButton.innerHTML =
        '<i data-lucide="menu"></i>';

      refreshIcons();

    });

  });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function setupScrollReveal() {

  const elements =
    document.querySelectorAll(".reveal");

  if (!elements.length) return;


  if (
    !("IntersectionObserver" in window)
  ) {

    elements.forEach(function (element) {

      element.classList.add("revealed");

    });

    return;

  }


  const observer =
    new IntersectionObserver(
      function (entries, observerInstance) {

        entries.forEach(function (entry) {

          if (!entry.isIntersecting) return;

          entry.target.classList.add("revealed");

          observerInstance.unobserve(
            entry.target
          );

        });

      },
      {
        threshold: 0.12
      }
    );


  elements.forEach(function (element) {

    observer.observe(element);

  });

}


/* =========================================================
   LUCIDE ICONS
========================================================= */

function refreshIcons() {

  if (
    window.lucide &&
    typeof window.lucide.createIcons === "function"
  ) {

    window.lucide.createIcons();

  }

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function setupActiveNavigation() {

  const currentPage =
    window.location.pathname
      .split("/")
      .pop()
      .toLowerCase();

  const links =
    document.querySelectorAll(
      ".navbar-links a, .mobile-navbar-menu a"
    );

  links.forEach(function (link) {

    const href =
      link.getAttribute("href");

    if (!href) return;

    const linkPage =
      href.split("/")
        .pop()
        .toLowerCase();

    if (
      linkPage === currentPage ||
      (
        currentPage === "" &&
        linkPage === "index.html"
      )
    ) {

      link.classList.add("active");

    }

  });

}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    loadNavbar();

    loadFooter();

    refreshIcons();

    setupTheme();

    setupRTL();

    setupMobileMenu();

    setupActiveNavigation();

    setupScrollReveal();

    refreshIcons();

  }
);