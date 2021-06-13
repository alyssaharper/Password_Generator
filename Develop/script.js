// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  function generatePassword() {
    var lengthPrompt = window.prompt("How long do you want your password? Please choose between 8 and 128");
    if (lengthPrompt >= 8 && lengthPrompt <= 128) {
      var numberRequest = window.confirm("Do you want your password to include numbers? Please click 'OK' for yes or 'Cancel' for no.");
    } else {
      window.alert("Please choose a valid number between 8 and 128");
    }
    if (numberRequest === true || numberRequest === false) {
      var lowercaseRequest = window.confirm("Do you want your password to include lowercase letters? Please click 'OK' for yes or 'Cancel' for no.");
    } 
    if (lowercaseRequest === true || lowercaseRequest === false) {
      var uppercaseRequest = window.confirm("Do you want your password to include uppercase letters? Please click 'OK' for yes or 'Cancel' for no.");
    }
    if (uppercaseRequest === true || uppercaseRequest === false) {
      var symbolRequest = window.confirm("Do you want your password to include symbols? Please click 'OK' for yes or 'Cancel' for no.");
    }

    function getRandomLowercase() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    function getRandomUppercase() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    function getRandomNum() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
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

    var generatedArr = [{ numberRequest }, { lowercaseRequest }, { uppercaseRequest
     }, { symbolRequest }].filter(item => Object.values(item)[0]);
        // console.log(generatedArr);
    
    if(typesCount === 0) {
        return window.alert("You must select at least character type.")
    }


  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);