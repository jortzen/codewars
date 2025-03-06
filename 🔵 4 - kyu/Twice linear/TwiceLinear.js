const dblLinear = (n) => {
    let seq = [1];
    let i = 0,
        j = 0;

    while (seq.length <= n) {
        let nextY = 2 * seq[i] + 1;
        let nextZ = 3 * seq[j] + 1;

        if (nextY < nextZ) {
            seq.push(nextY);
            i++;
        } else if (nextZ < nextY) {
            seq.push(nextZ);
            j++;
        } else {
            seq.push(nextY);
            i++;
            j++;
        }
    }

    return seq[n];
};

const dblLinearArrays = (n) => {
    const seq = [1];
    const arrY = [2 * seq[0] + 1]; 
    const arrZ = [3 * seq[0] + 1]; 
    let i = 0,
        j = 0;

    while (seq.length <= n) {
        let nextY = arrY[i];
        let nextZ = arrZ[j];

        if (nextY < nextZ) {
            seq.push(nextY);
            i++;
            arrY.push(2 * seq[i] + 1);
        } else if (nextZ < nextY) {
            seq.push(nextZ);
            j++;
            arrZ.push(3 * seq[j] + 1);
        } else {
            seq.push(nextY);
            i++;
            j++;
            arrY.push(2 * seq[i] + 1);
            arrZ.push(3 * seq[j] + 1);
        }
    }

    return seq[n];
};