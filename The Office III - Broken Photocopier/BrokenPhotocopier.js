const broken = (x) => {
    return x
        .split("")
        .map((bit) => (bit === "1" ? "0" : "1"))
        .join("");
};

const photocopyReversal = (x) => x.replace(/./g, (bit) => bit ^ 1);

const reverseBits = (x) => x.replace(/./g, (bit) => (bit === "1" ? "0" : "1"));