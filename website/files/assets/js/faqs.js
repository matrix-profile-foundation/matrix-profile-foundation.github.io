$(document).ready(function(){
	$('div.list-toggle ul li p').click(function(e){
		$(this).next('ul').toggle(300);
	});
});