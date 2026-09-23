/* =========================================================
   BLOG DETAILS LOGIC
========================================================= */

const articles = {
  "senior-grocery-shopping-guide": {
    title: "A Simple Guide to Grocery Shopping for Seniors",
    category: "Senior Care",
    date: "Aug 20, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200",
    intro:
      "Grocery shopping should be simple, comfortable and accessible. With a few thoughtful habits, seniors can make their everyday grocery routine much easier.",
    sections: [
      {
        title: "Create a simple grocery list",
        text:
          "Start by writing down the essentials needed for the week. Grouping items into categories such as fruits, vegetables, pantry items and household essentials makes shopping easier.",
      },
      {
        title: "Keep frequently purchased items together",
        text:
          "Having a familiar list of frequently purchased groceries saves time and reduces the need to search for the same products every week.",
      },
      {
        title: "Plan deliveries ahead",
        text:
          "Scheduling grocery deliveries can make the weekly routine more predictable and reduce the need for unnecessary trips.",
      },
    ],
  },

  "healthy-grocery-list": {
    title: "How to Build a Healthy Weekly Grocery List",
    category: "Nutrition",
    date: "Aug 18, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200",
    intro:
      "A well-organized grocery list makes weekly shopping easier while helping you keep a good balance of everyday foods.",
    sections: [
      {
        title: "Plan before shopping",
        text:
          "Preparing a grocery list before shopping helps avoid unnecessary purchases and makes it easier to focus on essential foods.",
      },
      {
        title: "Choose a variety of foods",
        text:
          "Include a variety of fruits, vegetables, grains and other everyday foods that fit your personal dietary preferences.",
      },
      {
        title: "Keep healthy essentials available",
        text:
          "Keeping commonly used healthy ingredients at home makes meal preparation more convenient throughout the week.",
      },
    ],
  },

  "caregiver-grocery-tips": {
    title: "7 Grocery Tips Every Caregiver Should Know",
    category: "Caregivers",
    date: "Aug 15, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200",
    intro:
      "Caregivers often manage grocery needs for their loved ones. A simple system can make this responsibility easier to organize.",
    sections: [
      {
        title: "Save important preferences",
        text:
          "Keep dietary preferences, delivery addresses and commonly ordered groceries organized in one place.",
      },
      {
        title: "Use recurring routines",
        text:
          "Weekly grocery routines can reduce repetitive work and make sure essential items are not forgotten.",
      },
      {
        title: "Track active orders",
        text:
          "Order tracking provides a simple way for caregivers to stay informed about delivery status.",
      },
    ],
  },

  "weekly-grocery-planning": {
    title: "Why Weekly Grocery Planning Saves Time",
    category: "Planning",
    date: "Aug 12, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200",
    intro:
      "Planning your groceries before the week begins can reduce stress, save time and make everyday meals easier to manage.",
    sections: [
      {
        title: "Plan your weekly essentials",
        text:
          "Make a simple list of the groceries your household uses most often. This helps avoid last-minute shopping trips.",
      },
      {
        title: "Group items by category",
        text:
          "Organizing your list into fruits, vegetables, dairy, pantry and household items makes shopping much easier.",
      },
      {
        title: "Choose your delivery day",
        text:
          "Selecting a regular delivery day creates a predictable routine and helps ensure essential groceries arrive on time.",
      },
    ],
  },

  "grocery-delivery-seniors": {
    title: "The Benefits of Grocery Delivery for Seniors",
    category: "Delivery",
    date: "Aug 10, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1200",
    intro:
      "Home grocery delivery can make everyday grocery access more convenient, especially for seniors who prefer a comfortable shopping experience at home.",
    sections: [
      {
        title: "Shop comfortably from home",
        text:
          "Online grocery shopping allows seniors and caregivers to choose everyday essentials without needing to make unnecessary trips.",
      },
      {
        title: "Save time and effort",
        text:
          "Having groceries delivered directly to the home can make weekly shopping more convenient.",
      },
      {
        title: "Create a predictable routine",
        text:
          "Scheduled deliveries can help families maintain a consistent grocery routine throughout the month.",
      },
    ],
  },

  "safe-online-grocery-shopping": {
    title: "Tips for Safe and Simple Online Grocery Shopping",
    category: "Safety",
    date: "Aug 08, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200",
    intro:
      "Online grocery shopping can be simple and comfortable when you follow a few basic safety and organization habits.",
    sections: [
      {
        title: "Use trusted shopping services",
        text:
          "Choose grocery services that provide clear product information, secure checkout and reliable customer support.",
      },
      {
        title: "Review your order carefully",
        text:
          "Before placing an order, check product quantities, prices and delivery details carefully.",
      },
      {
        title: "Keep delivery information updated",
        text:
          "Make sure your delivery address and contact information are correct before confirming an order.",
      },
    ],
  },
};

