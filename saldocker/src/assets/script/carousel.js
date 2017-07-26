
	var dir = $h.attr('dir');
	var slickOpts = {
		infinite: true,
		dots: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 700,
		pauseOnHover:false,
		useTransform: true,
		prevArrow: '<span class="slick-prev"></span>',
		nextArrow: '<span class="slick-next"></span>',
		appendArrows: $('.carousel-nav'),
		appendDots: $('.carousel-nav'),
		cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
			adaptiveHeight: true,
		  }
		}
		]
	};
	// Init the slick
	$('.carousel').slick(slickOpts);
	
	var beforePrint = function() {
		$('.carousel').slick('unslick');
	};
	var afterPrint = function() {
		$('.carousel').slick(slickOpts);
	};
	
	if (window.matchMedia) {
		var mediaQueryList = window.matchMedia('print');
		mediaQueryList.addListener(function(mql) {
			if (mql.matches) {
				beforePrint();
			} else {
				afterPrint();
			}
		});
	}
	
	window.onbeforeprint = beforePrint;
	window.onafterprint = afterPrint;
	
	$(document).on('click','.slick-pause', function() {
		if ($(this).hasClass('slick-play')) {
			$(this).removeClass('slick-play');
			$('.carousel').slick('slickPlay');
			analyticsevent('Carousel','Play');
		} else {
			$(this).addClass('slick-play');
			$('.carousel').slick('slickPause');
			analyticsevent('Carousel','Pause');
		}
	});
	
	$(document).on('click','.slick-arrow', function() {
		var p = parseInt($('.carousel').slick('slickCurrentSlide')+1),
			direction = ($(this).hasClass('slick-next')) ? 'Forward' : 'Back';			
		analyticsevent('Carousel','Arrows : '+direction+' to panel ' + p);
	});
	
	$('.slick-dots').on('click', 'button', function() {
		var p = $(this).text();		
		analyticsevent('Carousel','Dots : go to panel ' + p, window.location.pathname);
	});
	
	$('.carousel').on('swipe', function (event, slick, direction) {
		var p = parseInt((slick.currentSlide / slick.options.slidesToShow) + 1);		
		analyticsevent('Carousel','Swipe ' + direction + ' to panel ' + p, window.location.pathname);
	});	

	$(document).on('click', '.carousel-hotspot a', function (event) {
		var buttonlink = $(this).attr('href'),
			buttontext = $(this).text();
		analyticsevent(buttontext+' clicked','Carousel link: '+buttonlink);
    });