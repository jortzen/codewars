const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    return [];
};

const twoSumMap = (nums, target) => {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        numMap.set(num, i);
    }

    return [];
};