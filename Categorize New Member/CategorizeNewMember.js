const openOrSenior = (data) => {
    return data.map(([age, handicap]) =>
        age >= 55 && handicap > 7 ? "Senior" : "Open"
    );
};

const openOrSeniorForEach = (data) => {
    const result = [];

    data.forEach(([age, handicap]) => {
        result.push(age >= 55 && handicap > 7 ? "Senior" : "Open");
    });

    return result;
};

const openOrSeniorFor = (data) => {
    const result = [];

    for (let index = 0; index < data.length; index++) {
        const [age, handicap] = data[index];
        result.push(age >= 55 && handicap > 7 ? "Senior" : "Open");
    }

    return result;
}