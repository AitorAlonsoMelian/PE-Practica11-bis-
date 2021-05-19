"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const schemas_1 = require("./schemas");
mongoose.connect('mongodb://127.0.0.1:27017/dsi-assesment', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log('Connected to the database');
}).catch(() => {
    console.log('Something went wrong when conecting to the database');
});
schemas_1.User.updateOne({ email: 'juandd@gmail.com' }, {
    nombre: 'Juan',
    apellidos: 'Díaz Díaz',
    edad: 10,
    email: 'juandd@gmail.com',
    contraseña: 'Qwerty_'
}, {
    runValidators: true
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
