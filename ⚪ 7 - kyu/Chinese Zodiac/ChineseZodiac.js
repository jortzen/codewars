const chineseZodiac = (year) => {
    const animals = [
        "Rat",
        "Ox",
        "Tiger",
        "Rabbit",
        "Dragon",
        "Snake",
        "Horse",
        "Goat",
        "Monkey",
        "Rooster",
        "Dog",
        "Pig",
    ];
    const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];

    const animal = animals[(year - 1924) % 12];
    const element = elements[Math.floor(((year - 1924) / 2) % 5)];

    return `${element} ${animal}`;
};

const findZodiacElement = (year) => {
    const animals = [
        "Rat",
        "Ox",
        "Tiger",
        "Rabbit",
        "Dragon",
        "Snake",
        "Horse",
        "Goat",
        "Monkey",
        "Rooster",
        "Dog",
        "Pig",
    ];
    const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];

    return `${elements[Math.floor(((year - 1924) % 10) / 2)]} ${
        animals[(year - 1924) % 12]
    }`;
};

const zodiacSign = (year) => {
    const animals = [
        "Rat",
        "Ox",
        "Tiger",
        "Rabbit",
        "Dragon",
        "Snake",
        "Horse",
        "Goat",
        "Monkey",
        "Rooster",
        "Dog",
        "Pig",
    ];
    const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];

    const animalIndex = (year - 1924) % 12;
    const elementIndex = Math.floor(((year - 1924) % 10) / 2);

    return `${elements[elementIndex]} ${animals[animalIndex]}`;
};