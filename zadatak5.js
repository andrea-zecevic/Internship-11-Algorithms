let athletes = [];

function enterAthlete() {
    let name = prompt("Unesite ime sportaša:");
    let surname = prompt("Unesite prezime sportaša:");
    let points = parseFloat(prompt("Unesite broj bodova:"));
    return { name, surname, points };
}

while (true) {
    athletes.push(enterAthlete());
    if (!confirm("Želite li dodati još sportaša?")) break;
}

let maxPoints = athletes.reduce((max, athlete) => Math.max(max, athlete.points), 0);

let categories = athletes.reduce((acc, athlete) => {
    let percentageOfMax = (athlete.points / maxPoints) * 100;
    let category;
    if (percentageOfMax <= 25) {
        category = 0;
    } else if (percentageOfMax <= 50) {
        category = 1;
    } else if (percentageOfMax <= 75) {
        category = 2;
    } else {
        category = 3;
    }
    if (!acc[category]) acc[category] = [];
    acc[category].push({ ...athlete, percentageOfMax });
    return acc;
}, {});

Object.keys(categories).forEach(category => {
    let lowerBound = parseInt(category) * 25;
    let upperBound = (parseInt(category) + 1) * 25;
    console.log(`Kategorija ${parseInt(category) + 1} (${lowerBound}% - ${upperBound > 100 ? 100 : upperBound}% bodova):`);
    categories[category]
        .sort((a, b) => a.surname.localeCompare(b.surname))
        .forEach(athlete => {
            console.log(`${athlete.surname} ${athlete.name}`);
        });
});