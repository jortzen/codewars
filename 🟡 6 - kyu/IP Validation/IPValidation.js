const isValidIP = (str) => {
    const octets = str.split(".");

    return (
        octets.length === 4 &&
        octets.every(
            (octet) =>
                /^[1-9]\d*$|^0$/.test(octet) && +octet >= 0 && +octet <= 255
        )
    );
};

const checkValidIP = (str) => {
    const octets = str.split(".");

    return (
        octets.length === 4 &&
        octets.filter(
            (octet) =>
                /^\d+$/.test(octet) &&
                +octet >= 0 &&
                +octet <= 255 &&
                !(octet.length > 1 && octet.startsWith("0"))
        ).length === 4
    );
};

const isIPv4Valid = (str) => {
    const octets = str.split(".");
    return (
        octets.length === 4 &&
        octets.reduce(
            (isValid, octet) =>
                isValid &&
                /^\d+$/.test(octet) &&
                +octet >= 0 &&
                +octet <= 255 &&
                !(octet.length > 1 && octet.startsWith("0")),
            true
        )
    );
};