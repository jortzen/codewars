const findPath = (start, end) => {
    const path = [];
    const visited = new Set();
    const getKey = (cell) => `${cell.x},${cell.y}`;

    const explorePath = (current) => {
        if (visited.has(getKey(current))) return false;

        visited.add(getKey(current));
        path.push(current);

        if (current === end) return true;

        const directions = ["north", "south", "east", "west"];
        for (let direction of directions) {
            const neighbor = current[direction];
            if (neighbor && !visited.has(getKey(neighbor))) {
                if (explorePath(neighbor)) return true;
            }
        }

        path.pop();
        return false;
    };

    explorePath(start);
    return path;
};

const trackPathInMaze = (start, end) => {
    const result = [];
    const visited = new Set();
    const generateKey = (cell) => `${cell.x},${cell.y}`;

    const searchPath = (current) => {
        if (visited.has(generateKey(current))) return false;

        visited.add(generateKey(current));
        result.push(current);

        if (current === end) return true;

        const directions = ["north", "south", "east", "west"];
        for (let direction of directions) {
            const neighbor = current[direction];
            if (neighbor && !visited.has(generateKey(neighbor))) {
                if (searchPath(neighbor)) return true;
            }
        }

        result.pop();
        return false;
    };

    searchPath(start);
    return result;
};

const findRoute = (start, end) => {
    const pathSequence = [];
    const visited = new Set();
    const makeKey = (cell) => `${cell.x},${cell.y}`;

    const dfsSearch = (current) => {
        if (visited.has(makeKey(current))) return false;

        visited.add(makeKey(current));
        pathSequence.push(current);

        if (current === end) return true;

        const directions = ["north", "south", "east", "west"];
        for (let direction of directions) {
            const neighbor = current[direction];
            if (neighbor && !visited.has(makeKey(neighbor))) {
                if (dfsSearch(neighbor)) return true;
            }
        }

        pathSequence.pop();
        return false;
    };

    dfsSearch(start);
    return pathSequence;
};