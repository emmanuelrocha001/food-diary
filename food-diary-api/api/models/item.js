const mongoose = require( 'mongoose');



const itemSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  brand: String,
  measurementUnit: { type: String, required: true },
  servingSize: { type: Number, required: false },
  calories: { type: Number, required: false},
  mealTag: { type: String, required: true},
  fdcId: { type: Number, require: false},
  nutrients: {type: Map, of: Number}

});



module.exports = mongoose.model( 'Item', itemSchema );