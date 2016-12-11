$(document).ready(function(){
  console.log('meow');


  var calculator = function() {
  objectToSend = {
  x: $('#num1').val(),
  y: $('#num2').val(),
  type: $('#ops').val()
  };
};



//post
var postData = function(){
  console.log('in postData');

  //start AJAX
  $.ajax({
    type: 'POST',
    url: '/testPost',
    data: objectToSend,
    success: function(response){
       console.log( 'back from post call:', response);
    }
});
answers();
$('#outputDiv').html(''); //clears total after each calculation
}; //end postData


//GET

var answers = function (){
  $.ajax({
    type: 'GET',
    url: '/returnAnswer',
    success: function(response) {
      console.log('get answer: ', response);
      $('#outputDiv').html('Total: ' + response[response.length-1]);

    }


  });


};//end GET



$('#submit').on('click', function(){
  console.log('testPost on click');
calculator();
$('#num1').val(''); //clear input field
$('#num2').val(''); //clear input field
console.log(objectToSend);
postData();

});


//reload page and clear server after clear button clicked
$('#clear').on('click', function(){
    console.log('clear button click');
    location.reload(true);
});









});//end document ready
