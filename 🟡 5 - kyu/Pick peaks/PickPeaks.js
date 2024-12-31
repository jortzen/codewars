const pickPeaks = (arr) => {
    const result = { pos: [], peaks: [] };
    let potentialPeakIndex = -1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            potentialPeakIndex = i;
        } else if (arr[i] < arr[i - 1] && potentialPeakIndex !== -1) {
            result.pos.push(potentialPeakIndex);
            result.peaks.push(arr[potentialPeakIndex]);
            potentialPeakIndex = -1;
        }
    }

    return result;
};

const findPeaksWithReduce = (arr) => {
    return arr.reduce(
        (result, current, i) => {
            if (arr[i - 1] < current && arr[i + 1] < current) {
                result.pos.push(i);
                result.peaks.push(current);
            } else if (arr[i - 1] < current && arr[i + 1] === current) {
                let j = i + 1;
                while (arr[j] === current) j++;
                if (arr[j] < current) {
                    result.pos.push(i);
                    result.peaks.push(current);
                }
            }
            return result;
        },
        { pos: [], peaks: [] }
    );
};

const findPeaksWithHelper = (arr) => {
    const result = { pos: [], peaks: [] };

    const isPlateauPeak = (start, value) => {
        for (let i = start + 1; i < arr.length; i++) {
            if (arr[i] > value) return false;
            if (arr[i] < value) return true;
        }
        return false;
    };

    for (let i = 1; i < arr.length - 1; i++) {
        if (
            arr[i] > arr[i - 1] &&
            (arr[i] > arr[i + 1] || isPlateauPeak(i, arr[i]))
        ) {
            result.pos.push(i);
            result.peaks.push(arr[i]);
        }
    }

    return result;
};