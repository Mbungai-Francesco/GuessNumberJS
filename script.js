'use strict';

var val
var won = false
var score = 20
var high = 0
var guess
var ran = () => val = Math.ceil(Math.random()*20)
var displayMessage = (msg) =>{
  document.querySelector('.message').textContent = msg
}
var rerun = () => {
  score = 20
  won = false
  ran()
  displayMessage("Start guessing...")
  document.querySelector("body").style.backgroundColor = "#222"
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = "?"
  document.querySelector(".guess").value = ""
}

if(!won) console.log(ran())
document.querySelector('.again').addEventListener('click',rerun)
document.querySelector('.check').addEventListener('click',function (){
  guess = document.querySelector(".guess").value
  if(!won){
    if(!guess) displayMessage("⛔️ No number!")
    else if(guess == val){
      displayMessage("🎉 Correct Number!!")
      document.querySelector('.number').textContent = val
      if(high < score) high = score
      document.querySelector('.highscore').textContent = high
      won = true
      document.querySelector("body").style.backgroundColor = "#60b347"
    }
    else{
      score--
      if(score > 1){
        displayMessage(guess < val ? "📉 Too low":"📉 Too high")
        document.querySelector('.score').textContent = score
      }
      else{
        displayMessage("💥 You lost the game")
        won = true
      }
    }
  }
})