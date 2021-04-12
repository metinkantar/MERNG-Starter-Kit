const { Schema, model } = require('mongoose');

const makaleSchema = new Schema({
    baslik: String,
    icerik: String
})

module.exports = new model('makale', makaleSchema);