$(document).ready( function() {
	// Determine size of sketchpad (e.g 100x100) from user
	var grid_height = $('#container').css('height');
	grid_height = grid_height.replace("px", "");
	var grid_width = $('#container').css('height');
	grid_width = grid_height.replace("px", "");
	var grid_size = grid_height * grid_width;
	alert(grid_size);
	// Determine size of pixels
	var num_pixels = window.prompt("How many pixels do you want?");
	var pixel_size = grid_size / num_pixels
	var pixel_h = Math.sqrt(pixel_size);
	var pixel_w = Math.sqrt(pixel_size);
	// Create sketchpad based on input
    $('#container').on('click', function() {
    	$('.pixel').css({'height':pixel_h, 'width':pixel_w});
    	for (i=0; i <= num_pixels; i++) {
    		jQuery('<div/>', {class: 'pixel',}).appendTo('#container');
    	}
    })
});
