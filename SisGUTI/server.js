require('dotenv').config();
const express = require('express');
const Connect = require('./src/models/connectDB');
const app = express();

const conexaoFirestores = new Connect();

try {
    conexaoFirestores.connectDB();
    
    console.log('Conexão com banco de dados estabelecida!');
    
    

}catch{
    console.log('falha ao se conectar com firestore');
}


/*
  app.get('/transactions', (req, res) => {
    admin.firestore
    .collection('transactions')
    .get()
    .then(snapshot => {
        const transactions = snapshot.docs.map(doc => ({
            ...doc.data(),
            uid: doc.id
        }))
        res.json(transactions);
    })
  });
  */



//const mongoose = require('mongoose');

//Conexão com MongoDB
//mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true})
//.then(()=>{app.emit('pronto'); console.log('Conexão com banco de dados estabelecida!')});

//sessão de usuário com express
const session = require('express-session');

//const MongoStore = require('connect-mongo');
//const flash = require('connect-flash');


const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, checkCsrfErro } = require('./src/middlewares/middleware');
const helmet = require('helmet');
const csrf = require('csurf');

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
/*
// Configurando a sessão
const sessionOptions = session({
    secret: 'abcdefghijklmnopqrstuvwxyz',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 5,
        httpOnly: true
    }
});

app.use(sessionOptions);

const sessionOptions = session({
    store: new FirestoreStore({
        dataset: new Firestore(),
        kind: 'express-sessions',
      }),
      secret: 'my-secret',
      resave: false,
      saveUninitialized: true,
    });

app.use(sessionOptions);

app.use(flash());
*/
//views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));
// csrf segurança para forms
//app.use(csrf());

//Middlewares
app.use(middlewareGlobal);
//app.use(checkCsrfErro);

//rotas
app.use(routes);

//Só inicia servidor depois de conectar BD
//app.on('pronto',()=>{

app.listen(3000, () => {
    console.log('Server is running');
    console.log('http://localhost:3000');
});
//});
