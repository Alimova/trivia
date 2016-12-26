/**
 * Created by alimov on 12/17/16.
 */
var xhr = new XMLHttpRequest();
function Reload(){
    xhr.open('GET', 'http://jservice.io/api/random', false);
    xhr.send();
//    var resp = JSON.parse(xhr.response);
}
Reload();

//var resp = JSON.parse(xhr.response);

//document.getElementById("num").innerHTML = resp.id;
//    + "<br>" +
//    resp.question + "<br>" +
//    resp.answer;

console.log(xhr.response);
