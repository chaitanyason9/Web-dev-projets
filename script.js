"use strict";

const diceImg = document.querySelector('.dice');
const rollDicebtn = document.querySelector('.btn--roll');
const holdbtn = document.querySelector('.btn--hold');
const newbtn = document.querySelector('.btn--new');
const Score0 = document.getElementById('score--0');
const Score1 = document.getElementById('score--1');


diceImg.classList.add('hidden');

let currentScore = 0;
Score0.textContent = 0;
Score1.textContent = 0;
let player = 0;
let activePlayer = 0;
let playing = 1;



rollDicebtn.addEventListener('click',function() {
    if(playing){
    //Creating a random new dice
    let num = Math.floor(Math.random()*6) + 1;
    diceImg.classList.remove('hidden');
    diceImg.src =`dice-${num}.png`;
    //Adding to current state score
    if(num !== 1){
    currentScore += num; 
    document.getElementById(`current--${player}`).textContent = currentScore;
    }else{
        document.getElementById(`current--${player}`).textContent = 0;
        currentScore = 0;
        player = (player === 0)? 1:0;
        document.querySelector(`.player--${player}`).classList.add('player--active'); 
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); 
        activePlayer = player;
    }
}
})

holdbtn.addEventListener('click', function(){
    if(playing){
    if(currentScore >= 10){
        playing = 0;
        document.getElementById(`score--${player}`).textContent = currentScore;
        document.getElementById(`current--${player}`).textContent = 0;
        document.querySelector(`.player--${player}`).classList.add('player--winner');
        diceImg.classList.add('hidden');
    }else{
        let n = Number(document.getElementById(`score--${player}`).textContent)  
        n += currentScore;
        document.getElementById(`score--${player}`).textContent = n;
        document.getElementById(`current--${player}`).textContent = 0;
        currentScore = 0;
        player = (player === 0)? 1:0;
        document.querySelector(`.player--${player}`).classList.add('player--active'); 
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); 
        activePlayer = player;
    }
}
})

newbtn.addEventListener('click',function(){
    document.querySelector(`.player--${player}`).classList.add('player--active');
    document.querySelector(`.player--${player}`).classList.remove('player--winner');
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
    document.getElementById(`score--0`).textContent = 0;
    document.getElementById(`score--1`).textContent = 0;
    diceImg.classList.add('hidden');
    currentScore = 0;
    Score0.textContent = 0;
    Score1.textContent = 0;
    player = 0;
    activePlayer = 0;
    playing = 1;
  
});