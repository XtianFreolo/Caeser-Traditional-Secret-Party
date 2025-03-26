alert("The CaeserCypher is working Sire");

const alphabet = "abcdefghijklmnopqrstuvwxyz";

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





function encrypt (message, shiftValue)
{
  // Your encryption code here
  return encryptedMessage;
}

function decrypt (encryptedMessage, shiftValue)
{
  // Your decryption code here
  return decryptedMessage;
}

