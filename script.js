const taskTitle = document.querySelector("#taskInput");
const category = document.querySelector("#category");
const addTask = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");
// const darkLightModeButton = document.querySelector("#Dark&light-mode");
const form = document.querySelector("form");
const taskLists = document.querySelector(".task-lists");
const editButtonSection = document.querySelector(".editbutton-section");
const searchSection = document.querySelector(".search-section");
const darkModebtn = document.querySelector("#Dark-light-mode");
const addTaskcard = document.querySelector(".add-task-card")

darkModebtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark-mode"); 
  
})



const array = [
  {
    taskTitle1: "homework",
    category1: "Study",
    status1: "Pending",
  },
  {
    taskTitle1: "gym",
    category1: "work",
    status1: "Complete",
  },
  {
    taskTitle1: "create project",
    category1: "study",
    status1: "Pending",
  },
];


console.log("Attribute:", taskTitle.getAttribute("placeholder"));
console.log("Property:", taskTitle.placeholder);






const searchaddevent = ()=>{
  const searchValue = document.querySelector("#searchoption");
   searchValue.addEventListener("input", (e) => {
  const searchTerm = searchValue.value;
  let searchoption = array.filter((user) => {
    return user.taskTitle1.toLowerCase().includes(searchTerm.toLowerCase());
  });

  
  taskLists.innerHTML = "";
   searchoption.forEach((elm, index) => {
      const newIndex = array.indexOf(elm);
    taskLists.innerHTML += `
        <div class="task-card">
           

            <div class="task-item-title"> <h2>Title :- ${elm.taskTitle1}</h2></div>
            <div class="task-item-category"><h2>Category :- ${elm.category1}</h2></div>
            <div class="task-item-status"><h2>Status :- ${elm.status1} </h2></div>
            <div class="task-item-actions"><button  onclick="editBtn(${newIndex})" >Edit</button> <button onclick="taskComplete(${newIndex})"> Complete</button><button onclick="deleteBtn(${newIndex})" class="deletebtn" >Delete</button></div>
        </div>`});
});

}







const ui = () => {
  taskLists.innerHTML = "";
  array.forEach((elm, index) => {
    taskLists.innerHTML += `
        <div class="task-card">
           

            <div class="task-item-title"> <h2>Title :- ${elm.taskTitle1}</h2></div>
            <div class="task-item-category"><h2>Category :- ${elm.category1}</h2></div>
            <div class="task-item-status"><h2>Status :- ${elm.status1} </h2></div>
            <div class="task-item-actions"><button  onclick="editBtn(${index})" >Edit</button> <button onclick="taskComplete(${index})"> Complete</button><button onclick="deleteBtn(${index})" class="deletebtn" >Delete</button></div>
        </div>`;
  });
  let totalComplete = array.reduce((arr, el) => {
    return el.status1 === "Complete" ? arr + 1 : arr;
  }, 0);
  let totalPending = array.reduce((arr, el) => {
    return el.status1 === "Pending" ? arr + 1 : arr;
  }, 0);
  searchSection.innerHTML = `<input type="text" placeholder="Search" id="searchoption">
     <div><h2>Complete task :- ${totalComplete}</h2>
     <h2>Pending task :- ${totalPending} </h2></div>`;

     searchaddevent();
};

ui();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let taskTitle1 = taskTitle.value;
  let category1 = category.value;
  let status1 = "Pending";
  array.push({
    taskTitle1,
    category1,
    status1,
  });

  ui();

  console.log("Task added");
  form.reset();
});

let deleteBtn = (index) => {
  array.splice(index, 1);
  ui();
};

let editBtn = (index) => {
  let edit = (editButtonSection.style.display = "flex");
  let taskname = array[index];
  editButtonSection.innerHTML = `<div class="editbuttion">
                   <input class="editbutton-title"  required placeholder="Title" value="${taskname.taskTitle1}">
                    
                       <select required  class="edit-category" ">
                           <option value="${taskname.category1}">Select category</option>
                          <option value="Work">Work</option>
                          <option value="Personal">Personal</option>
                          <option value="Study">Study</option>
                          <option value="Others">Others</option>
                       </select>
                
                   
                    <div class="editbtn-button">   <button id="editbtn-cancel" onclick="cancelBtn(${index})">Cancel</button><button id="submitbtn-submit" onclick="submitBtn(${index})">Submit</button></div>
                </div>`;
  // make the form which activate when the click on the button and when click on the submit the ui update then , show and hide when click on the edit btn and submit btn
  // array[index].taskTitle1= taskTitle.value;
  // array[index].category1 = category.value;

  console.log(edit);

  ui();
};

const editBtnSubmit = document.querySelector("#submitbtn-submit");
let submitBtn = (index) => {
  const editTitle = document.querySelector(".editbutton-title");
  const editCategory = document.querySelector(".edit-category");
  if (editTitle === "" || editCategory === "") return;
  array[index].taskTitle1 = editTitle.value;
  array[index].category1 = editCategory.value;
  editButtonSection.style.display = "none";
  editButtonSection.innerHTML = "";
  ui();
};
const editBtnCancel = document.querySelector("#editbtn-cancel");
let cancelBtn = (index) => {
  editButtonSection.style.display = "none";
  editButtonSection.innerHTML = "";
  ui();
};

let taskComplete = (index) => {
  array[index].status1 = "Complete";
  ui();
};

const section5 = document.querySelector(".section-5");
const section5D = document.querySelector(".section-5-div");
const section5B = document.querySelector(".section-5-btn");
section5.addEventListener(
  "click",
  (index) => {
    console.log("Grandparent capturing");
  },
  true,
);
section5D.addEventListener(
  "click",
  (index) => {
    console.log("Parent capturing");
  },
  true,
);
section5B.addEventListener(
  "click",
  (index) => {
    console.log("child capturing");
  },
  true,
);
section5B.addEventListener("click", (index) => {
  console.log("child bubbling");
});
section5D.addEventListener("click", (index) => {
  console.log("Parent bubbling");
});
section5.addEventListener("click", (index) => {
  console.log("Grandparent bubbling");
});

