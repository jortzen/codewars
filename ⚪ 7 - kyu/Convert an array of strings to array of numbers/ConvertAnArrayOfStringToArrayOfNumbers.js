const toNumberArray = (stringarray) => {
    return stringarray.map(Number);
};

const stringArrayToNumberArray = (stringarray) => stringarray.map((str) => +str);

const castArrayElements = (stringarray) => {
    let result = [];
    
    stringarray.forEach((str) => result.push(Number(str)));

    return result;
};