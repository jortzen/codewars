const gooseFilter = (birds) => {
    const geese = new Set([
        "African",
        "Roman Tufted",
        "Toulouse",
        "Pilgrim",
        "Steinbacher",
    ]);
    return birds.filter((bird) => !geese.has(bird));
};

const gooseFilterReduce = (birds) => {
    const geese = [
        "African",
        "Roman Tufted",
        "Toulouse",
        "Pilgrim",
        "Steinbacher",
    ];
    return birds.reduce(
        (res, bird) => (geese.includes(bird) ? res : [...res, bird]),
        []
    );
};

const gooseFilterMap = (birds) => {
    const geese = [
        "African",
        "Roman Tufted",
        "Toulouse",
        "Pilgrim",
        "Steinbacher",
    ];
    return birds
        .map((bird) => (geese.includes(bird) ? null : bird))
        .filter(Boolean);
};