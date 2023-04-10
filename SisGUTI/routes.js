const express = require('express');
const routes = express.Router();
const home = require('./src/controllers/homeController');
const contato = require('./src/controllers/contatoController');
const login = require('./src/controllers/loginController');
const cadUsuario = require('./src/controllers/cadastroUsuarioController');
const cadPaciente = require('./src/controllers/cadastroPacienteController');
const cadProntuario = require('./src/controllers/cadastroProntuarioController');


//

// Rotas Home
routes.get('/home', home.index);
routes.post('/home', home.setPost);


//Rotas de Login
routes.get('/', login.index);
routes.post('/', login.login);
routes.get('/logout', login.logout);

//Rotas de cadastro
routes.get('/cadastroUsuario', cadUsuario.index);
routes.post('/cadastroUsuario',cadUsuario.registra);
routes.post('/cadastroUsuario/editar/:id', cadUsuario.editar);
routes.get('/cadastroUsuario/editar/:id', cadUsuario.editView);

// Rotas Contato
routes.get('/contato', contato.index);
routes.post('/contato', contato.setPost);

//Rotas Paciente
routes.get('/paciente', cadPaciente.index);

//Prontuario
routes.get('/prontuario', cadProntuario.index);




module.exports = routes;