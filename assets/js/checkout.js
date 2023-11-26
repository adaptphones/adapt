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

// Fetches the product which was stored on the shop page now that the user is on the checkout page
document.addEventListener('DOMContentLoaded', function () {
    
    // Get stored string
    const urlParams = new URLSearchParams(window.location.search);
    const product = decode(urlParams.get('product'));

    // Find the elements which will be changed
    const productName = document.getElementById('productName');

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
});