let userScore = 0;
let computerScore = 0;

//event Listener for buttons

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => 
{
    button.addEventListener('click', () => {
        playRound(button.id); 
    });
});

// computer choice

function computerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0)   return 'rock';
    if (choice === 1)   return 'paper';
    if (choice === 2)   return 'scissors';
}

// Start the game and display the results

function playRound(userChoice)
{
    let compC = computerChoice();
    let winner = decideWinner(userChoice, compC);
    document.getElementById('results').innerHTML = winner;
}
 
// decide the winners and stops the game when one of the players reaches 5 points

function decideWinner(userChoice, computerChoice)
{
    switch (userChoice.charAt(0) + computerChoice.charAt(0))
    {
        case 'rs':
        case 'pr':
        case 'sp':
            userScore += 1;
            if (userScore === 5)
            {
                disableButtons();
                return 'You win! You reached 5 points first!' + 
                '<br> Refresh the page to play again!';
            }
            return 'You win! ' + userChoice + ' beats ' + computerChoice
            + '<br></br> Your score: '+ userScore + '<br>Computer score: ' + computerScore;
        case 'rp':
        case 'ps':
        case 'sr':
            computerScore += 1;
            if (computerScore === 5)
            {
                disableButtons();
                return 'You lose! Computer reached 5 points first!' +
                '<br> Refresh the page to play again!';
            }
            return 'You lose! ' + computerChoice + ' beats ' + userChoice
            + '<br></br> Your score: ' + userScore + '<br>Computer score: ' + computerScore;
        case 'rr':
        case 'pp':
        case 'ss':
            return 'It\'s a tie! ' + userChoice + ' equals ' + computerChoice
            + '<br></br> Your score: ' + userScore + '<br>Computer score: ' + computerScore;
    }
}

// disable buttons when one of the players reaches 5 points

function disableButtons()
{
    buttons.forEach ((button) => {
        button.disabled = true;
    });
}