require('dotenv').config();
const mongoose= require('mongoose');

const connectDB=async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,

        });
        console.log("Mongo connected")
    }catch(error){
        console.log("mongo connection error")
        process.exit(1);
    }
    
}

module.exports= connectDB;