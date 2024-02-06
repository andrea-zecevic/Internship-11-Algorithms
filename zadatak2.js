let people = [];

function enterPerson() {
    let name = prompt("Unesite ime osobe:");
    let surname = prompt("Unesite prezime osobe:");
    let occupation = prompt("Unesite zanimanje osobe:");
    let salary = parseFloat(prompt("Unesite plaću/primanja:"));
    return { name, surname, occupation, salary };
}

while (true) {
    people.push(enterPerson());
    let continueInput = confirm("Želite li dodati još osoba?");
    if (!continueInput) break;
}

let occupationInfo = people.reduce((acc, person) => {
    if (!acc[person.occupation]) {
        acc[person.occupation] = { totalSalary: 0, count: 0, occupation: person.occupation };
    }
    acc[person.occupation].totalSalary += person.salary;
    acc[person.occupation].count += 1;
    return acc;
}, {});

let averages = Object.values(occupationInfo).map(job => {
    return { 
        occupation: job.occupation, 
        averageSalary: job.totalSalary / job.count, 
        numberOfPeople: job.count 
    };
});

averages.sort((a, b) => b.averageSalary - a.averageSalary);
console.log("ZANIMANJE - PROSJEK PRIMANJA - BROJ OSOBA");
averages.forEach(job => {
    console.log(`${job.occupation}, ${job.averageSalary.toFixed(2)}, ${job.numberOfPeople}`);
});
