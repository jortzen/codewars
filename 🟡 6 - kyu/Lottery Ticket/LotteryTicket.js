const bingo = (ticket, win) =>
    ticket.filter(([str, code]) =>
        [...str].some((char) => char.charCodeAt(0) === code)
    ).length >= win
        ? "Winner!"
        : "Loser!";

const lotteryResultReduce = (ticket, win) =>
    ticket.reduce(
        (acc, [str, code]) =>
            acc + [...str].some((c) => c.charCodeAt(0) === code),
        0
    ) >= win
        ? "Winner!"
        : "Loser!";

const lotteryResultLoop = (ticket, win) => {
    let count = 0;
    for (let [str, code] of ticket) {
        for (let char of str) {
            if (char.charCodeAt(0) === code) {
                count++;
                break;
            }
        }
    }
    return count >= win ? "Winner!" : "Loser!";
};