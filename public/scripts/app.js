const hamburgerMenu = document.querySelector("#hamburger-menu");
const navbarLinks = document.querySelector("#navbar-links");
const closeBtn = document.querySelector("#close-btn");
const heroSection = document.querySelector("#hero-section");
const animSpans = document.querySelectorAll(".anim-span");
console.log(animSpans)

const removeAnimSpan = () => {
    animSpans.forEach(animSpan => {
        animSpan.classList.add("remove-anim-span");
    });
 };
 
 const addAnimSpan = () => {
    animSpans.forEach(animSpan => {
        animSpan.classList.remove("remove-anim-span");
    });
 };

hamburgerMenu.addEventListener("click", () => {
   hamburgerMenu.classList.add("hidden");
   navbarLinks.classList.add("show-navbar");
   removeAnimSpan();
});

closeBtn.addEventListener("click", () => {
   navbarLinks.classList.remove("show-navbar");
   hamburgerMenu.classList.remove("hidden");
   addAnimSpan();
});



