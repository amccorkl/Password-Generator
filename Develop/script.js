// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "1234567890".split("");
var specialCharacters = "!@#$%^&*()<>?".split("");

//complete array of choices as confirmed by user
var possibleChars = [];
//randomized choices from possibleChars with the length limit
var userChoices = [];



// Generate password to the #password input
function generatePassword() {
  
    //prompt user for length 8-128
    var passwordLength = prompt("Please choose a number between 8-128");
    console.log(passwordLength);
    
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please choose a number between 8 and 128");
      return;
    }

    //validate at least 1 other character type
    // uppercase
   var upperCase = confirm("Would you like to include uppercase letters? Yes, click ok. No, click cancel.");
    if (upperCase) {
      possibleChars = possibleChars.concat(uppercase);
      console.log(uppercase);
    }
  
    //lowercase
    var lowerCase = confirm("Would you like to include lowercase letters?");
    if (lowerCase) {
      possibleChars = possibleChars.concat(lowercase);
    }

    //numeric
    var numeric = confirm("Would you like to include numbers?");
    if (numeric) {
      possibleChars = possibleChars.concat(numbers);
    }

    //special character
    var specials = confirm("Would you like to include special characters?");
    if (specials) {
      possibleChars = possibleChars.concat(specialCharacters);
      console.log(specialCharacters, specials, possibleChars);
    }

    //if even 1 isn't chosen, this throws the choices off
    if (!upperCase && !lowerCase && !numeric && !specials) {
      window.alert("You must choose one of the character types for your password. Please refresh the screen and restart.")
      return;
    }

    //loop through confirmed characters with length limit
    for (var i = 0; i < passwordLength; i++) {
      var randomizedChoices = possibleChars[Math.floor(Math.random()* possibleChars.length)];
      userChoices.push(randomizedChoices);
    }
    //not all the chosen characters appear?????, only ","


    userChoices = userChoices.join("");
    console.log(userChoices);
    // return userChoices;
}



function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
     
    password = userChoices;

    passwordText.value = password;
}
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

