const todoinput = document.getElementById('to-do-list1'); 
const todoadd = document.getElementById('to-do-button'); 
const todolist = document.getElementById('to-do-list2');   

// Create an empty array. 

let todos = []; 

function addTodo() {

    const todotext = todoinput.value.trim(); 

    if(todotext === '') 
        {
            alert('Please enter the task.....'); 
            return; 
        }

    const todo = {
        id : Date.now(), 
        text : todotext, 
        completed : false
    }; 

    todos.push(todo); 
    rendertodos(); 
    todoinput.value = ''; 
}  

function rendertodos() {
    todolist.innerHTML = ''; 
    todos.forEach(todo => {
        const li = document.createElement('li'); 
        li.innerHTML  = `
        ${todo.text}
            <button class="remove-btn" onclick="removeTodo(${todo.id})">Remove</button>
        `; 

        todolist.appendChild(li); 
    }); 
}   

function removeTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    rendertodos();
}

todoadd.addEventListener('click', addTodo);   

todoinput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});   

rendertodos(); 
