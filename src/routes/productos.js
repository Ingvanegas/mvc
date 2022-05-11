const express = require("express");
const route = express.Router();
const ProductosController = require('../controllers/ProductosController')

route.get('/', ProductosController.index);
route.get('/productos/:id', ProductosController.getById);
route.post('/producto', ProductosController.create);

module.exports = route;