var myDiv = document.createElement("div");

document.body.appendChild(myDiv);

var myParagraf = document.createElement("p");

myDiv.appendChild(myParagraf);

var myTextNode = document.createTextNode("Satan i gatan vad kul Javascript är!");

myParagraf.appendChild(myTextNode);

// document.body.appendChild(myDiv);

// myDiv.appendChild(myParagraf);

// myParagraf.appendChild(myTextNode);


myParagraf.id = "minPtagg"; 

var p = document.getElementById("minPtagg");

p.innerHTML = "Satan vad tråkigt Javascript är!";

p.style.color= "blue";


