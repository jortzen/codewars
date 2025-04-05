const LCS = (x, y) => {
    const m = x.length,
        n = y.length;
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (x[i - 1] === y[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    let lcs = "";
    let i = m,
        j = n;
    while (i > 0 && j > 0) {
        if (x[i - 1] === y[j - 1]) {
            lcs = x[i - 1] + lcs;
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }
    return lcs;
};

const lcsMemoization = (x, y, memo = {}) => {
    if (x.length === 0 || y.length === 0) return "";
    const key = `${x.length},${y.length}`;
    if (key in memo) return memo[key];

    if (x[0] === y[0]) {
        memo[key] = x[0] + lcsMemoization(x.slice(1), y.slice(1), memo);
        return memo[key];
    }

    const lcs1 = lcsMemoization(x.slice(1), y, memo);
    const lcs2 = lcsMemoization(x, y.slice(1), memo);
    memo[key] = lcs1.length > lcs2.length ? lcs1 : lcs2;
    return memo[key];
};

const iterativeLCS = (x, y) => {
    let lcs = "";
    for (let i = 0, j = 0; i < x.length && j < y.length; i++) {
        if (x[i] === y[j]) {
            lcs += x[i];
            j++;
        }
    }
    return lcs;
};