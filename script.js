var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// these are to identify the strings of the characters, letters, and numbers
character = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Space is for the Uppercase conversion
space = [];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};
// for turning lowercase to uppercase
alphabet2 = alphabet.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  pass = generatePassword();
  document.getElementById("password").placeholder = pass;
});

function generatePassword() {
  // Begin sequence by asking for password length
  enter = parseInt(
    prompt(
      "How many characters would you like your password? Choose between 8 and 128"
    )
  );
  // if outside of limits, returns an alert for lack of value
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    // Validating user inputs
    confirmNumber = confirm("Do you want your password to contain numbers?");
    confirmCharacter = confirm(
      "Do you want your password to contain special characters?"
    );
    confirmUppercase = confirm(
      "Do you want your password to contain Uppercase letters?"
    );
    confirmLowercase = confirm(
      "Do you want your password to contain Lowercase letters?"
    );
  }

  // Else if for 4 negative options
  if (
    !confirmCharacter &&
    !confirmNumber &&
    !confirmUppercase &&
    !confirmLowercase
  ) {
    choices = alert("You must select password criteria");
  }
  // First if statement that uses user input prompts to determine choices
  // Else if for 4 positive options
  else if (
    confirmCharacter &&
    confirmNumber &&
    confirmUppercase &&
    confirmLowercase
  ) {
    choices = character.concat(number, alphabet, alphabet2);
  }
  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alphabet2);
  } else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alphabet);
  } else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alphabet, alphabet2);
  } else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alphabet, alphabet2);
  }
  // Else if for 2 positive options
  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);
  } else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alphabet);
  } else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alphabet2);
  } else if (confirmLowercase && confirmNumber) {
    choices = alphabet.concat(number);
  } else if (confirmLowercase && confirmUppercase) {
    choices = alphabet.concat(alphabet2);
  } else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alphabet2);
  }
  // Else if for 1 positive option
  else if (confirmCharacter) {
    choices = character;
  } else if (confirmNumber) {
    choices = number;
  } else if (confirmLowercase) {
    choices = alphabet;
  }
  // Created space variable to fill uppercase conversion
  else if (confirmUppercase) {
    choices = space.concat(alphabet2);
  }

  // password variable is an array placeholder for user generated amount of length
  var password = [];

  // Start random selection variables:
  // Random selection for all variables:
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  // This joins the password array and converts it to a string
  var pass = password.join("");
  UserInput(pass);
  return pass;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(pass) {
  document.getElementById("password").textContent = pass;
}
