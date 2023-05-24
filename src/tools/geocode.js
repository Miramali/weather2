const request= require("request")
const geocode=(address, callback)=>{


    const geocodeUrl= "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address +".json?access_token=pk.eyJ1Ijoia21hZGloYSIsImEiOiJjbGhpdDhmdjgwYjh0M2VtdWE3dXc1cmRhIn0.aDYieAz21yMVfmGDalNaBA"
    request ({url: geocodeUrl, json:true},(error,response)=>{
    
    if(error){
            // console.log("Unable to connect to the website GeoCode map")
            callback("Unable to connect to the website GeoCode map", undefined)
        } else if(response.body.message){
            // console.log(response.body.message)
            callback(response.body.message, undefined)
    
        } else if (response.body.features.length== 0){
            // console.log("Unable to find Location")
            callback("Unable to find Location", undefined)
            
        } else{
            callback(undefined, {
                longtitude : response.body.features[0].center[0],
                 latitude :response.body.features[0].center[1]
                // console.log(longtitude,latitude)
    
            })
           
    
        }
    
    })
    }
    module.exports= geocode;