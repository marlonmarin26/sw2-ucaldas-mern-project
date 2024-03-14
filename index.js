const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Poder acceder a leer archivo .env
require("dotenv").config();
const CONNECTION_PORT = process.env.CONNECTION_PORT || 3005;

app.listen(CONNECTION_PORT, () => {
    console.log(`Using the port ${CONNECTION_PORT}`);
});