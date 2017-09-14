
var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var win = 0;
var loss  = 0;
var guessLeft = 9;
var computerChoice = options[Math.floor(Math.random() * options.length)];
var userLetters = new Array();


function resetScore(){
  userLetters.splice(0,userLetters.length); 
  guessLeft = 9;
  computerChoice = options[Math.floor(Math.random() * options.length)];
}


function updateScoreboard(win, loss, guessLeft, userLetters){

  var score = "Wins: " + win + "<br>Loss: " + loss + "<br>Guesses left: " + guessLeft + "<p>Your guess so far: </p> ";
  

    
    document.getElementById("score").innerHTML = score;     
    document.getElementById("user-letters").innerHTML = userLetters;
    
}

document.onkeydown = function(event) {                  
  

  if (event.keyCode >= 65 && event.keyCode <= 90){
    var userGuess = event.key.toUpperCase();
    guessLeft--;
  
    userLetters.push(userGuess);

    
    if(userGuess===computerChoice){
      win++;  
      resetScore();
      }
      updateScoreboard(win, loss, guessLeft, userLetters);
      
    
    if (guessLeft<1){
      loss++;
      resetScore();
    }
    updateScoreboard(win, loss, guessLeft, userLetters);
  }
  else{
    alert("Enter a letter of the alphabet.");
  }
};
