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
    if (choice === 0)
    {
        return 'rock';
    }
    else if (choice === 1)
    {
        return 'paper';
    }
    else
    {
        return 'scissors';
    }
}

// Start the game and display results

function playRound(userChoice)
{
    let compChoice = computerChoice();
    let winner = decideWinner(userChoice, compChoice);
    document.getElementById('results').innerHTML = winner;
}
 
// decide the winner 

function decideWinner(userChoice, computerChoice)
{
    switch (userChoice)
    {
        case 'rock':
            if (computerChoice === 'rock')
            {
                return 'Tie! Rock vs Rock';
            }
            else if (computerChoice === 'paper')
            {
                return 'You lose! Paper beats rock';
            }
            else
            {
                return 'You win! Rock beats scissors';
            }
        case 'paper':
            if (computerChoice === 'rock')
            {
                return 'You win! Paper beats rock';
            }
            else if (computerChoice === 'paper')
            {
                return 'Tie! Paper vs Paper';
            }
            else
            {
                return 'You lose! Scissors beats paper';
            }
        case 'scissors':
            if (computerChoice === 'rock')
            {
                return 'You lose! Rock beats scissors';
            }
            else if (computerChoice === 'paper')
            {
                return 'You win! Scissors beats paper';
            }
            else
            {
                return 'Tie! Scissors vs Scissors';
            }
        default:
            return 'Invalid input';
    }
}