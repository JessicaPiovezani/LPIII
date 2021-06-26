const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Room Schema
const RoomSchema = new Schema({
  name: {
  type: String,
  required: [true, "*Campo obrigatório!"]
  },
  capacity: {
  type: Number,
  required: [true, "*Campo obrigatório!"]
  }
});

const Room = mongoose.model("Rooms", RoomSchema);

module.exports = Room;