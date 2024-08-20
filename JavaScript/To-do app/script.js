function addTask() {
    var taskInput = document.getElementById("new-task");
    var task = taskInput.value;
    
    if (task.trim() === "") {
        alert("Please enter a task");
        return;
    }

    var listofTasks = document.getElementById("task-list");
    
    // Create a new list item
    var listItem = document.createElement("li");
    listItem.textContent = task;
    
    // Append the new list item to the list
    listofTasks.appendChild(listItem);
    
    // Clear the input field for new task
    taskInput.value = "";
}
