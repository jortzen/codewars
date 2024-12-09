const waveWithMap = (str) =>
    str
        .split("")
        .map((char, i) =>
            char !== " "
                ? str.slice(0, i) + char.toUpperCase() + str.slice(i + 1)
                : null
        )
        .filter(Boolean);

const waveWithLoop = (str) => {
    const result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result.push(
                str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1)
            );
        }
    }

    return result;
};

const waveWithReduce = (str) =>
    str.split("").reduce((acc, char, i) => {
        if (char !== " ") {
            acc.push(str.slice(0, i) + char.toUpperCase() + str.slice(i + 1));
        }
        return acc;
    }, []);