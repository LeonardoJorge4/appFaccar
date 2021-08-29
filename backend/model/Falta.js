const mongoose = require('mongoose');

const FaltaSchema = new mongoose.Schema({
    period : String,
    quantity : Number,
    subject : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'materias'
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    }
});

module.exports = mongoose.model('faltas', FaltaSchema);