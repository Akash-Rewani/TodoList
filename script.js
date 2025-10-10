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

function addTask() {
    const title = input.value.trim()
    if (check(title, todos)) {
        todos.push(title);
        output.innerHTML += `<div>${title}</div>
        <button>Delete</button>`
        console.log(todos);
        input.value = ''
    }
}
button.addEventListener("click", addTask);



