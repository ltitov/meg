// require('~/app/libs/mmenu/dist/mmenu.js')

import $ from 'jquery'; window.jQuery = $; window.$ = $;
import Swiper from 'swiper';

require('~/app/vendor/slidinput/jquery.slidinput.min.js');
require('~/node_modules/tabslet/jquery.tabslet.min.js');

require('~/node_modules/@fortawesome/fontawesome-free/js/all.js');

document.addEventListener('DOMContentLoaded', () => {

	$(window).on('load', function() {
		
		$('.myInput').slidinput({
			mode: 'regular',
			offsetX: 25,
		});

		$('.main-tabs').tabslet({
			animation: true,
		});

		// const swiper = new Swiper('.main-slider', {
		// 	direction: 'vertical',
		// 	speed: 800,
		// });

	});

})
