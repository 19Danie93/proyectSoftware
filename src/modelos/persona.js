const mongoose = require('mongoose');

const Documento = mongoose.Schema;

const Persona = new Documento({
    nombre : String,
    edad : Number,
    estado : {
       type: Boolean,
       default : true
    }
});
module.exports = mongoose.model('persona',Persona);
