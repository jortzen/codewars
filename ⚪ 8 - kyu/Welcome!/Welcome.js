const greet = (language) => {
    const languages = {
        english: "Welcome",
        czech: "Vitejte",
        danish: "Velkomst",
        dutch: "Welkom",
        estonian: "Tere tulemast",
        finnish: "Tervetuloa",
        flemish: "Welgekomen",
        french: "Bienvenue",
        german: "Willkommen",
        irish: "Failte",
        italian: "Benvenuto",
        latvian: "Gaidits",
        lithuanian: "Laukiamas",
        polish: "Witamy",
        spanish: "Bienvenido",
        swedish: "Valkommen",
        welsh: "Croeso",
    };

    return languages[language] || "Welcome";
};

const welcomeMessage = (language) => {
    switch (language) {
        case "czech":
            return "Vitejte";
        case "danish":
            return "Velkomst";
        case "dutch":
            return "Welkom";
        case "estonian":
            return "Tere tulemast";
        case "finnish":
            return "Tervetuloa";
        case "flemish":
            return "Welgekomen";
        case "french":
            return "Bienvenue";
        case "german":
            return "Willkommen";
        case "irish":
            return "Failte";
        case "italian":
            return "Benvenuto";
        case "latvian":
            return "Gaidits";
        case "lithuanian":
            return "Laukiamas";
        case "polish":
            return "Witamy";
        case "spanish":
            return "Bienvenido";
        case "swedish":
            return "Valkommen";
        case "welsh":
            return "Croeso";
        default:
            return "Welcome";
    }
};

const sayWelcome = (language) => {
    const greetings = [
        { lang: "english", greeting: "Welcome" },
        { lang: "czech", greeting: "Vitejte" },
        { lang: "danish", greeting: "Velkomst" },
        { lang: "dutch", greeting: "Welkom" },
        { lang: "estonian", greeting: "Tere tulemast" },
        { lang: "finnish", greeting: "Tervetuloa" },
        { lang: "flemish", greeting: "Welgekomen" },
        { lang: "french", greeting: "Bienvenue" },
        { lang: "german", greeting: "Willkommen" },
        { lang: "irish", greeting: "Failte" },
        { lang: "italian", greeting: "Benvenuto" },
        { lang: "latvian", greeting: "Gaidits" },
        { lang: "lithuanian", greeting: "Laukiamas" },
        { lang: "polish", greeting: "Witamy" },
        { lang: "spanish", greeting: "Bienvenido" },
        { lang: "swedish", greeting: "Valkommen" },
        { lang: "welsh", greeting: "Croeso" },
    ];

    const result = greetings.find((g) => g.lang === language);
    return result ? result.greeting : "Welcome";
};