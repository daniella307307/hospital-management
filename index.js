const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/mongo-demo',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("connected to mongodb succussefully"))
.catch(err=>console.log('Faild to connect to mongodb '));

require('./hospital.model');