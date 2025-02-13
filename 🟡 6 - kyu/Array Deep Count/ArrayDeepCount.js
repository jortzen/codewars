const deepCount = (a) => {
    let count = 0;
    for (const element of a) {
        count++;
        if (Array.isArray(element)) {
            count += deepCount(element);
        }
    }
    return count;
};

const countElementsIterative = (a) => {
    let count = 0;
    const stack = [...a];

    while (stack.length) {
        const element = stack.pop();
        count++;
        if (Array.isArray(element)) {
            stack.push(...element);
        }
    }

    return count;
};