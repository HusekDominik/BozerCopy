import $ from 'jquery';

$(document).ready(() => {
	$('.slick-carousel-home').slick({
		autoplay: true,
		infinite: true,
		speed: 1000,
		dots: true,
		//adaptiveHeight: false
		equalizeHeight: true,
		pauseOnHover: false
	});
});

console.log('slick js');
