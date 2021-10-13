let liveToastBtn=document.querySelector("#liveToastBtn") 
let task=document.querySelector("#task") 
let list=document.querySelector("#list") 
 
 
function newElement(){ 
    if (task.value != "" ) { 
 
    let li=document.createElement("li") 
   list.appendChild(li) 
   li.innerHTML=task.value 
   task.value="" 
 
  
   let span=document.createElement("span") 
   li.appendChild(span) 
   span.classList.add("close") 
   span.innerHTML="x" 
 
    li.addEventListener("click", ()=>{ 
       li.classList.toggle("checked") 
    }) 
 
    span.addEventListener("click",()=>{ 
        li.remove() 
    }) 
}}