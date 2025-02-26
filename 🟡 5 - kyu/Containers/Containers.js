const Containers = (input) => {
    const stacks = [];
    for (const container of input) {
        const placed = stacks.some((top, i) => {
            if (top >= container) return (stacks[i] = container), true;
        });
        if (!placed) stacks.push(container);
    }
    return stacks.length;
};

const containerStacksBinary = (input) => {
    const stacks = [];
    for (const c of input) {
        let left = 0,
            right = stacks.length;
        while (left < right) {
            const mid = (left + right) >> 1;
            stacks[mid] >= c ? (right = mid) : (left = mid + 1);
        }
        left < stacks.length ? (stacks[left] = c) : stacks.push(c);
    }
    return stacks.length;
};

const containerStacksReduce = (input) =>
    [...input].reduce((stacks, c) => {
        const i = stacks.findIndex((top) => top >= c);
        i !== -1 ? (stacks[i] = c) : stacks.push(c);
        return stacks;
    }, []).length;