const diamond = (n) => {
    if (n <= 0 || n % 2 === 0) return null;
    let result = "";
    const mid = Math.floor(n / 2);

    for (let i = 0; i < n; i++) {
        const stars = i <= mid ? 2 * i + 1 : 2 * (n - i - 1) + 1;
        const spaces = (n - stars) / 2;
        result += " ".repeat(spaces) + "*".repeat(stars) + "\n";
    }

    return result;
};

const diamondMap = (n) => {
    if (n <= 0 || n % 2 === 0) return null;
    const mid = Math.floor(n / 2);

    return (
        Array.from({ length: n }, (_, i) => {
            const stars = i <= mid ? 2 * i + 1 : 2 * (n - i - 1) + 1;
            const spaces = (n - stars) / 2;
            return " ".repeat(spaces) + "*".repeat(stars);
        }).join("\n") + "\n"
    );
};

const diamondFormulaic = (n) => {
    if (n <= 0 || n % 2 === 0) return null;
    const lines = [];

    for (let i = 0; i < n; i++) {
        const stars = i < Math.ceil(n / 2) ? 2 * i + 1 : 2 * (n - i - 1) + 1;
        const spaces = (n - stars) / 2;
        lines.push(" ".repeat(spaces) + "*".repeat(stars));
    }
    
    return lines.join("\n") + "\n";
};