const header = document.querySelector("#selectedMenu");
const links = document.querySelectorAll("a");
const nav = document.querySelector("nav");
const ul = document.querySelector('ul');
const menuBtn = document.querySelector("#menu");

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
    ul.classList.toggle('show');
    menuBtn.classList.toggle('show');
});

[...links].map((link) => {
    // set header default value
    header.textContent = "Home";
    // add an event listener to update header value
    link.addEventListener('click', () => {
        header.textContent = link.title
        // close menu on small screens once link selected
        if (window.innerWidth < 659) {
            nav.classList.toggle("show");
            ul.classList.toggle("show");
            menuBtn.classList.toggle("show");     
        }
    })
});