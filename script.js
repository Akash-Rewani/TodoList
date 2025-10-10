const input = document.querySelector('input');
const button = document.querySelector('button');
const output = document.querySelector('.output');

const todos = [];

function addTask() {
    const title = input.value
    todos.push(title);
    output.innerHTML += `<div>${title}</div>
    <button>Delete</button>`
    console.log(todos);
    input.value = ''
}

button.addEventListener("click", addTask);



