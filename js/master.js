/* eslint-disable no-var */
// handle event play/pause video

// eslint-disable-next-line require-jsdoc
function playVideoOnscroll() {
  var checkClass = $('.js-video');
  if (checkClass !== null) {
    const videoTop = $('.js-video').offset().top;
    const scrollTop = window.scrollY;
    if (scrollTop >= videoTop ) {
      $('.js-play-icon').addClass('hidden');
      $('#js-play-video').get(0).play();
      window.removeEventListener('scroll', playVideoOnscroll);
    }
  }
}

window.addEventListener('scroll', playVideoOnscroll);

$('.js-play-icon').click(function() {
  $('.js-play-icon').toggleClass('hidden');
  $('#js-play-video').get(0).play();
});

$('#js-play-video').click(function() {
  $('.js-play-icon').removeClass('hidden');
  $('#js-play-video').get(0).pause();
});

// handle event show/hiden menu responsive
$('.js-btn-open').click(function() {
  $('.js-menu').addClass('show');
  $(this).addClass('hidden');
});

$('.js-close').click(function() {
  $('.js-menu').removeClass('show');
  $('.js-btn-open').removeClass('hidden');
});

$('body').click(function(event) {
  if ($('.js-menu').hasClass('show')) {
    const target = event.target.closest('.js-menu');
    const menu = document.querySelector('.js-menu');
    const target2 = event.target.closest('.js-btn-open');
    const btnOpen = document.querySelector('.js-btn-open');

    if (target != menu && target2 != btnOpen) {
      $('.js-menu').removeClass('show');
      $('.js-btn-open').removeClass('hidden');
    }
  }
});

// handle event show value skill
$(window).scroll(function() {
  var checkClass = document.querySelector('.js-skill');
  if (checkClass != null) {
    const offsetTop = $('.js-skill').offset().top;
    const scrollTop = $(window).scrollTop();
    if (scrollTop > offsetTop) {
      $('#js-progress-75').val(75);
      $('#js-progress-90').val(90);
      $('#js-progress-65').val(65);
    }
  }
});

// create slide show for screen project
$('.js-slide-project').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  speed: 900,
  infinite: true,
  nextArrow: '.prev-arrow',
  prevArrow: '.next-arrow',
  dots: true,
  appendDots: $('.slide-controls'),
  dotsClass: 'custom-dots',
  customPaging: function(slider, i) {
    return '<span class="dot" role="button"></span>';
  },
});

// handle event truncate text
var a = $('.js-banner-desc');
if (a.length != 0) {
  $('.js-banner-desc').line(3, '...');
}
