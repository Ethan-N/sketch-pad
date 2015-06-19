$(document).ready(function(){
    for(var i = 0; i < 16; i++){        
       $('#container').append("<div class = \"row\"></div>");   
    }
    for(var i = 0; i < 16; i++){        
       $('.row').append("<div class = \"column\"></div>");   
    }
    $('.column').fadeTo('0', 0);
    $('.row').css('width', '6.25%');
    $('.row').css('height', '100%');
    $('.row').css('display', 'inline-block');
    $('.column').css('height', '6.25%');
    $('.column').css('width', '100%');
    $('.column').css('background-color', 'blue');
    $('.column').hover(function(){
        	$(this).fadeTo('slow', 1);
    	});
    $('button').click(function(){
        $('.column').fadeTo('0', 0);
        var size = prompt("Please enter a grid size.");
        $('#container').empty();
        for(var i = 0; i < size; i++){        
       		$('#container').append("<div class = \"row\"></div>");   
  		}
    	for(var i = 0; i < size; i++){        
      		$('.row').append("<div class = \"column\"></div>");   
   		}
   		$('.column').fadeTo('0', 0);
   		var percent = 100/size;
   		$('.row').css('width', percent + '%');
   		$('.row').css('height', '100%');
   		$('.row').css('display', 'inline-block');
   		$('.column').css('height', percent +'%');
   		$('.column').css('width', '100%');
   		$('.column').css('background-color', 'blue');	
 	    $('.column').hover(function(){
        $(this).fadeTo('slow', 1);
    	});
    });
});