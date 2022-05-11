const actions = require('../database/actions')
const arrayPersona = [];


const path = '\\JSON\\personas.json';

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
        const body = req.body;
        actions.path = path;
        const response = actions.create(body);
        res.status(201).send(response);
    }
};

module.exports = controller;