const DNAtoRNA = (dna) => {
    return dna.replace(/T/g, "U");
};

const translateDNAToRNA = (dna) => {
    let rna = "";

    for (let i = 0; i < dna.length; i++) {
        rna += dna[i] === "T" ? "U" : dna[i];
    }

    return rna;
};

const dnaToRnaMapper = (dna) => {
    const mapping = { G: "G", C: "C", A: "A", T: "U" };
    
    return Array.from(dna)
        .map((base) => mapping[base])
        .join("");
};