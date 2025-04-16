const postfixEvaluator = (expr) => {
    const stack = [];
    expr.split(" ").forEach((token) => {
        if (!isNaN(token)) stack.push(Number(token));
        else {
            const [b, a] = [stack.pop(), stack.pop()];
            stack.push(
                token === "+"
                    ? a + b
                    : token === "-"
                    ? a - b
                    : token === "*"
                    ? a * b
                    : Math.floor(a / b)
            );
        }
    });
    return stack[0];
};

const postfixCalc = (expr) =>
    expr.split(" ").reduce((stack, token) => {
        if (!isNaN(token)) return [...stack, Number(token)];
        const [b, a, ...rest] = stack.reverse();
        const result =
            token === "+"
                ? a + b
                : token === "-"
                ? a - b
                : token === "*"
                ? a * b
                : Math.floor(a / b);
        return [...rest.reverse(), result];
    }, [])[0];

const evaluatePostfixExpr = (expr) => {
    const tokens = expr.split(" ");
    const evaluate = (stack, [t, ...rest]) => {
        if (!t) return stack[0];
        if (!isNaN(t)) return evaluate([...stack, +t], rest);
        const [b, a, ...s] = stack.reverse();
        const result =
            t === "+"
                ? a + b
                : t === "-"
                ? a - b
                : t === "*"
                ? a * b
                : Math.floor(a / b);
        return evaluate([...s.reverse(), result], rest);
    };
    return evaluate([], tokens);
};