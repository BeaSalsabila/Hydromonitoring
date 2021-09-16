const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
icon.onclick = function() {
	search.classList.toggle('active')
}

const menuToggle = document.querySelector('.menuToggle');
const nav = document.querySelector('ul');

menuToggle.addEventListener('click', function () {
	nav.classList.toggle('active')
	search.classList.toggle('hilang')
}) ;