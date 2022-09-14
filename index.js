import express from 'express';
import bodyParser from 'body-parser';
import { MafiososRepository } from './mafiososRepository.js';
import { PrisionesRepository } from './prisionesRepository.js';


const app = express()
const mafiososRepository = new MafiososRepository();
const prisionesRepository = new PrisionesRepository();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/*
    Code here
*/

app.get('/mafiosos', function (reqquest, response){
    response.send(mafiososRepository.obtenerTodos())
})

app.get('/mafiosos/:id', function (reqquest, response){
    const idMafioso = reqquest.params('id')
    const mafiosos = mafiososRepository.obtenerPorId(idMafioso)
    response.send(mafiosos)
})
app.get('/mafiosos', (request, response) => {
    mafiososRepository.create(request.body.nombre, )
    response.send("Mafioso " + request.body.nombre + " creado")
})
app.delete('/mafiosos/:id', (req, res) =>{
     mafiososRepository.eliminarPorId(req.params.id)
     res.status(201).send("Mafiosos eliminado")
})

app.put('/mafiosos/:idMafioso', function(reqquest, response){
    mafiososRepository.actualizar(reqquest.params.id, reqquest.body.nombre )
    response.send(mafiososRepository.obtenerPorId(reqquest.params.id))
})

app.get('/prisiones', function (reqquest, response){
    response.send(prisionesRepository.obtenerTodos())
})

app.get('/prisiones/:idPrision/prisioneros', function (reqquest, response){
    const infoPrision = prisionesRepository.obtenerPorId(reqquest.params.idPrision)

    const prisioneros = infoPrision.prisioneros.map(prisionero => mafiososRepository.obtenerPorId(prisionero))

    response.send(prisioneros);
})

app.post('/prisiones/:idPrision/encarcelar/:idMafioso', (req, res)=>{
    prisionesRepository.encarcelar(req.params.idPrision, req.params.idMafioso)
    const mafioso = mafiososRepository.obtenerPorId(req.params.idMafioso)
    res.send('Has encarcelado a ' + mafioso.nombre)
})



app.listen(3000, () => {
    console.log("Mafia scanner: Buenos dias agente de la ley.")
    console.log("Mafia scanner: A que mafioso atraparemos hoy?")
})
