const parse = (data) => {
    let value = 0;
    const result = [];

    for (const char of data) {
        if (char === "i") value++;
        else if (char === "d") value--;
        else if (char === "s") value *= value;
        else if (char === "o") result.push(value);
    }

    return result;
};

const parseReduce = (data) => {
    let value = 0;

    return [...data].reduce((result, char) => {
        if (char === "i") value++;
        else if (char === "d") value--;
        else if (char === "s") value *= value;
        else if (char === "o") result.push(value);
        return result;
    }, []);
};

const parseSwitch = (data) => {
    let value = 0;
    const result = [];

    for (const char of data) {
        switch (char) {
            case "i":
                value++;
                break;
            case "d":
                value--;
                break;
            case "s":
                value *= value;
                break;
            case "o":
                result.push(value);
                break;
        }
    }

    return result;
};