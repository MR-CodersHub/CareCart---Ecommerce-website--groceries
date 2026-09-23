/* =========================================================
   CARECART GLOBAL COMPONENTS
   Navbar + Footer
   Normal HTML / CSS / JavaScript version
========================================================= */


/* =========================================================
   NAVBAR
========================================================= */

function loadNavbar() {

  const navbarContainer = document.getElementById("navbar");

  if (!navbarContainer) return;

  navbarContainer.innerHTML = `

    <header
      id="site-navbar"
      class="
        site-navbar
        sticky
        top-0
        z-50
        border-b
        backdrop-blur-md
        transition-colors
        duration-300
      "
    >

      <div
        class="
          mx-auto
          grid
          h-[72px]
          w-full
          grid-cols-[auto_1fr_auto]
          items-center
          px-4
          sm:px-6
          lg:px-8
        "
      >

        <!-- =================================================
             LOGO
        ================================================== -->

        <a
          href="index.html"
          class="
            flex
            shrink-0
            items-center
            gap-2
            justify-self-start
          "
        >

          <img
            src="assets/images/carecart_logo.png"
            alt="CareCart Logo"
            class="h-10 w-auto"
          >

          <span
            class="
              whitespace-nowrap
              font-serif
              text-lg
              font-bold
              sm:text-xl
              navbar-logo-text
            "
          >
            CareCart
          </span>

        </a>


        <!-- =================================================
             DESKTOP NAVIGATION
        ================================================== -->

        <nav
          class="
            hidden
            items-center
            justify-self-center
            gap-1
            xl:flex
          "
        >

          <a
            href="index.html"
            class="navbar-link"
            data-page="index.html"
          >
            Home
          </a>

          <a
            href="home2.html"
            class="navbar-link"
            data-page="home2.html"
          >
            Home 2
          </a>

          <a
            href="about.html"
            class="navbar-link"
            data-page="about.html"
          >
            About Us
          </a>

          <a
            href="shop.html"
            class="navbar-link"
            data-page="shop.html"
          >
            Products
          </a>

          <a
            href="blog.html"
            class="navbar-link"
            data-page="blog.html"
          >
            Blog
          </a>

          <a
            href="contact.html"
            class="navbar-link"
            data-page="contact.html"
          >
            Contact
          </a>

        </nav>


        <!-- =================================================
             RIGHT SIDE
        ================================================== -->

        <div
          class="
            flex
            items-center
            justify-self-end
            gap-2
          "
        >

          <!-- =================================================
               RTL
          ================================================== -->

          <button
            id="direction-toggle"
            type="button"
            title="Change direction"
            aria-label="Change text direction"
            class="navbar-icon-button direction-button"
          >
            RTL
          </button>


          <!-- =================================================
               THEME
          ================================================== -->

          <button
            id="theme-toggle"
            type="button"
            title="Change theme"
            aria-label="Change theme"
            class="navbar-icon-button"
          >
            <i
              data-lucide="moon"
              id="theme-icon"
            ></i>
          </button>


          <!-- =================================================
               PROFILE
          ================================================== -->

          <div class="relative hidden md:block">

            <button
              id="profile-toggle"
              type="button"
              title="Profile"
              aria-label="Profile menu"
              aria-expanded="false"
              class="navbar-icon-button profile-button"
            >

              <i data-lucide="user"></i>

              <i
                data-lucide="chevron-down"
                class="profile-chevron"
              ></i>

            </button>


            <!-- PROFILE DROPDOWN -->

            <div
              id="profile-dropdown"
              class="
                absolute
                right-0
                top-12
                z-50
                hidden
                w-56
                overflow-hidden
                rounded-xl
                border
                shadow-xl
                profile-dropdown
              "
            >

              <a
                href="login.html"
                class="profile-dropdown-link"
              >
                <i data-lucide="log-in"></i>
                <span>Login / Register</span>
              </a>

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


          <!-- =================================================
               MOBILE MENU
          ================================================== -->

          <button
            id="mobile-menu-toggle"
            type="button"
            title="Open menu"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            class="
              navbar-icon-button
              xl:hidden
            "
          >

            <i
              data-lucide="menu"
              id="mobile-menu-icon"
            ></i>

          </button>

        </div>

      </div>


      <!-- ===================================================
           MOBILE NAVIGATION
      ==================================================== -->

      <div
        id="mobile-menu"
        class="
          hidden
          border-t
          px-4
          py-5
          xl:hidden
          mobile-menu
        "
      >

        <nav class="flex flex-col gap-1">

          <a
            href="index.html"
            class="mobile-navbar-link"
            data-page="index.html"
          >
            <i data-lucide="home"></i>
            <span>Home</span>
          </a>

          <a
            href="home2.html"
            class="mobile-navbar-link"
            data-page="home2.html"
          >
            <i data-lucide="layout"></i>
            <span>Home 2</span>
          </a>

          <a
            href="about.html"
            class="mobile-navbar-link"
            data-page="about.html"
          >
            <i data-lucide="info"></i>
            <span>About Us</span>
          </a>

          <a
            href="shop.html"
            class="mobile-navbar-link"
            data-page="shop.html"
          >
            <i data-lucide="shopping-bag"></i>
            <span>Products</span>
          </a>

          <a
            href="blog.html"
            class="mobile-navbar-link"
            data-page="blog.html"
          >
            <i data-lucide="book-open"></i>
            <span>Blog</span>
          </a>

          <a
            href="contact.html"
            class="mobile-navbar-link"
            data-page="contact.html"
          >
            <i data-lucide="mail"></i>
            <span>Contact</span>
          </a>


          <!-- MOBILE PROFILE -->

          <div class="mobile-profile-section">

            <div class="mobile-profile-title">

              <i data-lucide="user"></i>

              <span>
                Profile
              </span>

            </div>


            <a
              href="login.html"
              class="mobile-profile-link"
            >
              <i data-lucide="log-in"></i>
              <span>Login / Register</span>
            </a>


            <a
              href="caregiver.html"
              class="mobile-profile-link"
            >
              <i data-lucide="heart-handshake"></i>
              <span>Caregiver Dashboard</span>
            </a>


            <a
              href="admin.html"
              class="mobile-profile-link"
            >
              <i data-lucide="layout-dashboard"></i>
              <span>Admin Dashboard</span>
            </a>

          </div>

        </nav>

      </div>

    </header>

  `;

  initializeNavbar();

}


