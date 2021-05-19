import * as mongoose from 'mongoose';
import {User} from './schemas'

mongoose.connect('mongodb://127.0.0.1:27017/dsi-assesment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then((client) => {
  console.log('Connected to the database');
}).catch(() => {
  console.log('Something went wrong when conecting to the database');
});

User.deleteOne({nombre: 'Juan'}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})