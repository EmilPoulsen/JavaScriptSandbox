/**
 * Listener function
 * @return {[type]} [description]
 */
window.onload = function() {
  var form = document.getElementsByTagName("form")[0];
  form.onsubmit = validate;
}

/**
 * @return {[Boolean]} [Global validation function. Will perform a series of tests]
 */
function validate() {

  //Check all inputs against empty
  if (!textInputIsNotEmpty()) {
    return false;
  }

//Check so that the format of Email is correct
  if(!checkEmailInput()){
    return false;
  }

//Check that the message input doesn't exceed 200
  if (!textInputDoesNotExceedCharLimit()) {
    return false;
  }

  return true;
}


/**
 *
 * Check email so the format fits to given regular expression.
 * @return {[Boolean]} [True if format is valid]
 */
function checkEmailInput() {
  var email = document.getElementById("field_email").value;
  var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
  var isValid = pattern.test(email);
    if (!isValid) {
      alert("Epost-meddelande har fel formatering.");
      return false;
    } else {
      return true;

    }
  }

/**
 *
 * Check that the number of characters does not exceed 200.
 * @return {[Boolean]} [Returns true if number of char is less than 200]
 */
  function textInputDoesNotExceedCharLimit() {
    var message = document.getElementById("field_message").value;
    if (message.length >= 200) {
      alert("Meddelande får ej överstiga 200 tecken");
      return false;
    }
    return true;
  }


/**
 *Checks that the required input fields are not empty.
 * @return {[Boolean]} [Returns false if any of the required fiels are empty.]
 */
  function textInputIsNotEmpty() {
    //Inget inmatningsfält förutom ”Titel på föreläsning/seminarium” (i vissa fall, se punkt 4) och
    //meddelande (längst ned) får lämnas tomt.
    if (!isTextAtElementNotEmpty("field_firstname", "Du måste ange ett förnamn")) {
      return false;
    }

    if (!isTextAtElementNotEmpty("field_lastname", "Du måste ange ett efternamn")) {
      return false;
    }

    if (!isTextAtElementNotEmpty("field_organisation", "Du måste ange en organisation")) {
      return false;
    }

    // Om användaren har valt föreläsning eller seminarium måste även fältet ”Titel på föreläsning
    // och seminarium” vara ifyllt.
    var lectureChecked = document.getElementById("pres_type_1").checked;
    var seminarChecked = document.getElementById("pres_type_2").checked;
    if (lectureChecked || seminarChecked) {
      if (!isTextInputOk("field_pres_title", "Du måste ange titel på föreläsning/seminarium")) {
        return false;
      }
    }
    return true;
  }


/**
 *Checks input based on element id. If it
 * @param  {[type]}  id       [The element to check against emptiness]
 * @param  {[type]}  errorMsg [The message to throw if element is empty]
 * @return {Boolean}          [True is the element is empty]
 */
  function isTextAtElementNotEmpty(id, errorMsg) {
    var firstname = document.getElementById(id).value;
    if (firstname.length == 0) {
      alert(errorMsg);
      return false;
    }
    return true;
  }
