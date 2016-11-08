var myDiv = document.createElement("div");

var myParagraf = document.createElement("p");

var myTextNode = document.createTextNode("Satan i gatan vad kul Javascript är!");

myParagraf.appendChild(myTextNode);

myDiv.appendChild(myParagraf);

document.body.appendChild(myDiv);

myParagraf.id = "minPtagg"; 

var p = document.getElementById("minPtagg");

minPtagg.innerHTML = "Satan vad tråkigt Javascript är!";

minPtagg.style.color= "blue";


