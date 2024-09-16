const howMuchILoveYou = (nbPetals) => {
    return [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all",
    ][(nbPetals - 1) % 6];
};

const findLovePhrase = (nbPetals) => {
    const phrases = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all",
    ];
    return phrases[(nbPetals - 1) % phrases.length];
};

const choosePhrase = (nbPetals) => {
    switch ((nbPetals - 1) % 6) {
        case 0:
            return "I love you";
        case 1:
            return "a little";
        case 2:
            return "a lot";
        case 3:
            return "passionately";
        case 4:
            return "madly";
        case 5:
            return "not at all";
    }
};