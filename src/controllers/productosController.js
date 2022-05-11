const actions = require('../database/actions');

const path = '\\JSON\\products.json';

const controller = {
    index: (req, res) => {
        actions.path = path;
        res.status(200).send(actions.get());
    },
    getById: (req, res) => {
              
    },
    create: (req, res) => {        
        const body = req.body;
        actions.path = path;
        const response = actions.create(body);
        res.status(200).render('products', {datos: response});
    }
};

module.exports = controller;