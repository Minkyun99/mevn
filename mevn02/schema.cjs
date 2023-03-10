const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VSchema = new Schema({
  id: String,
  pwd: String,
  date: Date
})

module.exports = mongoose.model('vdb', VSchema, 'vdb')
