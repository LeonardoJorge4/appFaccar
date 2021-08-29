const mongoose = require('mongoose');

const MedicoClinicaSchema = new mongoose.Schema({
    Medico : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'medicos'
    },
    Clinica : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clinicas'
    },
    Especialidade : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'especialidades'
    },
    criado_em : Number,
    atualizado_em : Number,
    status : Boolean
});

module.exports = mongoose.model('MedicoClinica', MedicoClinicaSchema);