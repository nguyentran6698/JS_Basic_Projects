// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
window.addEventListener("DOMContentLoaded", setupItem);
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItem);
// list.addEventListener("click", changeList);
// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  // create an item
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    createListItem(id, value);
    displayAlert("Successful added to the list", "success");
    // show container
    container.classList.add("show-container");
    // add to local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    // edit value
    editElement.innerHTML = grocery.value;
    displayAlert("value changed", "success");
    // edit local storage
    editLocalStorage(editID, grocery.value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}
// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}
function clearItem() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    localStorage.removeItem("list");
  }
}
// change list
// function changeList(e) {
//   const value = e.target.parentElement.getAttribute("class");
//   if (value == "edit-btn") {
//     editItem(e);
//   } else {
//     deleteItem(e);
//   }
//   console.log(value);
// }
// edit function
function editItem(e) {
  const parent = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.innerHTML;
  // set edit flag
  editFlag = true;
  editID = parent.dataset.id;
  submitBtn.textContent = "edit";
}
// delete function
function deleteItem(e) {
  const parent = e.currentTarget.parentElement.parentElement;
  list.removeChild(parent);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("successfully delete", "success");
  setBackToDefault();
  // remove from localStorage
  const id = parent.dataset.id;
  removeFromLocalStorage(id);
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  const grocery = {
    id,
    value,
  };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    return item.id != id;
  });
  console.log(items);
  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
// ****** SETUP ITEMS **********
function setupItem() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}
function createListItem(id, value) {
  const element = document.createElement("article");
  element.classList.add("grocery-item");
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = ` 
      <p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button class="delete-btn" type="button">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
  // have access
  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);

  list.appendChild(element);
}
