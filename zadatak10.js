let fruits = [];

function enterFruit() {
    let name = prompt("Unesite ime voća:");
    let color = prompt("Unesite boju voća:");
    let price = parseFloat(prompt("Unesite cijenu voća:"));
    return { name, color, price };
}

while (true) {
    fruits.push(enterFruit());
    if (!confirm("Želite li dodati još voća?")) break;
}

let uniqueColorFruits = {};
fruits.forEach(fruit => {
    if (!uniqueColorFruits[fruit.color] || uniqueColorFruits[fruit.color].price > fruit.price) {
        uniqueColorFruits[fruit.color] = fruit;
    }
});

let selectedFruits = Object.values(uniqueColorFruits);
let totalPrice = selectedFruits.reduce((sum, fruit) => sum + fruit.price, 0);
console.log("Konačna cijena - najmanje moguće novaca koliko treba da se kupi sve boje voća barem jedanput: ", totalPrice);