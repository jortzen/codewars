const xor = (a, b) => {
    return a !== b;
};

const exclusiveOrLogical = (a, b) => (a || b) && !(a && b);

const exclusiveOrSum = (a, b) => a + b === 1;

const exclusiveOrTernary = (a, b) => a ? !b : b;

const exclusiveOrBitwise = (a, b) => Boolean(a ^ b);