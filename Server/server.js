
const express = require('express');
const mongoose = require('mongoose');
const cookieParser=require('cookie-parser')
const cors=require('cors')
const authRouter=require('./routes/auth/auth-routes')

const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET','POST','DELETE','PUT'],
    allowedHeaders:[
   " Content-Type",
    "Authorization",
    "Cache-Control",
    "Expires",
    "Pragma"
    ],
    credentials:true
}))


app.use(cookieParser());
app.use(express.json());
app.use('/api/auth',authRouter)


const Port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://jintops2003:jinto%402003@cluster0.jpkxj.mongodb.net/')
    .then(() => console.log('successfully connected'))
        .catch((error) => console.log(error))


app.listen(Port, () => {
    console.log(`sucessfully listening to port ${Port}`)
})











