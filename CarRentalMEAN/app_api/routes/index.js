const express = require('express');
const router = express.Router();
const ctrlCars = require('../controllers/cars');

// cars
router
  .route('/cars')
  .get(ctrlCars.carsRead)
  .post(ctrlCars.carsCreate);

router
  .route('/cars/:carid')
  .get(ctrlCars.carsReadOne)
  .put(ctrlCars.carsUpdateOne)
  .delete(ctrlCars.carsDeleteOne);
  

module.exports = router;
