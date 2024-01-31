document.addEventListener('DOMContentLoaded', () => {
    const resultElement = document.getElementById('result');
    const computerChoiceElement = document.getElementById('computerChoice');

    function playGame(playerChoice) {
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        displayComputerChoice(computerChoice);

        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);
    }

    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'It\'s a tie!';
        }

        if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        }

        return 'You lose!';
    }

    function displayResult(result) {
        resultElement.textContent = result;
    }

    function displayComputerChoice(computerChoice) {
        computerChoiceElement.textContent = `Computer chose ${computerChoice}`;
        computerChoiceElement.classList.add('shake-image');
        setTimeout(() => {
            computerChoiceElement.classList.remove('shake-image');
        }, 300); // Adjust the duration of the shake animation
    }

    // Optional: Reset the result and computer choice after a delay
    function resetResultAndComputerChoice() {
        setTimeout(() => {
            resultElement.textContent = 'Choose an option';
            computerChoiceElement.textContent = '';
        }, 2000);
    }

    // Attach the reset function to each button click
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', resetResultAndComputerChoice);
    });
});
