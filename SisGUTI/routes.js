const express = require('express');
const routes = express.Router();
const home = require('./src/controllers/homeController');
const contato = require('./src/controllers/contatoController');
const login = require('./src/controllers/loginController');
const cadUsuario = require('./src/controllers/cadastroUsuarioController');

//

// Rotas Home
routes.get('/', home.index);
routes.post('/', home.setPost);

//Rotas de Login
routes.get('/login', login.index);
routes.post('/login', login.login);
routes.get('/logout', login.logout);

//Rotas de cadastro
routes.get('/cadastroUsuario',cadUsuario.index);
routes.post('/cadastroUsuario',cadUsuario.registra);

// Rotas Contato
routes.get('/contato', contato.index);
routes.post('/contato', contato.setPost);



module.exports = routes;