const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
    fuelLeft * mpg >= distanceToPump;

const enoughFuel = (distanceToPump, mpg, fuelLeft) =>
    distanceToPump <= fuelLeft * mpg;

const checkFuelStatus = (distanceToPump, mpg, fuelLeft) =>
    fuelLeft * mpg >= distanceToPump ? true : false;

const willMakeIt = (distanceToPump, mpg, fuelLeft) =>
    fuelLeft >= distanceToPump / mpg;

const isJourneyPossible = (distanceToPump, mpg, fuelLeft) =>
    distanceToPump / mpg <= fuelLeft;