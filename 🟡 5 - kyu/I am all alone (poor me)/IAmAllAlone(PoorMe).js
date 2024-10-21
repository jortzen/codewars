const allAlone = (house) => {
    let rows = house.length,
        cols = house[0].length,
        queue = [],
        visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (house[i][j] === "X") queue.push([i, j]);
        }
    }

    while (queue.length > 0) {
        let [r, c] = queue.shift();
        if (house[r][c] === "o") return false;
        if (visited[r][c] || house[r][c] === "#") continue;
        visited[r][c] = true;
        for (let [dr, dc] of [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ]) {
            let newR = r + dr,
                newC = c + dc;
            if (
                newR >= 0 &&
                newR < rows &&
                newC >= 0 &&
                newC < cols &&
                !visited[newR][newC]
            ) {
                queue.push([newR, newC]);
            }
        }
    }
    return true;
};

const allAloneDFS = (house) => {
    let rows = house.length,
        cols = house[0].length;
    let visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    const dfs = (r, c) => {
        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            visited[r][c] ||
            house[r][c] === "#"
        )
            return true;
        if (house[r][c] === "o") return false;
        visited[r][c] = true;
        return dfs(r + 1, c) && dfs(r - 1, c) && dfs(r, c + 1) && dfs(r, c - 1);
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (house[i][j] === "X") return dfs(i, j);
        }
    }
};

const allAloneFloodFill = (house) => {
    let rows = house.length,
        cols = house[0].length;
    let visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    const dfs = (r, c) => {
        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            visited[r][c] ||
            house[r][c] === "#"
        )
            return;
        if (house[r][c] === "o") return false;

        visited[r][c] = true;

        if (
            dfs(r + 1, c) === false ||
            dfs(r - 1, c) === false ||
            dfs(r, c + 1) === false ||
            dfs(r, c - 1) === false
        )
            return false;

        return true;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (house[i][j] === "X") return dfs(i, j);
        }
    }

    return true;
};