

---------   Attributes vs Properties
Attribute = Value in HTML static  
   Property= Value in JavaScript changes when you interact
       

input.getAttribute("value"); Original HTML
input.value;  Current value




---------    Event Bubbling vs Capturing
Capturing (Parent → Child) - goes  DOWN      
  Bubbling (Child → Parent)   - goes UP  

element.addEventListener("click", ()=>{ console.log("Capturing")}, true);
element.addEventListener("click", ()=>{console.log("bubbling")});



Check browser console and click the Child button to see both

 DOM Manipulation
Create add, change, remove HTML with JavaScript

const el = document.createElement("div");       Create
el.textContent = "Task";                 Add content
parent.appendChild(el);                   Add to page
el.classList.add("active");                 Add class
el.remove();                               Delete

