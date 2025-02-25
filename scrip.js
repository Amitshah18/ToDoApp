function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn" onclick="removeTask(this)">X</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}

function clearTasks() {
    document.getElementById("taskList").innerHTML = "";
}
