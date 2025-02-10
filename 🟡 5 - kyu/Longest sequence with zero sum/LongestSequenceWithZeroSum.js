const maxZeroSequence = (arr) => {
    let sum = 0,
        maxLen = 0,
        startIdx = -1;
    let sumIndexMap = new Map();
    sumIndexMap.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sumIndexMap.has(sum)) {
            let prevIdx = sumIndexMap.get(sum);
            let len = i - prevIdx;
            if (len > maxLen || (len === maxLen && prevIdx > startIdx)) {
                maxLen = len;
                startIdx = prevIdx;
            }
        } else {
            sumIndexMap.set(sum, i);
        }
    }

    return maxLen === 0 ? [] : arr.slice(startIdx + 1, startIdx + 1 + maxLen);
};

const maxZeroSequenceBruteForce = (arr) => {
    let maxLen = 0,
        startIdx = -1;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === 0) {
                let len = j - i + 1;
                if (len > maxLen || (len === maxLen && i > startIdx)) {
                    maxLen = len;
                    startIdx = i;
                }
            }
        }
    }

    return maxLen === 0 ? [] : arr.slice(startIdx, startIdx + maxLen);
};

const maxZeroSequenceTwoPointer = (arr) => {
    let sum = 0,
        left = 0,
        maxLen = 0,
        startIdx = -1;
    let sumPositions = new Map();
    sumPositions.set(0, -1); 

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];

        if (sumPositions.has(sum)) {
            let newLen = right - sumPositions.get(sum);
            if (
                newLen > maxLen ||
                (newLen === maxLen && sumPositions.get(sum) > startIdx)
            ) {
                maxLen = newLen;
                startIdx = sumPositions.get(sum);
            }
        } else {
            sumPositions.set(sum, right);
        }
    }

    return maxLen === 0 ? [] : arr.slice(startIdx + 1, startIdx + 1 + maxLen);
};
