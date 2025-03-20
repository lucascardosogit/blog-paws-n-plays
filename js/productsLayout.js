const categoryItems = document.querySelectorAll(".categoryitem");
const products = document.querySelectorAll(".product");

categoryItems.forEach(item => {
    item.addEventListener('click', (event) => {
        
        const categoryIdentifier = document.getElementById('selectedcategory');
        if (categoryIdentifier) {
            categoryIdentifier.removeAttribute('id');
        }
        
        item.setAttribute('id', 'selectedcategory');

        const selectedCategory = event.target.textContent.trim();

        products.forEach((product, index) => {
            const productImage = product.querySelector('img');
            const productTitle = product.querySelector('.cardcontent h3');

            if (selectedCategory === "Cat") {
                productImage.src = "/img/products/cat-food-orange.png";
                productTitle.textContent = "Multivitamin For Cat";
            } else if (selectedCategory === "Dogs") {
                productImage.src = "/img/products/dog-food-white.png";
                productTitle.textContent = "Dog Food";
            } else if (selectedCategory === "Fish") {
                productImage.src = "/img/products/cat-food-white.png";
                productTitle.textContent = "Fish Flakes";
            } else if (selectedCategory === "Birds") {
                productImage.src = "/img/products/bird-water-bottle.png";
                productTitle.textContent = "Bird Water Bottle";
            } else if (selectedCategory === "Random") {

                const randomImages = [
                    "/img/products/cat-food-orange.png",
                    "/img/products/cat-food-white.png",
                    "/img/products/dog-food-white.png"
                ];
                
                if (index < randomImages.length) {
                    productImage.src = randomImages[index];
                }

                const randomHeader = [
                    "Multivitamin For Cat",
                    "Cat Food",
                    "Dog Food"
                ];

                if (index < randomImages.length) {
                    productTitle.textContent = randomHeader[index];
                }
            }
        });
    });
});