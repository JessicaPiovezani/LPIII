const express = require('express');
const mongoose = require('mongoose');
const Wine = mongoose.model('Wine');
const router = express.Router();

router.get("/",(req,res) => {
    res.render("addOrEdit", {
        viewTitle:"Wine"
    })
});

router.post("/", (req,res) => {
    if(req.body._id == ""){
        insertRecord(req,res)
    }
    else{
        updateRecord(req,res)
    }
})

function insertRecord(req, res){
    var wine = new Wine();

    wine.fixedAcidity = req.body.fixedAcidity;
    wine.volatileAcidity = req.body.volatileAcidity;
    wine.citricAcid = req.body.citricAcid;
    wine.residualSugar = req.body.residualSugar;
    wine.chlorides = req.body.chlorides;
    wine.freeSulfurDioxide = req.body.freeSulfurDioxide;
    wine.totalSulfurDioxide = req.body.totalSulfurDioxide;
    wine.density = req.body.density;
    wine.ph = req.body.ph;
    wine.sulphates = req.body.sulphates;
    wine.alcohol = req.body.alcohol;
    wine.quality = req.body.quality;

    wine.save((err, doc) => {
        if(!err){
            res.redirect('list');
        }
        else {
            if(err.name == "ValidationError"){
                handleValidationError(err,req.body);
                res.render("addOrEdit", {
                    viewTitle: "Insert Wine",
                    wine:req.body
                });
            }
        }
    })
}

function updateRecord(req, res){
    Wine.findByIdAndUpdate(
        {_id:req.body._id,}, 
        req.body, 
        {new:true},
        (err, doc) => {
            if(!err){
                res.redirect('list')
            }
            else{
                if(err.name == "ValidationError"){
                    handleValidationError(err,req.body);
                    res.render("addOrEdit", {
                        viewTitle: 'Update Wine',
                        wine:req.body
                    });
                }
                else{
                    console.log("Error occured in Updationg the records" + err);
                }
            }
        }
    )
}

router.get('/list', (req,res) => {
    Wine.find((err, docs) => {
        if(!err) {
            res.render("list", {
                list:docs
            })
        }
    })

})

router.get('/delete/:id', (req,res) => {
    Wine.findByIdAndRemove(req.params.id, (err, docs) => {
        if(!err) {
            res.render("/list");
        }
        else{
            console.log("An error occured during the delete process" + err)
        }
    })
})

module.exports = router;