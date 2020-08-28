const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'oolyakuz@hotmail.com',
        pass: '****'
    }
});


let mailOptions = {
    from: 'oolyakuz@hotmail.com',
    to: 'oolyakuz@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Hello!'

};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error)
    } else {
        console.log('Email sent: ' + info.response)
    }
});