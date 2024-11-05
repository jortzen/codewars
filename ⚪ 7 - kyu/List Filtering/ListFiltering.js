const filter_list = (l) => {
    return l.filter((item) => typeof item === "number");
};

const filterNumbers = (l) => {
    const result = [];

    for (let item of l) {
        if (typeof item === "number") {
            result.push(item);
        }
    }

    return result;
};

const getNumbers = (l) => {
    const result = [];

    l.forEach((item) => {
        if (typeof item === "number") {
            result.push(item);
        }
    });
    
    return result;
};