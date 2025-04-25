const areaOrPerimeter = (l, w) => (l === w ? l * w : 2 * (l + w));

const calcShapeMetric = (length, width) => {
    if (length === width) {
        return length * width;
    } else {
        return 2 * (length + width);
    }
};