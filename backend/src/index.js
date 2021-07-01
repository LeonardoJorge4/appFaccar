const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express(); //instanciando express (gerenciador de rotas)
const cors = require('cors');

mongoose.connect('mongodb+srv://omnistack:leo44317@principal.t0fi8.mongodb.net/AppFaccar?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}); //conectando ao mongo DB

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333); //definindo a porta

console.log("Servidor rodando no end: http://localhost:3333");