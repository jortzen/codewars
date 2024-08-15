const boolToWord = (bool) => {
    return bool === true ? "Yes" : "No";
};

const boolToStr = (bool) => ({ true: "Yes", false: "No" }[bool]);

const boolToUniqueWord = (bool) =>
    String(bool === true)
        .replace("true", "Yes")
        .replace("false", "No");