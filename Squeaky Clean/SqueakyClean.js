const squeakyClean = (arr) => {
    return arr.filter(
        (value) => value != "" && value != undefined && value != null
    );
};

const squeakyCleanBoolean = (arr) => {
    return arr.filter(Boolean);
};

const squeakyCleanForEach = (arr) => {
    const result = [];

    arr.forEach((value) => {
        if (value != "" && value != undefined && value != null) {
            result.push(value);
        }
    });

    return result;
};