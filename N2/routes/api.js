const express = require ("express");
const router = express.Router();

const clientController = require("../controllers/Client");
const roomController = require("../controllers/Room");

//Rotas para cadastros de clientes
router.post("/client",clientController.add);
router.get("/listClients",clientController.listClients);
router.get("/listClient/:name",clientController.listClient);
router.delete("/deleteClient/:id",clientController.delete);

//Rotas para cadastros de salas
router.post("/room",roomController.add);
router.get("/listRoom/:id",roomController.listClients);
router.put("/updateRoom/:id",roomController.update);

module.exports = router;