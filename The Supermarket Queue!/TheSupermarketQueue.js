const queueTime = (customers, n) => {
    const tills = Array(n).fill(0);

    customers.forEach((customer) => {
        const leastBusyTill = tills.indexOf(Math.min(...tills));
        tills[leastBusyTill] += customer;
    });

    return Math.max(...tills);
};

const totalCheckoutTime = (customers, n) => {
    const tills = Array(n).fill(0);

    customers.forEach((customer) => {
        tills.sort((a, b) => a - b);
        tills[0] += customer;
    });

    return Math.max(...tills);
};

const checkoutDuration = (customers, n) => {
    return customers
        .reduce((tills, customer) => {
            tills[tills.indexOf(Math.min(...tills))] += customer;
            return tills;
        }, Array(n).fill(0))
        .reduce((max, time) => Math.max(max, time), 0);
};