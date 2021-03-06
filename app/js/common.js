$(function () {

	$(".carousel-main").owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		autoplay: true,
		navText: ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>', '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1400: {
				items: 3
			}
		}
	});
	kreditlineBig.create({
		goods: '[{"Name":" Phillips чайник","Price":"1450.00","Count":"2"},{"Name":"Набор кружек","Price":"1780.00","Count":"1"}]',
		orderId: "3333",
		site: 'popov-test.ru',
		siteName: 'popov-test.ru ',
		elm: 'credit',
		URLSuccess: 'http://widget.l-kredit.ru',
		discount: '0'
	});
	$("#confirm").click(function () {

		$.ajax({
			type: "POST",
			url: "https://s1.l-kredit.ru/CLWidget/order_manage.php",
			data: {
				func: "confirm",
				order_id: "3333",
				site_name: "popov-test.ru",
				goods: '[{"Name":" Phillips чайник","Price":"1450.00","Count":"2"},{"Name":"Набор кружек","Price":"1780.00","Count":"1"}]'
			}

		});
	});
	$("#check").click(function () {

		$.ajax({
			type: "POST",
			url: "https://s1.l-kredit.ru/CLWidget/order_manage.php",
			data: {
				func: "check",
				order_id: "3333",
				site_name: "popov-test.ru"
			}


		});
	});
	$("#del").click(function () {

		$.ajax({
			type: "POST",
			url: "https://s1.l-kredit.ru/CLWidget/order_manage.php",
			data: {
				func: "delete",
				order_id: "3333",
				site_name: "popov-test.ru"
			}

		});
	});
});