const takeaways = [
  "Keep grocery shopping simple and organized",
  "Maintain a list of frequently purchased essentials",
  "Save important dietary preferences",
  "Plan deliveries before groceries run out",
];

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get("id") || "senior-grocery-shopping-guide";

  const article = articles[blogId] || articles["senior-grocery-shopping-guide"];

  // 1. Populate Hero Info
  const detailImage = document.getElementById("detailImage");
  const detailCategoryBadge = document.getElementById("detailCategoryBadge");
  const detailCategoryTag = document.getElementById("detailCategoryTag");
  const detailTitle = document.getElementById("detailTitle");
  const detailIntro = document.getElementById("detailIntro");
  const detailDate = document.getElementById("detailDate");
  const detailReadTime = document.getElementById("detailReadTime");
  const articleLeadText = document.getElementById("articleLeadText");

  if (detailImage) {
    detailImage.src = article.image;
    detailImage.alt = article.title;
  }
  if (detailCategoryBadge) detailCategoryBadge.textContent = article.category;
  if (detailCategoryTag) detailCategoryTag.textContent = article.category;
  if (detailTitle) detailTitle.textContent = article.title;
  if (detailIntro) detailIntro.textContent = article.intro;
  if (detailDate) detailDate.textContent = article.date;
  if (detailReadTime) detailReadTime.textContent = article.readTime;
  if (articleLeadText) articleLeadText.textContent = article.intro;

  // 2. Render Takeaways
  const takeawaysGrid = document.getElementById("takeawaysGrid");
  if (takeawaysGrid) {
    takeawaysGrid.innerHTML = "";
    takeaways.forEach((item) => {
      const el = document.createElement("div");
      el.className = "takeaway-item";
      el.innerHTML = `
        <i data-lucide="check-circle-2"></i>
        <span>${item}</span>
      `;
      takeawaysGrid.appendChild(el);
    });
  }

  // 3. Render Sections
  const articleSectionsList = document.getElementById("articleSectionsList");
  if (articleSectionsList) {
    articleSectionsList.innerHTML = "";
    article.sections.forEach((sec, idx) => {
      const secEl = document.createElement("div");
      secEl.className = "article-section-block";
      secEl.innerHTML = `
        <div class="article-section-flex">
          <div class="section-num">0${idx + 1}</div>
          <div class="section-body">
            <h2>${sec.title}</h2>
            <p>${sec.text}</p>
          </div>
        </div>
      `;
      articleSectionsList.appendChild(secEl);
    });
  }

  // 4. Render Related Articles (exclude current)
  const relatedArticlesGrid = document.getElementById("relatedArticlesGrid");
  if (relatedArticlesGrid) {
    relatedArticlesGrid.innerHTML = "";
    const related = Object.entries(articles)
      .filter(([id]) => id !== blogId)
      .slice(0, 2);

    related.forEach(([id, item]) => {
      const card = document.createElement("a");
      card.href = `blog-details.html?id=${id}`;
      card.className = "related-card";
      card.innerHTML = `
        <div class="related-content-row">
          <div class="related-img-box">
            <img src="${item.image}" alt="${item.title}" />
          </div>
          <div class="related-info-box">
            <span class="related-category">${item.category}</span>
            <h3 class="related-title">${item.title}</h3>
            <div class="related-meta">
              <i data-lucide="clock-3"></i>
              <span>${item.readTime}</span>
            </div>
          </div>
        </div>
        <div class="related-footer-link">
          <span>Read article</span>
          <i data-lucide="arrow-right"></i>
        </div>
      `;
      relatedArticlesGrid.appendChild(card);
    });
  }

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});
