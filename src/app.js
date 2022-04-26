const express = require('express');

//Routes imports
const personas = require('./routes/personas');
const productos = require('./routes/productos');

const app = express();

app.use('/personas', personas);
app.use('/productos', productos);

app.listen(process.env.PORT || 3000, ()=> {
    console.log('Servidor corriendo en el puerto 3000');
});