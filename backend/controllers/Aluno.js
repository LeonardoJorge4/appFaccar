const Aluno = require('../model/Aluno')

module.exports = {
  async index(req,res){
    let alunos = await Aluno.find()
    return res.json(alunos)
  },

  async store(req,res){
    let aluno = req.body;
    aluno = await Aluno.create(aluno)
    return res.json(aluno)
  },

  async update(req,res){
        
    let aluno = req.body;
    aluno.atualizado_em = Date.now();
    aluno = await Aluno.updateOne({'_id': req.query.id} , aluno)
    
    return res.json(aluno)
  },
   
  async delete(req,res){
    
    var id = req.query.id;
    let aluno = await Aluno.findById(id);
    aluno = await Aluno.deleteOne({'_id': req.query.id} , aluno);

    return res.json(aluno);
    
  }
}