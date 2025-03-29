const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) =>
    enteredCode === correctCode &&
    new Date(currentDate) <= new Date(expirationDate);

const validateCoupon = (
    enteredCode,
    correctCode,
    currentDate,
    expirationDate
) =>
    enteredCode === correctCode &&
    Date.parse(currentDate) <= Date.parse(expirationDate);