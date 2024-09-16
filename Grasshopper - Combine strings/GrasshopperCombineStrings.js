const combineNamesWithTemplate = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};

const combineNamesWithJoin = (firstName, lastName) => {
    return [firstName, lastName].join(" ");
};

const combineNamesWithConcat = (firstName, lastName) => {
    return firstName + " " + lastName;
};