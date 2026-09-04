let input = document.getElementById("input")
let btn = document.getElementById("btn")
let list = document.getElementById("taskslist")

let tasks = JSON.parse(localStorage.getItem("my tasks")) || [];


btn.addEventListener("click",()=>{
    tasks.push(input.value)
    localStorage.setItem('my tasks',JSON.stringify(tasks))
    display()


})


function display(){

    list.innerHTML = "";
    tasks.forEach((el,id) => {
        list.innerHTML += `
          <div class = "flex justify-between align-middle bg-[#f7c4c4] rounded-[15px] p-[10px] border-[1px] border-solid border-[#0a0909]">
            <span><p>${el}</p></span>
            <div class = "flex gap-[5px]">
                <button class = "bg-[#a20704] rounded-[8px] border-[1.5px] border-solid border-[#0b0b0b] p-[5px] h-[40px] w-[60px] mt-[6px]" onclick = "deleteItem(${id})">Delete</button> 
                <button class = "bg-[#a20704] rounded-[8px] border-[1.5px] border-solid border-[#0b0b0b] p-[5px] h-[40px] w-[60px] mt-[6px]" onclick = "editItem(${id})">Edit</button>
            </div>
          </div>
        
        `;   
    });


}
function deleteItem(i){

    tasks.splice(i, 1);
    localStorage.setItem("my tasks", JSON.stringify(tasks));
    display();
    
}
function editItem(i){
    let value = prompt("Enter edited task")
    tasks[i] = value
    localStorage.setItem('my tasks',JSON.stringify(tasks))
    display()
}

display()





