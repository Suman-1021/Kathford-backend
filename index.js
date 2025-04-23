const express=require('express')
const app=express()
const cors=require("cors");
const testroute=require("./routes/testroute")
const categoryroute=require('./routes/CategoryRoute');
const productRoute=require('./routes/ProductRoutes.js');
require("dotenv").config()
app.use(cors());
port=process.env.PORT || 8080;
app.use(express.json());
//cors:
require("./database/connection.js")

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});

app.use(testroute);
app.use("/category",categoryroute);
app.use("/product",productRoute);
