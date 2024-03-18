const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./src/routes/user_routes');
// bodyParser es un middleware de express
// que nos permite acceder al cuerpo de las peticiones entrantes
// en formato JSON, multipartes y lo convierte en un objeto de JavaScript
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Poder acceder a leer archivo .env
require("dotenv").config();
const CONNECTION_PORT = process.env.CONNECTION_PORT || 3005;

app.listen(CONNECTION_PORT, () => {
    console.log(`Using the port ${CONNECTION_PORT}`);
});

const mongo_connect = () => {
    try {
        mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
            .then(() => {
                console.log('Connected to the database');
            }).catch((err) => {
                console.log('Error connecting to the database');
            });

    } catch (err) {
        console.log(err);
    }
}

mongo_connect();

// Rutas
app.use('/api/v1/users/', userRoutes);
