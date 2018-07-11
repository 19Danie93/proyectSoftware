const express =  require('express');
const router = express.Router();
const Persona = require('../modelos/persona');

router.get('/',async (req, res)=>{
    var lista = await Persona.find();
    //console.log(lista); 
    res.render('inicio',{lista});
});

router.post('/adicionar',async (req,res)=>{
    var persona = new Persona(req.body);
    await persona.save();
    res.redirect('/');
});

router.get('/borrar/:id',async (req, res)=>{
    const {id} = req.params;
    await Persona.remove({_id : id});
    res.redirect('/');
});

router.get('/obtener/:id',async (req, res)=>{
    const {id} = req.params;
    var persona = await Persona.findById({_id : id});
    res.render('modificar',{persona});
});
router.post('/modificar',async (req,res)=>{
    const id = req.body.id;
    await Persona.update({_id:id},req.body)
    res.redirect('/');
});
module.exports = router;
