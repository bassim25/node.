// password-generator.js
const generatePassword = require('generate-password');

function generateRandomPassword() {
    const password = generatePassword();
    console.log('Generated Password:', password);
}

generateRandomPassword();
