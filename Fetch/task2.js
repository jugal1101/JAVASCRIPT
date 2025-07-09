let tbody = document.getElementById("tbody")



function todoApi(todos){
  
   todos.map((todo)=>{

    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    
    td1.textContent = todo.userId;;
    tr.appendChild(td1)
    
    td2.textContent = todo.id
    tr.appendChild(td2)
    
    td3.textContent = todo.title
    tr.appendChild(td3)
    
    td4.textContent = todo.completed
    tr.appendChild(td4)
    
    tbody.appendChild(tr)
   })

}




fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => response.json())
.then((todos)=>{
 todoApi(todos);
});

todoApi()