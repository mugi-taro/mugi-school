$(function () {

  $('a[href^="#"]').on("click", function () {
    if(window.matchMedia("(max-width: 768px)").matches){
      event.preventDefault();
      var link = $(this).attr('href');
      setTimeout(function() {
        location.href= link;
      });}else{
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop: position}, 500, "swing");
    return false;
    }
  });
  
  $(window).on('load scroll',function (){
		$('.fade').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height){
				$(this).addClass('active');
			}
		});
	});

  $("document").ready(function(){
    $('.full-screen ').slick({
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 800,
      dots: true,
      arrows: true,
      centerMode: true,
      centerPadding:'17%',
      responsive: [{
        breakpoint: 640, 
        settings: {
          centerPadding:'20%',
          arrows: false
        }
      }]
    });
  });

  $('.menu-content a[href]').on('click', function(event) {
    $('.menu-btn').trigger('click');
  });

});
