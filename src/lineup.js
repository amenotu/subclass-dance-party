var linedUp = function(){
	var dancers = window.dancers;
	//$('.square').wrap("<div></div>");
	/*for(var i = 0; i < dancers.length; i++){
		var $container = $('<div>'+dancers[i]+'</div>');
	    $('body').append($container);
	}*/

	for(var i = 0; i < dancers.length; i++){
		dancers[i].attr("style", "float: left");
	}
};

