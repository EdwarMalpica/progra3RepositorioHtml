console.log("script loader")
var form1 = document.getElementById("form-1");

var sectionOne = document.getElementById("Contenedor1");
var sectionTwo = document.getElementById("DeFi");
var sectionTree = document.getElementById("AplicacionesDeFi");
var sectionTFour = document.getElementById("RedesDePago");
var sectionFive = document.getElementById("form-1");
var sectionSix = document.getElementById("footer1");
form1.addEventListener("submit" , function(event){
	
	event.preventDefault();
	const data = Object.fromEntries(new FormData(event.target).entries());
	sectionOne.style.visibility = "hidden";
	sectionTwo.style.visibility = "hidden";
	sectionTree.style.visibility = "hidden";
	sectionTFour.style.visibility = "hidden";
	sectionFive.style.visibility = "hidden";
	sectionSix.style.visibility = "hidden";
	
	console.log("submit");
});