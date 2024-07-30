
//var id = "Fruit";
//var list = document.querySelector("ul");
//var entry = document.createElement("li");
//entry.insertAdjacentHTML("beforeend", `${id} <a href="#">delete</a>`);

//list.appendChild(entry);
   
  // var list = document.getElementById('fruit');
    //var entry = document.getElementById('addToList');
    //entry.onsubmit = function(evt) {
    //evt.preventDefault();
    //var firstName = document.getElementById('textInput').value;
    //var entry = document.createElement('li');
    //entry.appendChild(document.createTextNode(fruit));
    //list.appendChild(entry);c



//var firstname = document.getElementById('textInput').value;
//var entry = document.createElement('li');
//entry.appendChild(document.createTextNode(fruit));
//list.appendChild(entry);


function addToList() {
  let listItem = document.createElement("li");
let textInput = document.getElementById("textInput");
let checkboxList = document.getElementById("checkboxList");
// .innerHTML is what stays inside the <li>...</> on the HTML main code
listItem.innerHTML = textInput.value;
// textInput.value = "" clears the placeholder after the button is clicked
textInput.value = "";
checkboxList.appendChild(listItem);
}
