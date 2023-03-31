(function($) {
    $('.common-tab').on('click', function(e){
        	
		$('html, body').animate({
        scrollTop: $("#groupsection").offset().top
    }, 1500);
		
		console.log($(this).attr("href"));
		
		$(".content-dc").removeClass("active");
		$($(this).attr("href")).addClass("active");
	
		e.preventDefault();
});




})(jQuery);


/* services  Boxes  */
/*
.content-dc {
	display: none;
}
.content-dc.active {
  display: block;
}*/