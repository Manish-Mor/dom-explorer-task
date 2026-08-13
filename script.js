const taskTitle = document.querySelector("#taskInput");
const category = document.querySelector("#category");
const addTask = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");
// const darkLightModeButton = document.querySelector("#Dark&light-mode");
const form = document.querySelector("form");
const taskLists = document.querySelector(".task-lists");
const editButtonSection = document.querySelector(".editbutton-section");

const array = [
    {
       taskTitle1: "Homework",
       category1: "Study",
       status1: "Pending"
    },
    {
       taskTitle1: "Gym",
       category1: "work",
       status1: "Complete"
    },
    {
       taskTitle1: "create project",
       category1: "study",
       status1: "Pending"
    }
];


const ui = ()=>{
    taskLists.innerHTML = "";
       array.forEach((elm, index) => {
        taskLists.innerHTML += `
        <div class="task-card">
           

            <div class="task-item-title"> <h2>Title :- ${elm.taskTitle1 }</h2></div>
            <div class="task-item-category"><h2>Category :- ${elm.category1 }</h2></div>
            <div class="task-item-status"><h2>Status :- ${elm.status1} </h2></div>
            <div class="task-item-actions"><button  onclick="editBtn(${index})" >Edit</button> <button onclick="taskComplete(${index})"> Complete</button><button onclick="deleteBtn(${index})" class="deletebtn" >Delete</button></div>
        </div>`
       });
}


   

ui()

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let taskTitle1 = taskTitle.value;
    let category1 = category.value;
    let status1 = "Pending"
    array.push({ 
        taskTitle1,
        category1,
        status1,
     });
  

    ui()
    console.log("Task added");
form.reset();
})


let deleteBtn = (index)=>{
    array.splice(index, 1);
    ui();
}

let editBtn = (index)=>{
    // editButtonSection.style.display ="block"
    // editButtonSection.innerHTML =`<div class="editbuttion">
    //                 <div class="task-item-title"> <h2>Title :- ${elm.taskTitle1 }</h2></div>
    //                 <div class="task-item-category"><h2>Category :- ${elm.category1 }</h2></div>
    //                 <div class="task-item-status"><h2>Status :- ${elm.status1} </h2></div>
    //                 <div><button>Submit</button></div>
    //             </div>`
    // make the form which activate when the click on the button and when click on the submit the ui update then , show and hide when click on the edit btn and submit btn 
    array[index].taskTitle1= taskTitle.value;
    array[index].category1 = category.value;
    
}

let taskComplete = (index)=>{
 array[index].status1= "Complete";
 ui();
}