
const express = require('express');
const mongoose = require('mongoose');
const cookieParser=require('cookie-parser')
const cors=require('cors')

const app = express();


app.use(cookieParser());
app.use(express.json());
const Port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://jintops2003:jinto%402003@cluster0.jpkxj.mongodb.net/')
    .then(() => console.log('successfully connected'))
        .catch((error) => console.log(error))


app.listen(Port, () => {
    console.log(`sucessfully listening to port ${Port}`)
})











