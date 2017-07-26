
$(document).ready(function() {

    // CORE VARS
    var $w = $(window),
		$ww = $(window).width();
		$d = $(document),
        $h = $('html'),
        $b = $('body'),
        $lang = $h.attr('lang')||'en',
        $modernDevice = 'querySelector' in document && 'localStorage' in window && 'addEventListener' in window; //not IE8!

    // SWITCH ON JAVASCRIPT STYLES
    $h.removeClass('no-js');

    //FIX LABEL BUG IN iOS
    $('label').click(function() {});

    /* EXTERNAL LINK DETECTION AND WARNING  */
	function externalLinks() {
        var $links = $('a[target="_blank"]');
        $links.on('mouseenter focus', function() {
            var $t = $(this),
                external = $t.is('[href*="//"]'),
                applied = $t.data('external'),
                title = $t.attr('title'),
                text = 'Opens in a new browser window.';
				
            if (!applied) {
                if (external) {
                    text = 'External site. ' + text;
                }
				
				if (typeof title != "undefined" && title+':contains("PDF")') {
					text = title+'. Opens in a new browser window.';
					$(this).attr('title', text);
					$t.data('external', 1);
				} 
				else {
					$(this).attr('title', text);
					$t.data('external', 1);
				}

            }
        });
    }
	
    externalLinks();

    /**
     * BINARY FILE/EXTERNAL/MAILTO ANALYTICS
     */
    if (typeof (ga) !== 'undefined') {
        var fileExtensions = new Array("exe", "zip", "wav", "mp3", "mov", "mpg", "avi", "wmv", "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "ics", "vsc");
        $d.on('click', 'a[href^="mailto"], a[href*="//"], a[href$=".pdf"], a[href$=".exe"], a[href$=".zip"], a[href$=".wav"], a[href$=".mp3"], a[href$=".mov"], a[href$=".mpg"], a[href$=".avi"], a[href$=".wmv"], a[href$=".doc"], a[href$=".docx"], a[href$=".xls"], a[href$=".xlsx"], a[href$=".ppt"], a[href$=".pptx"]', function(e) {
            var linktype = "Outbound",
                $t = $(this),
                href = $t.attr("href"),
                ext = href.split(".");
            ext = ext.pop();
            if (jQuery.inArray(ext, fileExtensions) > -1) {
                linktype = "Download";
            } else if (href.slice(0, 7) === "mailto:") {
                linktype = "Mail";
            }
            analyticsevent(linktype, 'link= ' + $(this).attr("href"), window.location.pathname);
        });
    }

    /**
     * get css breakpoint
     */
    var breakpoint = {};
    breakpoint.refreshValue = function() {
        if ($modernDevice) {
            this.value = window.getComputedStyle(
                document.querySelector('body'), ':before'
            ).getPropertyValue('content').replace(/\"/g, '');
        } else {
            breakpoint.value = "lg"; //IE8
        }
    };

    /**
     * Browser events
     */
    $w.on("throttledresize", function (e) { // RESIZE
        breakpoint.refreshValue();
        if (breakpoint === "md") {
            //do something dor md screen size
        }

    }).load(function () { // PAGE *FULLY* LOADED
        breakpoint.refreshValue();
        if (breakpoint === "md") {
            //do something dor md screen size
        }
    });


    /**
     * mobile navigation
     */
    $('.mobilenav-trigger').on('click', function () {
        $('.ddl_mobile_menu').addClass('show');
		analyticsevent('Mobile nav panel','Open','/');       
		return false;
    });
	$('.ddl_mobile_menu .close_menu').on('click', function () {
        $('.ddl_mobile_menu').removeClass('show'); 
		analyticsevent('Mobile nav panel','Closed','/');      
        return false;
    });
	//hide when not used 
	$(document).on('click', function(event) {
		if (!$(event.target).closest('.menu_wrapper').length) {
			$('.ddl_mobile_menu').removeClass('show'); 
		}
	});
	
	
	/**
     * mega menu
     */
	function addMega(){
		$(this).addClass("hovering");
	}
	function removeMega(){
		$(this).removeClass("hovering");
	}
	var megaConfig = {    
		interval: 100,
		sensitivity: 4,
		over: addMega,
		timeout: 100,
		out: removeMega
	};
	$("ul.mainnav li").hoverIntent(megaConfig)

	$.getScript("./assets/script/mobilenav.js")
	
	/**
     * mobile search
     */
	$('.mobilesearch-trigger').on('click', function () {
		if ($('.mobile_search_box').is(':visible')) {
			$(this).removeClass('displayed');
			$('.mobile_search_box').slideUp(300); 
			analyticsevent('Mobile search panel','Closed','/');
		} else {
			$(this).addClass('displayed');
			$('.mobile_search_box').slideDown(300, function() {
				 $('.mobile-search-input').focus();
				 analyticsevent('Mobile search panel','Open','/');
			});      
		}
		return false;
    });

	//close when input loses focus
    /*
	$('.mobile-search-input').blur(function(e) {
        if (!e.relatedTarget || e.relatedTarget.id !== "mobile-search-input" ) {
           $('.mobilesearch-trigger').removeClass('displayed');
		   $('.mobile_search_box').slideUp(300);
        } 
    });
	*/

    /**
     * on page anchors
     */
    $(document).on('click', 'main a[href^=#]', function (e) {
        try {
            var thishref = '#' + $(this).attr('href').split('#')[1],
         		target = $(thishref);
            $('html, body').animate({ scrollTop: target.offset().top}, 250);
            if (window.history && window.history.pushState) {
                history.pushState(null, null, thishref);
            }
            return false;
        } catch (e) {
            return;
        }
    });


    /**
     * cookie panel
     */
    $("#cookiebanner").on('click', '.closebanner', function (event) {
        $("#cookiebanner").animate({ height: 0 }, 500, function () { $(this).hide() });
        var d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + d.toGMTString();
        document.cookie = "cookiepolicy=hide" + expires + "; path=/";
		analyticsevent('Cookie notification','Closed');
        return false;
    });


	/**
     * Load scripts
     */
   	
	var $carousel = $(".carousel");
    if ($carousel.length > 0) { $.getScript("./assets/script/carousel.js") }
	
    var $accordion = $(".accordion");
    if ($accordion.length > 0) { $.getScript("./assets/script/accordion.js") }

	/**
     * fluid content
	 */
	 
	function fluidheight() {		
		$('.fluid-panel:not(.flickr)').each(function(index) {
			panelheight = $(this).find('.content-panel').outerHeight();
			$(this).find('.share-options').css('height',panelheight);
		});
	}
	fluidheight();

	$(window).on("resize",function(){
		fluidheight();
	});
	
	/*delay masonry so scripts are loaded first to prevent divs being all over each other*/
	setTimeout(function() {
		$('.fluid-wrap').masonry({
			itemSelector: '.col-lg-4, .col-lg-6'
		});
    }, 500);
	


	/*select dropdown on news page*/
	$('.dropdown-wrapper span').on('click', function(event){
		$(this).toggleClass('active');
		$('.dropdown-wrapper').toggleClass('active');
		return false;
	});
	$('body').not(".dropdown-wrapper").click(function() {
		$('.dropdown-wrapper span').removeClass('active');
        $('.dropdown-wrapper').removeClass('active');
    });
	

	/*tabs on mobile*/
	$('.tabs-trigger').on('click', function(event){
		$(this).find('a').toggleClass('active');
		$(this).next('.tabs-container').slideToggle(300);
		return false;
	});
	
	

	/*responsive tables*/
	$('table').wrap('<div class="tablewrap"/></div>');
	
	/*responsive iframe*/
	$('iframe:not(.investis)').wrap('<div class="iframe-container iframe-container-16x9"/></div>');
    
    /*change tab type for faqs*/
    if ($('body.agm, body.shareholderenquiries, body.dividends, body.resultsreportsandpresentations').length>0) {
		$('ul.tabs').addClass('narrow-tabs');
	}
    
	
	//FORM VALIDATION
	$.validator.addMethod("valueNotEquals", function(value, element, arg){
		return arg != value;
	}, "Value must not equal arg.");
	
	$(".contribute .col-md-8 form").validate({
	    rules: {
	        FirstName: "required",
			LastName: "required",
	        EmailAddress: {
	            required: true,
	            email: true
	        },
			AboutSelf: "required",
			Topic: { valueNotEquals: "0" }
	    },
	    messages: {
	        FirstName: "Please enter your first name",
			LastName: "Please enter your last name",
            EmailAddress: "Please enter a valid email address",
			AboutSelf: "Please tell us about yourself",
			Topic: "Please select a topic"
	    }
	});
	
	
	$(".stay-in-touch-form form").validate({
		//errorLabelContainer: ".error-container",
	    rules: {
	        Name: "required",
	        EmailAddress: {
	            required: true,
	            email: true
	        },
			selectedSubscriptionLists: "required"
	    },
	    messages: {
	        UserName: "Please enter your TPXID",
			Password: "Please enter your password",
            EmailAddress: "Please enter a valid email address",
			selectedSubscriptionLists: "Please select at least one option"
	    }
	});
	$(".search-form form").validate({
		//errorLabelContainer: ".error-container",
	    rules: {
	        Name: "required",
	        EmailAddress: {
	            required: true,
	            email: true
	        },
			selectedSubscriptionLists: "required"
	    },
	    messages: {
	        Name: "Please enter your name",
            EmailAddress: "Please enter a valid email address",
			selectedSubscriptionLists: "Please select at least one option"
	    }
	});
	
	if ($('.stay-in-touch').length>0) {
		$('footer').addClass('nopadtop');
		$('#maincontent').addClass('nopadbottom');
	}
	
	
	

});

function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className);
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className);
  else if (!hasClass(el, className)) el.className += " " + className;
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className);
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    el.className=el.className.replace(reg, ' ');
  }
}

function closeMe(cmd)
{
	if (cmd=='quit')
    {
        open(location, '_self').close();
    }   
    return false;   
}