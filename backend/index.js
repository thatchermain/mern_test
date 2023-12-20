import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
// import { playersRouter } from './routes/players.js';
import { PlayerModel } from './models/Player.js';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
//ROUTERS
// app.use('/players', playersRouter);

mongoose.connect(process.env.MONGO, {}).then(console.log('Connected to DB'));

// app.get('/players', async (req, res) => {
//   const data = await PlayerModel.find({});
//   res.send(data);
// });
app.post('/players', async (req, res) => {
  const { name, age, score } = req.body;
  console.log(req.body);
  const newPlayer = new PlayerModel({
    name: req.body.name,
    age: req.body.age,
    score: req.body.score,
  });
  newPlayer.save();
  console.log(newPlayer);
  // res.send('Nice!');
});
app.get('/players', async (req, res) => {
  const data = await PlayerModel.find({});
  await console.log(data);
  await res.send(data);
});

app.use('/', (req, res) => {
  res.json({ Site: 'Home Page' });
});

// START THE SERVER

app.listen(process.env.PORT, () =>
  console.log(`Server runs on ${process.env.PORT}`)
);
