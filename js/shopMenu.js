const plusButtons = document.querySelectorAll('.plus');
const minusButtons = document.querySelectorAll('.minus');
const addToCards = document.querySelectorAll('.addtocard');

plusButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productQuantity = button.closest('.actioncard').querySelector('p');
        let quantity = parseInt(productQuantity.textContent, 10);
        productQuantity.textContent = quantity + 1;
    });
});

minusButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productQuantity = button.closest('.actioncard').querySelector('p');
        let quantity = parseInt(productQuantity.textContent, 10);
        if (quantity >= 1) {
            productQuantity.textContent = quantity - 1;
        }
    });
});

addToCards.forEach(button => {
    button.addEventListener('click', () => {
        button.style.fontSize = '1.4rem';
        setTimeout(() => button.style.fontSize = '', 100);
    });
});