$(document).ready( function() {
	reset();

    // Reset if button is clicked
    $('#reset').on('click', reset);

    // Random color if Rainbow button clicked
    $('#rainbow').on('click', function() {
        $('.pixel').on('mouseenter', function() {
            $(this).css('background-color', getRandomColor());
      });
    });

    $('#red').on('click', function() {
        $('.pixel').on('mouseenter', function() {
            $(this).css('background-color', 'red');
      });
    });

// ------------------ Functions ----------------------------
function reset() {
	$('#container').empty();
	var num_pixels = create_grid();
	var pixel_size = get_pixel_size(num_pixels);

	// Add size of pixels to css class pixel
    $('.pixel').css({'height':pixel_size, 'width':pixel_size});

    // Change pixel color on mouse enter/leave
    $('.pixel').on('mouseenter', function() {
    	$(this).addClass('normal');
    });
}

function create_grid() {
// Create sketchpad
	var num_pixels = 999;
	while (num_pixels > 100) {
		num_pixels = window.prompt("How many pixels per side" + 
		" do you want? (1 - 100)");
	}
	

	for (i=0; i <= num_pixels * num_pixels; i++) {
    	jQuery('<div/>', {class: 'pixel',}).appendTo('#container');
    }
    return num_pixels;
};

function get_pixel_size(num_p) {
	// Determine size of pixels
    var grid_height = $('#container').css('height');
	grid_height = grid_height.replace("px", "");
	var pixel_size = grid_height / num_p;
    
    return pixel_size;
};

function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
};
});


