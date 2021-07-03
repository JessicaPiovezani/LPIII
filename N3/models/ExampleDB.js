const mongoose = require("mongoose");

const url = 'mongodb+srv:<connectionstring>';

mongoose.connect(url, {useNewUrlParser:true},(err)=> {
    if(!err){ console.log("Connection succeded!")}
    else{
        console.log("An error occured")
    }
})

require('./wine.model');