const abbrevName = (name) => {
    return name
        .split(" ")
        .map((word) => word[0].toUpperCase())
        .join(".");
};

const firstLettersAbbrev = (name) => {
    return name.match(/\b\w/g).join(".").toUpperCase();
};

const getInitials = (name) => {
    const [first, last] = name.split(" ");
    
    return `${first[0].toUpperCase()}.${last[0].toUpperCase()}`;
};