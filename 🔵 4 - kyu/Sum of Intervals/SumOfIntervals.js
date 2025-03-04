const sumIntervals = (intervals) => {
    if (!intervals.length) return 0;

    intervals.sort((a, b) => a[0] - b[0]);

    let total = 0,
        [start, end] = intervals[0];

    for (let [s, e] of intervals) {
        if (s > end) {
            total += end - start;
            [start, end] = [s, e];
        } else {
            end = Math.max(end, e);
        }
    }

    return total + (end - start);
};

const sumIntervalsOptimizedSweep = (intervals) => {
    let events = [];
    intervals.forEach(([s, e]) => {
        events.push([s, 1]);
        events.push([e, -1]);
    });

    events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let total = 0,
        active = 0,
        prev = null;

    for (let [pos, type] of events) {
        if (active > 0 && prev !== null) total += pos - prev;
        active += type;
        prev = pos;
    }

    return total;
};

const sumIntervalsFlatten = (intervals) => {
    let sorted = intervals.sort((a, b) => a[0] - b[0]);

    let merged = sorted.reduce((acc, [s, e]) => {
        if (!acc.length || acc[acc.length - 1][1] < s) acc.push([s, e]);
        else acc[acc.length - 1][1] = Math.max(acc[acc.length - 1][1], e);
        return acc;
    }, []);

    return merged.reduce((sum, [s, e]) => sum + (e - s), 0);
};