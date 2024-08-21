const getGrade = (s1, s2, s3) => {
    const average = (s1 + s2 + s3) / 3;

    switch (true) {
        case average >= 90:
            return "A";
        case average >= 80:
            return "B";
        case average >= 70:
            return "C";
        case average >= 60:
            return "D";
        default:
            return "F";
    }
};

const evaluateLetterGrade = (s1, s2, s3) => {
    const average = (s1 + s2 + s3) / 3;

    const gradeMappings = {
        A: 90,
        B: 80,
        C: 70,
        D: 60,
        F: 0,
    };

    for (const [grade, min] of Object.entries(gradeMappings)) {
        if (average >= min) return grade;
    }
};

const assignLetterGrade = (s1, s2, s3) => {
    const average = (s1 + s2 + s3) / 3;

    return average >= 90
        ? "A"
        : average >= 80
        ? "B"
        : average >= 70
        ? "C"
        : average >= 60
        ? "D"
        : "F";
};
