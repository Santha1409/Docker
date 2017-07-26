jQuery.fn.extend({
    accordion: function (options) {
        var defaults = {
            scrollspeed: "slow",
            openfirstpanel: "no",
            openall: "yes"
        }

        var settings = jQuery.extend(defaults, options);

        return this.each(function () {
            var element = jQuery(this),
                accordionID = element.attr("id") || '',
                hashvalue = location.hash || false;

            //HAS HASH VALUE
            if (hashvalue) {
                var selected = $(hashvalue).find('.panelbody');
                jQuery(element).find(".panelbody").hide().filter(selected).slideDown(function (e) {
                    $('html,body').animate({ scrollTop: $(hashvalue).offset().top - 200 });
                });
            } else {
                //OPEN FIRST PANEL
                if (settings.openfirstpanel === "yes") {
                    jQuery(element).find(".panelbody").hide().filter(".panelbody:first").show();
                } else {
                    //ALL CLOSED
                    jQuery(element).find(".panelbody").hide();
                }
            }

            //ADD HREF TO H2
            jQuery(element).find(".panel").each(function (i) {
                var thisid = $(this).attr("id")
                $(this).find(".panelheader h2").wrapInner('<a href="#' + thisid + '"/>');
            });

            //OPEN ALL LINK
            if (settings.openall == "yes") {
                if (jQuery(element).find(".panel").size() > 1) {
                    jQuery(element).find(".panel:first").before('<p class="toggleall"><a href="#">Open all</a></p>');
                }
            }

            //TOGGLE PANEL
            jQuery(element).find(".panelheader").on("click", 'a', function (e) {
                el = $(this),
                panel = el.parents('.panel'),
                panelID = panel.attr("id"),
                panelbody = panel.find('.panelbody'),
                icon = panel.find('.icon'),
                state = '';

                if (panelbody.is(':visible')) {
                    panelbody.slideUp(settings.scrollspeed);
                    icon.removeClass('open');
                    state = 'close';
                } else {
                    panelbody.slideDown(settings.scrollspeed);
                    icon.addClass('open');
                    state = 'open';
                }

                //google analytics
                analyticsevent('Accordion', panelID + ' - ' + state)

                return false;
            });

            //TOGGLE ALL PANELS
            jQuery(element).find(".toggleall > a").on("click", function (e) {
                e.preventDefault();

                var el = jQuery(this),
				    panel = el.parent().parent(),
					opentxt = 'open all',
                    closetxt = 'close all',
                    state = '';

                if (el.hasClass("lit")) {
                    el.html(opentxt).removeClass("lit");
                    panel.find(".panelbody").slideUp(settings.scrollspeed);
                    panel.find(".panelheader a").removeClass("lit").find('.icon').removeClass('open');
                    state = 'close';
                } else {
                    el.html(closetxt).addClass("lit");
                    panel.find(".panelbody").slideDown(settings.scrollspeed);
                    panel.find(".panelheader a").addClass("lit").find('.icon').addClass('open');
                    state = 'open';
                }

                //google analytics
                analyticsevent('Accordion', 'All panels - ' + state)

                return false;
            });

        });
    }
});

$(function () {

    jQuery(".location-map").on("click", 'a', function(e) {
        var $goto = $(this).attr('href'),
            selectedheader = $($goto).find('.panelheader'),
            selected = $($goto).find('.panelbody');

        if (selected.is(':visible')) {
            $('html,body').animate({
                scrollTop: $($goto).offset().top - 200
            }, function () {
                selected.parent().attr('tabindex', '-1').focus();
                selectedheader.find('.icon').addClass('open');
                if (window.history && window.history.pushState) {
                    history.pushState(null, null, $goto);
                }
            });
        } else {
            jQuery(".accordion").find(".panelbody").hide().filter(selected).slideDown(function (e) {
                $('html,body').animate({
                    scrollTop: $($goto).offset().top - 200
                }, function() {
                    selected.parent().attr('tabindex', '-1').focus();
                    selectedheader.find('.icon').addClass('open');
                    if (window.history && window.history.pushState) {
                        history.pushState(null, null, $goto);
                    }
                });
            });
        }
        analyticsevent('Accordion', 'Map link to ' + $goto.replace('#','') + ' panel');
        return false;
    });

    jQuery(".accordion").accordion();
});