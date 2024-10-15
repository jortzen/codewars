const grow = (x) => x.reduce((acc, num) => acc * num, 1);

const productOfArray = (x) => {
    let result = 1;

    x.forEach((num) => (result *= num));

    return result;
};

const multiplyInOrder = (x) => {
    let product = 1;

    for (let i = 0; i < x.length; i++) {
        product *= x[i];
    }
    
    return product;
};