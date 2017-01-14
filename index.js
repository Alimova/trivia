/**
 * Created by alimov on 12/17/16.
 */
var answer;
var correct = 0;
var total = 0;
var xhr = new XMLHttpRequest();
function Reload(){
    xhr.open('GET', 'https://jservice.io/api/random', false);
    xhr.send();
}
Reload();
var resp = JSON.parse(xhr.response);

function findRow(node){
    var i=1;
    while( (node = node.previousSibling) != null ) {
        i++;
    }
    return i;
}
function updateAnswer(node){
    //cut off letter from var answer
    var l = findRow(node);
    var length = answer.length;
    answer = answer.slice(0, l-1)+answer.slice(l, length-1);
}

console.log(xhr.response);

/* rewrite to async


 var xhr = new XMLHttpRequest();

 xhr.open('GET', 'phones.json', true);

 xhr.send(); // (1)

 xhr.onreadystatechange = function() { // (3)
 if (xhr.readyState != 4) return;

 button.innerHTML = 'Готово!';

 if (xhr.status != 200) {
 alert(xhr.status + ': ' + xhr.statusText);
 } else {
 alert(xhr.responseText);
 }

 }

 button.innerHTML = 'Загружаю...'; // (2)
 button.disabled = true;
 */