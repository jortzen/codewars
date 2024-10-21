const nearestSq = (n) => Math.pow(Math.round(Math.sqrt(n)), 2);

const nearestPerfectSquare = (n) => {
    const root = Math.sqrt(n);
    
    return Number.isInteger(root) ? n : Math.pow(Math.round(root), 2);
};

const findNearestSquare = (n) => {
    let root = Math.floor(Math.sqrt(n));

    return Math.abs(n - Math.pow(root, 2)) < Math.abs(n - Math.pow(root + 1, 2))
        ? Math.pow(root, 2)
        : Math.pow(root + 1, 2);
};