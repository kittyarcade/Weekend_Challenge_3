var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false});
var port =  process.env.PORT || 3000;


//spin up server
app.listen(port, function(req, res){
  console.log('server listening on: ', port);
}); //end server spin up

//set up base url
app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('views/index.html'));
}); //end base url setup




//testPost
app.post('/testPost', urlEncodedParser, function(req, res){
  console.log('testPost url hit. req.body', req.body);


  var objectReturn = {
    test : 'tester test working'
  };

res.send(objectReturn);

});




//static folder
app.use(express.static('public'));
