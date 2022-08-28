const express = require("express");
const body_parser=require("body-parser");
const axios=require("axios");
require('dotenv').config();

const {sendToWhatsapp} = require('./whatsapp')

// const dialogflow = require('@google-cloud/dialogflow');
const { SessionsClient } = require("@google-cloud/dialogflow-cx/build/src/v3/sessions_client");
const fs = require('fs');
const { detectIntentText } = require("./dialogflow_api");
// const sendMail = require("./email");

const app=express().use(body_parser.json());

console.log('hery')

/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const projectId = 'my-project';
// const location = 'global';
// const agentId = 'my-agent';
// const audioFileName = '/path/to/audio.raw';
// const encoding = 'AUDIO_ENCODING_LINEAR_16';
// const sampleRateHertz = 16000;
// const languageCode = 'en'

// Imports the Google Cloud Some API library
// const {SessionsClient} = require('@google-cloud/dialogflow-cx');
// /**
//  * Example for regional endpoint:
//  *   const location = 'us-central1'
//  *   const client = new SessionsClient({apiEndpoint: 'us-central1-dialogflow.googleapis.com'})
//  */
// const client = new SessionsClient();

// const fs = require('fs');
// const util = require('util');
// // Assumes uuid module has been installed from npm,
// // npm i uuid:
// const {v4} = require('uuid');


// // app.post('/api/messages', async (req, res) => {
    
// // }

// async function detectIntentAudio() {
//   const sessionId = v4();
//   const sessionPath = client.projectLocationAgentSessionPath(
//     projectId,
//     location,
//     agentId,
//     sessionId
//   );

//   // Read the content of the audio file and send it as part of the request.
//   const readFile = util.promisify(fs.readFile);
//   const inputAudio = await readFile(audioFileName);

//   const request = {
//     session: sessionPath,
//     queryInput: {
//       audio: {
//         config: {
//           audioEncoding: encoding,
//           sampleRateHertz: sampleRateHertz,
//         },
//         audio: inputAudio,
//       },
//       languageCode,
//     },
//   };
//   const [response] = await client.detectIntent(request);
//   console.log(`User Query: ${response.queryResult.transcript}`);
//   for (const message of response.queryResult.responseMessages) {
//     if (message.text) {
//       console.log(`Agent Response: ${message.text.text}`);
//     }
//   }
//   if (response.queryResult.match.intent) {
//     console.log(
//       `Matched Intent: ${response.queryResult.match.intent.displayName}`
//     );
//   }
//   console.log(
//     `Current Page: ${response.queryResult.currentPage.displayName}`
//   );
// }

// detectIntentAudio();







const token=process.env.TOKEN
const mytoken=process.env.MYTOKEN;//prasath_token


//to verify the callback url from dashboard side - cloud api side
app.get("/webhook",(req,res)=>{
   let mode=req.query["hub.mode"];
   let challange=req.query["hub.challenge"];
   let token=req.query["hub.verify_token"];


    if(mode && token){

        if(mode==="subscribe" && token===mytoken){
            res.status(200).send(challange);
        }else{
            res.status(403);
        }

    }

});


    app.post("/webhook",sendToWhatsapp);//i want some 
      




// const CREDENTIALS = JSON.parse(fs.readFileSync('./credentials.json', 'utf-8'));

// const PROJECID = CREDENTIALS.project_id;

// const CONFIGURATION = {
//     credentials: {
//         private_key: CREDENTIALS.private_key,
//         client_email: CREDENTIALS.client_email
//     }
// }

// const sessionClient = new SessionsClient(CONFIGURATION);

// const detectIntent = async (languageCode, queryText, sessionId) => {

//     let sessionPath = sessionClient.projectLocationAgentSessionPath(PROJECID, sessionId);

//     let request = {
//         session: sessionPath,
//         queryInput: {
//             text: {
//                 text: queryText,
//                 languageCode: languageCode,
//             },
//         },
//     };

//     try {
//         const responses = await sessionClient.detectIntent(request);
//         console.log(responses)
//         const result = responses[0].queryResult;
//         console.log(result)

//         return {
//             status: 1,
//             text: result.fulfillmentText
//         };
//     } catch (error) {
//         console.log(`Error at dialogflow-api.js detectIntent --> ${error}`);
//         return {
//             status: 0,
//             text: 'Error at dialogflow detect intent.'
//         };
//     }
// };

// detectIntent('en','HEllo from king', 'abc12345')

