const input = document.querySelector('input');
const button = document.querySelector('button');
const output = document.querySelector('.output');

const todos = [];


function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}





function check(value, todos) {
    if (value === '') {
        input.value = '';
        return false;
    }

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].inputVal === value) {
            showToast("Task Already Exists ?");
            input.value = '';
            return false;
        }
    }
    return true;
}


function doneTask(i) {
    todos[i].completed = !todos[i].completed;
    if (todos[i].completed === true) {
        showToast('Task Compeleted Done')
    }
    else {
        showToast('Task Not Completed')
    }
    display(todos);
}


function deleteTask(i) {
    todos.splice(i, 1);
    showToast('Task Deleted Successfully !')
    display(todos);
}


function display(todos) {
    output.innerHTML = '';

    todos.forEach((todo, i) => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';

     
        const taskText = document.createElement('div');
        taskText.className = 'task-text';
        taskText.textContent = todo.inputVal;
        if (todo.completed) taskText.classList.add('line');

      
        const btnContainer = document.createElement('div');
        btnContainer.className = 'task-buttons';

        const doneBtn = document.createElement('button');
        doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
        doneBtn.addEventListener('click', () => doneTask(i));

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteBtn.addEventListener('click', () => deleteTask(i));

        btnContainer.appendChild(doneBtn);
        btnContainer.appendChild(deleteBtn);

        todoItem.appendChild(taskText);
        todoItem.appendChild(btnContainer);

        output.appendChild(todoItem);
    });
}


function addTask() {
    const title = input.value.trim();
    if (check(title, todos)) {
        todos.push({ inputVal: title, completed: false });
        input.value = '';
        showToast('Task Added  Successfully !')
        display(todos);
    }
}


button.addEventListener('click', addTask);
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
});
