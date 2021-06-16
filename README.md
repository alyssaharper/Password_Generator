# 03 JavaScript: Password Generator

URL: https://alyssaharper.github.io/Password_Generator/

![image](https://user-images.githubusercontent.com/84295382/122144953-63974500-ce22-11eb-94fc-892ad997f0a4.png)

## Description

First I created the prompts to select the length, and then whether they want their password to contain uppercase letters, lowercase letters, numbers, and symbols. 

Once they choose this I have created function that pulls in a random uppercase letter, lowercase letter, number, or symbol.

I then created an object that stored all my functions.

After that I stored all of my prompts in a variable to keep track of how many types were selected.

Made an array that cycles through the different prompts and filters out anytime someone selects false.

Set an alert that if no character type is selected that they are required to select one.

I then generated a loop that loops through the different prompts and and if that was selected as an option I activate the function and add it to the empty created variable as a string. I then return the password into the password generator.


