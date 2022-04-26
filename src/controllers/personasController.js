
const arrayPersona = [];

const controller = {
    index: (req, res) => {
        res.status(200).send(arrayPersona);
    },
    getById: (req, res) => {
        const idPersona = req.params.id;
        const persona = arrayPersona.find(persona => persona.id == idPersona);
        if(persona) {
            res.status(200).send(persona);
        } else{
            res.status(404).send('No se encontro a la persona');
        }       
    },
    create: (req, res) => {

        let id = 0;

        if(arrayPersona.length > 0) {
            id = arrayPersona[arrayPersona.length - 1].id + 1
        } 
       
        arrayPersona.push({
            id,
            nombre: req.params.nombre,
            apellido: req.params.apellido
        });
        res.status(201).send(arrayPersona);
    }
};

module.exports = controller;