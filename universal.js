
// fixing navigation on scroll
$(document).ready(function(){
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > $('#headerimg').height()) {
            $('nav').addClass('fixed');
        }
        else {
            $('nav').removeClass('fixed');
        }
    });
});
