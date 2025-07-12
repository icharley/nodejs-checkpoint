// prompt and run: npm install nodemailer to install the 'nodemailer' package:

// Require the installed 'nodemailer' module.
import { createTransport } from "nodemailer";

// --- IMPORTANT SECURITY NOTE ---
// Do NOT hardcode your email and password directly in the code for production.
// Use environment variables (e.g., process.env.EMAIL_USER, process.env.EMAIL_PASS)
// or a configuration file that is not committed to version control.
// For this exercise, you can temporarily put your details here.
// Remember to DELETE your personal information before uploading to GitHub!

let transporter = createTransport({
  service: "gmail", // Or your email service, e.g., 'Outlook', 'Yahoo', or a specific host/port
  auth: {
    user: "YOUR_EMAIL@gmail.com", // Replace with your email address
    pass: "YOUR_EMAIL_PASSWORD", // Replace with your email password or App Password
  },
});

// Define the email options (sender, recipient, subject, body).
let mailOptions = {
  from: "YOUR_EMAIL@gmail.com", // Sender address
  to: "RECIPIENT_EMAIL@example.com", // Recipient address (can be your own email for testing)
  subject: "Hello from Node.js!", // Subject line
  text: "This is a test email sent from a Node.js application using Nodemailer.", // Plain text body
  // html: '<b>This is a test email sent from a Node.js application using Nodemailer.</b>' // HTML body (optional)
};

// Send the email.
transporter.sendMail(mailOptions, (error, info) => {
  // Check for errors during sending.
  if (error) {
    return console.log("Error sending email:", error);
  }
  // Log success message.
  console.log("Email sent:", info.response);
});

// To run this file:
// 1. Save it as email-sender.js
// 2. Open your terminal or command prompt
// 3. Navigate to the directory where you saved the file
// 4. Run the command: node email-sender.js
// 5. Check your recipient's inbox (and spam folder) for the email.
