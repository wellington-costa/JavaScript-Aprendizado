require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');

//Conexão com MongoDB
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{app.emit('pronto'); console.log('Agora que a conexão ocorreu')});

const routes = require('./routes');
const path = require('path');
const {meuMiddleware , checkCsrfErro} = require('./src/middlewares/middleware');
const helmet = require('helmet');
const csrf = require('csurf');

app.use(helmet());
app.use(express.urlencoded({ extended: true }));

//views
app.set('views', path.resolve(__dirname,'src','views'));
app.set('view engine', 'ejs');

// arquivos estáticos
app.use(express.static(path.resolve(__dirname,'public')));
// csrf segurança para forms
app.use(csrf());

//Middlewares
app.use(meuMiddleware);
app.use(checkCsrfErro);

//rotas
app.use(routes);

//Só inicia servidor depois de conectar BD
//app.on('pronto',()=>{

    app.listen(3000, ()=> {
        console.log('Server is running');
        console.log('http://localhost:3000');
    });
//});
