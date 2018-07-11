const path = require('path');
const express = require('express');
const app  = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

//importando
const indexRoutes = require('./rutas/index');

//conexion a MONGODB
mongoose.connect('mongodb://daniel:tapiceria1@ds233581.mlab.com:33581/tapiceria').then(
       db => console.log('conectado a mongo ')
       ).catch(
       err => console.log('error al conectar'));

//configuracion
app.set('port',process.env.PORT || 3000);
app.set('views', path.join( __dirname + '/views'));
app.set('view engine', 'ejs');
var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));
//intermediarios
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));

//rutas
app.use('/',indexRoutes);

//levantando servidor
app.listen(app.get('port'), ()=>{
    console.log('servidor levantado en puerto 3000');
})