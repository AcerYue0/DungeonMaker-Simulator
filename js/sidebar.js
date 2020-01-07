$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
        
    });

    $('#dismiss, .overlay').on('click', function () {
        $('.sidebarDiv').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('.sidebarDiv').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});