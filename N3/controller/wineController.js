const express = require('express');
const mongoose = require('mongoose');
const Wine = mongoose.model('Wine');
const fastcsv = require("fast-csv");
const fs = require("fs");
const ws = fs.createWriteStream("wineList.csv");

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
                    wine:req.fixedAcidity,
                    wine:req.volatileAcidity,
                    wine:req.citricAcid,
                    wine:req.residualSugar,
                    wine:req.chlorides,
                    wine:req.freeSulfurDioxide,
                    wine:req.totalSulfurDioxide,
                    wine:req.density,
                    wine:req.ph,
                    wine:req.sulphates,
                    wine:req.alcohol,
                    wine:req.quality
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
                        fixedAcidity:req.fixedAcidity,
                        volatileAcidity:req.volatileAcidity,
                        citricAcid:req.citricAcid,
                        residualSugar:req.residualSugar,
                        chlorides:req.chlorides,
                        freeSulfurDioxide:req.freeSulfurDioxide,
                        totalSulfurDioxide:req.totalSulfurDioxide,
                        density:req.density,
                        ph:req.ph,
                        sulphates:req.sulphates,
                        alcohol:req.alcohol,
                        quality:req.quality
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
    }).lean()

})

router.get('/download', (req,res) => {
    Wine.find({}).lean((err, docs) => {
        if (!err) {
            console.log(docs);
            fastcsv
            .write(docs, {headers: true})
            .on("finish", function() {
                console.log("Write to wineList.csv successfully!")
            })
            .pipe(ws);
            res.redirect('list')
        }
        else {
            console.log("Deu erro", err)
        }
    })
})

router.get('/delete/:id', (req,res) => {
    Wine.findByIdAndRemove(req.params.id, (err, docs) => {
        if(!err) {
            res.render("list");
        }
        else{
            console.log("An error occured during the delete process" + err)
        }
    })
})

module.exports = router;