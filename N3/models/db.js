const mongoose = require("mongoose");

const url = 'mongodb+srv://LPIII:1234@n3.dfufy.mongodb.net/N3?retryWrites=true&w=majority';

mongoose.connect(url, {useNewUrlParser:true},(err)=> {
    if(!err){ console.log("Connection succeded!")}
    else{
        console.log("An error occured")
    }
})

require('./wine.model');