/* =========================================================
   FOOTER
========================================================= */

function loadFooter() {

  const footerContainer = document.getElementById("footer");

  if (!footerContainer) return;

  footerContainer.innerHTML = `

    <footer
      class="
        bg-[#E8F5EF]
        px-4
        py-12
        text-[#24433A]
        transition-colors
        duration-300
        sm:px-6
        sm:py-14
        lg:px-8
        lg:py-16
      "
    >

      <div
        class="
          mx-auto
          max-w-7xl
        "
      >

        <!-- =================================================
             MAIN FOOTER
        ================================================== -->

        <div
          class="
            grid
            grid-cols-1
            gap-10
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-12
          "
        >


          <!-- =================================================
               BRAND
          ================================================== -->

          <div
            class="
              sm:col-span-2
              lg:col-span-1
            "
          >

            <a
              href="index.html"
              class="
                inline-flex
                items-center
                gap-2
              "
            >

              <img
                src="assets/images/carecart_logo.png"
                alt="CareCart Logo"
                class="h-10 w-auto"
              >

              <span
                class="
                  whitespace-nowrap
                  font-serif
                  text-lg
                  font-bold
                  text-[#34745F]
                  sm:text-xl
                  dark:text-white
                "
              >
                CareCart
              </span>

            </a>


            <p
              class="
                mt-5
                max-w-sm
                text-sm
                leading-relaxed
                text-[#536860]
                dark:text-slate-300
              "
            >
              Simple and reliable grocery delivery designed
              to help seniors and their families shop with
              confidence.
            </p>


            <!-- SOCIAL ICONS -->

            <div
              class="
                mt-6
                flex
                items-center
                gap-3
              "
            >

              <a
                href="#"
                aria-label="Instagram"
                class="footer-social-button"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>


              <a
                href="#"
                aria-label="LinkedIn"
                class="footer-social-button"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </a>

            </div>

          </div>


          <!-- =================================================
               QUICK LINKS
          ================================================== -->

          <div>

            <h3 class="footer-heading">
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

          <div>

            <h3 class="footer-heading">
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

          <div>

            <h3 class="footer-heading">
              Get in Touch
            </h3>


            <div class="mt-5 space-y-4">


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


        <!-- =================================================
             DIVIDER
        ================================================== -->

        <div
          class="
            my-10
            h-px
            bg-[#BFD8CE]
            dark:bg-slate-800
          "
        ></div>


        <!-- =================================================
             BOTTOM FOOTER
        ================================================== -->

        <div
          class="
            flex
            flex-col
            items-center
            justify-between
            gap-5
            text-center
            sm:flex-row
            sm:text-left
          "
        >

          <!-- COPYRIGHT -->

          <p class="footer-bottom-text">
            © 2026 CareCart. All rights reserved.
          </p>


          <!-- MADE WITH -->

          <div
            class="
              flex
              items-center
              gap-1.5
              text-xs
              text-[#6B8179]
              dark:text-slate-400
            "
          >

            <span>
              Made with
            </span>

            <i
              data-lucide="heart"
              class="
                h-3.5
                w-3.5
                fill-current
                text-[#E67A55]
              "
            ></i>

            <span>
              for seniors and families
            </span>

          </div>


          <!-- BACK TO TOP -->

          <button
            id="back-to-top"
            type="button"
            aria-label="Back to top"
            class="footer-top-button"
          >

            <i
              data-lucide="arrow-up"
            ></i>

          </button>

        </div>

      </div>

    </footer>

  `;

  initializeFooter();

}


/* =========================================================
   NAVBAR FUNCTIONALITY
========================================================= */

