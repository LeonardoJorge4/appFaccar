const express = require('express');
const UserController = require('../controller/User')
const ClinicaController = require('../controller/Clinica')
const EspecialidadeController = require('../controller/Especialidade')
const MedicoController = require('../controller/Medico')
const MedicoClinicaController = require('../controller/MedicoClinica')
const AlunoController = require('../controller/Aluno')
const ClientesController = require('../controller/Clientes')
const PedidosController = require('../controller/Pedidos')

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({message : "pagina principal"})
}); 

routes.get('/user',UserController.index)
routes.post('/user',UserController.store)
routes.put('/user', UserController.update)
routes.delete('/user', UserController.delete)

routes.get('/clinica',ClinicaController.index)
routes.post('/clinica',ClinicaController.store)
routes.put('/clinica', ClinicaController.update)
routes.delete('/clinica', ClinicaController.delete)

routes.get('/especialidade',EspecialidadeController.index)
routes.post('/especialidade',EspecialidadeController.store)
routes.put('/especialidade', EspecialidadeController.update)
routes.delete('/especialidade', EspecialidadeController.delete)

routes.get('/medico',MedicoController.index)
routes.post('/medico',MedicoController.store)
routes.put('/medico', MedicoController.update)
routes.delete('/medico', MedicoController.delete)

routes.get('/aluno',AlunoController.index)
routes.post('/aluno',AlunoController.store)
routes.put('/aluno', AlunoController.update)
routes.delete('/aluno', AlunoController.delete)

routes.get('/cliente',ClientesController.index)
routes.post('/cliente',ClientesController.store)
routes.put('/cliente', ClientesController.update)
routes.delete('/cliente', ClientesController.delete)

routes.get('/pedido', PedidosController.index)
routes.post('/pedido',PedidosController.store)
routes.put('/pedido', PedidosController.update)
routes.delete('/pedido', PedidosController.delete)


routes.get('/medico-clinica',MedicoClinicaController.index)
routes.post('/medico-clinica',MedicoClinicaController.store)

module.exports = routes;
