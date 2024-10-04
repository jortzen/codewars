const noSpace = (x) => x.replace(/ /g, "");

const removeSpacesSplitJoin = (x) => x.split(" ").join("");

const removeSpacesFilter = (x) => {
    return [...x].filter((char) => char !== "   ").join("");
};