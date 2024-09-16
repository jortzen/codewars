const createPhoneNumber = (number) => {
    const bracketsPart = number.slice(0, 3).join("");
    const firstPart = number.slice(3, 6).join("");
    const secondPart = number.slice(6, 10).join("");

    return `(${bracketsPart}) ${firstPart}-${secondPart}`;
};

const formatPhoneNumber = (number) => {
    return `(${number.slice(0, 3).join("")}) ${number
        .slice(3, 6)
        .join("")}-${number.slice(6, 10).join("")}`;
};

const createPhoneNumberReduce = (numbers) => {
    return numbers.reduce((format, num) => format.replace("x", num), "(xxx) xxx-xxxx")
}