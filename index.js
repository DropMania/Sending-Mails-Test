var nodemailer = require('nodemailer')
require('dotenv').config()

async function main() {
    let transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    let info = await transporter.sendMail({
        from: process.env.FROM,
        to: process.env.TO,
        subject: 'Hello ✔',
        text: 'Hello world?',
        html: '<b>Hello world?</b>'
    })

    console.log('Message sent: %s', info.messageId)
}

main().catch(console.error)
