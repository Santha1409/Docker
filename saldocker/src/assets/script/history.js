$(function(){
	
	windowwidth = $(window).width();
	
	historyheights();
	
	function historyheights() {
		$('.history-container').each(function(index) {
		
			var	imageheight = $(this).find('.history-image').height(),
				sectionheight = $(this).find('.section-intro').height();
			
			if (windowwidth > 767 ) {
				if (imageheight > sectionheight) {
					$(this).find('.section-intro').css('height',imageheight);
				} else {
					$(this).find('.history-image').css('height',sectionheight);
				}
			}
		});
	}
		
	$(window).on("resize",function(){
		historyheights();
	});
  
	$('.section-intro').off().on({
		click: function (e) {
			year = $(this).find('h2').text();
		    e.preventDefault();
			if ($(this).hasClass('active')) {	
				$(this).removeClass('active').parents('.history-container').find('.history-reveal').slideUp(300);
				$(this).find('span').removeClass('lit');
				analyticsevent('History panel','Closed = '+year,'/');
			} else {
				$(this).addClass('active').parents('.history-container').find('.history-reveal').slideDown(300);
				$(this).find('span').addClass('lit');
				analyticsevent('History panel','Opened = '+year,'/');
			}
		}
	});
	
	
});