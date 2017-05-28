$(document).ready( function() {
	// Create sketchpad
	var num_pixels = window.prompt("How many pixels per side" + 
		" do you want?");
	for (i=0; i <= num_pixels * num_pixels; i++) {
    	jQuery('<div/>', {class: 'pixel',}).appendTo('#container');
    }

    // Determine size of pixels
    var grid_height = $('#container').css('height');
	grid_height = grid_height.replace("px", "");
	var pixel_size = grid_height / num_pixels;

	// Add size of pixels to css class pixel
    $('.pixel').css({'height':pixel_size, 'width':pixel_size});    	

    // Change pixel color when mouse enters/exits pixel
    $('.pixel').on('mouseenter', function() {
    	$(this).css({'background-color':'red'})
    });
    $('.pixel').on('mouseleave', function() {
    	$(this).css({'background-color':'gray'})
    });
});
