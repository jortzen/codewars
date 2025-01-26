const sumStr = (a, b) => (Number(a || 0) + Number(b || 0)).toString();

const sumStrConditional = (a, b) => {
    const num1 = a === "" ? 0 : +a;
    const num2 = b === "" ? 0 : +b;
    return (num1 + num2).toString();
};

const sumStrParseInt = (a, b) =>
    (parseInt(a || 0) + parseInt(b || 0)).toString();