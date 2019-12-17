
window.onload=function(){
  var btn = document.querySelector('.btn');
  btn.addEventListener('click', loadNews);
}


function loadNews(e) {
   e.preventDefault();
   var apiKey = '&apiKey=73cd71e1e2b04f5ea197c3a5f0a2166e';
   var form = document.querySelector('form');
   var country = form[0].value;
   var category = form[1].value;
  
   var url = 'https://newsapi.org/v2/top-headlines?country='
    +country
    +'&category='
    + category
    +apiKey;
  
   var xhr = new XMLHttpRequest();
   xhr.open('GET', url , true);
   xhr.send();
  
   xhr.onload = function() {
     if(this.status === 200) {
       var response = JSON.parse(this.responseText);
       
        var output = '';
        for(var i=0; i<response.articles.length; i++) {
         var news = response.articles[i];
         var output = output 
         + '<div class="top-headlines">'
         + '<img src="'+ news.urlToImage + '">'
         + '<h3 class="title">' + news.title + '</h3>'
         + '<div class="desc">' + news.description + '</div>'
         + '<div class="source"> Source：' + news.author 
         + '<a href="' + news.url + '">' +  news.url + '</a>'
         + '</div>'
         + '</div>';


        }
        document.getElementById('news').innerHTML = output;
      }
     }
     
 
}