// module.exports = {
//     detectIntent
// };




    // [START dialogflow_cx_detect_intent_text]
    /**
     * TODO(developer): Uncomment these variables before running the sample.
     */
    // const projectId = 'grecords';
    // const location = 'us-central1';
    // const agentId = '8660fa0e-390d-4cd3-a960-553066b8111b';
    // const query = 'Hello';
    // const languageCode = 'en'

 
  
    
    // Imports the Google Cloud Some API library
    // const {SessionsClient} = require('@google-cloud/dialogflow-cx');
    /**
     * Example for regional endpoint:
     *   const location = 'us-central1'
     *   const client = new SessionsClient({apiEndpoint: 'us-central1-dialogflow.googleapis.com'})
     */
    // const client = new SessionsClient(
    //     {
    //         apiEndpoint: 'us-central1-dialogflow.googleapis.com',
    //         projectId : 'grecords',
    //         credentials : {
    //             client_email : 'csitsapay@grecords.iam.gserviceaccount.com',
    //             private_key:'-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCkZstxSz6eogMr\nCZbOOESsCeO+rO1X42Ur2zn4PM5vwsZg6bv2nX4XLWKWYqnA6PpZd/L+81LyccxY\nKuG2o3QRGP4P2+DcX48uydPMgkc3GRm14rN49vm6f4CwB8YKxGLApZi6UD5HrKD1\nxZhw89cy4A4+v5dRsMck58Oq6+Jnq7rj8kyx96dPzyYHIgfGUwY9wbDaVwa61nbZ\nxUGCODQ0Vue1aqsKr81zV3q4Jg2px5XxiAR7yTAnv+7HJJ/EMtNBZvyNrFoyyYQk\n7M8dh8uZZIJMHQWRawuogwwnP+XoORNhJP8tOz4yACAGya1XXAIrjxO2FGkzql9H\ncusKa5XNAgMBAAECggEACP1D74h1PphOQwqtr83810ldJh5vheg9rnW4yD2O7iaA\n0WjGadg3vk2xf9aaQJ2cnsrDwzQL24zkZwfFOsbaQFsU/UoBFBu3iQ/pIFwZR8Z8\nFOl19c3PXua84yMxrYIKgk0rujhMB4BFdtrcmISExlfg/4ZbYFChuv9fQBfQ0+lG\nCeF1PxLPpQeac8eWcokhfzCR26s41HpWh+7t/oKJFCKk5lPWEOfTMUxRVTwWM2wR\nTwoSk4yRsXRLJfK8vFqN2MCJnpxwh9wS7ng/wk0yhVRpxBNI61lGIERgAm+08bsj\nMYu6l5LzytCMKeSxCYcTR9BWsEmRvkWSpwxrExOeYwKBgQDNzqH2N6lYbyf75Ja+\nMHSxKFq681SAWwYUHmiYgEEOty9fpF6yqaSSYiRmHoQNIIIk5kSbVmmokUcz/dNy\nmuQ2XGouUtIGN+UEx5xd6v8ne4xJutxAMBf9TbVBxVLXbTCQQJ22XxKxBjkhD3pe\njuTAMVrm2xwypIxiLKdJTmuRBwKBgQDMfwsIiTuBExIlJIF78NcB8SRypxo09K4P\nDtc32nUxg5qLiIvsnDPocJG6J7rU4vqX3PrJAgAtd2WTqBIVQjfqtHQLsS/CJxHg\nO2dbjEOAUu2cJ05YP45Q7ref9iVAYoYkbBSLVCNht6E03uNee+AtzcvWzHL6Yijj\ncxaiKdKxiwKBgQDLHN4dKEvaOkGkyLG43Aued6wri1BfKPYzztr9fr42LrXzVz4a\nZ3BDA9bWbdF3PxkSH6uf/sViFpbGCgCvv4vw1n34X8ZlWq6MbA+3ZOAScE1Aysjq\nFEzosdNsKLkcYOenxg2gWe4RhYnGRgdH4RCDWXJUGfSXSmw9y8IBiAKC6wKBgQDJ\nSqyTpHHcJeeQhBSo6XLayIE2EmJrigXjcJpMsk71hDOV8by6FS/LNzNa6EyxzRMa\ndTyuq7d9CbAE3kWeg2YDM8me0LTQCiFAdXjR1omDQR3+vXoSx8zQwYoifOpCLDka\nlQDL/PAu+dBG+LcahBkxPQfO0cTDzeetq9W1njF07QKBgH+KZ44P++aoTvfF3Gnd\nV10hN5wdn10Z6UW/Ne+XaMzIVxifwMYFQJ5K+9qD7hxG0gpglFitQKRcFKaDIuxu\nBp6VfnOla7SLb0pznNjWKE2CZB/+BVH82f2AVtMMDU6GnIkdhTu1805oihiwjlQg\nspb8CsSBE+tofO5RraKvnEP2\n-----END PRIVATE KEY-----\n",                '
    //         },
    //         language: "en"
    //     }
    // );
  
    // async function detectIntentText(queryInput) {
    //     const sessionId = '123456788'

    // //   const sessionId = Math.random().toString(36).substring(7);
    //   const sessionPath = client.projectLocationAgentSessionPath(
    //     projectId,
    //     location,
    //     agentId,
    //     sessionId
    //   );
    //   const request = {
    //     session: sessionPath,
    //     queryInput: {
    //       text: {
    //         text: queryInput,
    //       },
    //       languageCode,
    //     },
    //   };
      
    //   const [response] = await client.detectIntent(request);
    // //   console.log(response)
    //   for (const message of response.queryResult.responseMessages) {
    //     if (message.text) {
    //       console.log(`Agent Response: ${message.text.text}`);
          
    //     }
    //   }
    //   if (response.queryResult.match.intent) {
    //     console.log(
    //       `Matched Intent: ${response.queryResult.match.intent.displayName}`
    //     );

        
    //   }
    //   console.log(
    //     `Current Page: ${response.queryResult.currentPage.displayName}`
    //   );
    // return response;
    // }
  
    // detectIntentText();
    
    // [END dialogflow_cx_detect_intent_text]
  


