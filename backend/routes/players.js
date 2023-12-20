import express from 'express';
import { PlayerModel } from '../models/Player.js';

const router = express.Router();

//

router.post('/', async (req, res) => {
  const { name, age, score } = req.body;
  console.log(req.body);
  const newPlayer = await new PlayerModel({
    name: 'Bro',
    age: 22,
    score: 34,
  });
  newPlayer.save();
  res.json({ msg: 'Good' });
});

//

export { router as playersRouter };
