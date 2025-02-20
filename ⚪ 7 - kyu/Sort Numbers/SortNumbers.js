const solution = (nums) => (nums ? nums.sort((a, b) => a - b) : []);

const solutionSpread = (nums) => [...(nums || [])].sort((a, b) => a - b);

const solutionBubble = (nums) => {
    if (!nums) return [];
    let arr = [...nums];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }

    return arr;
};

const solutionQuick = (nums) => {
    if (!nums || nums.length <= 1) return nums || [];
    const [pivot, ...rest] = nums;

    return [
        ...solutionQuick(rest.filter((x) => x < pivot)),
        pivot,
        ...solutionQuick(rest.filter((x) => x >= pivot)),
    ];
};