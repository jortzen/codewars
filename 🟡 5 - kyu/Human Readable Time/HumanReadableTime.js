const humanReadable = (seconds) => {
    const hours = Math.floor(seconds / 3600)
        .toString()
        .padStart(2, "0");
    const minutes = Math.floor((seconds % 3600) / 60)
        .toString()
        .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");

    return `${hours}:${minutes}:${secs}`;
};

const convertToReadableTime = (seconds) => {
    const [hours, minutes, secs] = [
        Math.floor(seconds / 3600),
        Math.floor((seconds % 3600) / 60),
        seconds % 60,
    ].map((unit) => unit.toString().padStart(2, "0"));

    return `${hours}:${minutes}:${secs}`;
};

const timeToHumanReadable = (seconds) => {
    const hrs = ("0" + Math.floor(seconds / 3600)).slice(-2);
    const mins = ("0" + Math.floor((seconds % 3600) / 60)).slice(-2);
    const secs = ("0" + (seconds % 60)).slice(-2);
    
    return `${hrs}:${mins}:${secs}`;
};
