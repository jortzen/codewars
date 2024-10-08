String.prototype.toAlternatingCase = function () {
    return this.split("")
        .map((char) =>
            char === char.toUpperCase()
                ? char.toLowerCase()
                : char.toUpperCase()
        )
        .join("");
};

String.prototype.toAlternatingCase = function () {
    return this.split("")
        .map((char) =>
            char.match(/[a-zA-Z]/)
                ? char === char.toUpperCase()
                    ? char.toLowerCase()
                    : char.toUpperCase()
                : char
        )
        .join("");
};

String.prototype.toAlternatingCase = function () {
    return [...this]
        .map((char) =>
            char === char.toUpperCase()
                ? char.toLowerCase()
                : char.toUpperCase()
        )
        .join("");
};

String.prototype.toAlternatingCase = function () {
    return Array.from(this).reduce((result, char) => {
        return (
            result +
            (char === char.toUpperCase()
                ? char.toLowerCase()
                : char.toUpperCase())
        );
    }, "");
};