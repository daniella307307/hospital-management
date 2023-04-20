const express=require('express');
const mongoose=require('mongoose');


var router=express.Router();

const Hospital=mongoose.model('Hospital');

router.post('/',(req,res)=>{
    insertIntoMongoDB(req,res);
});

router.put('./',(req,res)=>{
    updateintoMongoDB(req,res);
})
function insertIntoMongoDB(req,res){
    var hospital=new Hospital();
    hospital.hospitalName=req.body.hospitalName;
    hospital.hospitalId=req.body.hospitalId;
    hospital.hospital_director=req.body.hospital_director;
    hospital.hospitalFees=req.body.hospitalFees;
    hospital.hospital_workers=req.body.hospital_workers;
    hospital. discount=req.body. discount;
    hospital.save()
    .then((courseSaved)=>res.send(courseSaved).status(200))
    .catch(err=>res.send(err).status(400));
}
function updateintoMongoDB(req,res){
    Hospital.findOneAndUpdate({_id:req.body._id},req.body,{new:true})
    .then(hospital=>res.send(hospital))
    .then(err=>res.send(err).status(400))
}



 router.get('/',(req,res)=>{
    Hospital.find()
    .then(hospital=>res.send(hospital))
    .catch(err=>res.send(err).status(404));
 })
 router.get('/comparison',(req,res)=>{
  Hospital.find()
  .and([{discount:{$gte:100}},{hospital_director:'Daniella'}])
  .sort({hospitalName:1}) 
  .then(hospital=>res.send(hospital))
  .catch(err=>res.send(err) .status(404)) 
 });
 router.get('/expressions', (req,res) => {
    Hospital
    //starts with
    .and([{discount:{$gte:100}},{hospital_director:'Daniella'}])
     .sort({hospitalName:1})
     .then(hopital=>res.send(hospital))
     .catch(err=>res.send(err).status(404));
});
router.get('./advanced/:director_name',(req,res)=>{
    course.find({director_name:req.params.author})
    .selecy({director_name:1,hospitalId:1})
    .then(hospital=>res.send(hospital))
    .catch(err=>res.send(err).status(404));
});

router.get('/count/:director_name',(req,res)=>{
    Course
    .find({director_name:req.params.author})
    .then(count=>res.send(count))
    .catch(err=>res.send(err));
});