const express = require('express');

const userRouter = require('./routers/userRouter')


const cors = require('cors')


const app=express();

app.use(cors({
    origin:['http://localhost:3000']
}));

app.use(express.json());                 
app.use('/user', userRouter);



// app.get("/",(req,res)=>{
// res.send("app is working...")    
// });

app.listen(5000, () => {console.log("server started")})