const express = require('express');
const routes = express.Router();
const home = require('./src/controllers/homeController');
const contato = require('./src/controllers/contatoController');
const login = require('./src/controllers/loginController');
const cadUsuario = require('./src/controllers/cadastroUsuarioController');
const {loginRequired} = require('./src/middlewares/middleware');

//

// Rotas Home
routes.get('/home', loginRequired, home.index);
routes.post('/home', loginRequired, home.setPost);


//Rotas de Login
routes.get('/login', login.index);
routes.post('/login', login.login);
routes.get('/logout', login.logout);

//Rotas de cadastro
routes.get('/cadastroUsuario',loginRequired, cadUsuario.index);
routes.post('/cadastroUsuario', loginRequired,cadUsuario.registra);
routes.post('/cadastroUsuario/editar/:id',loginRequired, cadUsuario.editar);
routes.get('/cadastroUsuario/editar/:id',loginRequired, cadUsuario.editView);

// Rotas Contato
routes.get('/', contato.index);
routes.post('/', contato.setPost);



module.exports = routes;