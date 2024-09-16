const disemvowel = (str) => str.replace(/[aeiou]/gi, "");

const fastDisemvowel = (str) => str.replace(/[aeiouAEIOU]/g, "");

const vowelRemover = (str) =>
    str
        .split("")
        .filter((char) => !/[aeiou]/i.test(char))
        .join("");