const whoIsWinner = (piecesPositionList) => {
    const rows = 6,
        cols = 7;
    let board = Array.from({ length: rows }, () => Array(cols).fill(null));

    const colToIndex = (col) => col.charCodeAt(0) - 65;

    const checkDirections = (r, c, color) => {
        const directions = [
            [
                [0, 1],
                [0, -1],
            ],
            [
                [1, 0],
                [-1, 0],
            ],
            [
                [1, 1],
                [-1, -1],
            ],
            [
                [1, -1],
                [-1, 1],
            ],
        ];
        return directions.some((direction) => {
            let count = 1;
            direction.forEach(([dr, dc]) => {
                let nr = r + dr,
                    nc = c + dc;
                while (
                    nr >= 0 &&
                    nr < rows &&
                    nc >= 0 &&
                    nc < cols &&
                    board[nr][nc] === color
                ) {
                    count++;
                    nr += dr;
                    nc += dc;
                }
            });
            return count >= 4;
        });
    };

    for (let move of piecesPositionList) {
        const [col, color] = move.split("_");
        const colIndex = colToIndex(col);
        let rowIndex = -1;
        for (let r = rows - 1; r >= 0; r--) {
            if (board[r][colIndex] === null) {
                rowIndex = r;
                break;
            }
        }
        if (rowIndex === -1) continue;

        board[rowIndex][colIndex] = color;

        if (checkDirections(rowIndex, colIndex, color)) {
            return color.charAt(0).toUpperCase() + color.slice(1);
        }
    }
    return "Draw";
};

const connectFourResult = (piecesPositionList) => {
    const rows = 6,
        cols = 7;
    let board = Array.from({ length: rows }, () => Array(cols).fill(null));

    const colToIndex = (col) => col.charCodeAt(0) - 65;

    const checkDirection = (r, c, color, dr, dc) => {
        let count = 1;
        for (let i = 1; i <= 3; i++) {
            const nr = r + i * dr,
                nc = c + i * dc;
            if (
                nr >= 0 &&
                nr < rows &&
                nc >= 0 &&
                nc < cols &&
                board[nr][nc] === color
            ) {
                count++;
            } else break;
        }
        return count;
    };

    for (let move of piecesPositionList) {
        const [col, color] = move.split("_");
        const colIndex = colToIndex(col);

        let rowIndex = -1;
        for (let r = rows - 1; r >= 0; r--) {
            if (board[r][colIndex] === null) {
                rowIndex = r;
                break;
            }
        }

        if (rowIndex === -1) continue;

        board[rowIndex][colIndex] = color;

        const directions = [
            [0, 1],
            [1, 0],
            [1, 1],
            [1, -1],
        ];

        for (let [dr, dc] of directions) {
            if (
                checkDirection(rowIndex, colIndex, color, dr, dc) +
                    checkDirection(rowIndex, colIndex, color, -dr, -dc) -
                    1 >=
                4
            ) {
                return color.charAt(0).toUpperCase() + color.slice(1);
            }
        }
    }

    return "Draw";
};