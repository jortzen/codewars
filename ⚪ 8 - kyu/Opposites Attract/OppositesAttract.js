const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2;

const checkLoveSumEven = (flower1, flower2) => (flower1 + flower2) % 2 === 1;

const isInLoveBasic = (flower1, flower2) => {
    return (
        (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
        (flower1 % 2 !== 0 && flower2 % 2 === 0)
    );
};