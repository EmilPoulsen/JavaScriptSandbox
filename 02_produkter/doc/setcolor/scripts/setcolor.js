window.onload = function(){
    var colorbutton = document.getElementById('colorbutton');
    colorbutton.onclick = changeColor2;
}

function changeColor1(){
    var color = "#BADA55";
    var backgroundColor = "#000000";
    var colorStyle = "color: " + color + "; background: " + backgroundColor + ";";
    //console.log(5 + 6);
    //alert("Test");
    var body = document.getElementsByTagName("body")[0];
    body.setAttribute('style', colorStyle);
}

var flipper = false;
function changeColor2(){
    var color = "#BADA55";
    var backgroundColor = "#000000";
    if(flipper){
      var backgroundColor = "#FF0000";
    }
    var body = document.getElementsByTagName("body")[0];
    body.style.color = color;
    body.style.background = backgroundColor;
    flipper = !flipper;
}
