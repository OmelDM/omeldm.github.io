$(function () {

var progress = $('.progress').hide();
var dealers = $('#dealers');

$('button').click(function () {
  var zipCode = $('#zip').val();
  console.log(typeof zipCode);
  var results = [];

  dealers.empty();
  progress.show();

  $.ajax({
      url: "https://sheets.googleapis.com/v4/spreadsheets/1OJE1YzUCuyJoVJfzEucPB3FuQBL8gI79c4GN26E_bvY/values/A2%3AO",
      data: {
          key: "AIzaSyAZBTsJFbkqN9k9XUaQH_t10mF6M1s3eh4",
      },
   
      // Work with the response
      success: function( response ) {
          response.values.forEach(function (currentValue, index, array) {
            if (currentValue[4] === zipCode) {
              results.push(currentValue);
            }
            
          });
console.log(results.length);
          if (0 < results.length) {
            results.forEach(function (currentValue, index, array) {
              $('<div class="company"><h3 class="company__name">' + currentValue[1] + 
                '</h3><address class="company__address">' + currentValue[2] +
                '</address><div class="company__city">' + currentValue[3] +
                '</div><div class="company__zip">' + currentValue[4] +
                '</div><div class="company__phone">' + currentValue[7] +
                '</div></div>').appendTo(dealers);
            });
          } else {
            $('<p class="empty-results text-danger">No Dealers Found</p>').appendTo(dealers);
          }
      }
  }).always(function () {
    progress.hide();
  });

});

});