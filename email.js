const nodemailer =  require('nodemailer')


const sendMail = async (options) =>{

	// 1)create transporter
	const transporter = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port:process.env.EMAIL_PORT,
		auth:{
			user: process.env.EMAIL_USERNAME,
			pass:process.env.EMAIL_PASSWORD
		}
	})

	//2) define email optons
	const mailOptions = {
		from: 'King David <king@gmail.com>',
		to: options.email,
		subject: options.subject,
		text: options.message
	}

	//3) send actual email
	await transporter.sendMail(mailOptions)
}


module.exports = sendMail