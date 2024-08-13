const removeSmallest = (numbers) =>
    numbers.length
        ? numbers
              .slice(0, numbers.indexOf(Math.min(...numbers)))
              .concat(numbers.slice(numbers.indexOf(Math.min(...numbers)) + 1))
        : [];

const removeSmallestMap = (numbers) => {
    const indexToRemove = numbers.indexOf(Math.min(...numbers));

    return numbers
        .map((num, index) => (index !== indexToRemove ? num : null))
        .filter((num) => num !== null);
};

const removeSmallestFor = (numbers) => {
    let minIndex = 0;

    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] < numbers[minIndex]) {
            minIndex = index;
        }
    }

    return [...numbers.slice(0, minIndex), ...numbers.slice(minIndex + 1)];
};