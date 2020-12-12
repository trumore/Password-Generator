var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var passwordString = [];
var generatePassword = document.getElementById("generate");
var passwordText = document.querySelector("#password");
// these are to identify the strings of the characters, letters, and numbers
var character = ["~!@#$%^&*()_+}{?><]"];
var numbers = ["123456789"];
var alphabetLower = ["abcdefghijklmnopqrstuvwxyz"];
var alphabetUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

generatePassword.addEventListener("click", createPassword);

function createPassword() {
  var passLength = parseInt(
    prompt(
      "How many characters would you like your password? choose a number between 8 and 128"
    )
  );

  while (passLength < 8 || passLength > 128 || !passLength) {
    passLength = parseInt(
      prompt("Your choice must be a number between 8 and 128")
    );
  }

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
  if (
    !confirmUppercase &&
    !confirmLowercase &&
    !confirmNumber &&
    !confirmCharacter
  ) {
    alert("You must select a minimum of one character type");
  }
  var newPass = "";

  if (passLength >= 8 || passLength <= 128) {
    for (var i = 0; i < passLength; i++) {
      newPass += passwordString.charAt(
        Math.floor(Math.random() * passwordString.length)
      );
      console.log(newPass);
      passwordText.value = newPass;
    }
  }
}
