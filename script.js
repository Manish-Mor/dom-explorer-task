const taskTitle = document.querySelector("#taskInput");
const category = document.querySelector("#category");
const addTask = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");
// const darkLightModeButton = document.querySelector("#Dark&light-mode");
const form = document.querySelector("form");
const taskLists = document.querySelector(".task-lists");


const array = [
    {
       taskTitle1: "Homework",
       category1: "Study"
    },
    {
       taskTitle1: "Gym",
       category1: "work"
    },
    {
       taskTitle1: "create project",
       category1: "study"
    }
];


const ui = ()=>{
    taskLists.innerHTML = "";
       array.forEach((elm, index) => {
        taskLists.innerHTML += `
        <div class="task-card">
           

            <div class="task-item-title"> <h2>Title :- ${elm.taskTitle1 }</h2></div>
            <div class="task-item-category"><h2>Category :- ${elm.category1 }</h2></div>
            <div class="task-item-status"><h2>Status :- </h2></div>
            <div class="task-item-actions"><button>Edit</button> <button onclick="deleteBtn(${index})" class="deletebtn" >Delete</button></div>
        </div>`
       });
}


   

ui()

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let taskTitle1 = taskTitle.value;
    let category1 = category.value;
    array.push({ 
        taskTitle1,
        category1,
     });
  

    ui()
    console.log("Task added");
form.reset();
})


let deleteBtn = (index)=>{
    array.splice(index, 1);
    ui();
}