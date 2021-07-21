// require('~/app/libs/mmenu/dist/mmenu.js')

import $ from 'jquery'; window.jQuery = $; window.$ = $;
import Swiper from 'swiper';

require('~/app/vendor/animate-svg/animate-svg.js');
require('~/app/vendor/slidinput/jquery.slidinput.min.js');
require('~/node_modules/tabslet/jquery.tabslet.min.js');
require('~/node_modules/@fortawesome/fontawesome-free/js/all.js');
require('~/node_modules/inputmask/dist/jquery.inputmask.min.js');

document.addEventListener('DOMContentLoaded', () => {

	$(window).on('load', function() {
		
		$('.phone-mask').inputmask( { mask: "999 999 99 99", placeholder:"" } );
		$('.card-num-mask').inputmask( { mask: "9999 9999 9999 9999", placeholder:"" } );
		$('.card-cvc-mask').inputmask( { mask: "999", placeholder:"" } );
		$('.card-valid-mask').inputmask( { mask: "99 / 9999", placeholder:"" } );
		$('.card-name-mask').inputmask( { mask: "A{1,15} A{1,15}", placeholder:"" } );

		$('.myInput').slidinput({
			mode: 'regular',
			offsetX: 25,
		});

		$('.tabs').tabslet({
			animation: true,
		});

		let products = new Swiper(".products", {
			slidesPerView: 3,
			spaceBetween: 180,
		});

		let imgSlider = new Swiper(".img-slider", {
			slidesPerView: 1,
			allowTouchMove: false,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});

	});

})
