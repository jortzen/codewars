Array.prototype.sameStructureAs = function (other) {
    if (!Array.isArray(other) || this.length !== other.length) return false;

    return this.every(
        (el, i) =>
            Array.isArray(el) === Array.isArray(other[i]) &&
            (!Array.isArray(el) || el.sameStructureAs(other[i]))
    );
};

Array.prototype.checkStructure = function (other) {
    if (!Array.isArray(other) || this.length !== other.length) return false;

    for (let i = 0; i < this.length; i++) {
        const isArr1 = Array.isArray(this[i]);
        const isArr2 = Array.isArray(other[i]);

        if (isArr1 !== isArr2) return false;
        if (isArr1 && !this[i].checkStructure(other[i])) return false;
    }

    return true;
};

Array.prototype.matchStructure = function (other) {
    const getStructure = (arr) =>
        Array.isArray(arr) ? arr.map(getStructure) : null;
    return (
        JSON.stringify(getStructure(this)) ===
        JSON.stringify(getStructure(other))
    );
};