const encodeRailFenceCipher = (string, numberRails) => {
    if (numberRails < 2 || string.length === 0) return string;

    const rails = Array.from({ length: numberRails }, () => "");
    let directionDown = false;
    let rail = 0;

    for (const char of string) {
        rails[rail] += char;
        if (rail === 0 || rail === numberRails - 1)
            directionDown = !directionDown;
        rail += directionDown ? 1 : -1;
    }

    return rails.join("");
};

const decodeRailFenceCipher = (string, numberRails) => {
    if (numberRails < 2 || string.length === 0) return string;

    const railLengths = Array.from({ length: numberRails }, () => 0);
    let directionDown = false;
    let rail = 0;

    for (const char of string) {
        railLengths[rail]++;
        if (rail === 0 || rail === numberRails - 1)
            directionDown = !directionDown;
        rail += directionDown ? 1 : -1;
    }

    const rails = [];
    let index = 0;
    for (let i = 0; i < numberRails; i++) {
        rails[i] = string.substr(index, railLengths[i]);
        index += railLengths[i];
    }

    let decodedString = "";
    rail = 0;
    directionDown = false;

    for (let i = 0; i < string.length; i++) {
        decodedString += rails[rail][0];
        rails[rail] = rails[rail].substring(1);
        if (rail === 0 || rail === numberRails - 1)
            directionDown = !directionDown;
        rail += directionDown ? 1 : -1;
    }

    return decodedString;
};

// ----------------------------------------------------------------------- //

const railFenceEncode = (string, numberRails) => {
    if (numberRails < 2 || string.length === 0) return string;
    const rails = new Array(numberRails).fill("");
    let rail = 0;
    let directionDown = true;

    for (const char of string) {
        rails[rail] += char;
        if (rail === 0) directionDown = true;
        if (rail === numberRails - 1) directionDown = false;
        rail += directionDown ? 1 : -1;
    }

    return rails.join("");
};

const railFenceDecode = (string, numberRails) => {
    if (numberRails < 2 || string.length === 0) return string;
    const railLengths = Array(numberRails).fill(0);
    let rail = 0;
    let directionDown = true;

    for (const char of string) {
        railLengths[rail]++;
        if (rail === 0) directionDown = true;
        if (rail === numberRails - 1) directionDown = false;
        rail += directionDown ? 1 : -1;
    }

    const rails = [];
    let index = 0;
    for (let i = 0; i < numberRails; i++) {
        rails[i] = string.substr(index, railLengths[i]);
        index += railLengths[i];
    }

    let decodedString = "";
    rail = 0;
    directionDown = true;

    for (let i = 0; i < string.length; i++) {
        decodedString += rails[rail][0];
        rails[rail] = rails[rail].slice(1);
        if (rail === 0) directionDown = true;
        if (rail === numberRails - 1) directionDown = false;
        rail += directionDown ? 1 : -1;
    }

    return decodedString;
};
