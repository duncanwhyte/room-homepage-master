// MOBILE DOM NAVIGATION VARIABLES
const openMobileMenuButton = document.querySelector(".open-mobile-nav__button");
const closeMobileMenuButton = document.querySelector(
    ".close-mobile-nav__button"
);
const mobileMenu = document.querySelector(".mobile-nav__menu");
// MOBILE NAVIGATION FUNCTIONS
openMobileMenuButton.addEventListener("click", (e) => {
    let currentTarget = e.target;
    if (currentTarget === openMobileMenuButton) {
        mobileMenu.classList.toggle("open-mobile-nav");
    }
});
closeMobileMenuButton.addEventListener("click", (e) => {
    let currentTarget = e.target;
    if (
        currentTarget === closeMobileMenuButton &&
        mobileMenu.classList.contains("open-mobile-nav")
    ) {
        mobileMenu.classList.toggle("open-mobile-nav");
    }
});
