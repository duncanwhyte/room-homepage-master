// VARIABLES
const sliderButtons = document.querySelectorAll(".prev-arrow, .next-arrow");
const mobileImagesContainer = document.querySelector(
    ".mobile-images__container"
);
const mobileImages = mobileImagesContainer.children;
const mobileImageSize = mobileImages[0].clientWidth;
const desktopImagesContainer = document.querySelector(
    ".desktop-images__container"
);
const desktopImages = desktopImagesContainer.children;
const desktopImageSize = desktopImages[0].clientWidth;
const discoverContainer = document.querySelector("#discover-container");
const discoverSectionTitle = discoverContainer.querySelector("#discover-title");
const discoverSectionDescription = discoverContainer.querySelector(
    "#discover-description"
);

const dynamicContent = {
    titles: {
        title1: "Discover innovative ways to decorate",
        title2: "We are available all across the globe",
        title3: "Manufactured with the best materials",
    },
    descriptions: {
        description1:
            "Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.",
        description2:
            "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        description3:
            "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
};
let counter = 1;
console.log(typeof dynamicContent.titles.title2);

const changeContent = (title, description) => {
    discoverSectionTitle.innerHTML = title;
    discoverSectionDescription.innerHTML = description;
};

const nextSlide = () => {
    if (counter >= mobileImages.length) return;
    switch (counter) {
        case 1:
            changeContent(
                dynamicContent.titles.title1,
                dynamicContent.descriptions.description1
            );
            mobileImagesContainer.style.transform =
                "translateX(" + -mobileImageSize * counter + "px)";
            counter++;
            break;
        case 2:
            changeContent(
                dynamicContent.titles.title2,
                dynamicContent.descriptions.description2
            );
            mobileImagesContainer.style.transform =
                "translateX(" + -mobileImageSize * counter + "px)";
            counter++;
            break;
        case 3:
            changeContent(
                dynamicContent.titles.title3,
                dynamicContent.descriptions.description3
            );
            mobileImagesContainer.style.transform =
                "translateX(" + -mobileImageSize * counter + "px)";
            counter++;
            break;
    }
};

const previousSlide = () => {
    if (counter < 0) {
        counter = 1;
    }
    switch (counter) {
        case 3:
            changeContent(
                dynamicContent.titles.title3,
                dynamicContent.descriptions.description3
            );
            mobileImagesContainer.style.transform =
                "translateX(" + -mobileImageSize * counter + "px)";
            break;
        case 2:
            changeContent(
                dynamicContent.titles.title2,
                dynamicContent.descriptions.description2
            );
            mobileImagesContainer.style.transform =
                "translateX(" + -mobileImageSize * counter + "px)";
            break;
        case 1:
            changeContent(
                dynamicContent.titles.title1,
                dynamicContent.descriptions.description1
            );
            mobileImagesContainer.style.transform =
                "translateX(" + -mobileImageSize * counter + "px)";
            break;
    }
};

sliderButtons.forEach((button) => {
    if (
        (mobileImagesContainer.style.display =
            "flex" && button.className === "next-arrow")
    ) {
        button.addEventListener("click", nextSlide);
    } else if (
        (mobileImagesContainer.style.display =
            "flex" && button.className === "prev-arrow")
    ) {
        button.addEventListener("click", previousSlide);
    }
});

// We are available all across the globe

// With stores all over the world, it's easy for you to find furniture for your home or place of business.
// Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
// store locator. Any questions? Don't hesitate to contact us today.

// Shop now

// Manufactured with the best materials

// Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
// to ensure that every product is made as perfect and as consistent as possible. With three decades of
// experience in this industry, we understand what customers want for their home and office.

// Shop now
