function spinWords(string) {
    const words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            words[i] = words[i].split("").reverse().join("");
        }
    }

    return words.join(" ");
}

function spinWordsMap(string) {
    return string
        .split(" ")
        .map((word) =>
            word.length >= 5 ? word.split("").reverse().join("") : word
        )
        .join(" ");
}

function spinWordsRegex(string) {
    return string.replace(/\w{5,}/g, (word) =>
        word.split("").reverse().join("")
    );
}