require('dotenv').config();
const express=require("express");
const connectDB= require('./config/db');
const productRoutes = require('./routes/productRoutes');

connectDB();

const app=express();

app.use(express.json());

app.use('/api/products',productRoutes)

// const PORT = process.env.PORT || 3000;

app.get('/',(req,res) =>{
    res.send('Express running')
})

app.listen(5000);

