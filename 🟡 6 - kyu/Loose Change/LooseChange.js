const looseChange = (cents) => {
    let amount = Math.max(0, Math.floor(cents));

    return ["Quarters", "Dimes", "Nickels", "Pennies"].reduce(
        (acc, coin, i) => {
            const values = [25, 10, 5, 1];
            acc[coin] = Math.floor(amount / values[i]);
            amount %= values[i];
            return acc;
        },
        {}
    );
};

const coinCounter = (cents) => {
    let amount = Math.max(0, Math.floor(cents)),
        result = { Quarters: 0, Dimes: 0, Nickels: 0, Pennies: 0 };

    for (const [coin, value] of Object.entries({
        Quarters: 25,
        Dimes: 10,
        Nickels: 5,
        Pennies: 1,
    })) {
        while (amount >= value) {
            result[coin]++;
            amount -= value;
        }
    }

    return result;
};