const whatday = (num) => {
    switch (num) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";

        default:
            return "Wrong, please enter a number between 1 and 7";
    }
};

const whatdayFind = (num) => {
    const days = [
        { num: 1, day: "Sunday" },
        { num: 2, day: "Monday" },
        { num: 3, day: "Tuesday" },
        { num: 4, day: "Wednesday" },
        { num: 5, day: "Thursday" },
        { num: 6, day: "Friday" },
        { num: 7, day: "Saturday" },
    ];

    const found = days.find((dayObj) => dayObj.num === num);
    return found ? found.day : "Wrong, please enter a number between 1 and 7";
};

const whatdayTernary = (num) => num === 1 ? "Sunday"
    : num === 2 ? "Monday"
    : num === 3 ? "Tuesday"
    : num === 4 ? "Wednesday"
    : num === 5 ? "Thursday"
    : num === 6 ? "Friday"
    : num === 7 ? "Saturday"
    : "Wrong, please enter a number between 1 and 7";