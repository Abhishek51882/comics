import mongoose from 'mongoose';

const comicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publishedDate: {
    type: Date,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  pages: {
    type: Number,
    required: true
  },
  condition: {
    type: String,
    enum: ['new', 'used'],
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  genre: {
    type: String,
    required: true
  }
});

const Comic = mongoose.model('Comic', comicSchema);

export default Comic;