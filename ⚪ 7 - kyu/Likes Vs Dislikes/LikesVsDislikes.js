const toggleLikeOrDislike = (buttons) => {
    let state = "Nothing";

    for (let button of buttons) {
        if (button === state) {
            state = "Nothing";
        } else {
            state = button;
        }
    }
    return state;
};

const likeOrDislike = (buttons) => {
    return buttons.reduce(
        (state, button) => (state === button ? "Nothing" : button),
        "Nothing"
    );
};

const calculateButtonState = (buttons) => {
    let result = "Nothing";

    buttons.forEach((button) => {
        result = result === button ? "Nothing" : button;
    });
    
    return result;
};