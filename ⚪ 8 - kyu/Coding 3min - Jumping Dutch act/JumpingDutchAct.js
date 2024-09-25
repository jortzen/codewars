const sc = (floor) =>
    floor <= 1
        ? ""
        : [...Array(floor - 1)].map(() => "Aa~ ").join("") +
          "Pa!" +
          (floor <= 6 ? " Aa!" : "");

const screamForHelp = (floor) => {
    if (floor <= 1) return "";

    let scream = "";

    for (let i = 1; i < floor; i++) scream += "Aa~ ";

    return scream + "Pa!" + (floor <= 6 ? " Aa!" : "");
};

const jumpScream = (floor) =>
    floor <= 1
        ? ""
        : Array(floor - 1)
              .fill("Aa~ ")
              .join("") +
          "Pa!" +
          (floor <= 6 ? " Aa!" : "");