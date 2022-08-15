

const express=require("express");
const body_parser=require("body-parser");
const axios=require("axios");


await axios({
    method:"POST",
    url:"https://api.paystack.co/transaction/initialize",
    data:{
        "amount": 1000, 
        "email": "bigthinzcount@email.com",
        "currency": "GHS",
        "reference": "list1",
        "mobile_money": {
          "phone" : "0545058937",
          "provider" : "MTN"
        }
      }
        
    
})