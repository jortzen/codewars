const countSheeps = (sheep) => sheep.filter((s) => s === true).length;

const sheepCounter = (sheep) =>
    sheep.reduce((count, s) => count + (s === true ? 1 : 0), 0);

const sheepTally = (sheep) => sheep.filter(Boolean).length;