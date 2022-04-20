// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

var generatePassword = function() {
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialArray = ["!", "@", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "|", "~", "{", "}"];

  var bulkArray = [];
  var optionLengthArray = [];

  var passwordLengthPrompt = window.prompt(
    "How many characters would you like in you password? Enter a number between 8 and 128."
  );

  if (passwordLengthPrompt < 8) {
    alert("You must have at least 8 characters.")
    return generatePassword();
  };

  if (passwordLengthPrompt > 128) {
    alert("Your password may not exceed 128 characters.")
    return generatePassword();
  };

  var passwordLowercaseConfirm = window.confirm(
    "Would you like your password to contain lowercase letters?"
  );
  var passwordUppercaseConfirm = window.confirm(
    "Would you like your password to contain uppercase letters?"
  );
  var passwordNumberConfirm = window.confirm(
    "Would you like your password to contain numbers?"
  );
  var passwordSpecialConfirm = window.confirm(
    "Would you like your password to contain special characters?"
  );


if (passwordLowercaseConfirm) {
  bulkArray = bulkArray.concat(lowercaseArray);
}

if (passwordUppercaseConfirm) {
  bulkArray = bulkArray.concat(uppercaseArray);
}

if (passwordNumberConfirm) {
  bulkArray = bulkArray.concat(numberArray);
}

if (passwordSpecialConfirm) {
  bulkArray = bulkArray.concat(specialArray);
}

if (!passwordUppercaseConfirm && !passwordLowercaseConfirm && !passwordNumberConfirm && !passwordSpecialConfirm) {
  alert("You must choose at least one character type.")
  return generatePassword();
}

for (var i = 0; i < passwordLengthPrompt; i++) {
  optionLengthArray.push (bulkArray[Math.floor(Math.random() * bulkArray.length)]);
}
return optionLengthArray.join("");
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
