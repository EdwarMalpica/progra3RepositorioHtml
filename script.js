console.log("script loader")
var form1 = document.getElementById("form-1");
var content = document.getElementById("resultForm");
form1.addEventListener("submit" , function(event){
	var name = form1.elements["name"].value;
	event.preventDefault();
	const data = Object.fromEntries(new FormData(event.target).entries());
	console.log(event);
	console.log("submit")
});