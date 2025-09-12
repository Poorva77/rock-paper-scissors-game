const choices = ["p", "r", "s"];
const youDict = { "p": 1, "r": -1, "s": 0 };
const reverseDict = { "1": "Paper", "-1": "Rock", "0": "Scissor" };

function play(userChoice) {
    const you = youDict[userChoice];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const compVal = youDict[computerChoice];

    let message = `You chose ${reverseDict[String(you)]}. Computer chose ${reverseDict[String(compVal)]}. `;

    if (compVal === you) {
        message += "It's a draw!";
    } else if (
        (you === 1 && compVal === -1) ||
        (you === 0 && compVal === 1) ||
        (you === -1 && compVal === 0)
    ) {
        message += "You win!";
    } else {
        message += "Computer wins!";
    }

    document.getElementById("result").textContent = message;
}
