$(document).ready( function() {
    $('#container').on('click', function() {
    	jQuery('<div/>', {
    	  class: 'pixel',
       }).appendTo('#container');
    })


});
