const loopRemove = (arr) => {
    let result = [];

    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }

    return result;
};

const filterSecond = (arr) => arr.filter((_, index) => index % 2 === 0);

const sliceRemove = (arr) => {
    let result = [];
  
    for (let i = 0; i < arr.length; i += 2) {
        result = result.concat(arr.slice(i, i + 1));
    }
  
    return result;
};