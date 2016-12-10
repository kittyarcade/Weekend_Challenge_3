$(document).ready(function(){
  console.log('meow');


//post
var postData = function(){
  console.log('in postData');

  //start AJAX
  $.ajax({
    type: 'POST',
    url: '/testPost',
    data: calculator,
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

$('#clear').on('click', function(){
    console.log('clear button click');
    location.reload(true);
});









});//end document ready
