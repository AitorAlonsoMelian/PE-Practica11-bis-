import * as mongoose from 'mongoose';
interface user {
    nombre: string;
    apellidos: string;
    edad?: number;
    email: string;
    contraseña: string;
}
export declare const User: mongoose.Model<user, {}, {}>;
export {};
