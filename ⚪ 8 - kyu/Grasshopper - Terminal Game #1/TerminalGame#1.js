class Hero {
    constructor(name) {
        this.name = name || "Hero";
        this.position = "00";
        this.health = 100;
        this.damage = 5;
        this.experience = 0;
    }
}

function createHero(name = `Hero`) {
    return {
        name: name,
        experience: 0,
        health: 100,
        position: `00`,
        damage: 5,
    };
}