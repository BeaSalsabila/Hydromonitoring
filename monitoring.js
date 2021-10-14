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

var Aranio = [
	"Aranio" ,
	"822,75", 
	"6" , 
	"5,7875", 
	"56,71825", 
	"6,5375", 
	"7,315",
	"0,33265",
	"0,389075",
	];
localStorage.setItem("AR",JSON.stringify(Aranio));

var KarangIntan = [
	"Karang Intan" ,
	"4475,25",
	"6,75" , 
	"13,5775", 
	"46,29775", 
	"7,23", 
	"7,34",
	"0,36825",
	"0,06825",
	];
localStorage.setItem("KI",JSON.stringify(KarangIntan));

var SungaiKembang = [
	"Sungai Kembang" ,
	"5425",
	"6,75" , 
	"1,3075", 
	"20,892", 
	"9,4375", 
	"7,195",
	"0,3295",
	"0,056325",
	];
localStorage.setItem("SK",JSON.stringify(SungaiKembang));\

let datatest = JSON.parse(localStorage.getItem("KI"));