const categoryList = document.querySelectorAll("#categorylist");
const mainContainer = document.getElementById("maincontainer");

categoryList.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const category = link.textContent.trim().toLowerCase();
        updateProducts(category);
    });
});

const images = {
        random: ["/img/products/cat-food-orange.png", "/img/products/cat-food-white.png", "/img/products/dog-food-white.png"],
        cat: ["/img/products/cat-food-orange.png", "/img/products/cat-food-white.png", "/img/products/cat-food-orange.png"],
        dog: ["/img/products/dog-food-white.png", "/img/products/dog-food-white.png", "/img/products/dog-food-white.png"],
        fish: ["/img/products/fish-food-green.png", "/img/products/fish-food-green.png", "/img/products/fish-food-green.png"],
        bird: ["/img/products/bird-water-bottle.png", "/img/products/bird-water-bottle.png", "/img/products/bird-water-bottle.png"]
};

categoryList.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Atualiza o ID "selectedcategory" no li clicado
        categoryList.forEach(li => li.removeAttribute("id"));
        link.id = "selectedcategory";

        // Obtém a categoria e atualiza os produtos
        const category = link.textContent.trim().toLowerCase();
        updateProducts(category);
    });
});

function updateProducts(category) {
    mainContainer.innerHTML = images[category]?.map(img => `
        <div class="product">
            <img src="${img}" />
            <div class="cardcontainer">
                <h3>Product Name</h3>
                <p>Short description.</p>
                <button>Add to cart</button>
            </div>
        </div>
    `).join("") || "<p>No products found.</p>";
}

// Carrega os produtos da categoria inicial (Random)
updateProducts("random");