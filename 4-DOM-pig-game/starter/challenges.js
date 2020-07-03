// YOUR 3 CHALLENGES
// Change the game to follow these rules:

// 1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
// 2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
// 3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)

var scores, roundScore, activePlayer, gamePlaying;
gamePlaying = true;


init();

var lastDice;

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

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        //1. Random Number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        
        //2.Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        if (dice1 !== 1 && dice2 !== 1) {
                //Add Score
                roundScore += dice1 + dice2;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }
            else {
                //Next Player
            nextPlayer();
            }
        
      
        // //diceDOM1.style.display = 'block';
        // diceDOM.src = 'dice-' + dice + '.png';
        // //diceDOM1.src = 'dice-' + dice1 + '.png';

        // if(dice === 6 && lastDice === 6){
        //     scores[activePlayer] = 0;
        //     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //     nextPlayer();
        // }
        // //3.Update the round score onlt if the number rolled is NOT 1.
        // else if (dice !== 1 /*&& dice1 !== 1*/) {
        //     //Add Score
        //     roundScore += (dice + //dice1);
        //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
        // }
        // else {
        //     //Next Player
        // nextPlayer();
        //     //document.querySelector('.player-0-panel').classList.remove('active');
        //     //document.querySelector('.player-1-panel').classList.add('active');
        // }
        // lastDice = dice
    }
});




document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        //1.Add the round score to the global score
        scores[activePlayer] += roundScore;

        //.update the UI to show global score with the value of the round score for the active player aded to it
        // set the round score of the active platyer back to zero.
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-Score').value;
        //undefined, 0, null or "" are coerced to false
        //anything else is coerced to true.
        if(input){
            var winningScore = input;
        } else {
            winningScore = 100;
        }

        
        //3. Check if the player won the game is Global score > 100 if 20... else
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
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

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

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

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

}

//store each dice roll into a previous roll variable 

// check if previous dice roll is 6 

//if previous dice roll = 6 and current dice roll = 6 the next player function should run.
