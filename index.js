const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const text = document.querySelector('.slogan');


menuToggle.addEventListener('click', function () {
	nav.classList.toggle('slide')
	text.classList.toggle('hilang')
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
localStorage.setItem("SK",JSON.stringify(SungaiKembang));

var  SungaiAsam= [
	"Sungai Asam" ,
	"5425",
	"6,75" , 
	"1,3075", 
	"20,892", 
	"9,4375", 
	"7,195",
	"0,3295",
	"0,056325",
	];
localStorage.setItem("SA",JSON.stringify(SungaiAsam));

text = localStorage.getItem("KI");
obj = JSON.parse(text);
document.getElementById("fcoli").innerHTML = obj.name;



