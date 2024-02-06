let people = [];

function enterPerson() {
    let name = prompt("Unesite ime osobe:");
    let surname = prompt("Unesite prezime osobe:");
    let occupation = prompt("Unesite zanimanje osobe:");
    let salary = parseFloat(prompt("Unesite plaću/primanja:"));
    return { name: name + " " + surname, occupation, salary };
}

while (true) {
    people.push(enterPerson());
    if (!confirm("Želite li dodati još osoba?")) break;
}

let totalSalary = people.reduce((acc, person) => acc + person.salary, 0);

let occupationContributions = people.reduce((acc, person) => {
    if (!acc[person.occupation]) {
        acc[person.occupation] = { totalSalary: 0, people: [] };
    }
    acc[person.occupation].totalSalary += person.salary;
    acc[person.occupation].people.push({ name: person.name, salary: person.salary });
    return acc;
}, {});

let finalOutput = Object.keys(occupationContributions).map(occupation => {
    let occupationTotal = occupationContributions[occupation].totalSalary;
    let peopleDetails = occupationContributions[occupation].people.map(person => ({
        name: person.name,
        contributionPercentage: (person.salary / occupationTotal * 100).toFixed(2) + "%"
    }));

    return {
        occupation,
        totalContributionPercentage: (occupationTotal / totalSalary * 100).toFixed(2) + "%",
        people: peopleDetails
    };
});

finalOutput.forEach(job => {
    console.log(`Zanimanje: ${job.occupation}`);
    console.log(`Ukupni doprinos zanimanja (% od ukupne plaće): ${job.totalContributionPercentage}`);
    console.log('Detalji o doprinosu osoba:');
    job.people.forEach(person => {
        console.log(`- ${person.name} doprinosi ${person.contributionPercentage} ukupnoj plaći zanimanja`);
    });
    console.log('-----------------------------------');
});


