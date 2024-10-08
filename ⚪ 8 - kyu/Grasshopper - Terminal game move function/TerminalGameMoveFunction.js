const move = (position, roll) => position + roll * 2;

const moveInGame = (position, roll) => ((p, r) => p + r * 2)(position, roll);

const movePlayer = (position, roll) =>
    roll >= 1 && roll <= 6 ? position + roll * 2 : position;