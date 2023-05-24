const express= require('express')
const app= express()

const port = process.env.PORT || 3000 // or const port =3000

const path= require ('path')

const publicPath= path.join(__dirname, "../public")

app.use(express.static(publicPath))

// always code above first before routes



//////////////////////////////////////////////////////////////////////////////////

// to modify the views directory do the folowing

//const viewsdirectory=path.join(__dirname, "../temp/views")
//app.set("views", viewsdirectory)

//////////////////////////////////////////////////////////////////////////////:


// lecture 7 HBS

app.set('view engine', 'hbs');

////////////////////////////////////////////////////////////////////////////////////

var hbs= require('hbs')
const partialPath = path.join(__dirname, "../partials")
hbs.registerPartials(partialPath)


//////////////////////////////////////////////////////////////////////////////////////
app.get('/', (req,res)=>{
    res.render('index', {
        title: "Welcome to the Weather Application",
        desc: "this is home page",
        img3: "images/R.png"
        

    })
})

app.get('/service', (req,res)=>{
    res.render('service', {
        title: "SERVICE",
        name: "Madiha",
        age: 36,
        city: "Guelma, Algeria",
        img1: "images/img.jpg"
    })
})

app.get('/team', (req,res)=>{
    res.render('team', {
        title: "TEAM",
        name: "Nabila",
        age: 34,
        city: "Guelma, Algeria",
        img1: "images/sand.jpg"
    })
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////


const geocode = require('./tools/geocode')
const forecast = require('./tools/forecast')
   app.get('/weather', (req,res)=>{
    if(!req.query.address){
        return res.send({
           error: "You must add an address"
        }
    
        )}
        geocode(req.query.address, (error, data)=>{
            if(error){
                return res.send({error})
            }
        forecast(data.latitude, data.longtitude,(error, forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                location: req.query.address,
                forecast: forecastData,
                longtitude: data.longtitude,
                latitude: data.latitude
            })
    
        })
    
    
        })


   })
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



   


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('*', (req,res)=>{
    res.send('Page not found')
})

// always at the end to listen on port



app.listen(port, ()=>{
    console.log("everything is ok")
})