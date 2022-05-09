const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const multer = require('multer');

//datos
const datos = require('./public/productsDataBase.json');

//Routes imports
const personas = require('./routes/personas');
const productos = require('./routes/productos');

const app = express();

//middlewares
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/personas', personas);
app.use('/productos', productos);


//storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/public/'+ req.params.folder)
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
});

const uploadFile = multer({storage});

app.get('/', (req, res) => {    
    res.render('index', { 
        datos,
        sections: [
            {
                title: 'Titulo 1',
                description: 'Descripcion 1'
            },
            {
                title: 'Titulo 2',
                description: 'Descripcion 2'
            },
            {
                title: 'Titulo 3',
                description: 'Descripcion 3'
            }
        ]
     });
});

app.post('/prueba', (req, res) => {
    const usuario = req.body.txtUser
    const password = req.body.txtPassword
    if(usuario == 'admin' & password == 'admin') {
        res.status(200).redirect('/personas');
    } else {
        res.status(400).redirect('personas');
    }    
});

app.put('/prueba', (req, res) => {
    const usuario = req.body.txtUser
    const password = req.body.txtPassword
    if(usuario == 'admin' & password == 'admin') {
        res.status(200).send('Desde el put todo ok');
    } else {
        res.status(400).send('Desde el put todo mal');
    }    
});

app.get('/prueba', (req, res) => {    

    const limit = req.query.limit;
    const offset = req.query.offset;
    res.send(`El limit es igual a ${limit} El offset es igual a ${offset}`);
});

app.get('/prueba/:limit/:offset', (req, res) => {    
    const limit = req.params.limit;
    const offset = req.params.offset;
    res.send(`El limit es igual a ${limit} El offset es igual a ${offset}`);
});

//ejemplo multer con middleware
app.post('/register/:folder', uploadFile.single('image'), (req, res) => {
    res.status(200).send('OK')
});

//ejemplo multer directamente
const upload = uploadFile.single('image');
app.post('/registervalidaciones', (req, res) => {
    upload(req, res, (err)=>{
        if(err) {
            res.status(400).send('Algo salio mal')
        }

        res.send('OK')
    })
});

app.use('/',  (req, res) => { 
    res.status(404).send('not-found');
});

let port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
