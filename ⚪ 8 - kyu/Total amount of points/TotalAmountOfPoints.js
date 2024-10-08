const points = (games) =>
    games.reduce(
        (total, game) =>
            total + (game[0] > game[2] ? 3 : game[0] === game[2] ? 1 : 0),
        0
    );

const totalPoints = (games) =>
    games
        .map((game) => (game[0] > game[2] ? 3 : game[0] === game[2] ? 1 : 0))
        .reduce((sum, points) => sum + points, 0);

const computePoints = (games) =>
    games.reduce((total, game) => {
        const [x, y] = game.split(":").map(Number);
        return total + (x > y ? 3 : x === y ? 1 : 0);
    }, 0);

const calculatePoints = (games) => {
    let points = 0;
    for (const game of games) {
        const [x, y] = game.split(":").map(Number);
        if (x > y) points += 3;
        else if (x === y) points += 1;
    }
    return points;
};