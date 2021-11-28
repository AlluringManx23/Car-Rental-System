const express = require('express');
const router = express.Router();
const ctrlCars = require('../controllers/cars');



/* cars page*/
router.get('/', ctrlCars.homelist);




module.exports = router;
