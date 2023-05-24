const request= require("request")

const forecast=( latitude,longtitude,callback)=>{


    const url="http://api.weatherapi.com/v1/current.json?key=82b5acef419c412da8b94452231005&q="+ latitude +","+ longtitude
    
    request({url, json:true},(error,response)=>{
        if(error){
            callback("Error has been occured", undefined)
            // console.log("Error has been occured")
        } else if(response.body.error){
            callback(response.body.error.message, undefined)
            // console.log(response.body.error.message)
        } else{
            callback(undefined,"The Weather in  " +response.body.location.country +  " (  " + response.body.location.region + " ) " +" is : " + response.body.current.condition.text + " , and the Temperature is :  " + response.body.current.temp_c + "°")
    
            // console.log(response.body.location.name)
            // console.log(response.body.current.condition.text)
        }
    })
    }
    module.exports= forecast;