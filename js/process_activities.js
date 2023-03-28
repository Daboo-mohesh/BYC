import data from './one.json' assert {type:'json'}

function bindActivities() {
    var activities = data.activities;
    
    var content = "";
    
    activities.forEach(myFunction);

    function myFunction(item) {
       content += "<div class=\"col-md-4\"><div class=\"news-item left-news\"><div class=\"ni-pic set-bg\"><div class=\"ni-tag\">"+item.tag_name+"</div> <img src=\"img/news/"+item.image+"\" style=\"width: 370px; height: 240px\"/> </div><div class=\"ni-text\"><h4>"+item.title+"</h4><ul><li><i class=\"fa fa-calendar\"></i> "+ item.date_posted +"</li><li><i class=\"fa fa-edit\"></i> "+item.posted_by+"</li></ul><p>"+item.description+"</p></div></div></div>";
    }

    document.getElementById("activities").innerHTML = content;
}

bindActivities();