const duckDuckGoose = (players, goose) =>
    players[(goose - 1) % players.length].name;

const mapBasedGoosePicker = (players, goose) => {
    const indexMap = Array.from({ length: players.length }, (_, i) => i);
    const chosenIndex = indexMap[(goose - 1) % indexMap.length];

    return players[chosenIndex].name;
};

const recursiveGoosePick = (players, goose) => {
    if (goose <= players.length) return players[goose - 1].name;
    
    return recursiveGoosePick(players, goose - players.length);
};