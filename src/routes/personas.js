const express = require("express");
const route = express.Router();
const personasController = require('../controllers/personasController')

route.get('/', personasController.index);//localhost:3000/personas
route.get('/persona/:id', personasController.getById);//localhost:3000/personas/persona/0
route.post('/persona/:nombre/:apellido', personasController.create);//localhost:3000/personas/persona/walter/vanegas

module.exports = route;