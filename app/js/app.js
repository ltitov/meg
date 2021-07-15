// require('~/app/libs/mmenu/dist/mmenu.js')

import $ from 'jquery'; window.jQuery = $; window.$ = $;
import Swiper from 'swiper';

require('~/app/vendor/slidinput/jquery.slidinput.min.js');
require('~/node_modules/tabslet/jquery.tabslet.min.js');
require('~/node_modules/@fortawesome/fontawesome-free/js/all.js');
require('~/app/vendor/animate-svg/animate-svg.js');

document.addEventListener('DOMContentLoaded', () => {

	$(window).on('load', function() {
		
		$('.myInput').slidinput({
			mode: 'regular',
			offsetX: 25,
		});

		$('.tabs').tabslet({
			animation: true,
		});

		// const mainSlider = new Swiper('.main-slider', {
		// 	direction: 'vertical',
		// 	speed: 800,
		// });

		let products = new Swiper(".products", {
			slidesPerView: 3,
			spaceBetween: 180,
			// pagination: {
			// 	el: ".swiper-pagination",
			// 	clickable: true,
			// },
		});

		let imgSlider = new Swiper(".img-slider", {
			slidesPerView: 1,
			// allowTouchMove: false,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});

	});

})
