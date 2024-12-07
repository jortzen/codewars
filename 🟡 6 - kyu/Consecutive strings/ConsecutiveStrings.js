const longestConsec = (strarr, k) => {
    if (strarr.length === 0 || k > strarr.length || k <= 0) return "";

    let maxStr = "";

    for (let i = 0; i <= strarr.length - k; i++) {
        const currentStr = strarr.slice(i, i + k).join("");
        if (currentStr.length > maxStr.length) maxStr = currentStr;
    }

    return maxStr;
};

const longestConsecReduce = (strarr, k) => {
    if (strarr.length === 0 || k > strarr.length || k <= 0) return "";

    return strarr
        .map((_, i) => strarr.slice(i, i + k).join(""))
        .reduce(
            (maxStr, currentStr) =>
                currentStr.length > maxStr.length ? currentStr : maxStr,
            ""
        );
};

const longestConsecFunctional = (strarr, k) => {
    if (strarr.length === 0 || k > strarr.length || k <= 0) return "";

    const consecutiveStrings = strarr.map((_, i) =>
        strarr.slice(i, i + k).join("")
    );

    return (
        consecutiveStrings.filter(
            (str) =>
                str.length ===
                Math.max(...consecutiveStrings.map((s) => s.length))
        )[0] || ""
    );
};