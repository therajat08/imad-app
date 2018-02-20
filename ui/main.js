console.log('Loaded!');
//addin new text to id = "okay"
var element = document.getElementById('okay');
element.innerHTML = 'now this is new';

//making the image move on click
var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft = '100px';
}; 