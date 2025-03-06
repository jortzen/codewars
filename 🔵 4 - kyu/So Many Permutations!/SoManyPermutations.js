const permutations = (str) => {
    const permute = (s, prefix = "") => {
        if (s.length === 0) return [prefix];
        let result = [];
        for (let i = 0; i < s.length; i++) {
            result = result.concat(
                permute(s.slice(0, i) + s.slice(i + 1), prefix + s[i])
            );
        }
        return result;
    };
    return [...new Set(permute(str))];
};

const distinctPermutations = (str) => {
    const permute = (s) => {
        if (s.length <= 1) return [s];
        let result = [];
        for (let i = 0; i < s.length; i++) {
            const remaining = s.slice(0, i) + s.slice(i + 1);
            result = result.concat(
                permute(remaining).map((perm) => s[i] + perm)
            );
        }
        return result;
    };
    return [...new Set(permute(str))];
};

const getPermutations = (str) => {
    const permute = (s) => {
        if (s.length <= 1) return [s];
        let permutations = [];
        for (let i = 0; i < s.length; i++) {
            const remaining = s.slice(0, i) + s.slice(i + 1);
            permutations = [
                ...permutations,
                ...permute(remaining).map((p) => s[i] + p),
            ];
        }
        return permutations;
    };
    return [...new Set(permute(str))];
};