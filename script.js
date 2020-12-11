var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var passwordString;
var generatePassword = document.getElementById("generate");
var passDisplay = document.getElementById("password");
// these are to identify the strings of the characters, letters, and numbers
var character = [
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
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var alphabetLower = [
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
var alphabetUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

generatePassword.addEventListener("click", createPassword);

function createPassword() {
  var passLength = parseInt(
    prompt(
      "How many characters would you like your password? choose a number between 8 and 128"
    )
  );
  if (!passLength) {
    alert("You must choose a number");
  } else if (passLength < 8 || passLength > 128) {
    parseInt(prompt("Your choice must be between 8 and 128"));
  } else {
    confirmNumber = confirm("Do you want your password to contain numbers?");
    confirmCharacter = confirm(
      "Do you want your password to include Special Characters?"
    );
    confirmUppercase = confirm(
      "Do you want your password to include Uppercase letters?"
    );
    confirmLowercase = confirm(
      "Do you want your password to contain Lowercase letters?"
    );
  }

  if (confirmNumber) {
    passwordString += numbers;
    console.log("number");
  }
  if (confirmCharacter) {
    passwordString += character;
    console.log("character");
  }
  if (confirmLowercase) {
    passwordString += alphabetLower;
    console.log("lower");
  }
  if (confirmUppercase) {
    passwordString += alphabetUpper;
    console.log("upper");
  }
}
