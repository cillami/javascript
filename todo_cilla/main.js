// Funktionen add() adderar de task som användaren skriver in i inputfältet och lägger till dem i en lista.
function add() {
  var li = document.createElement("li");
  var inputText = document.getElementById("myText").value;
  var text = document.createTextNode(inputText);
  li.appendChild(text);

//Här kollar funktionen om användaren har skrivit in något i inputfältet
//om inte så öppnas en alert
    if (inputText === "") {
    alert("Please write something!");
    } 
    else {
    document.getElementById("myList").appendChild(li);
// var list = document.getElementById("myList");     
// list.insertBefore(li, list.childNodes[0]); 
    }

//här skapas knapparna + knapptext, sedan kopplas de ihop med li genom appendChild
  var doneButton = document.createElement("button");
  var deleteButton = document.createElement("button");
  doneButton.innerHTML = "Done";
  deleteButton.innerHTML = "Delete";

  li.appendChild(deleteButton);
  li.appendChild(doneButton);
  
//funktioner för att flytta tasks till done samt ta bort tasks helt
  doneButton.addEventListener("click", function(){
    var lastDeleteButton = document.createElement("button");
    lastDeleteButton.innerHTML = "Delete";

    myList.removeChild(li);
    myCompletedList.appendChild(li);
    li.removeChild(doneButton);
    li.removeChild(deleteButton);
    li.appendChild(lastDeleteButton);

    lastDeleteButton.addEventListener("click", function(){
      myCompletedList.removeChild(li);
  });
  });

  deleteButton.addEventListener("click", function(){
    myList.removeChild(li);
  });
};









