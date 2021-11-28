const mongoose = require('mongoose');


const carSchema = new mongoose.Schema({
  name: String,
  price: Number
});

mongoose.model('Car', carSchema);