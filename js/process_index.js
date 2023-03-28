import data from './one.json' assert {type:'json'}

function bindNextMatches() {
    var next_matches = data.matches.next_matches;
    var content = "";
    
    next_matches.forEach(myFunction);

    function myFunction(item) {
       content += "<div class=\"mc-table\"><table><tbody><tr><td class=\"left-team\"><img src=\"img/match/"+ item.home_logo +"\" style=\"width: 50px; height: 40px\" alt=\"\" /><h6 style=\"margin-top:5%\">"+ item.home_team +"</h6></td><td class=\"mt-content\"><div class=\"mc-op\">"+ item.location +"</div><h4>VS</h4><div class=\"mc-op\">"+item.date+"</div></td><td class=\"right-team\"><img src=\"img/match/"+item.away_logo+"\" alt=\"\" style=\"width: 50px; height: 40px\" /><h6 style=\"margin-top:5%\">"+item.away_team+"</h6></td></tr></tbody></table></div>"
    }

    document.getElementById("next_matches").innerHTML = content;
}

function bindRecentMatches() {
    var recent_matches = data.matches.recent_matches;
    var content = "";
    
    recent_matches.forEach(myFunction);

    function myFunction(item) {
       content += "<div class=\"mc-table\"><table><tbody><tr><td class=\"left-team\"><img src=\"img/match/"+ item.home_logo +"\" style=\"width: 50px; height: 40px\" alt=\"\" /><h6 style=\"margin-top:5%\">"+ item.home_team +"</h6></td><td class=\"mt-content\"><div class=\"mc-op\">"+ item.location +"</div><h4>"+ item.home_score + ":" + item.away_score +"</h4><div class=\"mc-op\">"+item.date+"</div></td><td class=\"right-team\"><img src=\"img/match/"+item.away_logo+"\" alt=\"\" style=\"width: 50px; height: 40px\" /><h6 style=\"margin-top:5%\">"+item.away_team+"</h6></td></tr></tbody></table></div>"
    }

    document.getElementById("recent_matches").innerHTML = content;
}

function bindActivities() {
    var activities = data.activities;
    
    var content = "";
    
    activities.forEach(myFunction);

    function myFunction(item) {
        if(item.display){
       content += "<div class=\"col-md-4\"><div class=\"news-item left-news\"><div class=\"ni-pic set-bg\"><div class=\"ni-tag\">"+item.tag_name+"</div> <img src=\"img/news/"+item.image+"\" style=\"width: 370px; height: 240px\"/> </div><div class=\"ni-text\"><h4>"+item.title+"</h4><ul><li><i class=\"fa fa-calendar\"></i> "+ item.date_posted +"</li><li><i class=\"fa fa-edit\"></i>"+item.posted_by+"</li></ul><p>"+item.description+"</p></div></div></div>";
        }

    }
console.log(content)
    document.getElementById("activities").innerHTML = content;
}

function bindNews() {
    var news = data.news;
    
    var content = "";
    
    news.forEach(myFunction);

    function myFunction(item) {
        if(item.display){
       content += "<div class=\"col-md-4\"><div class=\"news-item left-news\"><div class=\"ni-pic set-bg\"><div class=\"ni-tag\">"+item.tag_name+"</div> <img src=\"img/news/"+item.image+"\" style=\"width: 370px; height: 240px\"/> </div><div class=\"ni-text\"><h4>"+item.title+"</h4><ul><li><i class=\"fa fa-calendar\"></i> "+ item.date_posted +"</li><li><i class=\"fa fa-edit\"></i>"+item.posted_by+"</li></ul><p>"+item.description+"</p></div></div></div>";
        }

    }
console.log(content)
    document.getElementById("news").innerHTML = content;
}


bindNextMatches();
bindRecentMatches();
bindActivities();
bindNews();
