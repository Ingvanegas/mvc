const express = require("express");
const route = express.Router();
const ProductosController = require('../controllers/ProductosController')

route.get('/', ProductosController.index);
route.get('/productos/:id', ProductosController.getById);
route.post('/productos/:nombre/:precio', ProductosController.create);

module.exports = route;