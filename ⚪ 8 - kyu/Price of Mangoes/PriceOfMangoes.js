const mango = (quantity, price) => {
    return (quantity - Math.floor(quantity / 3)) * price;
};

const calculateMangoCost = (quantity, price) => {
    const freeMangoes = Math.floor(quantity / 3);
    return (quantity - freeMangoes) * price;
};

const mangoPrice = (quantity, price) =>
    quantity < 3
        ? quantity * price
        : (quantity - Math.floor(quantity / 3)) * price;