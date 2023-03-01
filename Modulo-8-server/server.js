const express = require('express');
const app = express();

const mongoose = require('mongoose');
const connectionString = 
mongoose.connect(connectionString);

const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');




app.use(express.urlencoded({ extended: true }));

//views
app.set('views', path.resolve(__dirname,'src','views'));
app.set('view engine', 'ejs');

// arquivos estáticos
app.use(express.static(path.resolve(__dirname,'public')));

app.use(meuMiddleware);
app.use(routes);
app.listen(3000, ()=> {
    console.log('Server is running');
    console.log('http://localhost:3000');
});