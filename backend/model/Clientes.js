const mongoose = require('mongoose')

const ClientesSchema = new mongoose.Schema({
  name : String,
  email : String,
  age : Number,
  password : String,
  cep: Number,
  numero: String,
  tem_pedido : Boolean,
  criado_em: Number,
  atualizado_em: Number,
  status : Boolean,
})

module.exports = mongoose.model('Clientes', ClientesSchema);