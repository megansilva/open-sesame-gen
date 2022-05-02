// Assignment code here

// How many charcters would you like your password to contain?
// Click OK to confirm including uppercase charcters?
// Click OK to confirm including lowercase charcters?
// Click OK to confirm including special charcters?
// Click OK to confirm including numeric charcters?
// Ends with password being generated!


// STARTING OVER FOR REDO //

const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const special = '!@#$%^&*()_-:;<>?/';
let len = 0;
let temp = '';
let password = '';

document.querySelector('button').addEventListener('click', handleClick);

// start function for click and questions //
function handleClick() {
  temp = ''
  len = prompt("How many characters would you like your password to contain? Choose between 8 and 128 characters.");

  if (len < 8) {
    alert("You MUST choose a number greater than or equal to 8");
    return handleClick();
  };

  if (len > 128) {
    alert("You MUST choose a number less than or equal to 128");
    return handleClick();
  };

  if (isNaN(len)) {
    alert("You MUST insert a number between 8-128");
    return handleClick();
  };

  let upperCase = confirm('Click OK to confirm including uppercase letters in your password.');

  if (upperCase) {
    temp += alpha;
  };

  let lowerCase = confirm('Click OK to confirm including lowercase letters in your password.');

  if (lowerCase) {
    temp += alpha.toLowerCase();
  };

  let numBers = confirm('Click OK to confirm including numbers in your password.');

  if (numBers) {
    temp += numbers;
  }; 

  let specialChar = confirm('Click OK to confirm including special charcters in your password.');

  if (specialChar) {
    temp += special;
  };

  for (let i = 0; i < len; i ++) {
    password += temp[Math.floor(Math.random() * temp.length)];
  };

  document.getElementById("password").innerText = password;
}