function initializeNavbar() {

  const themeToggle =
    document.getElementById("theme-toggle");

  const directionToggle =
    document.getElementById("direction-toggle");

  const profileToggle =
    document.getElementById("profile-toggle");

  const profileDropdown =
    document.getElementById("profile-dropdown");

  const mobileMenuToggle =
    document.getElementById("mobile-menu-toggle");

  const mobileMenu =
    document.getElementById("mobile-menu");

  const mobileMenuIcon =
    document.getElementById("mobile-menu-icon");

  const themeIcon =
    document.getElementById("theme-icon");


  /* =======================================================
     THEME
  ======================================================= */

  const savedTheme =
    localStorage.getItem("carecart-theme");

  if (savedTheme === "dark") {

    document.documentElement.classList.add("dark");

  }


  function updateThemeIcon() {

    if (!themeIcon) return;

    const isDark =
      document.documentElement.classList.contains("dark");

    themeIcon.setAttribute(
      "data-lucide",
      isDark ? "sun" : "moon"
    );

    if (window.lucide) {
      lucide.createIcons();
    }

  }


  updateThemeIcon();


  themeToggle?.addEventListener(
    "click",
    function () {

      document.documentElement.classList.toggle("dark");

      const isDark =
        document.documentElement.classList.contains("dark");

      localStorage.setItem(
        "carecart-theme",
        isDark ? "dark" : "light"
      );

      updateThemeIcon();

    }
  );


  /* =======================================================
     RTL
  ======================================================= */

  const savedDirection =
    localStorage.getItem("carecart-direction");

  if (savedDirection === "rtl") {

    document.documentElement.setAttribute(
      "dir",
      "rtl"
    );

  }


  directionToggle?.addEventListener(
    "click",
    function () {

      const currentDirection =
        document.documentElement.getAttribute("dir");

      const newDirection =
        currentDirection === "rtl"
          ? "ltr"
          : "rtl";

      document.documentElement.setAttribute(
        "dir",
        newDirection
      );

      localStorage.setItem(
        "carecart-direction",
        newDirection
      );

    }
  );


  /* =======================================================
     PROFILE DROPDOWN
  ======================================================= */

  profileToggle?.addEventListener(
    "click",
    function (event) {

      event.stopPropagation();

      const isOpen =
        !profileDropdown.classList.contains("hidden");

      if (isOpen) {

        profileDropdown.classList.add("hidden");

        profileToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      } else {

        profileDropdown.classList.remove("hidden");

        profileToggle.setAttribute(
          "aria-expanded",
          "true"
        );

      }

    }
  );


  document.addEventListener(
    "click",
    function (event) {

      if (
        profileDropdown &&
        profileToggle &&
        !profileDropdown.contains(event.target) &&
        !profileToggle.contains(event.target)
      ) {

        profileDropdown.classList.add("hidden");

        profileToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    }
  );


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  mobileMenuToggle?.addEventListener(
    "click",
    function () {

      const isOpen =
        !mobileMenu.classList.contains("hidden");

      if (isOpen) {

        mobileMenu.classList.add("hidden");

        mobileMenuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        mobileMenuIcon.setAttribute(
          "data-lucide",
          "menu"
        );

      } else {

        mobileMenu.classList.remove("hidden");

        mobileMenuToggle.setAttribute(
          "aria-expanded",
          "true"
        );

        mobileMenuIcon.setAttribute(
          "data-lucide",
          "x"
        );

      }

      if (window.lucide) {
        lucide.createIcons();
      }

    }
  );


  /* =======================================================
     CLOSE MOBILE MENU AFTER NAVIGATION
  ======================================================= */

  const mobileLinks =
    document.querySelectorAll(
      ".mobile-navbar-link, .mobile-profile-link"
    );

  mobileLinks.forEach(
    function (link) {

      link.addEventListener(
        "click",
        function () {

          mobileMenu?.classList.add("hidden");

          mobileMenuToggle?.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    }
  );


  /* =======================================================
     ACTIVE NAVIGATION
  ======================================================= */

  const currentPage =
    window.location.pathname
      .split("/")
      .pop() || "index.html";


  document
    .querySelectorAll(
      ".navbar-link, .mobile-navbar-link"
    )
    .forEach(
      function (link) {

        const page =
          link.getAttribute("data-page");

        if (
          page === currentPage ||
          (
            currentPage === "" &&
            page === "index.html"
          )
        ) {

          link.classList.add("active");

        }

      }
    );


  /* =======================================================
     CREATE ICONS
  ======================================================= */

  if (window.lucide) {
    lucide.createIcons();
  }

}


/* =========================================================
   FOOTER FUNCTIONALITY
========================================================= */

function initializeFooter() {

  const backToTop =
    document.getElementById("back-to-top");


  backToTop?.addEventListener(
    "click",
    function () {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );


  /* CREATE FOOTER ICONS */

  if (window.lucide) {
    lucide.createIcons();
  }

}


/* =========================================================
   LOAD COMPONENTS
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    loadNavbar();

    loadFooter();

  }
);