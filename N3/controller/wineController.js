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

router.post("/importa", (req,res) => {
    importWine(req,res);
})



function importWine(req,res) {
    var wine = new Wine();
    var formidable = require('formidable');
  var fs = require('fs');
  var form = new formidable.IncomingForm();
  //form.uploadDir = "./exports";
    form.parse(req, function (err, fields, files) {
          
        console.log(files.import.path)
        var content = fs.readFileSync(files.import.path).toString();
        var lines = content.split(/\r?\n/);
        var l = 0;
        lines.forEach((line) => {
            l++;
            if(l>1){
                var wine = new Wine();
                var campos = line.split(",");
                
                wine.fixedAcidity = campos[0];
                wine.volatileAcidity = campos[1];
                wine.citricAcid = campos[2];
                wine.residualSugar = campos[3];
                wine.chlorides = campos[4];
                wine.freeSulfurDioxide = campos[5];
                wine.totalSulfurDioxide = campos[6];
                wine.density = campos[7];
                wine.ph = campos[8];
                wine.sulphates = campos[9];
                wine.alcohol = campos[10];
                wine.quality = campos[11];
                //inserir no banco de dados
                wine.save(function(err, doc) {
                    if (err) return console.error(err);
                    console.log("Document inserted succussfully!");
                });
            }
        });
        res.end();
       
    });
    res.redirect("list")
}

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
    }).lean().limit(10)

})

router.get('/download', (req,res) => {
    var content = "fixedAcidity,volatileAcidity,citricAcid,residualSugar,chlorides,freeSulfurDioxide,totalSulfurDioxide,density,ph,sulphates,alcohol,quality\n";
    Wine.find((err, docs) => {
        if(!err) {         
            docs.forEach((doc) => {
               content +=  doc.fixedAcidity+","+doc.volatileAcidity+","+doc.citricAcid+","+doc.residualSugar+","+doc.chlorides+","+doc.freeSulfurDioxide+","+doc.totalSulfurDioxide+","+doc.density+","+doc.ph+","+doc.sulphates+","+doc.alcohol+","+doc.quality+"\n";
            });
            res.type("application/csv");
            res.attachment("listWines.csv");
            console.log("conteudo ",content);
            res.send(content);
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