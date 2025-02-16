const express = require('express')
require('./config/database')    
require('dotenv').config();
const userRouter=require('./Router/userRouter')
const app = express();
app.use(express.json())
app.use(userRouter);
const port=2020;

app.listen(port,()=>{
console.log(`${port} is up and running`);

})