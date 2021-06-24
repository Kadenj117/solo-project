const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://Kadenj117:kaden@starwars.fqytp.mongodb.net/SoloProject?retryWrites=true&w=majority"; //--username Kadenj117

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'SoloProject'
})
  .then(() => {
    console.log('Connected to mongoDB')
  })
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: String,
  priority: Number,
  done: Boolean,
})

const ToDo = mongoose.model('ToDo', todoSchema)

module.exports = ToDo;


