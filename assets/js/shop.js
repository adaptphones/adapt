// Runs from the shop page to store the product which the user clicked
function checkout(product) {

    // Give the URL a parameter with the product name and load the checkout page
    const encodedData = encodeURIComponent(product);
    window.location.href = 'productcheckout.html?product=' + encodedData;
}