const express = require('express');

const datos = require('./public/productsDataBase.json');

//Routes imports
const personas = require('./routes/personas');
const productos = require('./routes/productos');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use('/personas', personas);
app.use('/productos', productos);

app.get('/', (req, res) => {
    //codigo que llama funciones del controlador
    
    res.render('index', { 
        datos,        
     });
});

let port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
