const longestSlideDown = (pyramid) => {
    for (let i = pyramid.length - 2; i >= 0; i--) {
        for (let j = 0; j < pyramid[i].length; j++) {
            pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
        }
    }
    return pyramid[0][0];
};

const maxPyramidPath = (pyramid) =>
    pyramid.reduceRight((prev, curr) =>
        curr.map((val, i) => val + Math.max(prev[i], prev[i + 1]))
    )[0];