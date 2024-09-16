function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

function evenOrOddArray(number) {
    return ["Even", "Odd"][number % 2];
}