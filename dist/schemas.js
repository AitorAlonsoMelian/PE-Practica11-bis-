"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose = require("mongoose");
const validator_1 = require("validator");
const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        validate: (value) => {
            if (value < 0) {
                throw new Error('No se pueden insertar edades negativas');
            }
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: (value) => {
            if (!validator_1.default.isEmail(value)) {
                throw new Error('El email no es adecuado.');
            }
        }
    },
    contraseña: {
        type: String,
        required: true,
    }
});
exports.User = mongoose.model('users', UserSchema);
