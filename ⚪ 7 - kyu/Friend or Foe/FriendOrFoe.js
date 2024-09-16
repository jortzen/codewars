const friend = (friends) => {
    let names = [];

    for (let index = 0; index < friends.length; index++) {
        if (friends[index].length === 4) {
            names.push(friends[index]);
        }
    }

    return names;
};

const friendFilter = (friends) => {
    return friends.filter((name) => name.length === 4);
};

const friendMap = (friends) => {
    return friends.filter((name) => (name.length === 4 ? name : null));
};