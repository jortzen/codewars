const computeDepth = (x) => {
    let digitsSeen = new Set();
    let multiple = 0;
    while (digitsSeen.size < 10) {
        multiple += x;
        multiple
            .toString()
            .split("")
            .forEach((digit) => digitsSeen.add(digit));
    }
    return multiple / x;
};

const depthWithoutWhile = (x) => {
    const getDigits = (num) => new Set(num.toString().split(""));

    const checkDepth = (x, count, digitsSeen = new Set()) => {
        const newDigits = getDigits(x * count);
        newDigits.forEach((digit) => digitsSeen.add(digit));

        if (digitsSeen.size === 10) {
            return count;
        }
        return checkDepth(x, count + 1, digitsSeen);
    };

    return checkDepth(x, 1);
};