const bouncingBall = (h, bounce, window) => {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

    let count = 0;
    while (h > window) {
        count++;
        h *= bounce;
        if (h > window) count++;
    }

    return count;
};

const bouncingBallMath = (h, bounce, window) => {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

    let visibleCount = 1;
    let currentHeight = h * bounce;

    while (currentHeight > window) {
        visibleCount += 2;
        currentHeight *= bounce;
    }

    return visibleCount;
};

const bouncingBallRecursive = (h, bounce, window, count = 0) => {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h)
        return count === 0 ? -1 : count;

    return h > window
        ? bouncingBallRecursive(
              h * bounce,
              bounce,
              window,
              count + (h > window ? (count ? 2 : 1) : 0)
          )
        : count;
};