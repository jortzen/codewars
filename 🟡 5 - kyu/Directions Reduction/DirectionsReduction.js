const dirReduc = (arr) => {
    const opposites = {
        NORTH: "SOUTH",
        SOUTH: "NORTH",
        EAST: "WEST",
        WEST: "EAST",
    };

    const stack = [];

    arr.forEach((dir) => {
        if (stack.length && stack[stack.length - 1] === opposites[dir]) {
            stack.pop();
        } else {
            stack.push(dir);
        }
    });

    return stack;
};

const simplifyDirectionsRecursive = (arr) => {
    const opposites = {
        NORTH: "SOUTH",
        SOUTH: "NORTH",
        EAST: "WEST",
        WEST: "EAST",
    };

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] === opposites[arr[i]]) {
            return simplifyDirectionsRecursive([
                ...arr.slice(0, i),
                ...arr.slice(i + 2),
            ]);
        }
    }

    return arr;
};

const simplifyDirectionsReduce = (arr) => {
    const opposites = {
        NORTH: "SOUTH",
        SOUTH: "NORTH",
        EAST: "WEST",
        WEST: "EAST",
    };

    return arr.reduce((result, dir) => {
        if (result.length && result[result.length - 1] === opposites[dir]) {
            result.pop();
        } else {
            result.push(dir);
        }

        return result;
    }, []);
};

const simplifyDirectionsWhile = (arr) => {
    const opposites = {
        NORTH: "SOUTH",
        SOUTH: "NORTH",
        EAST: "WEST",
        WEST: "EAST",
    };

    let i = 0;

    while (i < arr.length - 1) {
        if (arr[i + 1] === opposites[arr[i]]) {
            arr.splice(i, 2);
            i = Math.max(0, i - 1); 
        } else {
            i++;
        }
    }

    return arr;
};