const todo__list = document.getElementById("todo__list");
const endpoint = "https://jsonplaceholder.typicode.com/todos";
const statusDropdown = document.getElementById("slct");
let checkBoxStatus=1;
let todos = [];

// function toDoList(){ //Promise
// fetch(endpoint)
//   .then(response => response.json())
//   .then(json => { todos=[...json];
//     renderToDolist();
//   })
// }
//asyc await
async function toDoList() {
  const response = await fetch(endpoint);
  const list = await response.json();
  return list;
}
toDoList().then((json) => {
  todos = [...json];
  renderToDoList(1);
});
 function checkbox(index) {
  todos[index].completed = true;
     renderToDoList(1);
 }

function renderToDoList(type) {
     
      let elementStatus;
     switch (type) {
     case 1: elementStatus = 'all'; break;
     case 2: elementStatus = true ; break;
     case 3: elementStatus = false; break;
     default: break;
     }
     console.log(elementStatus);
  let fullList;
  todos.forEach((element,index) => {
     if (elementStatus === element.completed || elementStatus === 'all'){
      let htmlToDo = `
        <div class="divTodo ${element.completed===true ? 'completed' : '' }">
        <span>${element.title}</span>
        <button class="checkbox" onclick="checkbox(${index})">
        <img src = "checkmark.svg" alt ="check">
        </button>
        </div>
        `;
      fullList = fullList ? fullList + htmlToDo : htmlToDo;
     }
  });
  todo__list.innerHTML = fullList;
}

toDoList();

 statusDropdown.addEventListener('change',(event)=>{
     event.preventDefault();
   if (event.target.value === "1") {
     renderToDoList(1);
   }
   else if (event.target.value === "2") {
     renderToDoList(2);
 }
   else {
     renderToDoList(3);
   }
 });


