const swiper = new Swiper(".swiper", {
	navigation: {
		nextEl: ".swiper-button-prev",
		prevEl: ".swiper-button-next",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	direction: "horizontal",
	loop: true,
	loopedSlides: 3,
	grabCursor: true,
	freeMode: true,
	spaceBetween: 16,

	breakpoints: {
		1: {
			slidesPerView: 1,
			spaceBetween: 10,
		},

		1200: {
			slidesPerView: 3,
			spaceBetween: 16,
		},
	},
});

const burger = document.getElementById("header__burger");
const menu = document.querySelector(".header__menu");
const header = document.querySelector(".header");
const contactInfo = document.querySelector(".header__contact-info");

burger.addEventListener("click", () => {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
	contactInfo.classList.toggle("active");
	header.classList.toggle("active");
});
