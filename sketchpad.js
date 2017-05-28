$(document).ready( function() {
	// Determine size of sketchpad (e.g 100x100) from user
	var grid_height = $('#container').css('height');
	grid_height = grid_height.replace("px", "");
	var grid_width = $('#container').css('height');
	grid_width = grid_height.replace("px", "");
	var grid_size = grid_height * grid_width;
	
	var num_pixels = window.prompt("How many pixels do you want?");
	// Create sketchpad
	for (i=0; i <= num_pixels; i++) {
    	jQuery('<div/>', {class: 'pixel',}).appendTo('#container');
    }

    // Determine size of pixels
	var pixel_size = grid_size / num_pixels
	var pixel_h = Math.sqrt(pixel_size);
	var pixel_w = Math.sqrt(pixel_size);
	// Add size of pixels to css class pixel
    $('.pixel').css({'height':pixel_h, 'width':pixel_w});    	
    

});
