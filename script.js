const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

const text = document.getElementById("text");


function save(event) {
  event.preventDefault();
  localStorage.setItem("s1", text.value);
  itemsList.innerHTML = itemsList.innerHTML + "<li>" + localStorage.getItem("s1") + "</li>";      
}

