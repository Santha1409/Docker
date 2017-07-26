jQuery(document).ready(function($){
	var $lateral_menu_trigger = $('.cd-navigation-trigger'),
		$content_wrapper = $('.cd-main-content'),
		$navigation = $('header');

	//open-close lateral menu clicking on the menu icon
	$lateral_menu_trigger.on('click', function(event){
		event.preventDefault();
		//loadlinkAfterForceRefresh();
		$lateral_menu_trigger.toggleClass('is-clicked');
		$navigation.toggleClass('lateral-menu-is-open');
	
		$content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
			//$('body').toggleClass('overflow-hidden');
		});
		$('#cd-notification-nav').toggleClass('lateral-menu-is-open');
		
		//check if transitions are not supported - i.e. in IE9
		if($('html').hasClass('no-csstransitions')) {
			//$('body').toggleClass('overflow-hidden');
		}
	});

	//close lateral menu clicking outside the menu itself
	$content_wrapper.on('click', function(event){
		if( !$(event.target).is('.cd-navigation-trigger, .cd-navigation-trigger span') ) {
			if($('#cd-notification-nav').hasClass('lateral-menu-is-open')) {
				resetNotificationColors();
			}
			$lateral_menu_trigger.removeClass('is-clicked');
			$navigation.removeClass('lateral-menu-is-open');
			$content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//$('body').removeClass('overflow-hidden');
			});
			$('#cd-notification-nav').removeClass('lateral-menu-is-open');
			//check if transitions are not supported
			if($('html').hasClass('no-csstransitions')) {
				//$('body').removeClass('overflow-hidden');
			}
					
		}
	});

	
});

function closeNotificationWindow()
{
		var $lateral_menu_trigger = $('.cd-navigation-trigger'),
		$content_wrapper = $('.cd-main-content'),
		$navigation = $('header');
		if($('#cd-notification-nav').hasClass('lateral-menu-is-open')) {
				resetNotificationColors();
			}
			$lateral_menu_trigger.removeClass('is-clicked');
			$navigation.removeClass('lateral-menu-is-open');
			$content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//$('body').removeClass('overflow-hidden');
			});
			$('#cd-notification-nav').removeClass('lateral-menu-is-open');
			//check if transitions are not supported
			if($('html').hasClass('no-csstransitions')) {
				//$('body').removeClass('overflow-hidden');
			}
		
	
}

function openNotificationWindow()
{
	//loadlinkAfterForceRefresh();
	var $lateral_menu_trigger = $('.cd-navigation-trigger'),
		$content_wrapper = $('.cd-main-content'),
		$navigation = $('header');
		$lateral_menu_trigger.toggleClass('is-clicked');
		$navigation.toggleClass('lateral-menu-is-open');
		$content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
			//$('body').toggleClass('overflow-hidden');
		});
		$('#cd-notification-nav').toggleClass('lateral-menu-is-open');
	
		//check if transitions are not supported - i.e. in IE9
		if($('html').hasClass('no-csstransitions')) {
			//$('body').toggleClass('overflow-hidden');
		}
}