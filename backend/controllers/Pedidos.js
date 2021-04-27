const Pedidos = require('../model/Pedidos')

module.exports = {
  
  async index(req,res){
    let pedidos = await Pedidos.find()
    return res.json(pedidos)
  },

  async store(req,res){
    let pedido = req.body;
    pedido = await Pedidos.create(pedido)
    return res.json(pedido)
  },

  async update(req,res){
        
    let pedido = req.body;
    pedido.atualizado_em = Date.now();
    pedido = await Pedidos.updateOne({'_id': req.query.id} , pedido)
    
    return res.json(pedido)
  },
   
  async delete(req,res){
    
    var id = req.query.id;
    let pedido = await Pedidos.findById(id);
    pedido = await Pedidos.deleteOne({'_id': req.query.id} , pedido);

    return res.json(pedido);
    
  }
}