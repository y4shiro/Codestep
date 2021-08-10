$(function () {
  $('.hamburger').on('click', function () {
    hamburger();
  });
  $('#navi a').on('click', function () {
    hamburger();
  });
});

function hamburger() {
  $('.hamburger').toggleClass('active');

  if ($('.hamburger').hasClass('active')) {
    $('#navi').addClass('active');
  } else {
    $('#navi').removeClass('active');
  }
}
