const luckCheck = (ticket) => {
    if (!/^\d+$/.test(ticket)) throw new Error("Invalid ticket format");
    const len = ticket.length;
    const mid = Math.floor(len / 2);

    const left = ticket
        .slice(0, mid)
        .split("")
        .reduce((sum, digit) => sum + +digit, 0);

    const right = ticket
        .slice(len % 2 === 0 ? mid : mid + 1)
        .split("")
        .reduce((sum, digit) => sum + +digit, 0);

    return left === right;
};

const luckCheckLoop = (ticket) => {
    if (!/^\d+$/.test(ticket)) throw new Error("Invalid ticket format");
    const len = ticket.length;

    let leftSum = 0,
        rightSum = 0;

    for (let i = 0; i < Math.floor(len / 2); i++) {
        leftSum += +ticket[i];
        rightSum += +ticket[len - 1 - i];
    }

    return leftSum === rightSum;
};

const luckCheckReduce = (ticket) => {
    if (!/^\d+$/.test(ticket)) throw new Error("Invalid ticket format");

    const len = ticket.length;
    const half = Math.floor(len / 2);

    return (
        ticket
            .split("")
            .reduce(
                (sum, digit, i) =>
                    sum + (i < half ? +digit : i >= len - half ? -digit : 0),
                0
            ) === 0
    );
};