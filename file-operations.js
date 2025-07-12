// file-operations.js

// Require the built-in 'fs' (File System) module.
import { writeFile, readFile } from "fs";

// --- Part 1: Create a file named "welcome.txt" with content "Hello Node" ---

// The fs.writeFile() method is used to write data to a file.
// If the file exists, its content is overwritten. If it doesn't exist, it's created.
// The third argument is the content to write.
// The fourth argument is a callback function that runs after the write operation completes.
writeFile("welcome.txt", "Hello Node", (err) => {
  // Check for any errors during the file write operation.
  if (err) {
    console.error("Error creating welcome.txt:", err);
    return; // Exit if there's an error
  }
  console.log("welcome.txt created successfully!");

  // --- Part 2: Read and console.log data from welcome.txt ---

  // The fs.readFile() method is used to read the content of a file.
  // The first argument is the file path.
  // The second argument is the encoding ('utf8' to get the content as a string, otherwise it's a Buffer).
  // The third argument is a callback function that is executed after the file is read.
  readFile("welcome.txt", "utf8", (err, data) => {
    // Check for any errors during the file read operation.
    if (err) {
      console.error("Error reading welcome.txt:", err);
      return; // Exit if there's an error
    }
    // Log the content of the file to the console.
    console.log("Content of welcome.txt:", data);
  });
});

// To run this file Run the command: node file-operations.js
