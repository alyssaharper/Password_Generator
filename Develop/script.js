// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  function generatePassword() {
      // asks for length of password and if not proper length selected, gives an alert to tell them to input a correct number
    var lengthPrompt = window.prompt("How long do you want your password? Please choose between 8 and 128");
    if (lengthPrompt >= 8 && lengthPrompt <= 128) {
      var numberRequest = window.confirm("Do you want your password to include numbers? Please click 'OK' for yes or 'Cancel' for no.");
    } else {
      window.alert("Please choose a valid number between 8 and 128");
    }
    // once yes or no is chosen for if they want to include numbers, window.confirm initiates to ask about lowercase letters
    if (numberRequest === true || numberRequest === false) {
      var lowercaseRequest = window.confirm("Do you want your password to include lowercase letters? Please click 'OK' for yes or 'Cancel' for no.");
    } 
    // once yes or no is chosen for if they want to include lowercase letters, window.confirm initiates to ask about uppercase letters
    if (lowercaseRequest === true || lowercaseRequest === false) {
      var uppercaseRequest = window.confirm("Do you want your password to include uppercase letters? Please click 'OK' for yes or 'Cancel' for no.");
    }
    // once yes or no is chosen for if they want to include uppercase letters, window.confirm initiates to ask about symbols
    if (uppercaseRequest === true || uppercaseRequest === false) {
      var symbolRequest = window.confirm("Do you want your password to include symbols? Please click 'OK' for yes or 'Cancel' for no.");
    }
// gets a random lowercase letter
    function getRandomLowercase() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    // gets a random uppercase letter
    function getRandomUppercase() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    //gets a random number
    function getRandomNum() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    //gets a random symbol
    function getRandomSymbol() {
        var symbols = '!@#$%^&*(){}[]=<>,.?-_';
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
    var getRandom = {
        lower: getRandomLowercase,
        upper: getRandomUppercase,
        number: getRandomNum,
        symbol: getRandomSymbol
    };

    var typesCount = numberRequest + lowercaseRequest + uppercaseRequest + symbolRequest;

        // console.log(typesCount)
// Makes an array that sets all variables to true and then proceeds to filter out anyone that said false
    var generatedArr = [{ numberRequest }, { lowercaseRequest }, { uppercaseRequest
     }, { symbolRequest }].filter(item => Object.values(item)[0]);
        // console.log(generatedArr);
  // Checks to make sure that at least one option of character type was selected otherwise they are prompted to try again and select a character type.  
    if(typesCount === 0) {
        return window.alert("You must select at least character type.")
    }


  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);