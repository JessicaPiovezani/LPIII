const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const connection = require("./config/db");
connection.connectionBD();

app.get("/", function(req, res){
  res.send("END POINT INVÁLIDO!");
});

app.use(bodyParser.json());
  
// As urls que começarem com ‘/api’ irão chamar as rotas em ‘./routes/api’
const api = require("./routes/api");
app.use("/api", api);

app.use(function(err, req, res, next){
  console.log(err);
 res.status(422).send({error: err.message});
});

let port = 5000;
app.listen(process.env.port || port, () =>{
  console.log('Servidor em execução na porta: '+ port);
});
