function getScore(){
    var http= new XMLHttpRequest();
    http.open("GET", url);  //need url
    http.send();
    return http.responseText;
}