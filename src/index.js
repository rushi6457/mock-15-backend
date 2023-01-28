const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors")
require("dotenv").config()
const connect = require("./config/db")
const PORT = process.env.PORT;
const questionsRoute = require("./routes/questionsRoute")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({origin:true,credentials:true}))

app.get("/questions",questionsRoute.GetQuestions)

app.get("/",(req,res)=>res.send("Hello"))

app.listen(PORT,async()=>{
    await connect()
    console.log(`Server started on http://localhost:${PORT}`);
})