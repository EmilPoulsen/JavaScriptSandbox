window.onload = function(){
    var btnRead = document.getElementById('btnRead');
    btnRead.onclick = add;
}



function add(){
  var input = document.getElementById("labelinput").value;
  var nyRubrik = document.createElement("h1");
  nyRubrik.setAttribute("style", "color: orange;");
  var nyTextnod = document.createTextNode(input);
  nyRubrik.appendChild(nyTextnod);
  var bodyElement = document.getElementsByTagName("body")[0];
  bodyElement.appendChild(nyRubrik);
}
