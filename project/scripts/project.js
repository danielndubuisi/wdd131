const navLinks = document.querySelectorAll(".nav-link");
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");
const menuBtn = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
    ul.classList.toggle("show");
    menuBtn.classList.toggle("show");
});

[...navLinks].map((link) => {
    link.addEventListener("click", () => {
        // close menu on small screens once link selected
        if (window.innerWidth < 659) {
        nav.classList.toggle("show");
        ul.classList.toggle("show");
        menuBtn.classList.toggle("show");
        }
    });
});
