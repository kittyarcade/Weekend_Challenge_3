var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false});
var port =  process.env.PORT || 3000;


var answer = [];


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

  var maths = req.body;

  var results = '';
  var x = parseInt(maths.x);
  console.log('var x : ', x);
  var y = parseInt(maths.y);
  console.log('var y: ', y);

  if(maths.type === '+'){
    results = x+y;
    console.log(results);
  } else if(maths.type === '-'){
    results = x-y;
  } else if(maths.type === '*'){
    results = x*y;
  } else if(maths.type === '/'){
    results = x / y;
  }

answer.push(results);
console.log('answer array: ', answer);

});

app.get('/returnAnswer', function(req,res){
  console.log('base url hit in get');
  res.send(answer);
});


//static folder
app.use(express.static('public'));
