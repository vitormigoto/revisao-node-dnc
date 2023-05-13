const express = require('express');
const bodyParser = require('body-parser');
// Importação das Rotas
const userRoutes = require('./routes/userRoutes');

const app = express();

//Middleware 
app.use(express.json());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded(
        {extended: true}
    )
);

//Referenciando as Rotas
app.use('/usuario',userRoutes);

module.exports = app;