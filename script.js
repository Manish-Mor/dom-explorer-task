const taskTitle = document.querySelector("#taskInput");
const category = document.querySelector("#category");
const addTask = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");
// const darkLightModeButton = document.querySelector("#Dark&light-mode");
const form = document.querySelector("form");
const taskLists = document.querySelector(".task-lists");
const deleteBtn = document.querySelector(".deletebtn")

const array = [
    {
       
    }
];


const ui = ()=>{
       
        taskLists.innerHTML += `
        <div class="task-card">
           

            <div class="task-item-title"> <h2>Title :- ${taskTitle.value }</h2></div>
            <div class="task-item-category"><h2>Category :- ${category.value }</h2></div>
            <div class="task-item-status"><h2>Status :- </h2></div>
            <div class="task-item-actions"><button>Edit</button> <button class="deletebtn">Delete</button></div>
        </div>`
}






form.addEventListener("submit", (e) => {
    e.preventDefault();
    array.push({ task: taskTitle.value, category: category.value });
  

    ui()
    console.log("Task added");
form.reset();
})

