// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  function generatePassword() {
    var lengthPrompt = window.prompt("How long do you want your password? Please choose between 8 and 128");
    if (lengthPrompt >= 8 && lengthPrompt <= 128) {
      var numberRequest = window.prompt("Do you want your password to include numbers? Please type yes or no.")
    }else {
      window.alert("Please choose a valid number between 8 and 128");
    }
    var makeNumPromptUppercase = numberRequest.toUpperCase();
    if (makeNumPromptUppercase === "YES" || makeNumPromptUppercase === "NO") {
      var lowercaseRequest = window.prompt("Do you want your password to include lowercase letters? Please type yes or no.")
    } else {
      window.alert("Please type yes or no");
     // HOW DO I GET THIS TO RETURN TO LOWERCASEREQUEST PROMPT
    }

    var makeLowercasePromptUppercase = lowercaseRequest.toUpperCase();
    if (makeLowercasePromptUppercase === "YES" || makeLowercasePromptUppercase === "NO") {
      var uppercaseRequest = window.prompt("Do you want your password to include uppercase letters? Please type yes or no.")
    } else {
      window.alert("Please type yes or no");

}
var makeUppercasePromptUppercase = uppercaseRequest.toUpperCase();
    if (makeUppercasePromptUppercase === "YES" || makeUppercasePromptUppercase === "NO") {
      var symbolRequest = window.prompt("Do you want your password to include symbols? Please type yes or no.")
    } else {
      window.alert("Please type yes or no");
    }





  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


