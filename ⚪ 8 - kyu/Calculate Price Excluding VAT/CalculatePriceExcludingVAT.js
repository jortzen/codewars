const excludingVatPrice = (price) =>
    price === null ? -1 : +(price / 1.15).toFixed(2);

const calculateOriginalPrice = (price) =>
    price != null ? Math.round((price / 1.15) * 100) / 100 : -1;

const findBasePrice = (price) =>
    price ? +(price / 1.15).toFixed(2) : price === 0 ? 0 : -1;