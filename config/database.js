const mongoose = require('mongoose')
require('dotenv').config();
const db =process.env.POWER
mongoose.connect(db)

.then(()=>{
    console.log('connection to database is successfully');

})

.catch((error)=>{
    console.log('connection into the database is unsuccessfull'+error.message);    
})