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

let coloredFruits = fruits.map(fruit => ({
    ...fruit,
    color: fruit.available ? "crvena" : "žuta"
}));

coloredFruits.sort((a, b) => {
    if (a.color < b.color) return -1;
    if (a.color > b.color) return 1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});

console.log("Voće sortirano po boji pa po imenu:");
coloredFruits.forEach(fruit => console.log(`${fruit.name} - Boja: ${fruit.color}`));
