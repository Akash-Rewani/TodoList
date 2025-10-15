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
            alert("Same Task")
            input.value = ''
            return false
        }
    }
    return true

}

function doneTask(i) {
    todos[i].completed = !todos[i].completed;
    console.log(todos);
    display(todos)

}

function deleteTask(i) {
    todos.splice(i, 1)
    display(todos)
    console.log(todos);

}

function display(todos) {
    output.innerHTML = ''
    for (let i = 0; i < todos.length; i++) {
        output.innerHTML += `
       <div class="todo-item">
         <div class='${todos[i].completed === true ? "line" : ""}'>${todos[i].inputVal}</div>
       <button onclick='doneTask(${i})'>Done</button>
       <button onclick='deleteTask(${i})'>Delete</button>
       </div>`;

    }

}

function addTask() {
    const title = input.value.trim()
    if (check(title, todos)) {
        todos.push({
            inputVal: title,
            completed: false,

        });
        console.log(todos);
        input.value = ''
    }
    display(todos)
}
button.addEventListener("click", addTask);

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});










