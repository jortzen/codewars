const rowWeights = (array) => {
    let team1 = 0,
        team2 = 0;

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) team1 += array[i];
        else team2 += array[i];
    }

    return [team1, team2];
};

const rowWeightsReduce = (array) =>
    array.reduce(
        (teams, weight, index) => {
            teams[index % 2] += weight;
            return teams;
        },
        [0, 0]
    );

const rowWeightsFilter = (array) => [
    array
        .filter((_, index) => index % 2 === 0)
        .reduce((sum, weight) => sum + weight, 0),
    array
        .filter((_, index) => index % 2 !== 0)
        .reduce((sum, weight) => sum + weight, 0),
];