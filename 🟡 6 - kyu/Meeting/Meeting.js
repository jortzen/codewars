const meeting = (s) => {
    return s
        .toUpperCase()
        .split(";")
        .map((name) => {
            const [first, last] = name.split(":");
            return `(${last}, ${first})`;
        })
        .sort()
        .join("");
};

const meetingWithReduce = (s) => {
    return s
        .toUpperCase()
        .split(";")
        .reduce((acc, name) => {
            const [first, last] = name.split(":");
            acc.push(`(${last}, ${first})`);
            return acc;
        }, [])
        .sort()
        .join("");
};

const meetingWithForLoop = (s) => {
    const names = s.toUpperCase().split(";");
    const formattedNames = [];

    for (const name of names) {
        const [first, last] = name.split(":");
        formattedNames.push(`(${last}, ${first})`);
    }

    return formattedNames.sort().join("");
};

const meetingWithFlatMap = (s) => {
    return s
        .toUpperCase()
        .split(";")
        .flatMap((name) => {
            const [first, last] = name.split(":");
            return `(${last}, ${first})`;
        })
        .sort()
        .join("");
};