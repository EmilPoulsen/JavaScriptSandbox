function taBortFalt()
{
   var PElement = this.parentNode;
   var parentElement = PElement.parentNode;
   parentElement.removeChild(PElement);
}

function laggTillInput()
{
   var formularElement = document.getElementById("formularet");
   var nyttPElement = document.createElement("p");
   var nyTextnod = document.createTextNode("Sökord: ");
   nyttPElement.appendChild(nyTextnod);
   var nyttInmatningsfalt = document.createElement("input");
   nyttInmatningsfalt.setAttribute("type", "text");
   nyttPElement.appendChild(nyttInmatningsfalt);
   var nyKnapp = document.createElement("input");
   nyKnapp.setAttribute("type", "button");
   nyKnapp.setAttribute("value", "Ta bort sökfält");
   nyKnapp.onclick = taBortFalt;
   nyttPElement.appendChild(nyKnapp);
   formularElement.appendChild(nyttPElement);
}
