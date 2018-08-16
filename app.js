console.log("testin one");

var scoreScore = 0;
var score = document.getElementById("actualScore");

var button = document.getElementById("scoreButton");

button.addEventListener("click", function(){
    scoreScore++;
    score.innerHTML = scoreScore;
});