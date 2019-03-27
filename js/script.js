// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */



$("#search-button").click(function(){
  var search = $("#search-term").val();
  var api = 'https://api.giphy.com/v1/gifs/search?q='+search+'y&rating=pg&api_key=dc6zaTOxFJmzC';
  $.ajax({
        url: api,
        method: "GET",
        success: function(response) {
            // YOUR CODE GOES HERE
             $(".rowgallery").html("<img src='"+response.data[0].images.original.url+"'/>");
            console.log(response);
        } 
      
  }); 
    
  
});
