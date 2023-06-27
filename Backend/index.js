const express = require('express');

const userRouter = require('./routers/userRouter')
const musicRouter = require('./routers/musicRouter')
const utilRouter = require('./routers/util')


const cors = require('cors')


const app=express();

app.use(cors({
    origin:['http://localhost:3000']
}));

app.use(express.json());                 
app.use('/user', userRouter);
app.use('/music', musicRouter);
app.use('/util', utilRouter);



// app.get("/",(req,res)=>{
// res.send("app is working...")    
// });

app.listen(5000, () => {console.log("server started")})