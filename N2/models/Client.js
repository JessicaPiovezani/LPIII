const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Client Schema
const ClientSchema = new Schema({
  name: {
  type: String,
  required: [true, "*Campo obrigatório!"]
  },
  lastName: {
  type: String,
  required: [true, "*Campo obrigatório!"]
  }
});

const Client = mongoose.model("Clients", ClientSchema);

module.exports = Client;