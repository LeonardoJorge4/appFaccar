const mongoose = require('mongoose')

const PedidosSchema = new mongoose.Schema({
  price : Number,
  size : Number,
  description: String,
  quantity: Number,
  criado_em: Number,
  atualizado_em: Number,
  status : Boolean,
})

module.exports = mongoose.model('Pedidos', PedidosSchema);