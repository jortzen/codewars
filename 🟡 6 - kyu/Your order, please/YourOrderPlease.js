const order = (words) =>
    words
        .split(" ")
        .sort((a, b) => a.match(/\d/) - b.match(/\d/))
        .join(" ");

const orderFunctional = (words) =>
    words
        .split(" ")
        .sort((a, b) => +a.replace(/\D/g, "") - +b.replace(/\D/g, ""))
        .join(" ");

const orderFilter = (words) => {
    const wordArray = words.split(" ");
    
    return wordArray
        .map((_, i) =>
            wordArray.find((word) => word.includes((i + 1).toString()))
        )
        .filter(Boolean)
        .join(" ");
};