const combat = (health, damage) => Math.max(0, health - damage);

const updateHealth = (health, damage) =>
    health - damage < 0 ? 0 : health - damage;

const reduceHealthWithArray = (health, damage) =>
    [health, damage].reduce((h, d) => Math.max(0, h - d));