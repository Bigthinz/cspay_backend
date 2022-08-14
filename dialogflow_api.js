require('dotenv').config();

// const dialogflow = require('@google-cloud/dialogflow');
const { SessionsClient } = require("@google-cloud/dialogflow-cx/build/src/v3/sessions_client");
const fs = require('fs');






// [START dialogflow_cx_detect_intent_text]
    /**
     * TODO(developer): Uncomment these variables before running the sample.
     */
     const projectId = 'grecords';
     const location = 'us-central1';
     const agentId = '8660fa0e-390d-4cd3-a960-553066b8111b';
     const query = 'Hello';
     const languageCode = 'en'
 
  
   
     
     // Imports the Google Cloud Some API library
     // const {SessionsClient} = require('@google-cloud/dialogflow-cx');
     /**
      * Example for regional endpoint:
      *   const location = 'us-central1'
      *   const client = new SessionsClient({apiEndpoint: 'us-central1-dialogflow.googleapis.com'})
      */
     const client = new SessionsClient(
         {
             apiEndpoint: 'us-central1-dialogflow.googleapis.com',
             projectId : 'grecords',
             credentials : {
                 client_email : 'csitsapay@grecords.iam.gserviceaccount.com',
                 private_key:'-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCkZstxSz6eogMr\nCZbOOESsCeO+rO1X42Ur2zn4PM5vwsZg6bv2nX4XLWKWYqnA6PpZd/L+81LyccxY\nKuG2o3QRGP4P2+DcX48uydPMgkc3GRm14rN49vm6f4CwB8YKxGLApZi6UD5HrKD1\nxZhw89cy4A4+v5dRsMck58Oq6+Jnq7rj8kyx96dPzyYHIgfGUwY9wbDaVwa61nbZ\nxUGCODQ0Vue1aqsKr81zV3q4Jg2px5XxiAR7yTAnv+7HJJ/EMtNBZvyNrFoyyYQk\n7M8dh8uZZIJMHQWRawuogwwnP+XoORNhJP8tOz4yACAGya1XXAIrjxO2FGkzql9H\ncusKa5XNAgMBAAECggEACP1D74h1PphOQwqtr83810ldJh5vheg9rnW4yD2O7iaA\n0WjGadg3vk2xf9aaQJ2cnsrDwzQL24zkZwfFOsbaQFsU/UoBFBu3iQ/pIFwZR8Z8\nFOl19c3PXua84yMxrYIKgk0rujhMB4BFdtrcmISExlfg/4ZbYFChuv9fQBfQ0+lG\nCeF1PxLPpQeac8eWcokhfzCR26s41HpWh+7t/oKJFCKk5lPWEOfTMUxRVTwWM2wR\nTwoSk4yRsXRLJfK8vFqN2MCJnpxwh9wS7ng/wk0yhVRpxBNI61lGIERgAm+08bsj\nMYu6l5LzytCMKeSxCYcTR9BWsEmRvkWSpwxrExOeYwKBgQDNzqH2N6lYbyf75Ja+\nMHSxKFq681SAWwYUHmiYgEEOty9fpF6yqaSSYiRmHoQNIIIk5kSbVmmokUcz/dNy\nmuQ2XGouUtIGN+UEx5xd6v8ne4xJutxAMBf9TbVBxVLXbTCQQJ22XxKxBjkhD3pe\njuTAMVrm2xwypIxiLKdJTmuRBwKBgQDMfwsIiTuBExIlJIF78NcB8SRypxo09K4P\nDtc32nUxg5qLiIvsnDPocJG6J7rU4vqX3PrJAgAtd2WTqBIVQjfqtHQLsS/CJxHg\nO2dbjEOAUu2cJ05YP45Q7ref9iVAYoYkbBSLVCNht6E03uNee+AtzcvWzHL6Yijj\ncxaiKdKxiwKBgQDLHN4dKEvaOkGkyLG43Aued6wri1BfKPYzztr9fr42LrXzVz4a\nZ3BDA9bWbdF3PxkSH6uf/sViFpbGCgCvv4vw1n34X8ZlWq6MbA+3ZOAScE1Aysjq\nFEzosdNsKLkcYOenxg2gWe4RhYnGRgdH4RCDWXJUGfSXSmw9y8IBiAKC6wKBgQDJ\nSqyTpHHcJeeQhBSo6XLayIE2EmJrigXjcJpMsk71hDOV8by6FS/LNzNa6EyxzRMa\ndTyuq7d9CbAE3kWeg2YDM8me0LTQCiFAdXjR1omDQR3+vXoSx8zQwYoifOpCLDka\nlQDL/PAu+dBG+LcahBkxPQfO0cTDzeetq9W1njF07QKBgH+KZ44P++aoTvfF3Gnd\nV10hN5wdn10Z6UW/Ne+XaMzIVxifwMYFQJ5K+9qD7hxG0gpglFitQKRcFKaDIuxu\nBp6VfnOla7SLb0pznNjWKE2CZB/+BVH82f2AVtMMDU6GnIkdhTu1805oihiwjlQg\nspb8CsSBE+tofO5RraKvnEP2\n-----END PRIVATE KEY-----\n",                '
             },
             language: "en"
         }
     );
   
     const detectIntentText  = async(queryInput)=> {
         const sessionId = '123456788'
 
     //   const sessionId = Math.random().toString(36).substring(7);
       const sessionPath = client.projectLocationAgentSessionPath(
         projectId,
         location,
         agentId,
         sessionId
       );
       const request = {
         session: sessionPath,
         queryInput: {
           text: {
             text: queryInput,
           },
           languageCode,
         },
       };
       
       const [response] = await client.detectIntent(request);
     //   console.log(response)
       for (const message of response.queryResult.responseMessages) {
         if (message.text) {
           console.log(`Agent Response: ${message.text.text}`);
           
         }
       }
       if (response.queryResult.match.intent) {
         console.log(
           `Matched Intent: ${response.queryResult.match.intent.displayName}`
         );
 
         
       }
       console.log(
         `Current Page: ${response.queryResult.currentPage.displayName}`
       );
     return response;
     }
   

     module.exports = {
        detectIntentText
    };