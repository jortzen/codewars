const highAndLow = (numbers) => {
    numbers = numbers.split(" ");
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
};

const highAndLowOptimized = (numbers) => {
    const nums = numbers.split(" ").map(Number);
    let min = nums[0];
    let max = nums[0];

    for (let index = 1; index < nums.length; index++) {
        if (nums[index] > max) max = nums[index];
        if (nums[index] < min) min = nums[index];
    }

    return `${max} ${min}`;
};

const highAndLowForEach = (numbers) => {
    const nums = numbers.split(" ").map(Number);

    let min = nums[0];
    let max = nums[0];

    nums.forEach((num) => {
        if (num > max) max = num;
        if (num < min) min = num;
    });

    return `${max} ${min}`;
};