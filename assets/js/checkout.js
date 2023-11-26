// Fetches the product which was stored on the shop page now that the user is on the checkout page
document.addEventListener('DOMContentLoaded', function () {
    
    // Get stored string
    const product = sessionStorage.getItem('product');

    // Find the elements which will be changed
    const productName = document.getElementById('productName');
    productName.innerHTML = product;

    // Load the page based on the product
    switch (product) {
        case 'camera10':
            productName.innerHTML = "10 MP Camera";
            break;
        case 'camera20':
            productName.innerHTML = "20 MP Camera";
            break;
        case 'camera40':
            productName.innerHTML = "40 MP Camera";
            break;
        case 'product4':
            productName.innerHTML = "10 MP Camera";
            break;
        case 'product5':
            productName.innerHTML = "20 MP Camera";
            break;
        case 'product6':
            productName.innerHTML = "40 MP Camera";
            break;
        case 'product7':
            productName.innerHTML = "10 MP Camera";
            break;
        case 'product8':
            productName.innerHTML = "20 MP Camera";
            break;
        case 'product9':
            productName.innerHTML = "40 MP Camera";
            break;
    }
});