const findEvenIndex = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const leftSum = arr.slice(0, i).reduce((acc, val) => acc + val, 0);
        const rightSum = arr.slice(i + 1).reduce((acc, val) => acc + val, 0);
        if (leftSum === rightSum) return i;
    }

    return -1;
};

const findEvenIndexPrefix = (arr) => {
    let totalSum = arr.reduce((acc, val) => acc + val, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (leftSum === totalSum - leftSum - arr[i]) return i;
        leftSum += arr[i];
    }

    return -1;
};

const findEvenIndexFunctional = (arr) =>
    arr.findIndex(
        (_, i) =>
            arr.slice(0, i).reduce((acc, val) => acc + val, 0) ===
            arr.slice(i + 1).reduce((acc, val) => acc + val, 0)
    );
