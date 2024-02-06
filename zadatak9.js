let names = [];

while(true) {
    let name = prompt("Unesite ime osobe:");
    if (name === "" || name === null) break;
    names.push(name);
}

names.sort();
let filteredNames = names.filter(name => name.length > 5);

let csvFormat = filteredNames.join(", ");
console.log("Imena u CSV formatu:", csvFormat);
