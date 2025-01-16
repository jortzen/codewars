const getAverage = (marks) =>
    Math.floor(marks.reduce((sum, mark) => sum + mark, 0) / marks.length);

const averageMarks = (marks) => {
    let sum = 0;

    for (let mark of marks) {
        sum += mark;
    }

    return Math.floor(sum / marks.length);
};

const roundedAverage = (marks) => {
    const [sum, count] = marks.reduce(
        ([sum, count], mark) => [sum + mark, count + 1],
        [0, 0]
    );

    return Math.floor(sum / count);
};