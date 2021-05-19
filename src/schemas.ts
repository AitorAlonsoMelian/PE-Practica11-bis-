import * as mongoose from 'mongoose'
import validator from 'validator';


interface user {
  nombre: string,
  apellidos: string,
  edad?: number,
  email: string,
  contraseña: string
}

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
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('No se pueden insertar edades negativas')
      }
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: (value: string) => {
      if (!validator.isEmail(value)) {
        throw new Error('El email no es adecuado.')
      }
    }
  },
  contraseña: {
    type: String,
    required: true,
  }
});

export const User = mongoose.model<user>('users', UserSchema);

