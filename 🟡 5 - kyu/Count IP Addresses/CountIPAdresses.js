const ipsCount = (start, end) => {
    const ipToNumber = (ip) =>
        ip
            .split(".")
            .map(Number)
            .reduce((acc, octet) => (acc << 8n) + BigInt(octet), 0n);

    return Number(ipToNumber(end) - ipToNumber(start));
};

const calculateIpsBetween = (start, end) => {
    const ipToNumber = (ip) =>
        ip.split(".").reduce((acc, octet) => acc * 256 + parseInt(octet), 0);

    return ipToNumber(end) - ipToNumber(start);
};

const ipRangeCount = (start, end) => {
    const ipToNumber = (ip) =>
        ip
            .split(".")
            .map(Number)
            .reduce((acc, octet) => acc * 256 + octet, 0);
            
    return ipToNumber(end) - ipToNumber(start);
};