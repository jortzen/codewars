const isMerge = (s, part1, part2) =>
    !s
        ? !part1 && !part2
        : (part1[0] === s[0] && isMerge(s.slice(1), part1.slice(1), part2)) ||
          (part2[0] === s[0] && isMerge(s.slice(1), part1, part2.slice(1)));

const isStringMerge = (s, part1, part2) => {
    if (s.length !== part1.length + part2.length) return false;

    const dp = Array(part1.length + 1)
        .fill(null)
        .map(() => Array(part2.length + 1).fill(false));
    dp[0][0] = true;

    for (let i = 0; i <= part1.length; i++) {
        for (let j = 0; j <= part2.length; j++) {
            if (i > 0 && part1[i - 1] === s[i + j - 1])
                dp[i][j] = dp[i][j] || dp[i - 1][j];
            if (j > 0 && part2[j - 1] === s[i + j - 1])
                dp[i][j] = dp[i][j] || dp[i][j - 1];
        }
    }
    return dp[part1.length][part2.length];
};

const mergeChecker = (s, part1, part2) => {
    const stack = [[0, 0]];
    const visited = new Set();

    while (stack.length) {
        const [i, j] = stack.pop();
        const k = i + j;

        if (k === s.length && i === part1.length && j === part2.length)
            return true;

        const key = `${i},${j}`;
        if (visited.has(key)) continue;
        visited.add(key);

        if (i < part1.length && part1[i] === s[k]) stack.push([i + 1, j]);
        if (j < part2.length && part2[j] === s[k]) stack.push([i, j + 1]);
    }
    return false;
};

const canBeMerged = (s, part1, part2) => {
    const backtrack = (i, j, k) => {
        if (k === s.length) return i === part1.length && j === part2.length;
        return (
            (i < part1.length &&
                part1[i] === s[k] &&
                backtrack(i + 1, j, k + 1)) ||
            (j < part2.length &&
                part2[j] === s[k] &&
                backtrack(i, j + 1, k + 1))
        );
    };
    return backtrack(0, 0, 0);
};