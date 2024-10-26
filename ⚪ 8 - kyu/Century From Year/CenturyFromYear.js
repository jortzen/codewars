const century = (year) => Math.ceil(year / 100);

const calculateCentury = (year) => parseInt((year + 99) / 100);

const getCentury = (year) => (((year - 1) / 100) | 0) + 1;

const findCentury = (year) =>
    year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;