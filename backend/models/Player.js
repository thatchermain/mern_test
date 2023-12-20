import mongoose from 'mongoose';

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  score: {
    type: Number,
  },
});

export const PlayerModel = mongoose.model('players', PlayerSchema);
