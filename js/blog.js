/* =========================================================
   BLOG PAGE LOGIC
========================================================= */

const blogs = [
  {
    id: "senior-grocery-shopping-guide",
    title: "A Simple Guide to Grocery Shopping for Seniors",
    description:
      "Learn how seniors can make everyday grocery shopping easier, safer and more organized.",
    category: "Senior Care",
    date: "Aug 20, 2026",
    readTime: "5 min read",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=85",
  },
  {
    id: "healthy-grocery-list",
    title: "How to Build a Healthy Weekly Grocery List",
    description:
      "Simple ideas for creating a balanced grocery list with everyday essentials.",
    category: "Nutrition",
    date: "Aug 18, 2026",
    readTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=85",
  },
  {
    id: "caregiver-grocery-tips",
    title: "7 Grocery Tips Every Caregiver Should Know",
    description:
      "Practical ways caregivers can organize grocery shopping and support their loved ones.",
    category: "Caregivers",
    date: "Aug 15, 2026",
    readTime: "4 min read",
    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=85",
  },
  {
    id: "weekly-grocery-planning",
    title: "Why Weekly Grocery Planning Saves Time",
    description:
      "Discover how planning groceries ahead can reduce stress and avoid forgotten essentials.",
    category: "Planning",
    date: "Aug 12, 2026",
    readTime: "5 min read",
    coverImage:
      "https://images.unsplash.com/photo-1506484381205-f7945653044d?w=1200&q=85",
  },
  {
    id: "grocery-delivery-seniors",
    title: "The Benefits of Grocery Delivery for Seniors",
    description:
      "See how home delivery can make grocery access more convenient for older adults.",
    category: "Delivery",
    date: "Aug 10, 2026",
    readTime: "4 min read",
    coverImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85",
  },
  {
    id: "safe-online-grocery-shopping",
    title: "Tips for Safe and Simple Online Grocery Shopping",
    description:
      "Important tips for making online grocery shopping comfortable and secure.",
    category: "Safety",
    date: "Aug 08, 2026",
    readTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=85",
  },
];

const categories = [
  "All",
  "Senior Care",
  "Caregivers",
  "Nutrition",
  "Planning",
  "Delivery",
  "Safety",
];

let selectedCategory = "All";
let searchKeyword = "";

document.addEventListener("DOMContentLoaded", () => {
  const categoryPillsContainer = document.getElementById("categoryPills");
  const blogSearchInput = document.getElementById("blogSearchInput");
  const blogGrid = document.getElementById("blogGrid");
  const noResults = document.getElementById("noResults");

  // Render category pills
  function renderCategoryPills() {
    if (!categoryPillsContainer) return;
    categoryPillsContainer.innerHTML = "";

    categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = `category-pill ${cat === selectedCategory ? "active" : ""}`;
      btn.textContent = cat;
      btn.addEventListener("click", () => {
        selectedCategory = cat;
        renderCategoryPills();
        renderBlogList();
      });
      categoryPillsContainer.appendChild(btn);
    });
  }

  // Filter & Render Blog Cards
  function renderBlogList() {
    if (!blogGrid) return;

    const filtered = blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;

      const q = searchKeyword.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        blog.title.toLowerCase().includes(q) ||
        blog.description.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });

    blogGrid.innerHTML = "";

    if (filtered.length === 0) {
      if (noResults) noResults.classList.remove("hidden");
    } else {
      if (noResults) noResults.classList.add("hidden");

      filtered.forEach((blog) => {
        const card = document.createElement("article");
        card.className = "blog-card";
        card.innerHTML = `
          <a href="blog-details.html?id=${blog.id}" class="card-img-link">
            <img src="${blog.coverImage}" alt="${blog.title}" />
            <div class="card-img-overlay"></div>
            <span class="card-category-badge">${blog.category}</span>
          </a>

          <div class="card-body">
            <div class="card-meta">
              <span class="meta-item">
                <i data-lucide="calendar-days" style="width: 13px; height: 13px;"></i>
                ${blog.date}
              </span>
              <span class="meta-item">
                <i data-lucide="clock-3" style="width: 13px; height: 13px;"></i>
                ${blog.readTime}
              </span>
            </div>

            <h3 class="card-title">${blog.title}</h3>
            <p class="card-desc">${blog.description}</p>

            <a href="blog-details.html?id=${blog.id}" class="card-read-link">
              Read Article
              <i data-lucide="arrow-right"></i>
            </a>
          </div>
        `;
        blogGrid.appendChild(card);
      });
    }

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  // Search input listener
  if (blogSearchInput) {
    blogSearchInput.addEventListener("input", (e) => {
      searchKeyword = e.target.value;
      renderBlogList();
    });
  }

  renderCategoryPills();
  renderBlogList();
});
