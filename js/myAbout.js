/* myAbout.js */
$(document).ready(function(){
	var $table = $('.table');
	var $skillset = $('.skillset');
	var $sideBarButton = $('.sidebar_button');
	$table.hide();
	$skillset.hide();
	$skillset.fadeIn(1000);

	var $magicFunction = function(){
		$table.fadeOut(0);
		var $target = $(this).data('target');
		$($target).fadeIn(1000);
	}

	$skillset.on('click', $magicFunction);
	$sideBarButton.on('click', $magicFunction);
});