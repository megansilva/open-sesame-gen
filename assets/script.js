// Assignment code here

// How many charcters would you like your password to contain?
// Click OK to confirm including special charcters?
// Click OK to confirm including numeric charcters?
// Click OK to confirm including lowercase charcters?
// Click OK to confirm including uppercase charcters?
// Ends with password being generated!

var enter;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 