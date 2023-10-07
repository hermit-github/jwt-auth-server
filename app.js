const express = require("express");
const app = express();

app.get("/",async (req,res,next) => {
    res.status(200).json({
        success:true,
        message:"Welcome to JWT Auth Server"
    })
})


module.exports = app