const parseMolecule = (formula) => {
    const parse = (str) => {
        const regex = /([A-Z][a-z]*)(\d*)|([\(\[\{])|([\)\]\}](\d*))/g;
        const stack = [{}];
        let match;

        while ((match = regex.exec(str))) {
            if (match[1]) {
                const element = match[1];
                const count = parseInt(match[2] || "1");
                stack[stack.length - 1][element] =
                    (stack[stack.length - 1][element] || 0) + count;
            } else if (match[3]) {
                stack.push({});
            } else if (match[4]) {
                const top = stack.pop();
                const multiplier = parseInt(match[5] || "1");
                for (const [el, cnt] of Object.entries(top)) {
                    stack[stack.length - 1][el] =
                        (stack[stack.length - 1][el] || 0) + cnt * multiplier;
                }
            }
        }

        return stack[0];
    };

    return parse(formula);
};

const parseChemicalFormula = (formula, pos = 0, layers = [{}]) => {
    const isFinished = () => pos >= formula.length;
    const currentChar = () => (isFinished() ? "" : formula[pos]);
    const nextChar = () => (isFinished() ? "" : formula[pos++]);
    const isUpperCase = (c) => c >= "A" && c <= "Z";
    const isLowerCase = (c) => c >= "a" && c <= "z";
    const isDigit = (c) => c >= "0" && c <= "9";
    const isOpeningBracket = (c) => "[({".includes(c);
    const isClosingBracket = (c) => "])}".includes(c);

    const currentLayer = () => layers[layers.length - 1];
    const pushLayer = () => layers.push({});
    const mergeLayer = (multiplier) => {
        const popped = layers.pop();
        const active = currentLayer();
        for (const element in popped) {
            active[element] =
                (active[element] || 0) + multiplier * popped[element];
        }
    };

    const readNumber = () => {
        let num = "";
        while (isDigit(currentChar())) num += nextChar();
        return num.length ? +num : 1;
    };

    const readAtom = () => {
        let symbol = nextChar();
        while (isLowerCase(currentChar())) symbol += nextChar();
        currentLayer()[symbol] = (currentLayer()[symbol] || 0) + 1;
        return symbol;
    };

    const processMolecule = () => {
        while (!isFinished() && !isClosingBracket(currentChar())) {
            pushLayer();
            if (isUpperCase(currentChar())) {
                readAtom();
            } else if (isOpeningBracket(currentChar())) {
                nextChar();
                processMolecule();
                nextChar();
            }
            mergeLayer(readNumber());
        }
    };

    processMolecule();
    return layers.pop();
};