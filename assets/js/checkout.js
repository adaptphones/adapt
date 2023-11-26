const decodeDict = {
    '7' : 'a',
    'n' : 'b',
    'p' : 'c',
    '.' : 'd',
    '6' : 'e',
    'u' : 'f',
    'V' : 'g',
    'x' : 'h',
    'H' : 'i',
    'C' : 'j',
    'R' : 'k',
    '1' : 'l',
    'P' : 'm',
    'd' : 'n',
    'g' : 'o',
    'k' : 'p',
    'L' : 'q',
    '4' : 'r',
    'q' : 's',
    'S' : 't',
    '8' : 'u',
    'v' : 'v',
    'T' : 'w',
    'e' : 'x',
    'Z' : 'y',
    'f' : 'z',
    'y' : 'A',
    'Q' : 'B',
    'l' : 'C',
    'J' : 'D',
    '9' : 'E',
    '_' : 'F',
    'i' : 'G',
    'o' : 'H',
    't' : 'I',
    'h' : 'J',
    'E' : 'K',
    'W' : 'L',
    'X' : 'M',
    '0' : 'N',
    'G' : 'O',
    'z' : 'P',
    'b' : 'Q',
    '-' : 'R',
    'a' : 'S',
    'D' : 'T',
    'j' : 'U',
    'Y' : 'V',
    'U' : 'W',
    'r' : 'X',
    's' : 'Y',
    'm' : 'Z',
    '5' : '1',
    'I' : '2',
    'w' : '3',
    '2' : '4',
    'c' : '5',
    'N' : '6',
    'K' : '7',
    'A' : '8',
    '3' : '9',
    'O' : '0',
    'M' : '-',
    'F' : '_',
    'B' : '.',
};

function decode(data) {
    let retString = "";
    for (let i = 0; i < data.length; i++) {
        retString = retString.concat(decodeDict[data[i]]);
    }
    return retString
}

// Scroll animation functions
function getNameOffset(scroll) {
    if (scroll > 800) return (-50 - (scroll - 800)).toString().concat("px");
    return (150 - (scroll / 4)).toString().concat("px");
}

function getDescOffset(scroll) {
    if (scroll > 800) return (250 - (scroll - 800)).toString().concat("px");
    return (450 - (scroll / 4)).toString().concat("px");
}

function getPriceOffset(scroll) {
    if (scroll > 800) return (175 - (scroll - 800)).toString().concat("px");
    return (375 - (scroll / 4)).toString().concat("px");
}

function getAddCartOffset(scroll) {
    if (scroll > 800) return "1500px";
    return ((900 + (scroll)) - (scroll / 4)).toString().concat("px");
}

function getImgOffset(scroll) {
    if (scroll > 800) return "950px";
    return (scroll + 150).toString().concat("px");
}

document.addEventListener('DOMContentLoaded', function () {
    
    // Fetches the product which was stored on the shop page now that the user is on the checkout page
    // Get stored string
    const urlParams = new URLSearchParams(window.location.search);
    const product = decode(urlParams.get('product'));

    // Find the elements which will be changed
    const productName = document.getElementById('productName');
    const productDesc = document.getElementById('productDescription');
    const productPrice = document.getElementById('productPrice');
    const productImg = document.getElementById('productImage');

    // Load the page based on the product
    switch (product) {
        case 'camera10':
            productName.innerHTML = "10 MegaPixel Camera";
            productDesc.innerHTML = "This item is our most budget friendly camera we offer. With this camera you get good quality for a great price.";
            productPrice.innerHTML = "$79.99";
            productImg.src = "";
            break;
        case 'camera20':
            productName.innerHTML = "20 MegaPixel Camera";
            productDesc.innerHTML = "";
            productPrice.innerHTML = "";
            productImg.src = "";
            break;
        case 'camera40':
            productName.innerHTML = "40 MegaPixel Camera";
            productDesc.innerHTML = "";
            productPrice.innerHTML = "";
            productImg.src = "";
            break;
        case 'product4':
            productName.innerHTML = "product4";
            break;
        case 'product5':
            productName.innerHTML = "product5";
            break;
        case 'product6':
            productName.innerHTML = "product6";
            break;
        case 'product7':
            productName.innerHTML = "product7";
            break;
        case 'product8':
            productName.innerHTML = "product8";
            break;
        case 'product9':
            productName.innerHTML = "product9";
            break;
    }

    // Add scroll animations for stuff
    const name = document.getElementById('productNameContainer');
    const desc = document.getElementById('productDescriptionContainer');
    const price = document.getElementById('productPriceContainer');
    const button = document.getElementById('productAddCart');
    const img = document.getElementById('productPictureContainer');

    window.addEventListener('scroll', function () {
        const currentScrollPosition = window.scrollY;

        // Get vertical offset values for elements
        let nameOffset = getNameOffset(currentScrollPosition);
        let descOffset = getDescOffset(currentScrollPosition);
        let priceOffset = getPriceOffset(currentScrollPosition);
        let buttonOffset = getAddCartOffset(currentScrollPosition);
        let imgOffset = getImgOffset(currentScrollPosition);

        // Set the style values
        name.style.top = nameOffset;
        desc.style.top = descOffset;
        price.style.top = priceOffset;
        button.style.top = buttonOffset;
        img.style.top = imgOffset;
    });
});