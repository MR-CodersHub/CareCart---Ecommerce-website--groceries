document.addEventListener("DOMContentLoaded", function () {

    /*
     * ============================================
     * LUCIDE ICONS
     * ============================================
     */
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }


    /*
     * ============================================
     * SCROLL REVEAL
     * Replaces React ScrollReveal
     * ============================================
     */

    const revealElements = document.querySelectorAll(".reveal");

    const revealLeftElements =
        document.querySelectorAll(".reveal-left");

    const revealRightElements =
        document.querySelectorAll(".reveal-right");


    const observer = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {
        observer.observe(element);
    });


    revealLeftElements.forEach(function (element) {
        observer.observe(element);
    });


    revealRightElements.forEach(function (element) {
        observer.observe(element);
    });

});