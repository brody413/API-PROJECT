
const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema ({
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre'
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number
  },
  yearReleased: {
    type: Number
  },
}, {
  timestamps: true
});


module.exports = mongoose.model('Game', GameSchema);