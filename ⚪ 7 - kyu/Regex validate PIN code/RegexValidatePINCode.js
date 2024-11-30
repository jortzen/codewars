const validatePIN = (pin) => /^(\d{4}|\d{6})$/.test(pin);

const validatePINLength = (pin) => {
    const isValidLength = pin.length === 4 || pin.length === 6;

    return (
        isValidLength && [...pin].every((char) => char >= "0" && char <= "9")
    );
};

const validatePINParseInt = (pin) => {
    const isNumeric = pin.split("").every((char) => !isNaN(parseInt(char)));

    return (pin.length === 4 || pin.length === 6) && isNumeric;
};

const validatePINFilter = (pin) => {
    const digitsOnly = pin
        .split("")
        .filter((char) => char >= "0" && char <= "9");

    return (
        (pin.length === 4 || pin.length === 6) &&
        digitsOnly.length === pin.length
    );
};

const validatePINLoop = (pin) => {
    if (pin.length !== 4 && pin.length !== 6) return false;

    for (let i = 0; i < pin.length; i++) {
        if (pin[i] < "0" || pin[i] > "9") return false;
    }
    
    return true;
};
