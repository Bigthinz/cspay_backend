const nodemailer =  require('nodemailer')


const sendMail = async (options) =>{

	// 1)create transporter
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth:{
			user: 'king@gmail.com',
			pass:'abcd12345'
		},
        tls:{
            rejectUnauthorized:false
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






// import { IAppointment } from "../models/appointment";

// const nodemailer = require('nodemailer');
// const hbs = require("nodemailer-express-handlebars");
// require("dotenv").config();

// export class MailerService{


//     mailTransporter:any;
  
//     constructor() {
//         this.mailTransporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.GMAIL,
//                 pass: process.env.GMAIL_PASS
//             }
//         });

//         const options = {
//             viewEngine: {
//                 partialsDir: __dirname + "./../../assets/templates",
//                 layoutsDir: __dirname + "./../../assets/templates/layouts",
//                 defaultLayout: "main",
//                 extname: ".hbs"
//             },
//             extName: ".hbs",
//             viewPath: "assets/templates"
//         };

//     this.mailTransporter.use("compile", hbs(options));
//     }

//   sendConfirmationEmail(email , mailData){

      
//     const  mailOptions = {
//             from: `"Nana Adwoa" <${process.env.GMAIL}>`,
//             to: `${email}`,
//             subject: `Hey, here's your PIN`,
//             template: "email_confirmation",
//             context: mailData,
//         };       

//         this.mailTransporter.sendMail(mailOptions, (error: any, info: any) => {
//             console.log("Sending Emails:::");
//                 if (error) {
//                     return console.log(error);
//                 }
//                 console.log('Message sent: %s', info);
//         });
//     }

//     sendAppointDetailsEmail(email : string,mailData: IAppointment){

//       const  mailOptions = {
//             from: `"Nana Adwoa" <${process.env.GMAIL}>`,
//             to: `${email}`,
//             subject: 'Appointment Details',
//             template: "appointment_details",
//             context: mailData,
//         };       

//       this.mailTransporter.sendMail(mailOptions, (error: any, info: any) => {
//           console.log("Sending Emails:::");
//             if (error) {
//                 return console.log(error);
//             }
//             console.log('Message sent: %s', info.messageId);
//     });
//     }
// }