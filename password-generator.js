// password-generator.js

// First, I install the 'generate-password' package: npm install generate-password

// Require the installed 'generate-password' module.
import { generate } from "generate-password";

// Define a function to generate and log a random password.
function generateRandomPassword() {
  // Generate a random password with specified options.
  // 'length': the length of the password.
  // 'numbers': include numbers.
  // 'symbols': include symbols.
  // 'uppercase': include uppercase letters.
  // 'excludeSimilarCharacters': exclude characters that look similar (e.g., 'l', '1', 'I', 'o', '0', 'O').
  const password = generate({
    length: 12, // You can change the length as desired
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  });

  // Log the generated password to the console.
  console.log("Generated Password:", password);
}

// Call the function to generate a password when the script runs.
generateRandomPassword();
