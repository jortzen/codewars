const countSmileys = (arr) => {
    const smileyPattern = /^[:;][-~]?[)D]$/;

    return arr.filter((face) => smileyPattern.test(face)).length;
};

const countSmileysIterate = (arr) => {
    const validEyes = [":", ";"];
    const validNoses = ["-", "~"];
    const validMouths = [")", "D"];
    let count = 0;

    for (const face of arr) {
        const [eyes, nose, mouth] = face;
        if (
            validEyes.includes(eyes) &&
            ((validNoses.includes(nose) && validMouths.includes(mouth)) ||
                validMouths.includes(nose))
        ) {
            count++;
        }
    }

    return count;
};

const countSmileysFilter = (arr) => {
    const validEyes = [":", ";"];
    const validNoses = ["-", "~"];
    const validMouths = [")", "D"];

    return arr.filter((face) => {
        const [eyes, nose, mouth] = face;
        return (
            validEyes.includes(eyes) &&
            ((validNoses.includes(nose) && validMouths.includes(mouth)) ||
                validMouths.includes(nose))
        );
    }).length;
};