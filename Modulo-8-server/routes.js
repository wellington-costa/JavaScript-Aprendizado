const express = require('express');
const routes = express.Router();
const home = require('./src/controllers/homeController');
const contato = require('./src/controllers/contatoController');

//

// Rotas Home
routes.get('/', home.index);
routes.post('/', home.setPost);

// Rotas Contato
routes.get('/contato', contato.index);
routes.post('/contato', contato.setPost);

module.exports = routes;