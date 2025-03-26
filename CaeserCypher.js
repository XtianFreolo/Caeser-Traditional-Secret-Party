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



function encrypt (message, shiftValue)
{
  let encryptedMessage = "";
  let counter = 0;

  for (let i = 0; i < message.length; i++) {

        if (counter === 2) {
            encryptedMessage += randomLetter();
            counter = 0;
        }

        encryptedMessage += encryptLetter(message[i], shiftValue);
        counter++;
    }

  return encryptedMessage;
}





function decrypt (encryptedMessage, shiftValue)
{
  // Your decryption code here
  return decryptedMessage;
}

