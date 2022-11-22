//make a Rock Paper Scissors game against the computer that runs in the console for 5 rounds and keeps score of the wins and losses.


//create a function that takes the user's input

function userChoice()
{
    let choice = prompt('Enter your choice for rock (r), paper (p), or scissors(s):');
    return choice;
}

//create a function that randomly returns either 'rock', 'paper', or 'scissors'

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

//create a function that compares the user's input to the computer's input ( single round )

function compare(userChoice, computerChoice)
{
    switch (userChoice)
    {
        case 'r':
            if (computerChoice === 'rock')
            {
                return 'Tie';
            }
            else if (computerChoice === 'paper')
            {
                return 'You lose! Paper beats rock';
            }
            else
            {
                return 'You win! Rock beats scissors';
            }
        case 'p':
            if (computerChoice === 'rock')
            {
                return 'You win! Paper beats rock';
            }
            else if (computerChoice === 'paper')
            {
                return 'Tie';
            }
            else
            {
                return 'You lose! Scissors beats paper';
            }
        case 's':
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
                return 'Tie';
            }
        default:
            return 'Invalid input';
    }
}



//create a function that plays 5 rounds of the game and keeps score

function game()
{
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++)
    {
        let user = userChoice();
        let computer = computerChoice();
        let result = compare(user, computer);
        console.log(result);
        if (result.includes('win'))
        {
            userScore++;
        }
        else if (result.includes('lose'))
        {
            computerScore++;
        }
    }
    if (userScore > computerScore)
    {
        console.log('You win the game!');
    }
    else if (userScore < computerScore)
    {
        console.log('You lose the game!');
    }
    else
    {
        console.log('Tie game!');
    }
}

game();