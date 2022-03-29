// Assignment code here

// How many charcters would you like your password to contain?
// Click OK to confirm including uppercase charcters?
// Click OK to confirm including lowercase charcters?
// Click OK to confirm including special charcters?
// Click OK to confirm including numeric charcters?
// Ends with password being generated!


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmUpper;
var confirmLower;
var confirmNumber;
var confirmSpecial;
var userSelection;

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

//Start fumctions
function generatePassword() {
  passwordLength = prompt ("How many characters would you like your password to contain? Choose between 8 and 128 characters.");
  console.log("Passwork length" + passwordLength);

  if (!passwordLength) {
    alert ("Required value");

  } else if (passwordLength < 8 && passwordLength > 128) {
    passwordLength = prompt ("You must choose a charcter between 8 and 128.");
      console.log ("Passwork length" + passwordLength);

  } else {
    confirmUpper = confirm ("Click OK to confirm including uppercase letters in your password.");
      console.log ("Upper case" + confirmUpper);
    confirmLower = confirm ("Click OK to confirm including lowercase letters in your password.");
      console.log ("Lower case" + confirmLower);
    confirmNumber = confirm ("Click OK to confirm including numberic characters in your password.");
      console.log = ("numbers" + confirmNumber);
    confirmSpecial = confirm ('Click OK to confirm special characters in your password.');
      console.log = ("Special characters" + confirmSpecial);
  }
};

// Receiving no answer
if (!confirmUpper && !confirmLower && !confirmNumber && !confirmSpecial) {
  userSelection = alert ("You MUST choose a criteria for your password.");

// Choosing all four options
} else if (confirmUpper && confirmLower && confirmNumber && confirmSpecial) {
  userSelection = upperCase.concat(lowerCase, number, specialChar);
    console.log(userSelection);
  
// Choosing three opetions:
//Upper && lower && number 
//Upper && lower && special characters
//Upper && number && special characters
//Lower && number && special characters 
} else if (confirmUpper && confirmLower && confirmNumber) {
  userSelection = upperCase.concat(lowerCase, number);
    console.log(userSelection);
} else if (confirmUpper && confirmLower && confirmSpecial) {
  userSelection = upperCase.concat(lowerCase, specialChar);
    consolelog(userSelection);
} else if (confirmUpper && confirmNumber && confirmSpecial) {
  userSelection = upperCase.concat(number, specialChar);
    console.log(userSelection);
} else if (confirmLower && confirmNumber && confirmSpecial) {
  userSelection = lowerCase.concat(number, specialChar);
    console.log(userSelection);

// Choosing two options:
//Upper && lower
//Upper && number
//Upper && special characters
//Loweer && number
//Lower && special characters
//Number && special characters
} else if (confirmUpper && confirmLower) {
  userSelection = upperCase.concat(lowerCase);
    console.log(userSelection);
} else if (confirmUpper && confirmNumber) {
  userSelection = lowerCase.concat(number);
    console.log(userSelection);
} else if (confirmUpper && confirmSpecial) {
  userSelection = upperCase.concat(specialChar);
    console.log(userSelection);
} else if (confirmLower && confirmNumber) {
  userSelection = lowerCase.concat(number);
    console.log(userSelection);
} else if (confirmLower && confirmSpecial) {
  userSelection = lowerCase.concat(specialChar);
    console.log(userSelection);
} else if (confirmNumber && confirmSpecial) {
  userSelection = number.concat(specialChar);
    console.log(userSelection);

// Choosing one option:
} else if (confirmUpper) {
  userSelection = upperCase;
    console.log(userSelection);
} else if (confirmLower) {
  userSelection = lowerCase;
    console.log(userSelection);
} else if (confirmNumber) {
  userSelection = number;
    console.log(userSelection);
} else if (confirmSpecial) {
  userSelection = specialChar;
    console.log(userSelection);
};






