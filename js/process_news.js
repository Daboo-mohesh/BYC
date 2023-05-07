import data from './one.json' assert {type:'json'}

function bindNews() {
    var news = data.news;
    
    var content = "";
    
    news.forEach(myFunction);

    function myFunction(item) {

       content += "<div class=\"col-md-4\"><div class=\"news-item left-news\"><div class=\"ni-pic set-bg\"><div class=\"ni-tag\">"+item.tag_name+"</div> <img src=\"img/news/"+item.image+"\" style=\"width: 370px; height: 240px\"/> </div><div class=\"ni-text\"><h4>"+item.title+"</h4><ul><li><i class=\"fa fa-calendar\"></i> "+ item.date_posted +"</li><li><i class=\"fa fa-edit\"></i> "+item.posted_by+"</li></ul><p>"+item.description+"</p></div></div></div>";

    }
    document.getElementById("news").innerHTML = content;
}

function apicall(){
    fetch('http://141.147.15.204/admin_tbl.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // Include any other headers required by the API
  },
  body: JSON.stringify({ username: 'daboo_m', password:"1234" }) // Replace with the actual payload data
})
  .then(response => response.json())
  .then(data => {
    // Process the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });
}

apicall();
bindNews();
