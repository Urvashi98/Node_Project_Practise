const express = require('express');
const router = express.Router()                 //when we write routes in diffn files, we use router

const UserModel = require('../models/User');   //import model to initialize data

router.get('/home',(req, res) => {
    res.json({
       body:{
        "pid":2,
        "pname": "Mobile",
        "price": 5000
       } 
    });
});

//post a data
router.post('/add', async (req,res) => {
   //here body represents the text we enter in body of POSTMAN
   const user = UserModel({
       name:req.body.name,
       email:req.body.password,
       password:req.body.password
   });
  // user.save();                //method-1 save the user (user is name of the instatnt)

  /*   user.save()                  //method - 2 using then,catch
    .then((response) => {
        res.send(response);      //display in postman
    }).catch((error) => {
        res.send(error);  
    }); */

    const save = await user.save();     //method 3 use async and await
                                        // use async keyword with (req,res) await with save()

    try{
        res.send(save);             
    }catch(err){
        res.send(err);
    }

});

//to access these routes to othe loc, export them

module.exports = router; //send entire router object