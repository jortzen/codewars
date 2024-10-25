const sudoku = (puzzle) => {
    const isValid = (puzzle, row, col, num) => {
        for (let i = 0; i < 9; i++) {
            if (puzzle[row][i] === num) return false;
        }

        for (let i = 0; i < 9; i++) {
            if (puzzle[i][col] === num) return false;
        }

        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (puzzle[startRow + i][startCol + j] === num) return false;
            }
        }
        return true;
    };

    const solve = (puzzle) => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (puzzle[row][col] === 0) {
                    for (let num = 1; num <= 9; num++) {
                        if (isValid(puzzle, row, col, num)) {
                            puzzle[row][col] = num;
                            if (solve(puzzle)) return true;
                            puzzle[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };

    solve(puzzle);
    return puzzle;
};

const sudokuB = (puzzle) => {
    const isValid = (puzzle, row, col, num) => {
        for (let i = 0; i < 9; i++) {
            if (puzzle[row][i] === num || puzzle[i][col] === num) return false;
        }
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (puzzle[startRow + i][startCol + j] === num) return false;
            }
        }
        return true;
    };

    const findEmpty = (puzzle) => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (puzzle[row][col] === 0) return [row, col];
            }
        }
        return null;
    };

    const solve = (puzzle) => {
        const empty = findEmpty(puzzle);
        if (!empty) return true;
        const [row, col] = empty;

        for (let num = 1; num <= 9; num++) {
            if (isValid(puzzle, row, col, num)) {
                puzzle[row][col] = num;
                if (solve(puzzle)) return true;
                puzzle[row][col] = 0;
            }
        }
        return false;
    };

    solve(puzzle);
    return puzzle;
};

const sudokuC = (puzzle) => {
    const rowHas = (row, num) => puzzle[row].includes(num);
    const colHas = (col, num) => puzzle.some((row) => row[col] === num);
    
    const gridHas = (row, col, num) => {
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (puzzle[startRow + i][startCol + j] === num) return true;
            }
        }
        return false;
    };

    const solve = () => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (puzzle[row][col] === 0) {
                    for (let num = 1; num <= 9; num++) {
                        if (
                            !rowHas(row, num) &&
                            !colHas(col, num) &&
                            !gridHas(row, col, num)
                        ) {
                            puzzle[row][col] = num;
                            if (solve()) return true;
                            puzzle[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };

    solve();
    return puzzle;
};
