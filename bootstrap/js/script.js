// carousell

let slider = tns({
  container: ".my-slider",
  slideBy: "1",
  speed: 400,
  mouseDrag: true,
  swipeAngle: false,
  nav: false,
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  responsive: {
    1600: {
      items: 4,
      gutter: 20,
    },
    1024: {
      items: 3,
      gutter: 20,
    },
    768: {
      items: 2,
      gutter: 20,
    },
    568: {
      items: 1,
    },
  },
});

// Parallax

$(window).on("load", function () {
  $('.home .pJumbotron').each(function (i) {
    setTimeout(function () {
      $('.home .pJumbotron').eq(i).addClass('muncul');
    }, 430 * i);
  });
  $(".navLi").addClass("navLiMuncul");
});

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  // About
  if (wScroll > 300) {
    $('.about-container .introduce').each(function (i) {
      setTimeout(function () {
        $('.about-container .introduce').eq(i).addClass('muncul');
      }, 400 * (i+1));
    });
  }

  // Portofolio
  if (wScroll > 1050) {
    $('.portofolio .content-card').each(function (i) {
      setTimeout(function () {
        $('.portofolio .content-card').eq(i).addClass('muncul');
      }, 600 * (i+1));
    });
  }

});
