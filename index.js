// // Load environment variables from .env file
// require('dotenv').config();
// const nodemailer = require('nodemailer');

// // 1. Setup transporter
// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   secure: true, // true = port 465, false = 587
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// // 2. Setup email options
// const mailOptions = {
//   from: `"Raj 👨‍💻" <${process.env.SMTP_USER}>`,
//   to: 'srikar.k@zynlogic.com', // change this to the receiver's email
//   subject: 'SMTP Test from Node.js ✅',
//   html: '<h2>Hello from Node.js!</h2><p>This is a test email using SMTP.</p>',
// };

// // 3. Send the email
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.error('❌ Error:', error);
//   } else {
//     console.log('✅ Email sent:', info.response);
//   }
// });
