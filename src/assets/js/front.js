$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('.side-navbar').toggleClass('active');

            $('.side-navbar').toggleClass('shrinked');
    $('.content-inner').toggleClass('active');
    $(document).trigger('sidebarChanged');

    
    });
});
