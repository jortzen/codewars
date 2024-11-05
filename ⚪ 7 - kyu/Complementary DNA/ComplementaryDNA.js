const dnaStrand = (dna) =>
    dna.replace(
        /./g,
        (char) =>
            ({
                A: "T",
                T: "A",
                C: "G",
                G: "C",
            }[char])
    );

const getComplement = (dna) => {
    let complement = "";

    for (let char of dna) {
        complement +=
            char === "A" ? "T" : char === "T" ? "A" : char === "C" ? "G" : "C";
    }

    return complement;
};

const complementStrand = (dna) => {
    const pairs = { A: "T", T: "A", C: "G", G: "C" };
    
    return dna
        .split("")
        .map((char) => pairs[char])
        .join("");
};
