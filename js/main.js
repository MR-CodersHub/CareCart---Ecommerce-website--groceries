/* =========================================================
   CARECART
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   NAVBAR
========================================================= */

const navbarHTML = `

<header class="site-navbar">

  <div class="navbar-container">

    <!-- =================================================
         LOGO
    ================================================== -->

    <a
      href="index.html"
      class="navbar-logo"
      data-nav-link
    >

      <img
        src="assets/images/carecart_logo.png"
        alt="CareCart Logo"
      >

      <span>
        CareCart
      </span>

    </a>


    <!-- =================================================
         DESKTOP NAVIGATION
    ================================================== -->

    <nav
      class="desktop-navigation"
      aria-label="Main navigation"
    >

      <a
        href="index.html"
        class="nav-link"
        data-page="index.html"
      >
        Home
      </a>

      <a
        href="home2.html"
        class="nav-link"
        data-page="home2.html"
      >
        Home 2
      </a>

      <a
        href="about.html"
        class="nav-link"
        data-page="about.html"
      >
        About Us
      </a>

      <a
        href="shop.html"
        class="nav-link"
        data-page="shop.html"
      >
        Products
      </a>

      <a
        href="blog.html"
        class="nav-link"
        data-page="blog.html"
      >
        Blog
      </a>

      <a
        href="contact.html"
        class="nav-link"
        data-page="contact.html"
      >
        Contact
      </a>

    </nav>


    <!-- =================================================
         RIGHT SIDE
    ================================================== -->

    <div class="navbar-actions">


      <!-- RTL -->

      <button
        type="button"
        class="nav-icon-button direction-button"
        id="directionButton"
        title="Change direction"
        aria-label="Change text direction"
      >
        RTL
      </button>


      <!-- THEME -->

      <button
        type="button"
        class="nav-icon-button"
        id="themeButton"
        title="Change theme"
        aria-label="Change theme"
      >

        <i data-lucide="moon"></i>

      </button>


      <!-- PROFILE -->

      <div class="profile-wrapper">

        <button
          type="button"
          class="nav-icon-button profile-button"
          id="profileButton"
          title="Profile"
          aria-label="Profile menu"
          aria-expanded="false"
        >

          <i data-lucide="user"></i>

          <i
            data-lucide="chevron-down"
            class="profile-chevron"
          ></i>

        </button>


        <div
          class="profile-dropdown"
          id="profileDropdown"
          hidden
        >

          <a
            href="caregiver.html"
            class="profile-dropdown-link"
          >
            <i data-lucide="heart-handshake"></i>
            <span>Caregiver Dashboard</span>
          </a>


          <a
            href="admin.html"
            class="profile-dropdown-link"
          >
            <i data-lucide="layout-dashboard"></i>
            <span>Admin Dashboard</span>
          </a>

        </div>

      </div>


      <!-- PRIMARY CTA -->

      <a
        href="login.html"
        class="navbar-login-btn"
      >
        Login
      </a>


      <!-- MOBILE MENU -->

      <button
        type="button"
        class="nav-icon-button mobile-menu-button"
        id="mobileMenuButton"
        title="Open menu"
        aria-label="Toggle navigation menu"
        aria-expanded="false"
      >

        <i data-lucide="menu"></i>

      </button>

    </div>

  </div>


  <!-- ===================================================
       MOBILE NAVIGATION
  ==================================================== -->

  <div
    class="mobile-navigation"
    id="mobileNavigation"
  >

    <nav class="mobile-nav-list">

      <a
        href="index.html"
        class="mobile-nav-link"
        data-page="index.html"
      >
        Home
      </a>

      <a
        href="home2.html"
        class="mobile-nav-link"
        data-page="home2.html"
      >
        Home 2
      </a>

      <a
        href="about.html"
        class="mobile-nav-link"
        data-page="about.html"
      >
        About Us
      </a>

      <a
        href="shop.html"
        class="mobile-nav-link"
        data-page="shop.html"
      >
        Products
      </a>

      <a
        href="blog.html"
        class="mobile-nav-link"
        data-page="blog.html"
      >
        Blog
      </a>

      <a
        href="contact.html"
        class="mobile-nav-link"
        data-page="contact.html"
      >
        Contact
      </a>

      <!-- LOGIN BUTTON -->
      <a
        href="login.html"
        class="mobile-login-btn"
      >
        <i data-lucide="log-in"></i>
        Login
      </a>

      <!-- QUICK ACCESS PORTALS -->
      <div class="mobile-profile-section">

        <a
          href="caregiver.html"
          class="mobile-profile-link"
        >
          <i data-lucide="heart-handshake"></i>
          Caregiver Dashboard
        </a>

        <a
          href="admin.html"
          class="mobile-profile-link"
        >
          <i data-lucide="layout-dashboard"></i>
          Admin Dashboard
        </a>

      </div>

    </nav>

  </div>

</header>

`;