//   main('grecords', 'us-central1', '8660fa0e-390d-4cd3-a960-553066b8111b', 'hello', 'en')



 app.post('/channels/web', async (req, res) => {

  
            const result = await detectIntentText(req.body.text)
            
            // console.log(result)
            // console.log("------------------------------------------------------------------------")
            // console.log(result)
            // res.json(result)
            res.status(200).send(result)
        
    
        
  })


  app.post('/api/paystack', async (req, res) => {

    // Retrieve the request's body
    const event = req.body;
    if(event.data.status === 'success'){
        const result = await detectIntentText('ok')
              
      // console.log(result)
      // console.log("------------------------------------------------------------------------")
      // console.log(result)
      // res.json(result)
      res.status(200).send(result)
    // Do something with event
    }
    // console.log('event status ' +event.data.status)


    // if(event){
    //   res.send(200);
    // }

    
    
  })




  




  app.post('/api/messages', async (req, res) => {

    console.log("------------------------------------------------------------------------")
   
    let tag = req.body.fulfillmentInfo.tag;
    console.log("------------------------------------------------------------------------")

    console.log('your tag is : ' + tag)
    
    if(tag){
       let session
        if(tag === 'getStarted'){
            
          //  create a new session
            
                var val = Math.floor(1000 + Math.random() * 9000);
                console.log(val);
                const session = '1234565848'

                
   
             
             const payload = {
                sessionInfo: {
                    parameters: {                         
                        sessionId: session,
                        email: null,
                        verified : "false"
                    }
                }
            }

            console.log('payload is working')
            // console.log(payload)
            res.status(200).send(payload)
            
        }

        if(tag === 'PayConfirm'){

          var val = Math.floor(1000 + Math.random() * 9000);

          const response = await  axios({
            "method":"POST",
            "url":"https://api.paystack.co/transaction/initialize",
            "headers": {
              "Authorization": `Bearer sk_test_d530d8438785aa1a73d95638b7b2ea496d1418bf`,
            },
            // "Authorization":" Bearer sk_test_d530d8438785aa1a73d95638b7b2ea496d1418bf",
            "Content-Type":"application/json",
            "data":{
                "amount": "1000", 
                "email": "bigthinzcount@email.com",
                "currency": "GHS",
                "reference": val,
                "mobile_money": {
                  "phone" : "0545058937",
                  "provider" : "MTN"
                }
              }
                
           
          })

        console.log('=======================================')
        console.log('payment processing....')
        if(response){
          
          console.log(response.data.data.authorization_url)
        }
        console.log('=======================================')


        }
        
    }
        
  })



  




console.log('working........')

app.get("/",(req,res)=>{

//   sendMail({
//     email: 'bigthinzcount@gmail.com',
//     subject: 'Your password reset token (valid for 10min)',
//     message:"test my email message"
// })
    res.send('welcome backend from king dave')
    // res.status(200).send("hello this is webhook setup");
});




app.listen(process.env.PORT,()=>{
  console.log("webbot is listening");
  
});