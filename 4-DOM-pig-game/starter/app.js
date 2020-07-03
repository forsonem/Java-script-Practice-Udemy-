/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 
var scores, roundScore, activePlayer, gamePlaying, previousScore;
gamePlaying = true;


init();


//dice = Math.floor(Math.random()* 6) + 1;
//this will generate random numbers betweem 1 and 6. math.floor ensure the numbers are whole numbers.

//document object that gives you access to the dom
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//reads the text dougument and gets the value.
//var x = document.querySelector('#score-0').textContent; 
//sets the value.
 
// document.querySelector('.dice').style.display = 'none';

// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-1').textContent = '0';

//function btn(){
    //Do something here
//}
//btn();
//btn in the paretheses is the call back function. The event listener is calling the function for us.

//document.querySelector('.btn-roll').addEventListener('click', btn);


//This is an example of anonymous function. This is an alterantive to the above method where we used an outside function. we use an anonymous when we don't want to use the function anywhere else.
function previousScore(){

}
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        //1. Random Number
        var dice = Math.floor(Math.random() * 6) + 1;
        //2.Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3.Update the round score onlt if the number rolled is NOT 1.
        if (dice !== 1) {
            //Add Score
            
            roundScore += dice;

            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            previousScore = dice;
            return previousScore;
        }
        else {
            //Next Player
        nextPlayer();
            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');
        }
    }
});



document.querySelector('.btn-roll').addEventListener('click', diceRoll()); 

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        //1.Add the round score to the global score
        scores[activePlayer] += roundScore;

        //.update the UI to show global score with the value of the round score for the active player aded to it
        // set the round score of the active platyer back to zero.
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //3. Check if the player won the game is Global score > 100 if 20... else
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('activePlayer');
            gamePlaying = false;
        }else {
            //5. Next player. (dont repeat yourself principle)
        nextPlayer();
        }

    }
});
document.querySelector('.btn-new').addEventListener('click', init);

function init(){

    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    gamePlaying = true;


}

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}

//store each dice roll into a previous roll variable 

// check if previous dice roll is 6 

//if previous dice roll = 6 and current dice roll = 6 the next player function should run.
