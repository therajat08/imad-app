console.log('Loaded!');
//addin new text to id = "okay"
var element = document.getElementById('okay');
element.innerHTML = 'now this is new';

//making the image move on click
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
}; 