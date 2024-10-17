const groupByCommas = (n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const addCommasToNumber = (n) => {
    return n.toLocaleString("en-US");
};

const commaSeparatedNumber = (n) => {
    return n
        .toString()
        .split("")
        .reverse()
        .join("")
        .replace(/(\d{3})(?=\d)/g, "$1,")
        .split("")
        .reverse()
        .join("");
};