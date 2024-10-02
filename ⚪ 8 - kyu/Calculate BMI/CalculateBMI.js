const bmi = (weight, height) => {
    const bmi = weight / height ** 2;
    if (bmi <= 18.5) return "Underweight";
    if (bmi <= 25.0) return "Normal";
    if (bmi <= 30.0) return "Overweight";
    return "Obese";
};

const getBmiCategory = (weight, height) => {
    const bmi = weight / height ** 2;
    switch (true) {
        case bmi <= 18.5:
            return "Underweight";
        case bmi <= 25.0:
            return "Normal";
        case bmi <= 30.0:
            return "Overweight";
        default:
            return "Obese";
    }
};

const assessBmi = (weight, height) => {
    const bmi = weight / height ** 2;
    
    const categories = [
        { limit: 18.5, message: "Underweight" },
        { limit: 25.0, message: "Normal" },
        { limit: 30.0, message: "Overweight" },
        { limit: Infinity, message: "Obese" },
    ];

    for (const category of categories) {
        if (bmi <= category.limit) {
            return category.message;
        }
    }
};
