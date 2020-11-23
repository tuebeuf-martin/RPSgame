$(document).ready(function(){
//Ici je crée une fonction qui permet de deplacer mes elements//
    
    $(".imgcard").draggable({revert: "valid",revertDuration: 600});
    $(".dropzone").droppable ({snap: true,//Ici je peux les deposer//
        
      drop: function( event, ui ) {//Quand la fonction drop est appelé//
        launch(ui.draggable.attr('id'));
        
      }
    
}); 
    var percentWins = 0;   
    var games = 0;
    var AIWin = 0;//Je defini mes variables (Je gagne ou l'ordinateur gagne)
    var PWin = 0;
    console.log(percentWins)
    
    function resetCards() {//Ici je crée une fonction qui permet de remettre les carte sur la table a 0//
      $("#AICard").attr("src", "card.png");
      $("#PCard").attr("src", "assets/img/blank.png");
    }

    function launch(choice) {
        games +=1;
        $("#games").html(games);

    var result = compare(choice, computerChoice());
    if (result == "win"){
        PWin +=1;
        $("#PCount").html(PWin);
        $( ".AI" ).effect( "shake" );
        $(".AI").attr("src", "assets/img/SadComp.png");
        setTimeout(
          function() 
          {
            resetCards();
          }, 1500);
        
    }
    else if (result == "lose"){
        AIWin +=1;
        $("#IACount").html(AIWin);
        $(".AI").attr("src", "assets/img/HappyComp.png");
        setTimeout(
          function() 
          {
            resetCards();
          }, 1500);
        
    }
    else if (result == "Tie"){
        $('#IAChoice').html(" (Tie!)"); 
        setTimeout(
          function() 
          {
            resetCards();
          }, 1500);
        
    }
    else {
        console.log('Erreur : ' + result);
        alert('Something went wrong!');
        resetCards();
    }
    
    percentWins = (PWin / games ) *100;
    $("#wins").html(Math.round(percentWins));
  }
  
  var compare = function(me, opponent) {//Conditions de victoire
    if(me === 'rock') {
      $("#PCard").attr("src", "Casino (4).jpg");//A chaque fois que la carte est posé, elle s'affiche sur la table//
        if(opponent === 'rock') {
          $("#AICard").attr("src", "Casino (4).jpg");//A chaque fois que la carte est posé, elle s'affiche sur la table//
          $( "#AICard" ).effect( "shake" );//Ici la carte va se secouer quand il y a égalité//
            return 'Tie';
        } else if (opponent === 'paper') {
          $("#AICard").attr("src", "Casino (3).jpg");
          return 'lose';
        } else if (opponent === 'scissors') {
          $("#AICard").attr("src", "Casino (2).jpg");
          return 'win';
        }
      
    } else if (me === 'paper') {
      $("#PCard").attr("src", "Casino (3).jpg");
      
        if(opponent === 'paper') {
          $("#AICard").attr("src", "Casino (3).jpg");
          $( "#AICard" ).effect( "shake" );
          return 'Tie';
        } else if (opponent === 'rock') {
          $("#AICard").attr("src", "Casino (4).jpg");
          return 'win';
        } else if (opponent === 'scissors') {
          $("#AICard").attr("src", "Casino (2).jpg");
          return 'lose';
      }
    } else if (me === 'scissors') {
      $("#PCard").attr("src", "Casino (2).jpg");
        if(opponent === 'scissors') {
          $("#AICard").attr("src", "Casino (2).jpg");
          $( "#AICard" ).effect( "shake" );
          return 'Tie';
        } else if (opponent === 'paper') {
          $("#AICard").attr("src", "Casino (3).jpg");
          return 'win';
        } else if (opponent === 'rock') {
          $("#AICard").attr("src", "Casino (4).jpg");
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