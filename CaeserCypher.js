alert("The CaeserCypher is working Sire");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetFull = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// function isCapital made because we have to have a code that determines 
// if letters are Capital or not.

function isCapital(letter) {
    if (alphabet.indexOf(letter.toLowerCase()) !== alphabet.indexOf(letter)) {
        return true;
    }
    else {
        return false; 
    }
}

// helper function that supports the encryption by adding a random
// letter in every 2 letters. 
function randomLetter() {
    const randomIndex = Math.floor(Math.random() * alphabetFull.length);
    return alphabetFull[randomIndex];
}


function encryptLetter(letter, shift) {
    const index = alphabet.indexOf(letter.toLowerCase());

 // this make sures the non-alphabetical integers are returned as is.
    if (index === -1) {
        return letter;
    }
 // makes sure that the index continues to wrap around after Z
    const newIndex = (index + shift) % alphabet.length;

 // this makes it that "if the letter is true -- isCapital then return it to uppercase
 //  if not then return it as normal"
    if (isCapital(letter)) {
        return alphabet[newIndex].toUpperCase();
    }

    else {
        return alphabet[newIndex];
    }
}


// This encryption adds a random letter every two letters 

function encrypt(message, shiftValue)
{
  let encryptedMessage = "";
  let counter = 0;

// loop for the encryption
  for (let i = 0; i < message.length; i++) {
// counter is made so that every 2 letters, we can add a random letter. and counter 
// goes back to zero

        if (counter === 2) {
            encryptedMessage += randomLetter();
            counter = 0;
        }

        encryptedMessage += encryptLetter(message[i], shiftValue);
        counter++;
    }

  return encryptedMessage;
}


function decryptLetter(letter, shift) {

    const index = alphabet.indexOf(letter.toLowerCase());
// return if letter is not an alpha int.
    if (index === -1) {
        return letter;
    }
// reverse of encrypted letter logic. 
    let newIndex = (index - shift) % alphabet.length;
// we make sure that there are no negative numbers. add length of alphabet if value becomes negative. 
    if (newIndex < 0) {
        newIndex +=alphabet.length;
    }
// this makes sure that the capital letters are accounted for. 
    if (isCapital(letter)) {
        return alphabet[newIndex].toUpperCase();
    } else {
        return alphabet[newIndex];
    }
}



function decrypt(encryptedMessage, shiftValue) {
    let decryptedMessage = "";
    let counter = 0;
// resets counter
    for (let i = 0; i < encryptedMessage.length; i++) {
        if (counter === 2) {
            counter = 0; 
        }
        else {
        // decryptMessage using the logic of the decryptLetter which uses the encryptedMessage with the loop 
        // of the current i. counter goes up, counter goes to 2, it resets to 0. 
            decryptedMessage += decryptLetter(encryptedMessage[i], shiftValue);
            counter++;
        }
    }

 return decryptedMessage;
}

