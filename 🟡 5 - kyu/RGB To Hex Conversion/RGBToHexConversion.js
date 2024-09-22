const rgb = (r, g, b) => {
    const clamp = (value) => Math.min(255, Math.max(0, value));

    const toHex = (value) =>
        ("0" + clamp(value).toString(16).toUpperCase()).slice(-2);

    return toHex(r) + toHex(g) + toHex(b);
};

const convertRgbToHex = (r, g, b) => {
    const clamp = (value) => Math.min(255, Math.max(0, value));

    return [r, g, b]
        .map(clamp)
        .map((value) => ("0" + value.toString(16).toUpperCase()).slice(-2))
        .join("");
};

const rgbToHexString = (r, g, b) => {
    const clamp = (value) => Math.min(255, Math.max(0, value));
    
    return [r, g, b].reduce((hex, value) => {
        const clamped = clamp(value);
        return hex + ("0" + clamped.toString(16).toUpperCase()).slice(-2);
    }, "");
};