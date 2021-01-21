require('dotenv').config();

const productsData = require('./data/products');
const connectDB=require('./config/db');
const Product= require('./models/Product');

connectDB();

const importdata= async() => {
    try{
        await Product.deleteMany({});

        await Product.insertMany(productsData);

        console.log("imported successfully");

        process.exit();

    } catch(error){
            console.error(error);
            process.exit(1);
    }
}

importdata();