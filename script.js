const textInput = document.getElementById("textInput");
const addButton = document.getElementById("push");
const current_tasks = document.getElementsByClassName("delete");
const tasks = document.getElementById("tasks");
const statusDropdown = document.getElementById("slct");

let todo = [];
let index = 0;

function checkboxfunc(index) {
  console.log(index);
  let currentToDo = todo[index];
  todo[index] = { title: currentToDo.title, status: "completed" }
  renderList(1);
}

function deletefunc(index) {
  todo.splice(index, 1);
  renderList(1);
}

function renderTasks(e) {
  console.log(e);
}

function renderList(type) {
  console.log(type);
  let renderStatus;
  switch (type) {
    case 1: renderStatus = 'all'; break;
    case 2: renderStatus = 'completed'; break;
    case 3: renderStatus = 'incomplete'; break;
    default: break;
  }
  console.log(renderStatus);
  let FullList;
  todo.forEach((todo, index) => {
    if (renderStatus === todo.status || renderStatus === 'all') {
      let currentItem = `
      <div class="task ${todo.status === "completed" ? 'completed' : ''}">
      <span>
      ${todo.title} 
     </span>
      <button class="checkbox" type="checkbox" onclick="checkboxfunc(${index})">
      <img src = "checkmark.svg" alt ="check">
      </button>
      <button class="delete"  onclick="deletefunc(${index})">
      <img src ="delete.svg" alt="delete" >
      </button>
      </div> 
      `;
      FullList = FullList ? FullList + currentItem : currentItem;
    }

  });
  tasks.innerHTML = FullList ? FullList : '';
}

addButton.addEventListener("click", (e) => {
  if (textInput.value.length == 0) {
    alert("Please Enter a Task");
  } else {
    todo.push({ title: textInput.value, status: "incomplete" });
    renderList(1);
    textInput.value = "";
  }
});

statusDropdown.addEventListener('change', (event) => {
  event.preventDefault();
  if (event.target.value === "1") {
    renderList(1);
  }
  else if (event.target.value === "2") {
    renderList(2);
  }
  else {
    renderList(3);
  }
});