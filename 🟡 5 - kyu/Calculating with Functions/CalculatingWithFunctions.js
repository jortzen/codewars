const numbers = [
    (func) => (func ? func(0) : 0),
    (func) => (func ? func(1) : 1),
    (func) => (func ? func(2) : 2),
    (func) => (func ? func(3) : 3),
    (func) => (func ? func(4) : 4),
    (func) => (func ? func(5) : 5),
    (func) => (func ? func(6) : 6),
    (func) => (func ? func(7) : 7),
    (func) => (func ? func(8) : 8),
    (func) => (func ? func(9) : 9),
];

const [zero, one, two, three, four, five, six, seven, eight, nine] = numbers;

const plus = (num) => (x) => x + num;
const minus = (num) => (x) => x - num;
const times = (num) => (x) => x * num;
const dividedBy = (num) => (x) => Math.floor(x / num);
