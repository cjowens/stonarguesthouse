//fadingimagegallary.js
$('.gallery img:gt(0)').hide();

setInterval(function () {
    $('.gallery :first-child').fadeOut()
                             .next('img')
                             .fadeIn()
                             .end()
                             .appendTo('.gallery');
}, 4000); // 4 seconds
