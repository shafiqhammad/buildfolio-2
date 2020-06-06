


$(function () {
"use strict";


	//===== Preloader

	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});

	// data - background
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
	});

	//===== Sticky

	$(window).on('scroll', function (event) {
		var scroll = $(window).scrollTop();
		if (scroll < 20) {
			$(".navbar-area").removeClass("sticky");
		} else {
			$(".navbar-area").addClass("sticky");
		}
	});

	// for menu scroll 
	$('.page-scroll').click(function () {
		var hash = this.hash;
		var position = $(hash).offset().top;
		$('html').animate({
			scrollTop: position
		}, 900);
	});


	//===== Section Menu Active

	var scrollLink = $('.page-scroll');
	// Active link switching
	$(window).scroll(function () {
		var scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function () {

			var sectionOffset = $(this.hash).offset().top - 75;

			if (sectionOffset <= scrollbarLocation) {
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		});
	});


	//===== close navbar-collapse when a  clicked

	$(".navbar-nav a").on('click', function () {
		$(".navbar-collapse").removeClass("show");
	});

	$(".navbar-toggler").on('click', function () {
		$(this).toggleClass("active");
	});

	$(".navbar-nav a").on('click', function () {
		$(".navbar-toggler").removeClass('active');
	});

	$(".menu-btn").on('click', function () {
		$('.mainmenu').addClass("active");
	});
	$(".close-btn").on('click', function () {
		$('.mainmenu').removeClass("active");
	});

	//Scroll top 
	$(".scroll-top").click(function () {
		$("html,body").animate({ scrollTop: 0 }, 1000);
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 180) { $(".scroll-top").fadeIn(); }
		else {
			$(".scroll-top").fadeOut();
		}
	});

	// WOW active
	new WOW().init();

});	

