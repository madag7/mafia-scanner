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

app.listen(3000, () => {
    console.log("Mafia scanner: Buenos dias agente de la ley.")
    console.log("Mafia scanner: A que mafioso atraparemos hoy?")
})