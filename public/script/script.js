
let form = document.getElementById("form1")

const errorF= document.getElementById("error")
const locationF= document.getElementById("location")
const  forecastF= document.getElementById("forecast")
const longF =document.getElementById("long")
const latF = document.getElementById("lat")
const iconF = document.getElementById("pic")

const text1= "Location is : "
const text2= "Longtitude is : "
const text3= "Latitude is : "
const text4 = "Error  : "

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    // console.log(address)
    weatherFunction()
    form.reset()
})

let weatherFunction = async()=>{
    try {
        const address = document.getElementById('address').value
        const res= await fetch('http://localhost:3000/weather?address='+address)
        
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorF.innerText = text4+ data.error
            locationF.innerText = ""
            forecastF.innerText = ""
            longF.innerText = ""
            latF.innerText = ""
        }
        else{
            errorF.innerText =""
            locationF.innerText = text1 +  data.location
            forecastF.innerText = data.forecast
            longF.innerText =  text2+ data.longtitude
            latF.innerText = text3 + data.latitude
            
        }

        
    } catch (e) {
        console.log(e)
        
    }
}