const domainName = (url) => {
    const cleaned = url.replace(/^(https?:\/\/)?(www\.)?/, "");
    const domain = cleaned.split(".")[0];
    return domain;
};

const extractDomain = (url) => {
    return url.replace(/^(https?:\/\/)?(www\.)?/, "").split(".")[0];
};

const getDomain = (url) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?([^\/\.:]+)/);
    return match ? match[1] : "";
};