
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
