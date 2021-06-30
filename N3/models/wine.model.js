const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Client Schema
const WineSchema = new Schema({
    fixedAcidity: {
        type: Int8Array,
        required: [true, "*Campo obrigatório!"]
        },
    volatileAcidity: {
        type: Int8Array,
        required: [true, "*Campo obrigatório!"]
        },
    citricAcid: {
        type: Int8Array,
        required: [true, "*Campo obrigatório!"]
        },
    residualSugar: {
        type: Int8Array,
        required: [true, "*Campo obrigatório!"]
        },
    chlorides: {
        type: Int32Array,
        required: [true, "*Campo obrigatório!"]
        },
    freeSulfurDioxide: {
        type: Int8Array,
        required: [true, "*Campo obrigatório!"]
        },
    totalSulfurDioxide: {
        type: Int8Array,
        required: [true, "*Campo obrigatório!"]
        },
    density: {
        type: Int32Array,
        required: [true, "*Campo obrigatório!"]
        },
    ph: {
        type: Int8Array,
        required: [true, "*Campo obrigatório!"]
        },
    sulphates: {
        type: Int8Array,
        required: [true, "*Campo obrigatório!"]
        },
    alcohol: {
        type: Int8Array,
        required: [true, "*Campo obrigatório!"]
        },
    quality: {
        type: Int8Array,
        required: [true, "*Campo obrigatório!"]
        },
});

const Wine = mongoose.model("Wines", WineSchema);

module.exports = Wine;