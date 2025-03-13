const determinant = (m) => {
    if (m.length === 1) return m[0][0];
    if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

    return m[0].reduce((det, val, col) => {
        const minor = m.slice(1).map((row) => row.filter((_, c) => c !== col));
        return det + val * determinant(minor) * (col % 2 === 0 ? 1 : -1);
    }, 0);
};

const determinantV2 = (m) => {
    const getMinor = (matrix, row, col) =>
        matrix
            .filter((_, r) => r !== row)
            .map((row) => row.filter((_, c) => c !== col));

    const detCalc = (matrix) => {
        if (matrix.length === 1) return matrix[0][0];
        if (matrix.length === 2)
            return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

        return matrix[0].reduce(
            (det, val, col) =>
                det +
                val *
                    detCalc(getMinor(matrix, 0, col)) *
                    (col % 2 === 0 ? 1 : -1),
            0
        );
    };

    return detCalc(m);
};