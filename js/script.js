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
		768: {
			slidesPerView: 2,
			spaceBetween: 16,
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
const banner = document.querySelector(".banner");

burger.addEventListener("click", () => {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
	contactInfo.classList.toggle("active");
	header.classList.toggle("active");
	banner.classList.toggle("active");
	document.body.classList.toggle("no-scroll");
});

const links = document.querySelectorAll(".header__menu a");

links.forEach((link) => {
	link.addEventListener("click", () => {
		burger.classList.remove("active");
		menu.classList.remove("active");
		contactInfo.classList.remove("active");
		header.classList.remove("active");
		banner.classList.remove("active");
		document.body.classList.remove("no-scroll");
	});
});

//modal window
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("callbackModal");
const scrollTarget = document.querySelector(".how-to-find"); // selects by class

openBtn.addEventListener("click", (e) => {
	e.preventDefault();

	if (window.innerWidth <= 1200) {
		// On small screens, scroll to .how-to-find section
		scrollTarget.scrollIntoView({ behavior: "smooth" });
	} else {
		// On larger screens, open modal
		modal.classList.add("active");
		document.body.classList.add("no-scroll");
	}
});

closeBtn.addEventListener("click", () => {
	modal.classList.remove("active");
	document.body.classList.remove("no-scroll");
});

// Optional: close modal when clicking outside
modal.addEventListener("click", (e) => {
	if (e.target === modal) {
		modal.classList.remove("active");
		document.body.classList.remove("no-scroll");
	}
});
