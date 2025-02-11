const number = (busStops) =>
    busStops.reduce((people, [on, off]) => people + on - off, 0);

const numberForLoop = (busStops) => {
    let people = 0;

    for (let [on, off] of busStops) {
        people += on - off;
    }

    return people;
};

const numberMapSum = (busStops) =>
    busStops.map(([on, off]) => on - off).reduce((sum, val) => sum + val, 0);

const numberWhileLoop = (busStops) => {
    let people = 0,
        i = 0;

    while (i < busStops.length) {
        people += busStops[i][0] - busStops[i][1];
        i++;
    }

    return people;
};