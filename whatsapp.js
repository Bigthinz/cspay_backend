const express=require("express");
const body_parser=require("body-parser");
const axios=require("axios");
const { detectIntentText } = require("./dialogflow_api");
require('dotenv').config();

const app=express().use(body_parser.json());

const token='EAAP8ZA1rZCrJgBAAiZCzKUozdZCC40dPBKF8qUSvQGSmPYHDr3gv5td3b9PcZCRqKrgr0G7wYl2rPEtzMFZBawKMyC5dtvZADmZBNYMVtWEjQEf7mGTxIyhEZAnrYLU10ZCGNLJZCV6POdwZASA8cVwXZBe23Fp0GN104mN5gkOLlxFaCfFYCmqvwsA5zT7YVIloVJPSsqClLVZCNwrgZDZD';
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

exports.sendToWhatsapp = async (req,res)=>{
   //i want some 

        let body_param=req.body;
    
        console.log(JSON.stringify(body_param,null,2));
    
        if(body_param.object){
            console.log("inside body param");
            if(body_param.entry && 
                body_param.entry[0].changes && 
                body_param.entry[0].changes[0].value.messages && 
                body_param.entry[0].changes[0].value.messages[0]  
                ){
                   let phon_no_id=body_param.entry[0].changes[0].value.metadata.phone_number_id;
                   let from = body_param.entry[0].changes[0].value.messages[0].from; 

                   let message_type = body_param.entry[0].changes[0].value.messages[0].type
                    let msg_body
                   if(message_type === 'text'){
                    msg_body = body_param.entry[0].changes[0].value.messages[0].text.body;

                   }

                   if(message_type === 'interactive'){
                    msg_body = body_param.entry[0].changes[0].value.messages[0].interactive.list_reply.title;

                   }

                   console.log("------------------------------------------------------------------------")

                
                //    console.log('message body is:' + msg_body )
                   console.log(' message body is:' + msg_body )
                   console.log("------------------------------------------------------------------------")

                   console.log("phone number "+phon_no_id);
                   console.log("from "+from);
                //    console.log("boady param "+msg_body);

                const result = await detectIntentText(msg_body)
                console.log('dialog================')
                let initResponse = result.queryResult.responseMessages[0].text.text[0]
                    
                // let messages = []
                // messages.push({
                //     type: 'text',
                //     text: {
                //         body: initResponse
                //     }
                // })
                
                //rich response
                if(result.queryResult.responseMessages[1]){

                    if(result.queryResult.responseMessages[1].payload){
                        // let payload = result.queryResult.responseMessages[1].payload.fields
                        // let richResponse = payload.richContent.listValue.values[0].structValue.fields
                        // let title = richResponse.title.stringValue
                        // let description = richResponse.description.stringValue
                        // let image = richResponse.image.stringValue
                        // let button = richResponse.button.listValue.values[0].structValue.fields
                        // let buttonText = button.text.stringValue
                        // let buttonUrl = button.postback.stringValue

                        // initResponse = `${title}\n${description}\n${image}\n${buttonText}\n${buttonUrl}`



                        let chips = result.queryResult.responseMessages[1].payload.fields.richContent.listValue.values[0].listValue.values[0].structValue.fields.options.listValue.values
                        let options = chips.map(value => value.structValue.fields.text.stringValue)
                        console.log(chips)

                        //send multiple messages
                       

                        // options.forEach(option => {

                        //     messages.push({
                        //         type: 'interactive',
                        //         interactive: {
                        //             type: 'list',
                        //             list: {
                        //                 title: 'Select an option',
                        //                 description: 'Select an option',
                        //                 options: [
                        //                     {
                        //                         title: option,
                        //                         description: option,
                        //                         payload: option
                        //                     }
                        //                 ]
                        //             }
                        //         }
                        //     })
                        // })



                   
                     axios({
                        method:"POST",
                        url:"https://graph.facebook.com/v13.0/"+phon_no_id+"/messages?access_token="+token,
                        data:{ 
                         "to": "233200023260",
                        "messaging_product": "whatsapp",
                        "recipient_type": "individual",
                        "type": "interactive",
                        "interactive": {
                            "type": "list",
                            "header": {
                                "text": "Csitsa Pay",
                                "type": "text"
                            },
                            "body": {
                             "text": initResponse,
                                // "text": "Hey David 😀, I'm happy to have you back. Please tell me how I may be of assistance.\n\n I can assist you with paying your SRC and departmental dues.\n\n Pick something from the menu, please."
                            },
                            "footer": {
                                "text": "Csitsa Pay"
                            },
                            "action": {
                                "button": "Choose One",
                                "sections": [
                                    {
                                        "title": "SERVICES",
                                        "rows": options.map((title,id) => {
                                            return(
                                                {
                                                    "id": id,
                                                    "title":title,
                                                }
                                                )
                                            
                                       })
                                        
                                       
                                    //    "rows": [
                                    //         {
                                    //             "id": "8926fda7-d8d5-4a6a-a85f-0623c04e44e2|select_recipie|neww|undefined",
                                    //             "title": "SRC Dues"
                                    //         },
                                    //         {
                                    //             "id": "8926fda7-d8d5-4a6a-a85f-0623c04e44e2|select_recipie|newww|undefined",
                                    //             "title": "Departmental Dues"
                                    //         },
                                    //         {
                                    //             "id": "8926fda7-d8d5-4a6a-a85f-0623c04e44e2|select_recipie|newwww|undefined",
                                    //             "title": "Testimonial"
                                    //         },
                                    //         {
                                    //             "id": "8926fda7-d8d5-4a6a-a85f-0623c04e44e2|select_recipie|newwwww|undefined",
                                    //             "title": "Vetting Forms"
                                    //         }
                                    //     ]
                                    }
                                ]
                            }
                        }
                     },
                        headers:{
                            "Content-Type":"application/json"
                        }
     
     
     
                        
     
     
     
     
                    });
                    }else{

                        axios({
                            method:"POST",
                            url:"https://graph.facebook.com/v13.0/"+phon_no_id+"/messages?access_token="+token,
                            data:{ 
                             "to": "233200023260",
                            "messaging_product": "whatsapp",
                            "recipient_type": "individual",
                            "type": "text",
                            "text": {
                                "body": initResponse
                            },
                            "footer": {
                                "text": "Csitsa Pay"
                            },
                            
                            
                            // "type": "interactive",
                            // "interactive": {
                            //     "type": "list",
                            //     "header": {
                            //         "text": "Csitsa Pay",
                            //         "type": "text"
                            //     },
                            //     "body": {
                            //     //  "text": `${initResponse}`,
                            //         "text": "Hey David 😀, I'm happy to have you back. Please tell me how I may be of assistance.\n\n I can assist you with paying your SRC and departmental dues.\n\n Pick something from the menu, please."
                            //     },
                            //     "footer": {
                            //         "text": "Csitsa Pay"
                            //     },
                                // "action": {
                                //     "button": "Choose One",
                                //     "sections": [
                                //         {
                                //             "title": "SERVICES",
                                //          //    "rows": 
                                //      //        options.map((title,id) => {
                                //      //         return(
                                //      //             {
                                //      //                 "id": id,
                                //      //                 "title":title,
                                //      //             }
                                //      //             )
                                             
                                //      //    })
                                           
                                //            "rows": [
                                //                 {
                                //                     "id": "8926fda7-d8d5-4a6a-a85f-0623c04e44e2|select_recipie|neww|undefined",
                                //                     "title": "SRC Dues"
                                //                 },
                                //                 {
                                //                     "id": "8926fda7-d8d5-4a6a-a85f-0623c04e44e2|select_recipie|newww|undefined",
                                //                     "title": "Departmental Dues"
                                //                 },
                                //                 {
                                //                     "id": "8926fda7-d8d5-4a6a-a85f-0623c04e44e2|select_recipie|newwww|undefined",
                                //                     "title": "Testimonial"
                                //                 },
                                //                 {
                                //                     "id": "8926fda7-d8d5-4a6a-a85f-0623c04e44e2|select_recipie|newwwww|undefined",
                                //                     "title": "Vetting Forms"
                                //                 }
                                //             ]
                                //         }
                                //     ]
                                // }
                            
                         },
                            headers:{
                                "Content-Type":"application/json"
                            }
         
         
         
                            
         
         
         
         
                        });
    
    
                    }
                    
                     
                }else{

                     axios({
                        method:"POST",
                        url:"https://graph.facebook.com/v13.0/"+phon_no_id+"/messages?access_token="+token,
                        data:{ 
                         "to": "233200023260",
                        "messaging_product": "whatsapp",
                        "recipient_type": "individual",
                        "type": "text",
                        "text": {
                            "body": initResponse
                        },
                        "footer": {
                            "text": "Csitsa Pay"
                        },
                        
                        
                        // "type": "interactive",
                        // "interactive": {
                        //     "type": "list",
                        //     "header": {
                        //         "text": "Csitsa Pay",
                        //         "type": "text"
                        //     },
                        //     "body": {
                        //     //  "text": `${initResponse}`,
                        //         "text": "Hey David 😀, I'm happy to have you back. Please tell me how I may be of assistance.\n\n I can assist you with paying your SRC and departmental dues.\n\n Pick something from the menu, please."
                        //     },
                        //     "footer": {
                        //         "text": "Csitsa Pay"
                        //     },
                            // "action": {
                            //     "button": "Choose One",
                            //     "sections": [
                            //         {
                            //             "title": "SERVICES",
                            //          //    "rows": 
                            //      //        options.map((title,id) => {
                            //      //         return(
                            //      //             {
                            //      //                 "id": id,
                            //      //                 "title":title,
                            //      //             }
                            //      //             )
                                         
                            //      //    })
                                       
                            //            "rows": [
                            //                 {
                            //                     "id": "8926fda7-d8d5-4a6a-a85f-0623c04e44e2|select_recipie|neww|undefined",
                            //                     "title": "SRC Dues"
                            //                 },
                            //                 {
                            //                     "id": "8926fda7-d8d5-4a6a-a85f-0623c04e44e2|select_recipie|newww|undefined",
                            //                     "title": "Departmental Dues"
                            //                 },
                            //                 {
                            //                     "id": "8926fda7-d8d5-4a6a-a85f-0623c04e44e2|select_recipie|newwww|undefined",
                            //                     "title": "Testimonial"
                            //                 },
                            //                 {
                            //                     "id": "8926fda7-d8d5-4a6a-a85f-0623c04e44e2|select_recipie|newwwww|undefined",
                            //                     "title": "Vetting Forms"
                            //                 }
                            //             ]
                            //         }
                            //     ]
                            // }
                        
                     },
                        headers:{
                            "Content-Type":"application/json"
                        }
     
     
     
                        
     
     
     
     
                    });


                }
                
                //    console.log(options)
                                                                                                            // payload": {
                                                                                                            //     "fields": {
                                                                                                            //         "richContent": {
                                                                                                            //             "listValue": {
                                                                                                            //                 "values": [
                                                                                                            //                     {
                                                                                                            //                         "listValue": {
                                                                                                            //                             "values": [
                                                                                                            //                                 {
                                                                                                            //                                     "structValue": {
                                                                                                            //                                         "fields": {
                                                                                                            //                                             "options": {
                                                                                                            //                                                 "listValue": {
                                                                                                            //                                                     "values": [
                                                                                                            //                                                         {
                                                                                                            //                                                             "structValue": {
                                                                                                            //                                                                 "fields": {
                                                                                                            //                                                                     "text": {
                                                                                                            //                                                                         "stringValue"


            //     app.post('/channels/web', async (req, res) => {

            //         console.log('dialog================')
                
                
            //     res.json(result)      
            // })


                // app.post('/channels/web', async (req, res) => {

                //         console.log('dialog================')
                //     const result = await detectIntentText(msg_body)
                //     console.log(result)
                //     res.json(result)      
                // })

                // axios({
                //     method:"POST",
                //     url:'/channels/web',
                //     data: result
                // })


            //     let rows =  options.map((title,id) => {
            //         return(
            //             {
            //                 "id": id,
            //                 "title":title,
            //             }
            //             )
                    
            //    })

               
                    
    
                   
                    
                // console.log(res)
             

                // axios.post('/channels/web',async (req, res) => {

  
                      
                // })

                
        



                   res.sendStatus(200);
                }else{
                    res.sendStatus(404);
                }
    
        }
    
    };
    


console.log('working........')


