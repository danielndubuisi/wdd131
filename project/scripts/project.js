const africanCuisines = [
    {
        name: "Spicy Jollof Rice",
        image: "images/jollof.webp",
        description:
        "A spicy, smoky, and vibrant tomato-based rice dish loved across West Africa!",
        ingredients: "Rice, tomatoes, bell peppers, onions, stock, chili",
        cookTime: "45 mins",
        difficulty: "Easy",
        countries: ["Nigeria", "Ghana", "Senegal", "Sierra Leone"],
        preparation:
        "Blend tomatoes, peppers, and onions. Fry the mixture in oil, add stock and spices. Stir in washed rice and simmer until tender.",
    },
    {
        name: "Egusi Soup & Fufu",
        image: "images/featured-img2.webp",
        description:
        "A rich and nutty soup made from ground melon seeds, often paired with soft, stretchy fufu.",
        ingredients: "Egusi seeds, spinach, palm oil, meat or fish, seasoning",
        cookTime: "1 hour",
        difficulty: "Medium",
        countries: ["Nigeria", "Ghana", "Togo", "Benin"],
        preparation:
        "Fry blended egusi seeds in palm oil, add meat and broth, then simmer. Add vegetables and season to taste. Serve with fufu.",
    },
    {
        name: "Roast Fish",
        image: "images/featured-img.webp",
        description:
        "Perfectly marinated and grilled fish, served with spicy sauce and sides like plantains.",
        ingredients: "Fresh fish, garlic, ginger, lemon, chili, spices",
        cookTime: "30 mins",
        difficulty: "Medium",
        countries: ["Cameroon", "Ghana", "Nigeria", "Senegal"],
        preparation:
        "Marinate fish with spices and lemon juice. Grill over medium heat until golden brown and cooked through.",
    },
    {
        name: "Suya Skewers",
        image: "images/suya.webp",
        description:
        "Thinly sliced beef skewers coated in a spicy peanut rub and grilled to perfection.",
        ingredients: "Beef, suya spice, ground peanuts, ginger, chili",
        cookTime: "25 mins",
        difficulty: "Easy",
        countries: ["Nigeria", "Ghana", "Cameroon", "Chad"],
        preparation:
        "Coat beef slices in suya spice, thread onto skewers, and grill over open flame or in an oven until charred.",
    },
    {
        name: "Bunny Chow",
        image: "images/bunny_chow.webp",
        description:
        "A South African street food classic—hollowed-out bread filled with spicy curry.",
        ingredients: "Bread, beef or chicken curry, onions, tomatoes, spices",
        cookTime: "40 mins",
        difficulty: "Medium",
        countries: ["South Africa"],
        preparation:
        "Cook a thick curry with meat, onions, and spices. Hollow out a loaf of bread and fill it with the curry.",
    },
    {
        name: "Puff-Puff",
        image: "images/puff_puff.webp",
        description:
        "Soft, deep-fried dough balls with a light, sweet flavor—perfect as a snack or dessert!",
        ingredients: "Flour, sugar, yeast, nutmeg, water",
        cookTime: "20 mins",
        difficulty: "Easy",
        countries: ["Nigeria", "Ghana", "Cameroon", "Togo"],
        preparation:
        "Mix flour, sugar, yeast, and water into a smooth batter. Let it rise, then deep-fry in hot oil until golden brown.",
    },
    {
        name: "Ethiopian Doro Wat",
        image: "images/featured-img3.webp",
        description:
        "A rich and spicy Ethiopian chicken stew, slow-cooked with berbere spice and eggs.",
        ingredients: "Chicken, berbere spice, onions, eggs, garlic, ginger",
        cookTime: "1.5 hours",
        difficulty: "Hard",
        countries: ["Ethiopia", "Eritrea"],
        preparation:
        "Slow-cook onions, garlic, and ginger with berbere spice. Add chicken and eggs, then simmer until thick and flavorful.",
    },
    {
        name: "Kenyan Nyama Choma",
        image: "images/nyama_choma.webp",
        description:
        "Grilled meat (usually goat or beef) seasoned with salt and slow-roasted over an open flame.",
        ingredients: "Goat or beef, salt, pepper, lemon juice",
        cookTime: "1 hour",
        difficulty: "Medium",
        countries: ["Kenya", "Tanzania", "Uganda"],
        preparation:
        "Rub meat with salt and pepper. Grill slowly over charcoal until tender, basting with lemon juice.",
    },
    {
        name: "Moroccan Tagine",
        image: "images/tagine.webp",
        description:
        "A slow-cooked North African stew made with meat, vegetables, and aromatic spices.",
        ingredients: "Lamb or chicken, onions, tomatoes, saffron, cinnamon",
        cookTime: "2 hours",
        difficulty: "Hard",
        countries: ["Morocco", "Algeria", "Tunisia"],
        preparation:
        "Layer meat, vegetables, and spices in a tagine pot. Cover and slow-cook until tender and aromatic.",
    },
    {
        name: "Ghanaian Waakye",
        image: "images/waakye.webp",
        description:
        "A delicious rice and beans dish infused with dried millet leaves for extra flavor.",
        ingredients: "Rice, black-eyed peas, millet leaves, salt",
        cookTime: "50 mins",
        difficulty: "Medium",
        countries: ["Ghana"],
        preparation:
        "Cook beans until soft. Add rice and millet leaves, then simmer until tender. Serve with sauce and protein.",
    },
    {
        name: "Beans & Plantain",
        image: "images/featured-img1.webp",
        description:
        "A hearty and filling meal of beans cooked in a rich tomato sauce, served with sweet plantains.",
        ingredients: "Beans, plantains, tomatoes, onions, chili, spices",
        cookTime: "1 hour",
        difficulty: "Medium",
        countries: ["Nigeria", "Ghana", "Cameroon", "Sierra Leone"],
        preparation:
        "Cook beans until soft. Make a tomato sauce with onions and chili. Serve beans and sauce with fried plantains.",
    }
];

const navLinks = document.querySelectorAll(".nav-links");
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");
const menuBtn = document.querySelector("#menu");
const featured = document.getElementById("featured");

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

const cardTemplate = (cuisine) => {
    return `<div class="card">
                <div class="card-content">
                    <img src=${cuisine.image} alt=${cuisine.name} loading="lazy">
                    <h2>${cuisine.name}</h2>
                </div>
                <div class="card-footer">
                    <p>${cuisine.description}</p>
                    <p><span>Ingredients</span> - ${cuisine.ingredients} </p>
                    <p>Cook time - ${cuisine.cookTime}</p>
                    <p>Difficulty - ${cuisine.difficulty}</p>
                    <p>Countries - ${cuisine.countries.join(", ")}</p>
                    <p>Preparation - ${cuisine.preparation}</p>
                </div>
            </div>
    `;
}

featured.innerHTML = africanCuisines.map((cuisine) => cardTemplate(cuisine)).join("");
