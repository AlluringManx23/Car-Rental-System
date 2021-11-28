const request = require('request');
const mongoose = require('mongoose');
const apiOptions = { 
server : 'http://localhost:3000' 
};

const requestOptions = { 
url : 'http://localhost:3000/api/cars', 
method : 'GET', 
json : {},
qs : { 
offset : 20 
} 
}; 


request(requestOptions, (err, response, body) => { 
if (err) { 
console.log(err); 
} else if (response.statusCode === 200) { 
console.log(body); 
} else {
console.log(response.statusCode); 
} 
});


const _renderHomepage = function(req, res, responseBody){ 
res.render('cars-list', {
title: 'car',
pageHeader: {
title: 'car',
strapline: 'car'
},
sidebar: "car",
cars: responseBody 
});
};


const homelist = function(req, res){
const path = '/api/cars'; 
const requestOptions = { 
url : apiOptions.server + path, 
method : 'GET', 
json : {}
}; 
request(
requestOptions,function(err, response, body) {
_renderHomepage(req, res, body); 
}
);
};




module.exports = {
  homelist
};
