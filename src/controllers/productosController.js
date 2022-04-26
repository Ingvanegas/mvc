
const arrayProducto = [];

const controller = {
    index: (req, res) => {
        res.status(200).send(arrayProducto);
    },
    getById: (req, res) => {
        const idProducto = req.params.id;
        const Producto = arrayProducto.find(Producto => Producto.id == idProducto);
        if(Producto) {
            res.status(200).send(Producto);
        } else{
            res.status(404).send('No se encontro a la Producto');
        }       
    },
    create: (req, res) => {

        let id = 0;

        if(arrayProducto.length > 0) {
            id = arrayProducto[arrayProducto.length - 1].id + 1
        } 
       
        arrayProducto.push({
            id,
            nombre: req.params.nombre,
            apellido: req.params.apellido
        });
        res.status(200).send(arrayProducto);
    }
};

module.exports = controller;