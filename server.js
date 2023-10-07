require("dotenv").config();
const app = require("./app");
const port = process.env.PORT ?? 8080;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan")
const express = require("express");


// standard middlewares
app.use(cors({
    origin:[process.env.REACT_URL],
    methods:["GET","POST"],
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"))


app.listen(port,() => {
    console.log(`Server running in port ${port}`);
})