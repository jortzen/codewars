const grader = (score) => {
    switch (true) {
        case score < 0.6 || score > 1:
            return "F";
        case score >= 0.9:
            return "A";
        case score >= 0.8:
            return "B";
        case score >= 0.7:
            return "C";
        case score >= 0.6:
            return "D";
        default:
            return "F";
    }
};

const evaluateGrade = (score) => {
    if (score < 0.6 || score > 1) return "F";
    if (score >= 0.9) return "A";
    if (score >= 0.8) return "B";
    if (score >= 0.7) return "C";
    return "D";
};

const getGrade = (score) => {
    return score < 0.6 || score > 1
        ? "F"
        : score >= 0.9
        ? "A"
        : score >= 0.8
        ? "B"
        : score >= 0.7
        ? "C"
        : "D";
};