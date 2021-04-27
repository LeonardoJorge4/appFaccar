const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name : String,
  email : String,
  age : Number,
  password : String,
  criado_em: Number,
  atualizado_em: Number,
  status : Boolean,
})

module.exports = mongoose.model('User', UserSchema);