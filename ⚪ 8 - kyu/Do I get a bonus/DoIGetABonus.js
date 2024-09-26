const bonusTime = (salary, bonus) => {
    return bonus ? `£${salary * 10}` : `£${salary}`;
};

const calcBonusPay = (salary, bonus) => `£${bonus ? salary * 10 : salary}`;

const calculateEarnings = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;