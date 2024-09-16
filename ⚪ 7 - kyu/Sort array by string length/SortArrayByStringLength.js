const sortByLength = (array) => {
    array.sort((a, b) => a.length - b.length);
    return array;
};

const sortByLengthTernary = (array) => {
    array.sort((a, b) => a.length < b.length ? -1 : a.length > b.length ? 1 : 0);
    return array;
}

const sortByLengthSlice = (array) => {
    return array.slice().sort((a, b) => a.length - b.length);
}