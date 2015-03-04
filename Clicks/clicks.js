/*global $*/
/*jslint sloppy:true, browser: true, white: true*/
$("h1.page-title").text("my code runs!");
$(window).on('click', function (e) {
    $('img.logo').css({left: e.pageX});
});

/*$(window).on('mousemove', function (e) {
    $('.logo').css({left: e.pageX,
                    top: e.pageY});
    $('.logo').toggleClass('rotated');
});*/

var vx = Math.random() * 10 - 5;
var vy = Math.random() * 10 - 5;
var x = $(window).width() / 2;
var y = $(window).height() / 2;

setInterval(function () {
  $('.logo').css({
      left: x,
      top: y
  });
  x = x + vx;
  y = y + vy;
  if (x < 0) {
      x = 0;
      vx = -vx;
  } else if (x > $(window).width()) {
      x = $(window).width();
      vx = -vx;
  }
    if (y < 0) {
      y = 0;
      vy = -vy;
  } else if (y > $(window).height()) {
      y = $(window).height();
      vy = -vy;
  }
}, 20);

/*var x = $(window).width() / 2;
var y = $(window).height() / 2;
var theta = 0;
var vtheta = Math.PI / 180;
var r = 60;
setInterval(function () {
    $('.logo').css({
        'left': x + r * Math.cos(theta),
        'top': y + r * Math.sin(theta)
    });
    theta = theta + vtheta;
}, 20);*/