const mongoose = require('mongoose')

const AlunoSchema = new mongoose.Schema({
  name: String,
  cpf: String,
  email: String,
  cep: String,
  age: String,
  registrationNumber: Number,
  criado_em: Number,
  atualizado_em: Number,
  status: Boolean,
})

module.exports = mongoose.model('Aluno', AlunoSchema);