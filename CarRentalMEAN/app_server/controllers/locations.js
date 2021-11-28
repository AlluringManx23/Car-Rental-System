/* GET 'home' page */
const homelist = function(req, res){
  res.render('cars-list', {
    title: 'Cars',
    pageHeader: {
      title: 'cars',
      strapline: 'Search cars!'
    },
    cars: [{
        name: 'Ferrari',
        
    }, {
        name: 'Audi',
        
    }, {
        name: 'Toyota',
       
    }]
  });
};


module.exports = {
  homelist
};