const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express(); //instanciando express (gerenciador de rotas)
const cors = require('cors');

// mongoose.connect('mongodb+srv://leooz8:leo44317@appfaccar.ypvzu.mongodb.net/AppFaccar?retryWrites=true&w=majority',
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }); //conectando ao mongo DB


mongoose.connect('mongodb+srv://leooz8:leo44317@appfaccar.ypvzu.mongodb.net/AppFaccar?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(function(){
    console.log("Banco de dados conectado com sucesso...");
}).catch(function(err){
    console.log('Erro ao conectar com o banco de dados: ' + err);
})



app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333); //definindo a porta

console.log("Servidor rodando no end: http://localhost:3333");