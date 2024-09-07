const solution = (number) =>
    number < 0
        ? 0
        : ((sum) => (
              Array.from({ length: number }, (_, i) => i).forEach((i) => {
                  if (i % 3 === 0 || i % 5 === 0) sum += i;
              }),
              sum
          ))(0);

const solutionFor = (number) => {
    if (number < 0) return 0;

    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
};

const solutionReduce = (number) => {
    if (number < 0) return 0;

    return [...Array(number).keys()].reduce(
        (sum, i) => (i % 3 === 0 || i % 5 === 0 ? sum + i : sum),
        0
    );
};