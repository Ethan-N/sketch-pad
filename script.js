function fill(size){
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
   		$('.column').css('background-color', 'black');	
 	    $('.column').hover(function(){
        	$(this).fadeTo('slow', 1);
    	});
}
$(document).ready(function(){
    fill(16);
    $('#solid').click(function(){
        $('.column').fadeTo('0', 0);
        var size = prompt("Please enter a grid size.");
        $('#container').empty();
        fill(size);
    });
    $('#random').click(function(){
        $('.column').fadeTo('0', 0);
        var size = prompt("Please enter a grid size.");
        $('#container').empty();
        fill(size);
        $('.column').hover(function(){
        	var rgb = 'rgb(' + Math.round(Math.random()*256) +',' + Math.round(Math.random()*256) + ',' + Math.round(Math.random()*256) + ')';
        	$(this).css({'background-color': rgb});
        	$(this).fadeTo('slow', 1);
    	});
    });
    $('#slow').click(function(){
        $('.column').fadeTo('0', 0);
        var size = prompt("Please enter a grid size.");
        $('#container').empty();
        fill(size);
        $('.column').unbind();
        $('.column').mouseenter(function(){
        	if($(this).css('opacity') < 1){
        		var newOpacity = Number($(this).css('opacity')) + .1;
        		console.log(newOpacity);
        		$(this).fadeTo('fast', newOpacity);
        	}
    	});
    });
});