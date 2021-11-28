/* GET home page */
const viewcars = function(req, res){ 
res.render('viewcars'); }

const signup = function(req, res){ 
res.render('signup'); }

const index = function(req, res){ 
res.render('index'); }
module.exports = { 
index,
signup,
viewcars  
};

