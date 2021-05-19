import * as mongoose from 'mongoose'



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
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contraseña: {
    type: String,
    required: true,
  }
});

export const User = mongoose.model<user>('users', UserSchema);

