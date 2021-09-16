const menuToggle = document.querySelector('.menuToggle');
const nav = document.querySelector('ul');

menuToggle.addEventListener('click', function () {
	nav.classList.toggle('active')
}) ;