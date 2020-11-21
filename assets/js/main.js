$(document).ready(function(){
//Ici je crée une fonction qui permet de deplacer mes elements//
    
    $(".imgcard").draggable ({revert: "valid"});
    $(".dropzone").droppable ({//Ici je peux les deposer//
        
      drop: function( event, ui ) {//Quand la fonction drop est appelé//
        launch(ui.draggable.attr('id'));
        
      }
    
}); 
    var percentWins = 0;   
    var draws = 0;
    var games = 0;
    var AIWin = 0;//Je defini mes variables (Je gagne ou l'ordinateur gagne)
    var PWin = 0;
    console.log(percentWins)
    
    function launch(choice) {
        games +=1;
        $("#games").html(games);

    var result = compare(choice, computerChoice());
    if (result == "win"){
        PWin +=1;
        $("#PCount").html(PWin);
        
    }
    else if (result == "lose"){
        AIWin +=1;
        $("#IACount").html(AIWin);
        
    }
    else if (result == "Tie"){
        alert("Egalité"); 
        draws +=1;
        
    }
    else {
        console.log('Erreur : ' + result);
        alert('Something went wrong!');
    }
    
    percentWins = (PWin / games ) *100;
    $("#wins").html(Math.round(percentWins));
  }
  
  var compare = function(me, opponent) {//Conditions de victoire
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
          return 'lose';
      }
    } else if (me === 'scissors') {
      
        if(opponent === 'scissors') {
          return 'Tie';
        } else if (opponent === 'paper') {
          return 'win';
        } else if (opponent === 'rock') {
          return 'lose';
      }
    } 
  };
  var computerChoice = function() {//Ce qui permet a l'ordinateur de faire son choix
    var random = Math.random();
    var computerChoice = '';
    if (random <= 0.33333333333) {
        computerChoice = 'rock';
    } else if(random >= 0.66666666666) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    } 
    $('#IAChoice').html(" (IA played "+computerChoice+")");
    return computerChoice;
  };
})