import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import newsrouter from "./router/news.route.js"

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4500;
const URI = process.env.URI;

// connect to mongodb
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } );

    console.log("Connected to mongoDB");
    
} catch (error) {
    console.log("Error: ", error);
}



app.use("/news",newsrouter);

app.listen(PORT,()=>{
console.log(`the server is running on the port ${PORT}`);
    }
);