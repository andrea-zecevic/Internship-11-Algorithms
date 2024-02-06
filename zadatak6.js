let fruits = [];

function enterFruit() {
    let name = prompt("Unesite ime voća:");
    let price = parseFloat(prompt("Unesite cijenu voća:"));
    let available = confirm("Da li je voće dostupno?");
    return {name, price, available};
}

while (true) {
    fruits.push(enterFruit());
    if (!confirm("Želite li dodati još voća?")) break;
}

let unavailableIndexes = fruits.map((fruit, index) => fruit.available ? null : index).filter(index => index !== null);
console.log("Indeksi nedostupnog voća:", unavailableIndexes);

let availableFruits = fruits.filter(fruit => fruit.available);

availableFruits.sort((a, b) => a.price === b.price ? a.name.localeCompare(b.name) : a.price - b.price);
console.log("Dostupno voće sortirano po cijeni, a zatim po imenu:", availableFruits);

let totalCost = fruits.reduce((acc, fruit) => acc + fruit.price, 0);
let unavailableCost = fruits.filter(fruit => !fruit.available).reduce((acc, fruit) => acc + fruit.price, 0);
let unavailablePercentage = (unavailableCost / totalCost * 100).toFixed(2);
console.log(`Nedostupno voće čini ${unavailablePercentage}% ukupne cijene svih voća.`);
