const peopleWithAgeDrink = (age) =>
    age < 14
        ? "drink toddy"
        : age < 18
        ? "drink coke"
        : age < 21
        ? "drink beer"
        : "drink whisky";

const whatToDrink = (age) => {
    const getDrink = () => {
        switch (true) {
            case age < 14:
                return "toddy";
            case age < 18:
                return "coke";
            case age < 21:
                return "beer";
            default:
                return "whisky";
        }
    };

    return `drink ${getDrink()}`;
};

const selectDrink = (age) => {
    const drinks = { toddy: 14, coke: 18, beer: 21, whisky: Infinity };
    
    for (const [drink, limit] of Object.entries(drinks)) {
        if (age < limit) return `drink ${drink}`;
    }
};