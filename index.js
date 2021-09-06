const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const text = document.querySelector('.slogan');


menuToggle.addEventListener('click', function () {
	nav.classList.toggle('slide')
	text.classList.toggle('hilang')
}) ;