const rps = (p1, p2) =>
    p1 === p2
        ? "Draw!"
        : (p1 === "rock" && p2 === "scissors") ||
          (p1 === "scissors" && p2 === "paper") ||
          (p1 === "paper" && p2 === "rock")
        ? "Player 1 won!"
        : "Player 2 won!";

const rpsBattle = (p1, p2) => {
    const outcomes = { rock: "scissors", scissors: "paper", paper: "rock" };

    return p1 === p2
        ? "Draw!"
        : outcomes[p1] === p2
        ? "Player 1 won!"
        : "Player 2 won!";
};

const rockPaperScissors = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    
    if (
        (p1 === "rock" && p2 === "scissors") ||
        (p1 === "scissors" && p2 === "paper") ||
        (p1 === "paper" && p2 === "rock")
    ) {
        return "Player 1 won!";
    }
    
    return "Player 2 won!";
};