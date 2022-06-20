var factform = document.getElementById("factform");

factform.a.addEventListener("click",factA);
function factA(){
	document.getElementById("factdisplay").innerHTML = "Potato Chips Cause More Weight Gain Than Any Other Food.<img src='images/ci.jpg' alt='chips'>"
	document.querySelector("main").style.backgroundColor = "#694A38";
}
factform.b.addEventListener("click",factB);
function factB(){
	document.getElementById("factdisplay").innerHTML = "Dreamt is the only word in the English language that ends with mt."
	document.querySelector("main").style.backgroundColor = "#C46BAE";
}
factform.c.addEventListener("click",factC);
function factC(){
	document.getElementById("factdisplay").innerHTML = "If you open your eyes in a pitch-black room, the color you'll see is called eigengrau."
document.querySelector("main").style.backgroundColor = "#C9F0FF";
}
factform.d.addEventListener("click",factD);
function factD(){
	document.getElementById("factdisplay").innerHTML = "It's possible to turn peanut butter into diamonds."
document.querySelector("main").style.backgroundColor = "#D5CAD6";
}
factform.e.addEventListener("click",factE);
function factE(){
	document.getElementById("factdisplay").innerHTML = "Gold comes from a Neutron Star collision."
document.querySelector("main").style.backgroundColor = "#EAFFFD";
}