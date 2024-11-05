const maskify = (cc) => cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);

const applyMask = (cc) =>
    cc.length > 4 ? "#".repeat(cc.length - 4) + cc.slice(-4) : cc;

const secureDisplay = (cc) => cc.replace(/.(?=.{4})/g, "#");