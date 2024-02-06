let products = [];

function enterProduct() {
    let name = prompt("Unesite ime proizvoda:");
    let price = parseFloat(prompt("Unesite cijenu proizvoda:"));
    let color = prompt("Unesite boju proizvoda:");
    return { name, price, color };
}

function calculateAveragePrice(products) {
    let totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    return totalPrice / products.length;
}

function findProductMostDeviating(products, averagePrice) {
    let mostDeviatingProduct = products[0];
    let greatestDeviation = Math.abs(products[0].price - averagePrice);

    products.forEach(product => {
        let deviation = Math.abs(product.price - averagePrice);
        if (deviation > greatestDeviation) {
            mostDeviatingProduct = product;
            greatestDeviation = deviation;
        }
    });

    return mostDeviatingProduct;
}

while (true) {
    products.push(enterProduct());
    if (!confirm("Želite li nastaviti sa unosom?")) {
        break;
    }
}

let averagePrice = calculateAveragePrice(products);
let productMostDeviating = findProductMostDeviating(products, averagePrice);

console.log(`Prosjecna cijena: ${averagePrice}`);
console.log(`Proizvod koji najviše odstupa od prosjeka:`, productMostDeviating);