const express = require('express');
const app = express();
const mongoose = require('mongoose');
const env = require('dotenv/config');

app.use(express.json());                                           //allow to post json data

const userRoutes = require('./routes/user');                      //import user Routes
app.use('/api/',userRoutes);                                      //user files (first param ='url', 2nd routename)

mongoose.connect(                                                  //the DB is a string        
        process.env.DB,                                                 
        { useNewUrlParser: true ,useUnifiedTopology: true },
            (err)=>{
                if(err) console.log(err);
                 console.log('Database connected..');
        }
);

app.listen('5000',() => {
    console.log('server is running');
});