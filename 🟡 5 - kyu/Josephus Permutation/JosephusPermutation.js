const josephus = (items, k) => {
    let result = [];
    let index = 0;

    while (items.length) {
        index = (index + k - 1) % items.length;
        result.push(...items.splice(index, 1));
    }

    return result;
};

const josephusSequence = (items, k, index = 0, result = []) =>
    items.length
        ? josephusSequence(
              items.filter((_, i) => i !== (index + k - 1) % items.length),
              k,
              (index + k - 1) % items.length,
              [...result, items[(index + k - 1) % items.length]]
          )
        : result;

const josephusCycle = (items, k) => {
    let result = [];
    let index = 0;
    let list = [...items];

    for (let i = items.length; i > 0; i--) {
        index = (index + k - 1) % i;
        result.push(...list.splice(index, 1));
    }

    return result;
};