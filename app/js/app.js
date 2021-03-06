// require('~/app/libs/mmenu/dist/mmenu.js')

import $ from 'jquery'; window.jQuery = $; window.$ = $;
import Swiper from 'swiper/bundle';
import ionRangeSlider from 'ion-rangeslider';

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
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	
		let imgSlider = new Swiper(".img-slider", {
			slidesPerView: 1,
			allowTouchMove: false,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});

		$(".price-form__range").ionRangeSlider({
			type: "double",
			min: 0,
			max: 1000,
			from: 0,
			to: 500,
			grid: false,
			prefix: "$ ",
		});

		function select() {
			let selectHeader = $('.select__header');
			let selectItem = $('.select__item');

			selectHeader.on( 'click', function() {
				$(this).parent().toggleClass('is-active');
			});
			
			selectItem.on( 'click', function() {
				let text = $(this).text();
				let currentText = $('.select__current');
				currentText.html(text);
				$('.select').removeClass('is-active unselected');
			});
		};
		select();

		function slidemenu(menu) {
			$(`.${menu}`).append(`<div class="${menu}-space slidemenu-space"></div>`).addClass('slidemenu');
			$(`.${menu}-content`).addClass('slidemenu-content');
			$(`.${menu}-btn`).addClass(`${menu}-triger`);
			$(`.${menu}-inner-btn`).addClass(`${menu}-triger`);
	
			$(`.${menu}-triger`).on('click', function(e) {
				e.preventDefault();
				$(`.${menu}`).toggleClass('is-active');
			});
	
			$(`.${menu}-space`).on('click', function() {
				$(`.${menu}`).removeClass('is-active');
			});
		};
		slidemenu('dropmenu-filter');
		slidemenu('dropmenu-cart');

	});

})
