const isToday = (dateObj) => {
    const today = new Date();

    return (
        dateObj.getFullYear() === today.getFullYear() &&
        dateObj.getMonth() === today.getMonth() &&
        dateObj.getDate() === today.getDate()
    );
};

const isTodayDate = (date) => {
    return new Date().toDateString() === date.toDateString();
};