/* =========================================================
   FOOTER
========================================================= */

const footerHTML = `

<footer class="site-footer">

  <div class="footer-container">


    <!-- ===================================================
         MAIN FOOTER
    ==================================================== -->

    <div class="footer-grid">


      <!-- =================================================
           BRAND
      ================================================== -->

      <div class="footer-brand">

        <a
          href="index.html"
          class="footer-logo"
        >

          <img
            src="assets/images/carecart_logo.png"
            alt="CareCart Logo"
          >

          <span>
            CareCart
          </span>

        </a>


        <p class="footer-description">

          Simple and reliable grocery delivery designed
          to help seniors and their families shop with
          confidence.

        </p>


        <!-- SOCIAL -->

        <div class="footer-socials">

          <a
            href="#"
            class="footer-social-link"
            aria-label="Instagram"
            title="Instagram"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>


          <a
            href="#"
            class="footer-social-link"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>

        </div>

      </div>


      <!-- =================================================
           QUICK LINKS
      ================================================== -->

      <div class="footer-column">

        <h3>
          Quick Links
        </h3>


        <ul class="footer-links">

          <li>
            <a href="index.html">
              Home
            </a>
          </li>

          <li>
            <a href="home2.html">
              Home 2
            </a>
          </li>

          <li>
            <a href="about.html">
              About Us
            </a>
          </li>

          <li>
            <a href="shop.html">
              Products
            </a>
          </li>

          <li>
            <a href="blog.html">
              Blog
            </a>
          </li>

        </ul>

      </div>


      <!-- =================================================
           SUPPORT
      ================================================== -->

      <div class="footer-column">

        <h3>
          Support
        </h3>


        <ul class="footer-links">

          <li>
            <a href="contact.html">
              Contact Us
            </a>
          </li>

          <li>
            <a href="privacy.html">
              Privacy Policy
            </a>
          </li>

          <li>
            <a href="terms.html">
              Terms & Conditions
            </a>
          </li>

          <li>
            <a href="faq.html">
              FAQ
            </a>
          </li>

          <li>
            <a href="pricing.html">
              Pricing & Plans
            </a>
          </li>

        </ul>

      </div>


      <!-- =================================================
           GET IN TOUCH
      ================================================== -->

      <div class="footer-column">

        <h3>
          Get in Touch
        </h3>


        <div class="footer-contact">


          <!-- EMAIL -->

          <div class="footer-contact-item">

            <i data-lucide="mail"></i>

            <span>
              hello@carecart.com
            </span>

          </div>


          <!-- PHONE -->

          <div class="footer-contact-item">

            <i data-lucide="phone"></i>

            <span>
              +1 800 123 4567
            </span>

          </div>


          <!-- LOCATION -->

          <div class="footer-contact-item">

            <i data-lucide="map-pin"></i>

            <p>
              Serving selected areas
              <br>
              with reliable delivery
            </p>

          </div>

        </div>

      </div>

    </div>


    <!-- ===================================================
         DIVIDER
    ==================================================== -->

    <div class="footer-divider"></div>


    <!-- ===================================================
         FOOTER BOTTOM
    ==================================================== -->

    <div class="footer-bottom">


      <!-- COPYRIGHT -->

      <p class="footer-copyright">

        © 2026 CareCart. All rights reserved.

      </p>


      <!-- MADE WITH -->

      <div class="footer-made-with">

        <span>
          Made with
        </span>

        <i data-lucide="heart"></i>

        <span>
          for seniors and families
        </span>

      </div>


      <!-- BACK TO TOP -->

      <button
        type="button"
        class="back-to-top"
        id="backToTop"
        aria-label="Back to top"
        title="Back to top"
      >

        <i data-lucide="arrow-up"></i>

      </button>

    </div>

  </div>

</footer>

`;


