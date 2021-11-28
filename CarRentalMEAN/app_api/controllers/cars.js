const mongoose = require('mongoose');
const car = mongoose.model('Car');

const _buildCarList = function(req, res, results, stats) {
  let cars = [];
  results.forEach((doc) => {
    cars.push({
      name: doc.obj.name
    });
  });
  return cars;
};

const carsRead = function (req, res) {
    car
      .find()
      .exec((err, car) => {
        if (!car) {
          res	
            .status(404) 
            .json({	
              "message": "carid not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(car);
      });		
};

const carsCreate = function (req, res) {
 car.create({
    name: req.body.name
  }, (err, car) => {
    if (err) {
      res
        .status(400)
        .json(err);
    } else {
      res
        .status(201)
        .json(car);
    }
  });
};

const carsReadOne = function (req, res) {
  if (req.params && req.params.carid) {
    car
      .findById(req.params.carid)
      .exec((err, car) => {
        if (!car) {
          res	
            .status(404) 
            .json({	
              "message": "c arid not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(car);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No carid in request"
      });		
  }
};

const carsUpdateOne = function (req, res) {
  if (!req.params.carid) {
    res
      .status(404)
      .json({
        "message": "Not found, carid is required"
      });
    return;
  }
  car
    .findById(req.params.carid)
    .select('-reviews -rating')
    .exec((err, car) => {
      if (!car) {
        res
          .json(404)
          .status({
            "message": "arid not found"
          });
        return;
      } else if (err) {
        res
          .status(400)
          .json(err);
        return;
      }
      car.name = req.body.name;

      car.save((err, car) => {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(car);
        }
      });
    }
  );
};

const carsDeleteOne = function (req, res) {
  const carid = req.params.carid;
  if (carid) {
    car
      .findByIdAndRemove(carid) 
      .exec((err, car) => {
          if (err) {
            res
              .status(404)
              .json(err);
            return;
          }
          res
            .status(204)
            .json(null);
        }
    );
  } else {
    res
      .status(404)
      .json({
        "message": "No carid"
      });
  }
};

module.exports = {
  carsCreate,
  carsRead,
  carsReadOne,
  carsUpdateOne,
  carsDeleteOne
};
