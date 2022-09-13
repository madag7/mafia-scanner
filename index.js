import express from 'express';
import bodyParser from 'body-parser';
import { MafiososDB } from './mafiososDB.js';
import { PrisionesDB } from './prisionesDB.js';


const app = express()
const mafiososDB = new MafiososDB();
const prisionesDB = new PrisionesDB();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/*
    Code here
*/

app.listen(3000, () => {
    console.log("Mafia scanner: Buenos dias agente de la ley.")
    console.log("Mafia scanner: A que mafioso atraparemos hoy?")
})