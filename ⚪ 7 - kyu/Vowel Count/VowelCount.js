const getCount = (str) =>
    str.split("").filter((char) => "aeiou".includes(char)).length;

const vowelCounter = (str) =>
    [...str].reduce(
        (count, char) => ("aeiou".includes(char) ? count + 1 : count),
        0
    );

const getVowelCount = (str) => (str.match(/[aeiou]/g) || []).length;

const findVowels = (str) => {
    let count = 0;

    for (let char of str) {
        if ("aeiou".includes(char)) count++;
    }
    
    return count;
};