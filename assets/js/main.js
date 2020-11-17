$(document).ready(function(){
$(function (){
    $("#scissors").draggable ({ revert: "valid" });

    $("#rock").draggable ({ revert: "valid" });

    $("#paper").draggable ({ revert: "valid" });

    $("#dropzone").droppable ();{

    }
    
}); 
    var base = 0;
    var percentWins = (PWin / (AIWin + PWin + draws)) * 100;   
    var draws = 0;
    var games = 0;
    var AIWin = 0;
    var PWin = 0;
    $("#scissors").on('mouseup', function(){
        games +=1;
    $("#games").html(games);
    var result = compare('scissors', computerChoice());
    if (result == "win"){
        PWin +=1;
        $("#PCount").html(PWin);
        base += percentWins;
        $("#wins").innerhtml(percentWins)
    }
    if (result == "lose"){
        AIWin +=1;
        $("#IACount").html(AIWin);
        base += percentWins;
        $("#wins").innerhtml(percentWins);
    }
    if (result == "Tie"){
        alert("Egalité"); 
        draws +=1;
        base += percentWins;
        $("#wins").innerhtml(percentWins);
    }
        
  });
  
  $('#rock').on('mouseup', function(){
    games +=1;
    $("#games").html(games);
    var result = compare('rock', computerChoice());
    if (result == "win"){
        PWin +=1;
        $("#PCount").html(PWin);
        base += percentWins;
        $("#wins").innerhtml(percentWins);
    }
    if (result == "lose"){
        AIWin +=1;
        $("#IACount").html(AIWin);
        base += percentWins;
        $("#wins").innerhtml(percentWins);
    }
    if (result == "Tie")
        alert("Egalité")
        draws +=1;
        base += percentWins;
        $("#wins").innerhtml(percentWins);
  });
  
  $('#paper').on('mouseup', function(){
    games +=1;
    $("#games").html(games);
    var result = compare('paper', computerChoice());
    if (result == "win"){
        PWin +=1;
        $("#PCount").html(PWin);
        base += percentWins;
        $("#wins").innerhtml(percentWins);
    }
    if (result == "lose"){
        AIWin +=1;
        $("#IACount").html(AIWin)
        base += percentWins;
        $("#wins").innerhtml(percentWins);
    }
    if (result == "Tie")
        alert("Egalité")
        draws +=1;
        base += percentWins;
        $("#wins").innerhtml(percentWins);
  });
  
  var compare = function(me, opponent) {
    if(me === 'rock') {
      
        if(opponent === 'rock') {
            return 'Tie';
        } else if (opponent === 'paper') {
          return 'lose';
        } else if (opponent === 'scissors') {
          return 'win';
        }
      
    } else if (me === 'paper') {
      
        if(opponent === 'paper') {
          return 'Tie';
        } else if (opponent === 'rock') {
          return 'win';
        } else if (opponent === 'scissors') {
          return 'Lose';
      }
    } else if (me === 'scissors') {
      
        if(opponent === 'scissors') {
          return 'Tie';
        } else if (opponent === 'paper') {
          return 'win';
        } else if (opponent === 'rock') {
          return 'lose';
      }
    } else {
      return "???"
    }
  };
  var computerChoice = function() {
    var random = Math.random();
    if (random <= 0.33333333333) {
      return  'rock';
    } else if(random >= 0.66666666666) {
      return 'paper';
    } else {
      return 'scissors';
    } 
};
})