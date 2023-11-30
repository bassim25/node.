// email-sender.js
const nodemailer = require('nodemailer');

// configure transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com',  // replace with your Gmail address
        pass: 'your_password'          // replace with your Gmail password
    }
});

// configure mail options
const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'recipient_email@example.com',
    subject: 'Test Email',
    text: 'Hello, this is a test email!'
};

// send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
