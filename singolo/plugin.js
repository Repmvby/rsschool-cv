$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        mouseDrag: false,
		touchDrag: false,
        nav: true,
        pagination: true,
        lazyLoad: true,
        loop: true,
        navText: ["<div class= 'arrow-left'></div>","<div class= 'arrow-right'></div>"],
    });
 });