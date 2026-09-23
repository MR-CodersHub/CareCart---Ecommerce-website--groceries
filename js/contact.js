/* =========================================================
   CONTACT PAGE LOGIC
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const formSuccessAlert = document.getElementById("formSuccessAlert");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Show success alert
      if (formSuccessAlert) {
        formSuccessAlert.classList.remove("hidden");
        formSuccessAlert.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      // Reset form
      contactForm.reset();

      // Automatically hide alert after 6 seconds
      setTimeout(() => {
        if (formSuccessAlert) {
          formSuccessAlert.classList.add("hidden");
        }
      }, 6000);
    });
  }

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});
