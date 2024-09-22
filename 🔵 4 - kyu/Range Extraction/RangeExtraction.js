const solution = (list) => {
    let result = [];
    let rangeStart = list[0];

    list.forEach((num, i) => {
        if (i === list.length - 1 || num + 1 !== list[i + 1]) {
            if (rangeStart === num) {
                result.push(`${num}`);
            } else if (num - rangeStart >= 2) {
                result.push(`${rangeStart}-${num}`);
            } else {
                result.push(rangeStart, num);
            }
            rangeStart = list[i + 1];
        }
    });

    return result.join(",");
};

const formatRanges = (list) => {
    return list
        .reduce((acc, num, i, arr) => {
            if (i === 0 || num !== arr[i - 1] + 1) acc.push([num]);
            else if (num === arr[i - 1] + 1) acc[acc.length - 1].push(num);
            return acc;
        }, [])
        .map((group) =>
            group.length > 2
                ? `${group[0]}-${group[group.length - 1]}`
                : group.join(",")
        )
        .join(",");
};

const formatToRangeString = (list) => {
    return list
        .reduce((acc, num, i, arr) => {
            if (i === 0 || num !== arr[i - 1] + 1) {
                acc.push([]);
            }
            acc[acc.length - 1].push(num);
            return acc;
        }, [])
        .map((range) => {
            return range.length > 2
                ? `${range[0]}-${range[range.length - 1]}`
                : range.join(",");
        })
        .join(",");
};