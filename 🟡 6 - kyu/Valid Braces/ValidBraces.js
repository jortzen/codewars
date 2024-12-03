const validBraces = (braces) => {
    const stack = [];
    const pairs = { ")": "(", "]": "[", "}": "{" };

    for (const char of braces) {
        if (["(", "[", "{"].includes(char)) {
            stack.push(char);
        } else if (stack.pop() !== pairs[char]) {
            return false;
        }
    }

    return stack.length === 0;
};

const isValidBracesRecursive = (braces) => {
    const reduced = braces.replace(/\(\)|\[]|{}/g, "");

    return reduced === braces
        ? braces.length === 0
        : isValidBracesRecursive(reduced);
};

const isValidBracesReduce = (braces) => {
    const pairs = { ")": "(", "]": "[", "}": "{" };

    return (
        braces.split("").reduce((stack, char) => {
            if (["(", "[", "{"].includes(char)) {
                stack.push(char);
            } else if (stack.pop() !== pairs[char]) {
                stack.push("invalid");
            }
            return stack;
        }, []).length === 0
    );
};