/* =========================================================
   INSERT NAVBAR + FOOTER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const navbar = document.getElementById("navbar");
  const footer = document.getElementById("footer");

  if (navbar) {
    navbar.innerHTML = navbarHTML;
    document.body.classList.add("has-top-navbar");
  }

  if (footer) {
    footer.innerHTML = footerHTML;
  }


  /* =======================================================
     INITIALIZE LUCIDE ICONS
  ======================================================== */

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }


  /* =======================================================
     THEME
  ======================================================== */

  initializeTheme();


  /* =======================================================
     RTL
  ======================================================== */

  initializeDirection();


  /* =======================================================
     NAVIGATION
  ======================================================== */

  initializeNavigation();


  /* =======================================================
     PROFILE
  ======================================================== */

  initializeProfile();


  /* =======================================================
     MOBILE MENU
  ======================================================== */

  initializeMobileMenu();


  /* =======================================================
     BACK TO TOP
  ======================================================== */

  initializeBackToTop();


  /* =======================================================
     RECREATE ICONS
  ======================================================== */

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

});


/* =========================================================
   THEME
========================================================= */

function initializeTheme() {

  const themeButton =
    document.getElementById("themeButton");

  if (!themeButton) {
    return;
  }


  const savedTheme =
    localStorage.getItem("carecart-theme");


  if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

  } else {

    document.body.classList.remove("dark-mode");

  }


  updateThemeIcon();


  function toggleThemeAction() {
    const isDark = document.body.classList.toggle("dark-mode");
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("carecart-theme", isDark ? "dark" : "light");
    updateThemeIcon();
  }

  if (themeButton) {
    themeButton.addEventListener("click", toggleThemeAction);
  }

}


/* =========================================================
   THEME ICON
========================================================= */

function updateThemeIcon() {
  const isDark = document.body.classList.contains("dark-mode");
  const themeButton = document.getElementById("themeButton");

  if (themeButton) {
    themeButton.innerHTML = `<i data-lucide="${isDark ? "sun" : "moon"}"></i>`;
  }

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}


/* =========================================================
   RTL
========================================================= */

function initializeDirection() {
  const directionButton = document.getElementById("directionButton");

  function updateDirectionUI(dir) {
    document.documentElement.dir = dir;
    if (directionButton) {
      directionButton.textContent = dir === "rtl" ? "LTR" : "RTL";
    }
  }

  const savedDirection = localStorage.getItem("carecart-direction") || "ltr";
  updateDirectionUI(savedDirection);

  function toggleDirectionAction() {
    const currentDirection = document.documentElement.dir;
    const nextDirection = currentDirection === "rtl" ? "ltr" : "rtl";
    localStorage.setItem("carecart-direction", nextDirection);
    updateDirectionUI(nextDirection);
  }

  if (directionButton) {
    directionButton.addEventListener("click", toggleDirectionAction);
  }
}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function initializeNavigation() {

  const currentPage =
    window.location.pathname
      .split("/")
      .pop()
      .toLowerCase();


  const normalizedPage =
    currentPage || "index.html";


  const navigationLinks =
    document.querySelectorAll(
      "[data-page]"
    );


  navigationLinks.forEach((link) => {

    const page =
      link.dataset.page.toLowerCase();


    if (
      page === normalizedPage ||
      (
        normalizedPage === "" &&
        page === "index.html"
      )
    ) {

      link.classList.add("active");

    }

  });


  /* =======================================================
     CLOSE MOBILE MENU AFTER NAVIGATION
  ======================================================== */

  document
    .querySelectorAll(".mobile-nav-link")
    .forEach((link) => {

      link.addEventListener("click", () => {

        const mobileNavigation =
          document.getElementById(
            "mobileNavigation"
          );

        const mobileMenuButton =
          document.getElementById(
            "mobileMenuButton"
          );


        if (mobileNavigation) {
          mobileNavigation.classList.remove("open");
        }


        if (mobileMenuButton) {

          mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
          );


          mobileMenuButton.innerHTML = `
            <i data-lucide="menu"></i>
          `;


          if (typeof lucide !== "undefined") {
            lucide.createIcons();
          }

        }

      });

    });

}


