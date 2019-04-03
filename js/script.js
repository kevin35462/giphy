// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

var apiResponseGlobal;

$("#search-button").click(function(){
  var search = $("#search-term").val();
  var api = 'https://api.giphy.com/v1/gifs/search?q='+search+'y&rating=pg&api_key=dc6zaTOxFJmzC';
  $("#randButton").show();
  $("#mail_to").show();
  $.ajax({
        url: api,
        method: "GET",
        success: function(response) {
            // YOUR CODE GOES HERE
             $(".rowgallery").html("<img src='"+response.data[0].images.original.url+"'/>");
            console.log(response);
          apiResponseGlobal = response;  
          
        } 
      
  }); 
    
  
});
$("#randButton").click(function(){
    // how do we make sure this function has access to the data?
    // let's take Math.Random() // and make sure it gets a random # between 0 -> number of results
    
    var randomIndex = Math.floor(Math.random() * apiResponseGlobal.data.length); // 4.999999 => 4 
    
    $(".rowgallery").append("<img src='"+apiResponseGlobal.data[randomIndex].images.original.url+"'/>");
});