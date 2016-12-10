$(document).ready(function(){
  console.log('meow');


//post
var postData = function(){
  console.log('in postData');

  var objectToSend = {
    tester: 'test'
  }; // end object to send

  //start AJAX
  $.ajax({
    type: 'POST',
    url: '/testPost',
    data: objectToSend,
    success: function(response){
       console.log( 'back from post call:', response );
    }
});

}; //end postData




// buttons //

$('#submit').on('click', function(){
  console.log('testPost on click');
  postData();
});









});//end document ready
