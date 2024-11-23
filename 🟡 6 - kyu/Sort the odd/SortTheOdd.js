const sortArray = (array) => {
    const odds = array.filter((x) => x % 2 !== 0).sort((a, b) => a - b);

    return array.map((x) => (x % 2 !== 0 ? odds.shift() : x));
};

const sortOddsReduce = (array) => {
    const odds = array.filter((x) => x % 2 !== 0).sort((a, b) => a - b);

    return array.reduce((result, num) => {
        result.push(num % 2 !== 0 ? odds.shift() : num);
        return result;
    }, []);
};

const sortOddsForEach = (array) => {
    const odds = array.filter((x) => x % 2 !== 0).sort((a, b) => a - b);
    const result = [...array];

    let oddIndex = 0;

    result.forEach((num, idx) => {
        if (num % 2 !== 0) result[idx] = odds[oddIndex++];
    });

    return result;
};

const sortOddsSplice = (array) => {
    const odds = array.filter((x) => x % 2 !== 0).sort((a, b) => a - b);
    let index = 0;
    
    return array.map((x) => (x % 2 !== 0 ? odds[index++] : x));
};
