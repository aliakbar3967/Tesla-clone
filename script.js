var header = document.getElementById('header');
var title = document.getElementById('title');
var m3 = document.getElementById('model 3');
var ms = document.getElementById('model s');
var my = document.getElementById('model y');
var mx = document.getElementById('model x');

m3.onclick = function(){
    header.style.backgroundImage = "url(img/model-3.jpg)"
}
my.onclick = function(){
    header.style.backgroundImage = "url(img/model-y.jpg)"
}
ms.onclick = function(){
    header.style.backgroundImage = "url(img/model-s.jpg)"
}
mx.onclick = function(){
    header.style.backgroundImage = "url(img/model-x.jpg)"
}