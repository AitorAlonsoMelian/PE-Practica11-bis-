import * as express from 'express';

const app = express();

app.get('', (_, res) => {
  res.send('<h1>My application</h1>');
});

app.get('/notes', (_, res) => {
  res.send('Notes');
});

app.get('/info', (_, res) => {
  res.send('Information');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
