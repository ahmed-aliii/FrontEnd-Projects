// Select Elements
let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Array Of Tasks Values
let arrayOfTasks = [];

// Check if There is Tasks In Local Storage
if(localStorage.getItem("tasks")){
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

// Trigger Get Data From Local Storage Function
getDataFromLocalStorage();

// Add Task
submit.onclick = function(){
  // Ckeck That Input Value Is Not Empty
  if(input.value !== ""){
    addTaskToArray(input.value); //Add Task To Array Of Tasks
    input.value = ""; //Empty The Input
  }
}

// Click On Task Element
tasksDiv.addEventListener("click" , (event) => {
  // Delete Button
if(event.target.classList.contains("del")){
    // Remove Task From Local Storage
    removeTasksWith(e.target.parentElement.getAttribute("data-id"));
    // Remove Element From Page
    event.target.parentElement.remove()
  }
  // Task Element 
  if(event.target.classList.contains("task")){
    // Toggle completed For The Task
    toggleTaskStatusWith(event.target.getAttribute("data-id"));
    // Toggle Done Class
    event.target.classList.toggle("done");
  }
});

// Function To Add Input Value To The Array And Page Form
function addTaskToArray(taskText){
  // Task Data
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  // Push Task To The Array Of Tasks
  arrayOfTasks.push(task);
  // add Task To Page
  addElementsToPageForm(arrayOfTasks);
  // Add Tasks To Local Storage
  addDataToLocalStorageFrom(arrayOfTasks);
} 

function addElementsToPageForm(arrayOfTasks){
  // Empty The Tasks Div
  tasksDiv.innerHTML = "";
  // looping On Array Of Tasks
  arrayOfTasks.forEach((task) => {
    // Create Main Div
    let div = document.createElement("div");
    div.className = "task";
    // Check If Task Is Done
    if(task.completed === true){
      div.className = "task done";
    }
    div.setAttribute("data-id" , task.id);
    div.appendChild(document.createTextNode(task.title));
    // Create Delete Button
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));
    // Append Button To Main Div
    div.appendChild(span);
    // Add Task To TasksDiv Container
    tasksDiv.appendChild(div)
  });
}

function addDataToLocalStorageFrom(arrayOfTasks){
  window.localStorage.setItem("tasks" , JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage(){
  let data = window.localStorage.getItem("tasks");
  if(data){
    let tasks = JSON.parse(data);
    addElementsToPageForm(tasks);
  }
}

function removeTasksWith(taskId){
  // for(let i = 0; i<arrayOfTasks.length; i++){
  //   if(arrayOfTasks[i].id === taskId){
  //   }
  // }

  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocalStorageFrom(arrayOfTasks);
}

function toggleTaskStatusWith(taskId){
  for(let i = 0; i<arrayOfTasks.length; i++){
    if(arrayOfTasks[i].id === taskId){
      arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
    }
  }
  addDataToLocalStorageFrom(arrayOfTasks);
}
