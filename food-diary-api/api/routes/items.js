const express = require( 'express' );
const router = express.Router();
const mongoose = require( 'mongoose' );

const Item = require( '../models/item' );



router.post('/', (req, res, next) => {
  

  const item = new Item({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    brand: req.body.brand,
    measurementUnit: req.body.measurementUnit,
    calories: req.body.calories,
    mealTag: req.body.mealTag,
    nutrients: req.body.nutrients

  });


  // save mongoose to database
  item
    .save()
    .then( result => {
        res.status(201).json({
          successful: true
        });



    })
    .catch( err => {
      res.status(500).json({
        error: err
      });
    })





});


// export roouter with configured routes
module.exports = router;

