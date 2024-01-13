const passwordBox = document.getElementById("Password");
// Length of password
const lengthSlider = document.getElementById("length");

// character set
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+={}[];:'`~<,>.?/|";

// generate password arrow function
const generatePassword = () => {
    let password = "";
    const passWordBox = document.getElementById("Password");
    const lengthOfPassword = document.getElementById("length");
    const passwordLength = parseInt(lengthOfPassword.value);
    // If the password should have atleast one character from each set
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    const all = upperCase + lowerCase + numbers + symbols;
    // loop to generate password, from 0 to length, we will add one character at a time randomly from the all strings
    while (passwordLength > password.length) {
        // Math.floor(Math.random() * all.length) will generate a random number from 0 to all.length - 1 and we will add that character to the password string using password += all[random number]
        password += all[Math.floor(Math.random() * all.length)];
    }
    // return the password and display it in passwordBox
    passwordBox.value = password;
}


const copyPassword = () => {
    // select the passwordBox
    passwordBox.select();
    // copy the password from passwordBox
    document.execCommand("copy");
    // alert copied
    alert("Password copied to clipboard");
}
