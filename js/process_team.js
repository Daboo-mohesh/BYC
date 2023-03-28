import data from './one.json' assert {type:'json'}

function bindTeamA_Players() {
    var players = data.players.teamA;
    var content = "";
    
    players.forEach(myFunction);

    function myFunction(item) {
    let color = '';
    var captain = "";
    
    if(item.captain){
        captain = "<span style=\"color:gold;\"> &#9733;</span>"
    }
    
        switch(item.position.toLowerCase()) {
          case 'attacker':
        color = "badge-danger";
            break;
          case 'midfielder':
          color = "badge-info";
            break;
            case 'defender':
             color = "badge-warning";
            break;
             case 'goalkeeper':
           color = "badge-success";
            break;
          default:
           color = "badge-primary"
        }

       content +="<div class=\"col-md-3\"><div class=\"row mainplayerrow\"><div class=\"col-md-12\" style=\"text-align: right\"><span class=\"badge "+ color +"\">"+item.position+"</span></div><div class=\"col-md-12\"><img src=\"img/users/"+item.image+"\" width=\"150px\" height=\"150px\" class=\"img_player\"/></div><div class=\"col-md-12 playername\">"+item.playername+ captain+ "</div></div></div>";

    }
    document.getElementById("teamAplayers").innerHTML = content;
}



function bindTeamB_Players() {
    var players = data.players.teamB;

    var content = "";
    
    players.forEach(myFunction);

    function myFunction(item) {
    let color = '';
    var captain = "";
    
    if(item.captain){
        captain = "<span style=\"color:gold;\"> &#9733;</span>"
    }
    
        switch(item.position.toLowerCase()) {
          case 'attacker':
        color = "badge-danger";
            break;
          case 'midfielder':
          color = "badge-info";
            break;
            case 'defender':
             color = "badge-warning";
            break;
             case 'goalkeeper':
           color = "badge-success";
            break;
          default:
           color = "badge-primary"
        }

       content +="<div class=\"col-md-3\"><div class=\"row mainplayerrow\"><div class=\"col-md-12\" style=\"text-align: right\"><span class=\"badge "+ color +"\">"+item.position+"</span></div><div class=\"col-md-12\"><img src=\"img/users/"+item.image+"\" width=\"150px\" height=\"150px\" class=\"img_player\"/></div><div class=\"col-md-12 playername\">"+item.playername+ captain+"</div></div></div>";

    }
    document.getElementById("teamBplayers").innerHTML = content;
}


bindTeamA_Players();
bindTeamB_Players();