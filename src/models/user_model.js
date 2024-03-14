const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: 'string', require: true},
    lastname: {type: 'string', require: true},
    nacionality: {type: 'string', require: true},
    document: {type: 'string', require: true, unique: true},
    user_email: {type: 'string', require: true, unique: true},
    password: {type: 'string', require: true},
    user_active: {type: 'boolean', require: true, default: false},
});

// En la exportación, mongoose crea un modelo cuya colección en la base de datos se llamará 'users' y tendrá la estructura definida en el esquema.
//"User" y tendrá la estructura definida en el esquema "userSchema"
module.exports = mongoose.model('User', userSchema);