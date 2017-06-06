window.onload = function() {
  var form = document.getElementsByTagName("form")[0];
  form.onsubmit = validate;
}


function validate() {

  if (!inputIsOk()) {
    return false;
  }

  return true;

}

//Inget inmatningsfält förutom ”Titel på föreläsning/seminarium” (i vissa fall, se punkt 4) och
//meddelande (längst ned) får lämnas tomt.
// some code
function inputIsOk() {
  if (!isTextInputOk("field_firstname", "Du måste ange ett förnamn")) {
    return false;
  }

  if (!isTextInputOk("field_lastname", "Du måste ange ett efternamn")) {
    return false;
  }

  if (!isTextInputOk("field_organisation", "Du måste ange en organisation")) {
    return false;
  }



  // var firstname = document.getElementById("field_firstname").value;
  // if (firstname.length == 0) {
  //   alert("Du måste ange ett förnamn");
  //   return false;
  // }
  //
  return true;
}


function isTextInputOk(id, errorMsg) {
  var firstname = document.getElementById(id).value;
  if (firstname.length == 0) {
    alert(errorMsg);
    return false;
  }
  return true;
}




// if(queryThis('foo')) { doThat(); }
//
// function queryThis(parameter) {
//     // some code
//     return true;
// }
