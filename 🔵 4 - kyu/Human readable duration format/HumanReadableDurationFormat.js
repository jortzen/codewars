const formatDuration = (seconds) => {
    if (seconds === 0) return "now";

    const timeUnits = {
        year: 31536000,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
    };
    const result = [];

    for (const [unit, value] of Object.entries(timeUnits)) {
        const quantity = Math.floor(seconds / value);
        if (quantity > 0) {
            result.push(`${quantity} ${unit}${quantity > 1 ? "s" : ""}`);
            seconds -= quantity * value;
        }
    }

    return result.length > 1
        ? result.slice(0, -1).join(", ") + " and " + result.slice(-1)
        : result[0];
};

const formatAsDuration = (seconds) => {
    if (seconds === 0) return "now";

    const units = [
        ["year", 31536000],
        ["day", 86400],
        ["hour", 3600],
        ["minute", 60],
        ["second", 1],
    ];

    const parts = units.reduce((acc, [unit, value]) => {
        const amount = Math.floor(seconds / value);
        if (amount > 0) acc.push(`${amount} ${unit}${amount > 1 ? "s" : ""}`);
        seconds %= value;
        return acc;
    }, []);

    return parts.length > 1
        ? `${parts.slice(0, -1).join(", ")} and ${parts.slice(-1)}`
        : parts[0];
};

const recursiveFormatDuration = (seconds) => {
    const timeUnits = {
        year: 31536000,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
    };
    
    const entries = Object.entries(timeUnits).reduce((acc, [unit, value]) => {
        const count = Math.floor(seconds / value);
        if (count) acc.push(`${count} ${unit}${count > 1 ? "s" : ""}`);
        seconds %= value;
        return acc;
    }, []);

    if (entries.length === 0) return "now";
    if (entries.length === 1) return entries[0];

    return `${entries.slice(0, -1).join(", ")} and ${
        entries[entries.length - 1]
    }`;
};