const countPositivesSumNegatives = (input) => {
    return input && input.length
        ? [
              input.filter((n) => n > 0).length,
              input.filter((n) => n < 0).reduce((sum, n) => sum + n, 0),
          ]
        : [];
};

const positiveCountNegativeSum = (input) => {
    return input?.length
        ? [
              input.reduce((count, n) => count + (n > 0), 0),
              input.reduce((sum, n) => sum + (n < 0 ? n : 0), 0),
          ]
        : [];
};

const analyzeArray = (input) => {
    return input?.length
        ? [
              input.filter((n) => n > 0).length,
              input.reduce((sum, n) => sum + (n < 0 ? n : 0), 0),
          ]
        : [];
};