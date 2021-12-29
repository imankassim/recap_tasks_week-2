//create new empty array importantThings
//when you write someything in the input field, and click add to list button, add the item into importantThings array

//display items in a li element within the list


const inputField = document.querySelector("#important-thing");
const priorityField = document.querySelector("#priority");
const addButton = document.querySelector("#add-to-list");
const orderButton = document.querySelector("#order-list");

// Create list
const importantThings = [];

addButton.addEventListener("click", addItemToList);

function addItemToList() {
  // Get the content of the fields and put into an object
  const newItem = {
    text: inputField.value,
    // turn the priority value into a number
    priority: Number(priorityField.value)
  };
  importantThings.push(newItem);
  console.log(importantThings);
  // Redraw the list 
  redrawList();
}




const ol = document.querySelector("ol");

function redrawList() {
  // Clear the list
  ol.innerHTML = "";
  // For each item in the array, add a list item to the DOM
  importantThings.forEach(addItemToDOM);
}

function addItemToDOM(item) {
  //      create a li
  const li = document.createElement("li");
  //      set the text to be the array item
  li.innerText = `${item.text} - priority ${item.priority}`;
  //      add it to the list
  ol.appendChild(li);
}

// sort arr by priority when pressed
orderButton.addEventListener("click", function () {
  importantThings.sort(function sortByPriority(a, b) {
    return b.priority - a.priority;
  });
  // redraw the list
  redrawList();
});