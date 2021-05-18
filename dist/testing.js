"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/notes-app').then(() => {
    console.log('Connected to the database');
}).catch(() => {
    console.log('Something went wrong when conecting to the database');
});
