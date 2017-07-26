$(document).ready(function () {
    $(document).on('click', '.ddl_mobile_menu button', function (e) {

        var selected = $(this).parent();

        var parent = selected.parent();

        var floatBox = selected.find(".floating_box:first");

        var subSection = selected.closest(".section");

        if (subSection.hasClass("show_subsection")) {
            subSection.removeClass("show_subsection");
            subSection.find(".show_subsection").removeClass("show_subsection");

        } else {
            if (!selected.hasClass("section")) {
                parent.after(floatBox);
                subSection.addClass("show_subsection");
            }
        }

        $('.ddl_mobile_menu').css('height', 'calc(100vh + 100px)'); //need to recalculate the height
     

        e.preventDefault();
    });
});