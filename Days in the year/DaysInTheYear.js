const yearDays = (year) => {
    const days =
        (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 366 : 365;

    return `${year} has ${days} days`;
};

const findYearDays = (year) => {
    return `${year} has ${
        (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 366 : 365
    } days`;
};

const calculateYearDays = (year) => {
    const isLeap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    const days = isLeap ? 366 : 365;

    return `${year} has ${days} days`;
};