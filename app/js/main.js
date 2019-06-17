	// selector (css selector
	// default: [hred^="#anchor"]
	// Селектор на ссылку для клика

	// speed (number)
	// default: 500
	// Скорость анимации прокрутки

	// beforeScroll (callback)
	// Функция, которая будет выполнена перед анимацией

	// afterScroll (callback)
	// Функция, которая будет выполнена после анимации

	// )





function toAnchor(param) {
	var options = {
		selector: '[href^="#anchor"]',
		speed: 500,
		beforeScroll: function() {},
		afterScroll: function() {},
		responsive: [],
		offset: 0
	};

	for (let key in param) {
		options[key] = param[key];
	}

	var defaults = {};

	for (let key in options) {

		defaults[key] = options[key];
	}

	if ( options.responsive.length ) {

		$(document).ready(reOpt);
		$(window).resize(reOpt);
		function reOpt (){

			for (let i = 0; i < options.responsive.length; i++) {
				if (window.matchMedia(`(max-width: ${options.responsive[i].breakpoint}px)`).matches ) {

					for (let key in options.responsive[i].settings) {
					options[key] = options.responsive[i].settings[key];
					}
				}else {
					for (let key in options) {
						options[key] = defaults[key];
					}

				}
			}
		}
	}

	$(options.selector).click(function() {
		event.preventDefault();

		var id     = $(this).attr('href'),
			docTop = $(id).offset().top;


		options.beforeScroll();

		$('html, body').animate({
			scrollTop: docTop - options.offset
		}, options.speed);

		setTimeout(options.afterScroll, options.speed);
	});

};


toAnchor({
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				offset: $('.topheader').height()
			}
		}
	]
});


	// selector (css selector)
	// default: .nav-toggle
	// Селектор кнопки переключателя для клика

	// toggleClass (string)
	// default: nav-toggle_active
	// Переключатель класса для кнопки

	// selectorNav (css selector)
	// default: .nav
	// Селектор блока навигации

	// toggleClassNav (string)
	// default: nav_active
	// Переключатель класса для блока навигации

	// selectorLink (css selector)
	// default: [href^="#anchor"]
	// Селектор ссылки для клика

	// blockScroll (boolean)
	// default: false
	// Блокирует прокрутку страницы при открытом меню





function toggleNav(param) {
	var options = {
		selector: '.nav-toggle',
		toggleClass: 'nav-toggle_active',
		selectorNav: '.nav',
		toggleClassNav: 'nav_active',
		selectorLink: '[href^="#anchor"]',
		blockScroll: false,
		responsive: [],
		activeState: false
	};

	for (let key in param) {
		options[key] = param[key];
	}

	var defaults = {};

	for ( let key in options) {
		defaults[key] = options[key];
	}

	if ( options.responsive.length ) {
		$(document).ready(reOpt);
		$(window).resize(reOpt);

		function reOpt () {
			for (let i = 0; i < options.responsive.length; i++) {
				if ( window.matchMedia(`(max-width: ${options.responsive[i].breakpoint}px)`).matches ) {

					for (let key in options.responsive[i].settings ) {
						options[key] = options.responsive[i].settings[key];
					}
				} else {

					for (let key in options) {
						options[key] = defaults[key];
					}
				}
		}

		}
	}

	$(`${options.selector}, ${options.selectorLink}`).click(function() {
		options.activeState = !options.activeState;

		if ( options.toggleClass ) {
			$(options.selector).toggleClass(options.toggleClass );
		}

		if ( options.toggleClassNav ) {
			$(options.selectorNav).toggleClass( options.toggleClassNav );
		}

		if ( options.blockScroll ) {
			if ( options.activeState ) {
				$('body').css('overflow', 'hidden');
			} else {
				$('body').removeAttr('style');
			}
		}
	});
}

toggleNav({
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				blockScroll: true
			}
		}
	]
});

$(document).ready(function(){
    $(".modalbox").fancybox();
});

$('.review-slide').slick({
	slidesToShow: 1,
	infinite: true,
	dots: true,
	arrows: true,
	slidesToScroll: 1
});

$('.about-block__slide').slick({
	slidesToShow: 1,
	infinite: true,
	arrows: false,
	dots: true,
	slidesToScroll: 1
});
$(window).on('load resize', function() {
  if (window.matchMedia('(max-width: 640px)').matches) {
    $('.team-grid:not(.slick-initialized)').slick({
	infinite: true,
	slidesToShow: 1,
	arrows: true,
	dots: true,
    });
  } else {
    $(".team-grid.slick-initialized").slick("unslick");
  }
});

$(window).on('load resize', function() {
  if (window.matchMedia('(max-width: 980px)').matches) {
    $('.services-grid:not(.slick-initialized)').slick({
	infinite: true,
	slidesToShow: 1,
	arrows: false,
	dots: true,
    });
  } else {
    $(".services-grid.slick-initialized").slick("unslick");
  }
});

// $(window).on('load resize', function(e) {
//     $(".footer-mobile-grid__nav").click(function (e) {
//     e.preventDefault(), $(this).hasClass("footer-mobile-grid__nav_active") ? $(this).next(".footer-mobile-grid__list").slideUp(300, function () {
//       $(this).removeAttr("style"), $(this).prev(".footer-mobile-grid__nav").removeClass("footer-mobile-grid__nav_active")
//     }) : ($(".footer-mobile-grid__nav").removeClass("footer-mobile-grid__nav_active"), $(".footer-mobile-grid__list").slideUp(300, function () {
//       $(this).removeAttr("style")
//     }), $(this).addClass("footer-mobile-grid__nav_active"), $(this).next(".footer-mobile-grid__list").slideDown(300))
//   });
// });
$(window).on('load resize', function(e) {
    $(".services-grid__info-btn").click(function (e) {
    e.preventDefault(), $(this).hasClass("footer-mobile-grid__nav_active") ? $(this).next(".footer-mobile-grid__list").slideUp(300, function () {
      $(this).removeAttr("style"), $(this).prev(".footer-mobile-grid__nav").removeClass("footer-mobile-grid__nav_active")
    }) : ($(".footer-mobile-grid__nav").removeClass("footer-mobile-grid__nav_active"), $(".footer-mobile-grid__list").slideUp(300, function () {
      $(this).removeAttr("style")
    }), $(this).addClass("footer-mobile-grid__nav_active"), $(this).next(".footer-mobile-grid__list").slideDown(300))
  });
});

// $('.services-grid__info-btn').click(function() {
//     $('.services-grid__info-hidden').addClass('services-grid__info-hidden_active');
//      $('.services-grid__info').addClass('services-grid__info_hidden');
// });

// $('.services-grid__info-btn_close').click(function() {
//      $('.services-grid__info-hidden').removeClass('services-grid__info-hidden_active');
//      $('.services-grid__info').removeClass('services-grid__info_hidden');
// });

$('document').ready(function() {
  $('.services-grid__info-btn').on('click', function() {
    $(this).closest(".services-grid__col").find('.services-grid__info-hidden').addClass('services-grid__info-hidden_active');
    $(this).closest(".services-grid__col").find('.services-grid__info').addClass('services-grid__info_hidden');
  });
  $('.services-grid__info-btn_close').on('click', function() {
    $(this).closest(".services-grid__col").find('.services-grid__info-hidden').removeClass('services-grid__info-hidden_active');
    $(this).closest(".services-grid__col").find('.services-grid__info').removeClass('services-grid__info_hidden');
  });

});
