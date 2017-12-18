$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeInUp",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 3000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    dots:true,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    smartSpeed:600,
    nav:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        nav:true,
     })
     $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
     $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
    });
    
    $(document).ready(function(){
        $('.your-class').slick({
            items:3,
            dots:true,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            smartSpeed:600,
            nav:true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
      });
      