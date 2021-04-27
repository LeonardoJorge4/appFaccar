const Clientes = require('../model/Clientes')

module.exports = {
  
  async index(req,res){
    let clientes = await Clientes.find()
    return res.json(clientes)
  },

  async store(req,res){
    let cliente = req.body;
    cliente = await Clientes.create(Clientes)
    return res.json(cliente)
  },

  async update(req,res){
        
    let cliente = req.body;
    cliente.atualizado_em = Date.now();
    cliente = await Clientes.updateOne({'_id': req.query.id} , cliente)
    
    return res.json(cliente)
  },
   
  async delete(req,res){
    
    var id = req.query.id;
    let cliente = await Clientes.findById(id);
    cliente = await Clientes.deleteOne({'_id': req.query.id} , cliente);

    return res.json(cliente);
    
  }
}