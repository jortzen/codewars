const noOdds = (values) => values.filter((value) => value % 2 === 0);

const noOddsForLoop = (values) => {
    const result = [];

    for (let value of values) {
        if (value % 2 === 0) result.push(value);
    }

    return result;
};

const noOddsReduce = (values) =>
    values.reduce((acc, value) => {
        if (value % 2 === 0) acc.push(value);
        return acc;
    }, []);

const noOddsMapFilter = (values) =>
    values.map((v) => v).filter((value) => value % 2 === 0);