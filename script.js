require('./model/mongodb')
const hospitalController=require('./controllers/hospitalControllers');

//import necessary packages

const express=require('express');
var app=express();
const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

//create a welcome message and direct them to the main page

app.get('/',(req,res)=>{
res.send('Welcome to our app');
});

//set the controler path which will be responding to the user actions

app.use('/api/hopitals',courseController);

//establish a server connection

//PORT ENVIRONMENT VARIABLE

const port=process.env.PORT||8080;
app.listen(5000,()=>console.log('Listen on port ${port}..'));