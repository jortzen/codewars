const hero = (bullets, dragons) => bullets >= dragons * 2;

const fightDragons = (bullets, dragons) => bullets / 2 >= dragons;

const surviveBattle = (bullets, dragons) => bullets - dragons * 2 >= 0;