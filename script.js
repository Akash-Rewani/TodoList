const input = document.querySelector('input');
const button = document.querySelector('button');
const output = document.querySelector('.output');

const todos = [];

function check(value, todos) {
    if (value === '') {
        input.value = ''
        return false
    }

    for (let i = 0; i < todos.length; i++) {
        if (todos[i] === value) {
            alert("same task")
            input.value = ''
            return false
        }
    }
    return true

}
function display(todos) {
    output.innerHTML = ''
    for (let i = 0; i < todos.length; i++) {
        output.innerHTML += `<div>${todos[i]}</div>
        <button>Delete</button>`
    }

}
function addTask() {
    const title = input.value.trim()
    if (check(title, todos)) {
        todos.push(title);
        console.log(todos);
        input.value = ''
    }
    display(todos)
}
button.addEventListener("click", addTask);



