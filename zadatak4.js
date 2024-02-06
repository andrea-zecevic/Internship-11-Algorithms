let fruits = [];

function enterFruit() {
    let name = prompt("Unesite ime voća:");
    let color = prompt("Unesite boju voća:");
    let calories = parseFloat(prompt("Unesite broj kalorija:"));
    return { name, color, calories };
}

while (true) {
    fruits.push(enterFruit());
    if (!confirm("Želite li dodati još voća?")) break;
}

let colorCalories = fruits.reduce((acc, fruit) => {
    if (!acc[fruit.color]) {
        acc[fruit.color] = { totalCalories: 0, fruits: [] };
    }
    acc[fruit.color].totalCalories += fruit.calories;
    acc[fruit.color].fruits.push(fruit.name);
    return acc;
}, {});

let sortedColors = Object.keys(colorCalories).sort();

console.log("Voće po boji i ukupne kalorije:");
sortedColors.forEach(color => {
    console.log(`${color}: ${colorCalories[color].fruits.join(", ")} - Ukupno kalorija: ${colorCalories[color].totalCalories}`);
});
