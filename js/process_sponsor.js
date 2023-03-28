import data from './one.json' assert {type:'json'}

function bindSponsors() {
    var sponsors = data.sponsors;
    var content = "";
    
    if (sponsors.length > 0) {
    
        sponsors.forEach(myFunction);
    
        function myFunction(item) {
           content += "<div class=\"single-item\"><div class=\"bi-pic\"><img src=\"img/sponsor/"+item.logo+"\" alt=\"\" /></div><div class=\"bi-text\"><h4>"+item.name+"</h4><ul><li><i class=\"fa fa-calendar\"></i> "+item.date+"</li></ul><p>"+item.message+"</p></div></div>";
        }
    
        document.getElementById("sponsors").innerHTML = content;
    }else{
        document.getElementById("NoSponsors").innerHTML = "<h3 style=\"font-family: Trebuchet MS\">No Sponsors yet.</h3>";
    }
    
}

bindSponsors();