/* =========================================================
   PROFILE DROPDOWN
========================================================= */

function initializeProfile() {

  const profileButton =
    document.getElementById(
      "profileButton"
    );

  const profileDropdown =
    document.getElementById(
      "profileDropdown"
    );


  if (
    !profileButton ||
    !profileDropdown
  ) {

    return;

  }


  profileButton.addEventListener(
    "click",
    (event) => {

      event.stopPropagation();


      const isOpen =
        !profileDropdown.hasAttribute(
          "hidden"
        );


      if (isOpen) {

        profileDropdown.setAttribute(
          "hidden",
          ""
        );

        profileButton.setAttribute(
          "aria-expanded",
          "false"
        );

      } else {

        profileDropdown.removeAttribute(
          "hidden"
        );

        profileButton.setAttribute(
          "aria-expanded",
          "true"
        );

      }

    }
  );


  document.addEventListener(
    "click",
    (event) => {

      if (
        !profileDropdown.contains(
          event.target
        ) &&
        !profileButton.contains(
          event.target
        )
      ) {

        profileDropdown.setAttribute(
          "hidden",
          ""
        );

        profileButton.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    }
  );


  /* Close the dropdown whenever the page is (re)shown,
     including when returning to this page with the
     browser Back button (bfcache restores the DOM). */
  window.addEventListener("pageshow", () => {

    profileDropdown.setAttribute(
      "hidden",
      ""
    );

    profileButton.setAttribute(
      "aria-expanded",
      "false"
    );

  });

}


/* =========================================================
   MOBILE MENU
========================================================= */

function initializeMobileMenu() {

  const mobileMenuButton =
    document.getElementById(
      "mobileMenuButton"
    );

  const mobileNavigation =
    document.getElementById(
      "mobileNavigation"
    );


  if (
    !mobileMenuButton ||
    !mobileNavigation
  ) {

    return;

  }


  mobileMenuButton.addEventListener(
    "click",
    () => {

      const isOpen =
        mobileNavigation.classList.toggle(
          "open"
        );


      mobileMenuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );


      mobileMenuButton.innerHTML = `

        <i
          data-lucide="${isOpen ? "x" : "menu"}"
        ></i>

      `;


      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }

    }
  );


  /* Close the mobile menu when the page is (re)shown,
     including when returning with the Back button. */
  window.addEventListener("pageshow", () => {

    mobileNavigation.classList.remove("open");

    mobileMenuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    mobileMenuButton.innerHTML = `
      <i data-lucide="menu"></i>
    `;

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }

  });

}


/* =========================================================
   BACK TO TOP
========================================================= */

function initializeBackToTop() {

  const button =
    document.getElementById(
      "backToTop"
    );


  if (!button) {
    return;
  }


  button.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}


/* =========================================================
   HOW IT WORKS
========================================================= */

function scrollToHowItWorks() {

  const section =
    document.getElementById(
      "how-it-works"
    );


  if (!section) {
    return;
  }


  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function navigateTo(page) {

  if (!page) {
    return;
  }


  window.location.href = page;

}


/* =========================================================
   ESC KEY
   Close menus with keyboard
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key !== "Escape") {
      return;
    }


    const profileDropdown =
      document.getElementById(
        "profileDropdown"
      );

    const profileButton =
      document.getElementById(
        "profileButton"
      );


    if (
      profileDropdown &&
      profileButton
    ) {

      profileDropdown.setAttribute(
        "hidden",
        ""
      );

      profileButton.setAttribute(
        "aria-expanded",
        "false"
      );

    }


    const mobileNavigation =
      document.getElementById(
        "mobileNavigation"
      );

    const mobileMenuButton =
      document.getElementById(
        "mobileMenuButton"
      );


    if (
      mobileNavigation &&
      mobileMenuButton
    ) {

      mobileNavigation.classList.remove(
        "open"
      );

      mobileMenuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      mobileMenuButton.innerHTML = `
        <i data-lucide="menu"></i>
      `;


      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }

    }

  }
);